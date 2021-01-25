export class Schema {
    static content = []

    static processing = [
        {
            id: 1,
            stage: 'Tiếp nhận nguyên liệu',
            specifications: [
                {
                    spec: 'Trọng lượng từ 0.5 kg đến 3.5 kg'
                }
            ],
            description: [
                {
                    des: 'Nguyên liệu trước khi thu mua đã được bộ phận thu mua kiểm soát các chỉ tiêu kháng sinh, dư lượng các chất độc hại, giấy cam kết về việc kiểm soát chất lượng cá trong quá trình nuôi không sử dụng kháng sinh cấm, kháng sinh hạn chế/thức ăn được kiểm soát, nguyên liệu được thu mua và vận chuyển về nhà máy bằng ghe đục. '
                }

            ]
        },
        {
            id: 2,
            stage: 'Cắt hầu',
            specifications: [
            ],
            description: [
                {
                    des: 'Cá sau khi được tiếp nhận, chuyển đến công đoạn cắt hầu qua máng nạp liệu. Sau đó công nhân khâu cắt hầu sẽ dùng dao chuyên dụng cắt vào phần yết hầu cá, mục đích làm cho cá chết, loại hết máu trong cơ thể cá và làm cho thịt cá sau fillet được trắng có giá trị cảm quan cao.'
                }
            ]
        },
        {
            id: 3,
            stage: 'Rửa 1',
            specifications: [
                {
                    spec: 'Nhiệt độ (T0) nước rửa từ 20-25 0C'
                },
                {
                    spec: 'Thời gian ngâm 7-10 phút'
                }

            ],
            description: [
                {
                    des: 'Sau khi cắt hầu, cá được chuyển sang công đoạn rửa 1 để rửa sạch máu, nhớt và các tạp chất bám trên bề mặt cá. Cá được rửa bằng máy rửa tự động. Thời gian ngâm cá từ 7-10 phút.'
                }
            ]
        },
        {
            id: 4,
            stage: 'Fillet',
            specifications: [
                {
                    spec: 'Nhiệt độ (T0) nước rửa từ 20-25 0C'
                },
                {
                    spec: 'Thời gian ngâm 7-10 phút'
                }
            ],
            description: [
                {
                    des: 'Cá sau khi qua máy rửa 1 sẽ được băng tải chuyển đến khâu fillet, công đoạn fillet với mục đích tách phần thịt cá ra khỏi phần đầu, xương cá và nội tạng.'
                },
                {
                    des: 'Yêu cầu thực hiện: Thao tác phải chính xác, đúng yêu cầu kỹ thuật.'
                },
                {
                    des: 'Miếng cá sau fillet phải phẳng, đẹp.\n Không vỡ nội tạng.\n Không bị rách phần thịt.\n Lấy triệt để phần thịt.\n Không được sót xương'
                }

            ]
        },
        {
            id: 5,
            stage: 'Rửa 2',
            specifications: [
                {
                    spec: 'T0 nước rửa: ≤ 100C, Thời gian (T) rửa:<  1 phút.'
                }

            ],
            description: [
                {
                    des: 'Cá sau khi qua khâu fillet được chuyển đến công đoạn rửa 2. Bán thành phẩm được rửa bằng thiết bị rửa tự động.'
                },
                {
                    des: 'Công đoạn rửa 2 nhằm làm sạch máu và nhớt đồng thời làm giảm bớt lượng vi sinh vật bám trên bề mặt miếng fillet.'
                }

            ]
        },
        {
            id: 6,
            stage: 'Lạng da',
            specifications: [
            ],
            description: [
                {
                    des: 'Sau khi rửa 2, bán thành phẩm được đưa qua máy lạng da nhằm để loại hết da, tạo điều kiện thuận lợi cho công đoạn sửa cá.'
                }

            ]
        },
        {
            id: 7,
            stage: 'Lạng da',
            specifications: [
            ],
            description: [
                {
                    des: 'Sau khi rửa 2, bán thành phẩm được đưa qua máy lạng da nhằm để loại hết da, tạo điều kiện thuận lợi cho công đoạn sửa cá.'
                }

            ]
        },
        {
            id: 8,
            stage: 'Lạng da',
            specifications: [
            ],
            description: [
                {
                    des: 'Sau khi rửa 2, bán thành phẩm được đưa qua máy lạng da nhằm để loại hết da, tạo điều kiện thuận lợi cho công đoạn sửa cá.'
                }

            ]
        }
    ]

    static products = [
        {
            "date": "2018-04-02",
            "description": "Product description here",
            "id": 1174268122548,
            "imageRefs": [
                "assets/img/100x400-3.jpg"
            ],
            "imageURLs": [
                "https://firebasestorage.googleapis.com/v0/b/viethongdb2.appspot.com/o/1.jpg?alt=media&token=454e00e9-603b-42f7-b496-f9853893437a"
            ],
            "name": "CÁ TRA PHI LÊ SEMI-TRIMMED",
            "latinName": "Pangasius Hypophthalmus",
            "specification": "Skinless, Boneless, Red Meat Off, Belly On, Fat On",
            "size": "60/90, 90/120, 120/170, 170/220, 220/300, 220UP, 300UP, 500UP, 800UP (GR)",
            "packing": "IQF, 10 kg bag, 5kg bag, 1kg bag or meet the customers requirements. Interleaved, 5kg x 2/carton or industrial block 7.5kg x 2 /carton % Net weight and glaze according to customers requirement",
            "code": "UT"
        },
        {
            "date": "2018-04-02",
            "description": "Product description here",
            "id": 1174268122548,
            "imageRefs": [
                "assets/img/100x400-3.jpg"
            ],
            "imageURLs": [
                "https://firebasestorage.googleapis.com/v0/b/viethongdb2.appspot.com/o/1.jpg?alt=media&token=454e00e9-603b-42f7-b496-f9853893437a"
            ],
            "name": "CÁ TRA PHI LÊ SEMI-TRIMMED",
            "latinName": "Pangasius Hypophthalmus",
            "specification": "Skinless, Boneless, Red Meat Off, Belly On, Fat On",
            "size": "60/90, 90/120, 120/170, 170/220, 220/300, 220UP, 300UP, 500UP, 800UP (GR)",
            "packing": "IQF, 10 kg bag, 5kg bag, 1kg bag or meet the customers requirements. Interleaved, 5kg x 2/carton or industrial block 7.5kg x 2 /carton % Net weight and glaze according to customers requirement",
            "code": "UT"
        },
        {
            "date": "2018-04-02",
            "description": "Product description here",
            "id": 1174268122548,
            "imageRefs": [
                "assets/img/100x400-3.jpg"
            ],
            "imageURLs": [
                "https://firebasestorage.googleapis.com/v0/b/viethongdb2.appspot.com/o/1.jpg?alt=media&token=454e00e9-603b-42f7-b496-f9853893437a"
            ],
            "name": "CÁ TRA PHI LÊ SEMI-TRIMMED",
            "latinName": "Pangasius Hypophthalmus",
            "specification": "Skinless, Boneless, Red Meat Off, Belly On, Fat On",
            "size": "60/90, 90/120, 120/170, 170/220, 220/300, 220UP, 300UP, 500UP, 800UP (GR)",
            "packing": "IQF, 10 kg bag, 5kg bag, 1kg bag or meet the customers requirements. Interleaved, 5kg x 2/carton or industrial block 7.5kg x 2 /carton % Net weight and glaze according to customers requirement",
            "code": "UT"
        },
        {
            "date": "2018-04-02",
            "description": "Product description here",
            "id": 1174268122548,
            "imageRefs": [
                "assets/img/100x400-3.jpg"
            ],
            "imageURLs": [
                "https://firebasestorage.googleapis.com/v0/b/viethongdb2.appspot.com/o/1.jpg?alt=media&token=454e00e9-603b-42f7-b496-f9853893437a"
            ],
            "name": "CÁ TRA PHI LÊ SEMI-TRIMMED",
            "latinName": "Pangasius Hypophthalmus",
            "specification": "Skinless, Boneless, Red Meat Off, Belly On, Fat On",
            "size": "60/90, 90/120, 120/170, 170/220, 220/300, 220UP, 300UP, 500UP, 800UP (GR)",
            "packing": "IQF, 10 kg bag, 5kg bag, 1kg bag or meet the customers requirements. Interleaved, 5kg x 2/carton or industrial block 7.5kg x 2 /carton % Net weight and glaze according to customers requirement",
            "code": "UT"
        },
    ]

    static aquacutule = [
        {
            "heading": "FARMING AREA",
            "des": [
                {
                    "des": "Viet Hong owns a farming area of up to 50 hectares, located in Hong Ngu - Dong Thap, where is considered the capital of pangasius farming of Vietnam. The geographical location is favourable for aquaculture, and the waterway and road traffic is clear. Viet Hong's farm has the ability to provide up to 200 tons of raw materials a day for the factory's production."
                },
                {
                    "des": "Viet Hong is proud to create a closed process from the farming area to the factory, from breeding source to finished product. The coordination between the modern processing factory, world-standard equipment for exporting and the qualified and skilled workers. Viet Hong has the advantage of being proactive and controlling all criteria such as breed, food source, living environment, and breeding techniques of each kind of breeding in each farming area."
                },
                {
                    "des": "Thanks to the closed process from seeding to finished products, the quality of Viet Hong has been made. As a result, the best quality products are delivered to consumers."
                }
            ]
        },
        {
            "heading": "Stock",
            "des": [
                {
                    "des": "Viet Hong's fish stock source is self-sufficient by Viet Hong and carefully picked from the production farms, supplying standard pangasius from Hong Ngu - Dong Thap, Tan Chau - An Giang. The fish stock is injected with antibiotics and quarantined by the Department of Livestock and Veterinary Affairs for each batch to ensure quality."
                },
                {
                    "des": "The fish stocks are selected with uniform sizes, meeting the national standard and Vietnam standard, no scratch, loss of viscosity, deformity, enough fins, bright colours, rapidly swims and no signs of disease."
                }
            ]
        },
        {
            "heading": "Animal Feed Sources",
            "des": [
                {
                    "des": "Viet Hong's animal feed factory meets the national standard for animal feed mill and has a design capacity of up to 80,000 tons per year, meeting 100% of the demand for Viet Hong's farming areas."
                },
                {
                    "des": "Raw materials used in production are supplied by Viet Hong processing factory, imported raw materials ensure prestige and purchased from reputable and quality suppliers, to ensure high nutritional content."
                }
            ]
        },
        {
            "heading": "Pond Management",
            "des": [
                {
                    "des": "Viet Hong's ponds meet the national technical standard on pangasius farming. Ponds strictly controlled from the preparation stage before raising fish from pond bottom, sloping slope, permeability, to ensure no organic humus. Next, the stages of breeding selection - stocking - growing - harvesting. The control of the pond environment such as the microorganisms and antibiotics contents is always conducted periodically. Each pond has two employees in charge of directly monitoring the daily environmental parameters of the pond to evaluate the health of breeds, Each pond has 2 employees in charge of directly monitoring the pond environmental parameters daily to assess the health of the breeds, in order to promptly detect abnormal manifestations of the pond environment and livestock; from there, give timely measures."
                }
            ]
        },
        {
            "heading": "System",
            "des": [
                {
                    "des": "Viet Hong's ponds meet the national technical standard on pangasius farming. Ponds strictly controlled from the preparation stage before raising fish from pond bottom, sloping slope, permeability, to ensure no organic humus. Next, the stages of breeding selection - stocking - growing - harvesting. The control of the pond environment such as the microorganisms and antibiotics contents is always conducted periodically. Each pond has two employees in charge of directly monitoring the daily environmental parameters of the pond to evaluate the health of breeds, Each pond has 2 employees in charge of directly monitoring the pond environmental parameters daily to assess the health of the breeds, in order to promptly detect abnormal manifestations of the pond environment and livestock; from there, give timely measures."
                }
            ]
        }
    ]

    static news = [
        {
            "id": "news0001",
            "date": "2018-04-02",
            "title": "Lý do nên ăn cá tra thường xuyên",
            "brief": "Cá tra dồi dào omega 3, DHA và EPA tốt cho trí não, giàu vitamin E chống oxy hóa. Cá tra Việt Nam là một trong những mặt hàng xuất khẩu được thế giới ưa chuộng. Chúng dồi dào omega 3, 6, 9; DHA và EPA; vitamin E tự nhiên... Vì vậy, bà nội trợ nên đưa loại đặc sản vùng sông nước Cửu Long này vào trong khẩu phần ăn mỗi ngày.",
            "author": "Viet Hong",
            "imageRefs": "assets/img/news-4.jpg",
            "tag": true,
            "des": [
                {
                    "heading":"Omega 3",
                    "des": [
                        "Theo Hiệp hội Tim mạch Mỹ, omega 3 giúp ngăn ngừa quá trình xơ cứng động mạch, tăng cường hoạt động trí nhớ. Vì vậy, thường xuyên ăn cá có thể tránh được nguy cơ mắc bệnh Alzheimer.",
                        "Tỷ lệ acid béo không no trong mỡ cá tra khá cao (trên 70%), không có cholesterol, nên tốt cho sức khỏe. Đó chính là lý do chị em phụ nữ ăn nhiều mỡ cá, nhưng lại không tăng cân. Mỡ cá tra cũng phù hợp với người cao tuổi. Các chuyên gia khuyến cáo, nên ăn cá 2-3 bữa cá mỗi tuần để giúp cơ thể hấp thụ đủ các dưỡng chất cần thiết."
                    ]
                },
                {
                    "heading":"DHA và EPA",
                    "des": [
                        "DHA và EPA sinh ra từ omega 3. DHA trong cá tra giúp phát triển hoàn thiện chức năng nhìn của mắt và hệ thần kinh, giúp trẻ thông minh và sáng mắt.",
                        "EPA hình thành các acid béo không bão hòa prostaglandin trong máu, giữ cho tuần hoàn máu được thông thoáng. Ăn nhiều cá tra giúp phòng ngừa các bệnh về tim mạch do xơ vữa mạch máu."
                    ]
                    
 
                }
            ]
        },
        {
            "id": "news0002",
            "date": "2018-04-02",
            "title": "Thủ Phủ Cá Tra – Hồng Ngự",
            "brief": "Ngày 16/12/2017, UBND TX.Hồng Ngự tổ chức khánh thành công trình biểu tượng cá tra Việt Nam Được biết thị xã Hồng Ngự tỉnh Đồng Tháp được mệnh danh là thủ phủ con cá tra Việt Nam. Nơi đây có bề dày truyền thống nuôi trồng loài thủy sản này chiếm 70% tổng sản lượng sản xuất cá tra thương mại. Trong đó, tổng sản lượng năm 2018 là 1,42 triệu tấn, riêng Hồng Ngự chiếm gần 1 triệu tấn",
            "author": "",
            "imageRefs": "assets/img/news-4.jpg",
            "tag": true,
            "des": [
                {
                    "heading":"Omega 3",
                    "des": [
                        "Theo Hiệp hội Tim mạch Mỹ, omega 3 giúp ngăn ngừa quá trình xơ cứng động mạch, tăng cường hoạt động trí nhớ. Vì vậy, thường xuyên ăn cá có thể tránh được nguy cơ mắc bệnh Alzheimer.",
                        "Tỷ lệ acid béo không no trong mỡ cá tra khá cao (trên 70%), không có cholesterol, nên tốt cho sức khỏe. Đó chính là lý do chị em phụ nữ ăn nhiều mỡ cá, nhưng lại không tăng cân. Mỡ cá tra cũng phù hợp với người cao tuổi. Các chuyên gia khuyến cáo, nên ăn cá 2-3 bữa cá mỗi tuần để giúp cơ thể hấp thụ đủ các dưỡng chất cần thiết."
                    ]
                },
                {
                    "heading":"DHA và EPA",
                    "des": [
                        "DHA và EPA sinh ra từ omega 3. DHA trong cá tra giúp phát triển hoàn thiện chức năng nhìn của mắt và hệ thần kinh, giúp trẻ thông minh và sáng mắt.",
                        "EPA hình thành các acid béo không bão hòa prostaglandin trong máu, giữ cho tuần hoàn máu được thông thoáng. Ăn nhiều cá tra giúp phòng ngừa các bệnh về tim mạch do xơ vữa mạch máu."
                    ]
                    
 
                }
            ]
        },
        {
            "id": "news0003",
            "date": "2018-04-02",
            "title": "Thành lập ở TP. Hồng Ngự thuộc tỉnh Đồng Tháp",
            "brief": "Ngoài thế mạnh về sản xuất nông nghiệp và nuôi trồng thủy sản, thị xã Hồng Ngự còn là trung tâm đô thị lớn ở vùng biên giới, tập trung nhiều cơ sở sản xuất công nghiệp và dịch vụ phát triển",
            "author": "",
            "imageRefs": "assets/img/news-4.jpg",
            "tag": true,
            "des": [
                {
                    "heading":"Omega 3",
                    "des": [
                        "Theo Hiệp hội Tim mạch Mỹ, omega 3 giúp ngăn ngừa quá trình xơ cứng động mạch, tăng cường hoạt động trí nhớ. Vì vậy, thường xuyên ăn cá có thể tránh được nguy cơ mắc bệnh Alzheimer.",
                        "Tỷ lệ acid béo không no trong mỡ cá tra khá cao (trên 70%), không có cholesterol, nên tốt cho sức khỏe. Đó chính là lý do chị em phụ nữ ăn nhiều mỡ cá, nhưng lại không tăng cân. Mỡ cá tra cũng phù hợp với người cao tuổi. Các chuyên gia khuyến cáo, nên ăn cá 2-3 bữa cá mỗi tuần để giúp cơ thể hấp thụ đủ các dưỡng chất cần thiết."
                    ]
                },
                {
                    "heading":"DHA và EPA",
                    "des": [
                        "DHA và EPA sinh ra từ omega 3. DHA trong cá tra giúp phát triển hoàn thiện chức năng nhìn của mắt và hệ thần kinh, giúp trẻ thông minh và sáng mắt.",
                        "EPA hình thành các acid béo không bão hòa prostaglandin trong máu, giữ cho tuần hoàn máu được thông thoáng. Ăn nhiều cá tra giúp phòng ngừa các bệnh về tim mạch do xơ vữa mạch máu."
                    ]
                    
 
                }
            ]
        }

    ]
}
