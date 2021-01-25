import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, NgForm } from '@angular/forms';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import * as validUrl from 'valid-url';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import SetContactFormLanguage from '../setLanguage';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  public lang: any;
  public title: any;

  form: FormGroup;
  name: FormControl = new FormControl("", [Validators.required]);
  email: FormControl = new FormControl("", [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]);
  phone: FormControl = new FormControl("", [Validators.required, Validators.pattern(new RegExp("[0-9 ]{10}"))]);
  subject: FormControl = new FormControl("");
  message: FormControl = new FormControl("", [Validators.required, Validators.maxLength(256)]);
  honeypot: FormControl = new FormControl(""); // we will use this to prevent spam
  submitted: boolean = false; // show and hide the success message
  pre_submitted: boolean = false;

  isLoading: boolean = false; // disable the submit button if we're loading
  responseMessage: string; // the response message to show to the user
  responseMessage_failed: string; // the response message to show to the user

  re_name: string;
  re_email: string;
  re_phone: string;
  re_sub: string;
  re_message: string;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.form = this.formBuilder.group({
      name: this.name,
      email: this.email,
      phone: this.phone,
      subject: this.subject,
      message: this.message,
      honeypot: this.honeypot
    });
  }
  ngOnInit(): void {
    this.title = localStorage.getItem('contact');

    this.re_name = "";
    this.re_email = "";
    this.re_message = "";
    this.re_sub = "";
    this.re_phone = "";

    if (localStorage.getItem('selectedLanguage') == 'en') {
      this.lang = SetContactFormLanguage.en[0];
      this.re_name = this.lang['fullName'] + this.lang['required'];
      this.re_email = this.lang['email'] + this.lang['required'];
      this.re_phone = this.lang['phone'] + this.lang['required'];
      this.re_sub = this.lang['subject'] + this.lang['required'];
      this.re_message = this.lang['message'] + this.lang['required'];
      this.responseMessage = "Thanks for the message! I'll get back to you soon!";
      this.responseMessage_failed = "Oops! Something went wrong... Reload the page and try again.";
    }
    else if (localStorage.getItem('selectedLanguage') == 'vn') {
      this.lang = SetContactFormLanguage.vn[0];
      this.re_name = this.lang['required'] + this.lang['fullName'];
      this.re_email = this.lang['required'] + this.lang['email'];
      this.re_phone = this.lang['required'] + this.lang['phone'];
      this.re_sub = this.lang['required'] + this.lang['subject'];
      this.re_message = this.lang['required'] + this.lang['message'];
      this.responseMessage = "Cám ơn bạn đã gửi tin nhắn! Chúng tôi sẽ liên hệ bạn trong thời gian sớm nhất";
      this.responseMessage_failed = "Oops! Có sự cố xảy ra... Xin vui lòng tắt trình duyệt và mở lại";
    }
    else {
      localStorage.setItem('selectedLanguage', 'en');
      this.lang = SetContactFormLanguage.en[0];
      this.re_name = this.lang['fullName'] + this.lang['required'];
      this.re_phone = this.lang['phone'] + this.lang['required'];
      this.re_sub = this.lang['subject'] + this.lang['required'];
      this.re_message = this.lang['message'] + this.lang['required'];
      this.responseMessage = "Thanks for the message! I'll get back to you soon!";
      this.responseMessage_failed = "Oops! Something went wrong... Reload the page and try again.";
    }
  }

  onSubmit() {

    if (this.form.status == "VALID") {
      this.pre_submitted = false;
      this.form.disable(); // disable the form if it's valid to disable multiple submissions
      var formData: any = new FormData();
      formData.append("name", this.form.get("name").value);
      formData.append("email", this.form.get("email").value);
      formData.append("phone", this.form.get("phone").value);
      formData.append("subject", this.form.get("subject").value);
      formData.append("message", this.form.get("message").value);
      this.isLoading = true; // sending the post request async so it's in progress
      this.submitted = false; // hide the response message on multiple submits
      this.http.post("https://script.google.com/macros/s/AKfycbxQF8Nghbgsapg-Vbqfid2zalbbtAGTV0vqk34hMIBQM2Xxp3g/exec", formData).subscribe(
        (response) => {
          // choose the response message
          if (response["result"] == "success") {
            alert(this.responseMessage);
            //this.responseMessage = "Thanks for the message! I'll get back to you soon!";
          } else {
            alert(this.responseMessage_failed);
            // this.responseMessage = "Oops! Something went wrong... Reload the page and try again.";
          }

          this.form.enable(); // re enable the form after a success
          this.submitted = true; // show the response message
          this.isLoading = false; // re enable the submit button
          this.onclear();
          console.log(response);
        },
        (error) => {
          alert(this.responseMessage_failed);
          this.form.enable(); // re enable the form after a success
          this.submitted = true; // show the response message
          this.isLoading = false; // re enable the submit button
          console.log(error);
        }
      );
    }
    else {
      this.pre_submitted = true;

      // if (localStorage.getItem('selectedLanguage') == 'en') {
      //   alert('Oops! Please fill in required fileds.');
      // }
      // else {
      //   alert('Oops! Xin vui lòng điền thông tin!');
      // }

    }
  }

  onclear() {
    // this.submitted = false; // show and hide the success message
    // this.isLoading = false; // disable the submit button if we're loading
    this.form.reset();

  }

}
