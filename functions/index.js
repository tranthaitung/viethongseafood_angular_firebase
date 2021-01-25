const functions = require('firebase-functions')
const admin=require('firebase-admin');
const nodemailer =require('nodemailer');
const cors = require('cors')({origin: true});
admin.initializeApp()
require('dotenv').config()

const {SENDER_EMAIL,SENDER_PASSWORD}= process.env;

exports.sendEmailNotification=functions.firestore.document('submissions/{docId}')
.onCreate((snap,ctx)=>{
    const data=snap.data();
    let authData=nodemailer.createTransport({
        host:'smtp.gmail.com',
        port:465,
        secure:true,
        auth:{
            user:'info.viethongseafood@gmail.com',
            pass:'Viethong@2020'
        }
    });
authData.sendMail({
from :'info.viethongseafood@gmail.com',
to:`info.viethongseafood@gmail.com`,
subject:'Your submission Info',
text:`${data.email}`,
html:`${data.email}`,
}).then(res=>console.log('successfully sent that mail')).catch(err=>console.log(err));

});

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'info.viethongseafood@gmail.com',
        pass: 'Viethong@2020'
    }
});

exports.sendMail = functions.https.onRequest((req, res) => {
    cors(req, res, () => {
      
        // getting dest email by query string
        //const dest = req.query.dest;

        const mailOptions = {
            from: 'info.viethongseafood@gmail.com', // Something like: Jane Doe <janedoe@gmail.com>
            to: 'info.viethongseafood@gmail.com',
            subject: 'test!', // email subject
            html: `<p style="font-size: 16px;">Pickle Riiiiiiiiiiiiiiiick!!</p>
                <br />
                
            ` // email content in HTML
        };
  
        // returning result
        return transporter.sendMail(mailOptions, (erro, info) => {
            if(erro){
                return res.send(erro.toString());
            }
            return res.send('Mail Sent Successfully');
        });
    });    
});