import React from "react"
import Apartment from "./SavePost/Apartment"

function SavePost( props ){

    const {form, history, match, category } = props
    
    switch (category.slug) {
        case 'can-ho-chung-cu':
            return <Apartment category={category} OLD={
                { 
                    type: "4", 
                    role:"2", 
                    title: "hùng nè", 
                    content: "<p>sdfsdf</p>\n<p>sdf</p>\n<p>ds</p>\n<p>fs</p>\n<p>df</p>\n<p>ds</p>\n", 
                    contentText: "234243",
                    images: [{root: '/uploads/images/post/1633336359Background.png', IMAGE_RESIZE: '/resizes/small/fit//uploads/images/post/1633336359Background.png'}],
                    area: "120",
                    horizontal: "2",
                    price: "1000000000",
                    vertical: "60",
                    bathroom: 3,
                    direction: 4,
                    direction_balcony: 5,
                    negotiate: 2,
                    room: 2,
                    wc: 2,
                    project: {
                        address: "Đường Nguyễn Hữu Thọ",
                        address2: "Huyện Nhà Bè, Tp Hồ Chí Minh",
                        area_total: null,
                        currentTarget: {value: 1350},
                        id: 1350,
                        introduction: "<p><strong>1.Vị tr&iacute;:</strong></p><ul><li>Trải d&agrave;i hơn 7km mặt tiền đường Nguyễn Hữu Thọ (trục Bắc Nam) thuộc x&atilde; Phước Kiển, huyện Nh&agrave; B&egrave;</li><li>Nối liền trung t&acirc;m Th&agrave;nh phố với Khu Đ&ocirc; thị - C&ocirc;ng nghiệp - Cảng Hiệp Phước &ndash; liền kề Khu đ&ocirc; thị mới Ph&uacute; Mỹ Hưng</li></ul><p><strong>2.Tiện &iacute;ch:</strong></p><ul><li>Nội khu: S&acirc;n tennis, s&acirc;n b&oacute;ng rổ, vườn trẻ, nh&agrave; h&agrave;ng, trung t&acirc;m thương mại, hệ thống c&ocirc;ng vi&ecirc;n, c&acirc;u lạc bộ nằm giữa v&ugrave;ng hồ thi&ecirc;n nhi&ecirc;n lộng gi&oacute;, khu vực tổ chức tiệc nướng Babercue ngo&agrave;i trời</li><li>Ngoại khu:&nbsp;tiện &iacute;ch của khu Ph&uacute; Mỹ Hưng, trường đại học RMIT v&agrave; c&aacute;c trường quốc tế, bệnh viện FV, s&acirc;n golf 36 lỗ, Trung t&acirc;m triễn l&atilde;m v&agrave; hội nghị quốc tế.</li></ul><p><strong>3.Ch&iacute;nh s&aacute;ch ưu đ&atilde;i:</strong></p><ul><li>Kh&aacute;ch h&agrave;ng cũng c&oacute; thể lựa chọn chương tr&igrave;nh hỗ trợ l&atilde;i suất 0% trong v&ograve;ng 18 th&aacute;ng v&agrave; được nhiều ng&acirc;n h&agrave;ng uy t&iacute;n hỗ trợ cho vay như ANZ, Standard Charter, HDBank, Vietcombank,...</li><li>Đối với mỗi giao dịch th&agrave;nh c&ocirc;ng kh&aacute;ch h&agrave;ng c&ograve;n được tặng 5 chỉ v&agrave;ng SJC v&agrave; c&oacute; cơ hội tham gia bốc thăm may mắn với giải đặc biệt xe Vespa GTS 150.</li></ul><p><strong>4.Chủ đầu tư:</strong></p><ul><li style=\"font-weight: 400;\"><span style=\"font-weight: 400;\">C&ocirc;ng Ty Cổ phần Địa ốc Ph&uacute; Long thuộc top 10 doanh nghiệp BĐS uy t&iacute;n nhất năm 2017.</span></li><li style=\"font-weight: 400;\"><span style=\"font-weight: 400;\">C&aacute;c dự &aacute;n kh&aacute;c của chủ đầu tư:Khu căn hộ cao cấp Dragon Hill Residence and Suites 2,Biệt thự song lập vườn Dragon Parc,Khu phức hợp căn hộ cao cấp Dragon Hill Residence and Suites,Căn hộ cao cấp Ph&uacute; Ho&agrave;ng Anh,...</span></li></ul><p><strong>5.Quy m&ocirc; dự &aacute;n:</strong></p><ul><li>Diện t&iacute;ch khu đất: 650.000 m2</li><li>Khu đ<span style=\"color: #000000;\">&ocirc; thị hiện c&oacute; 9 dự &aacute;n con gồm: Khu biệt thự phố kinh doanh Ng&acirc;n Long, khu căn hộ&nbsp;Ph&uacute; Ho&agrave;ng Anh, khu cao ốc văn ph&ograve;ng&nbsp;PV Gas Tower, khu biệt thự Kim Long, khu cao ốc phức hợp Dragon Hill Residence and Suites 1 v&agrave; 2, khu căn hộ Park Residence, khu biệt thự Bảo Long, khu biệt thự Galleria v&agrave; </span><span style=\"color: #000000;\">khu biệt thự song lập&nbsp;vườn </span>Dragon Pa<em>rc</em>.</li></ul><p><strong>6.&nbsp;Tiến độ&nbsp;dự &aacute;n</strong></p><ul><li>Năm khởi c&ocirc;ng: 2008</li><li>Thời gian b&agrave;n giao:&nbsp;<ul><li>Khu biệt thự phố kinh doanh Ng&acirc;n Long:&nbsp;Th&aacute;ng 06/2010</li><li>Khu căn hộ Ph&uacute; Ho&agrave;ng Anh:&nbsp;Qu&yacute; III/2012</li><li>Khu cao ốc văn ph&ograve;ng&nbsp;PV Gas Tower: Th&aacute;ng 07/2011</li><li>Khu biệt thự Kim Long:&nbsp;Th&aacute;ng 09/2010</li><li>Khu cao ốc phức hợp Dragon Hill Residence and Suites 1 v&agrave; 2:&nbsp;Qu&yacute; IV/2013</li><li>Khu căn hộ Park Residence:&nbsp;Qu&yacute; III/2016</li><li>Khu biệt thự Bảo Long:&nbsp;Thanh to&aacute;n nhận đất nền x&acirc;y dựng ngay</li><li>Khu biệt thự Galleria:&nbsp;Th&aacute;ng 06/2016</li><li><span style=\"color: #000000;\">Khu biệt thự song lập&nbsp;vườn </span>Dragon Parc:&nbsp;Qu&yacute; I/2017</li></ul></li></ul>",
                        label: "Khu Đô Thị Phú Long - Dragon City",
                        name: "Khu Đô Thị Phú Long - Dragon City",
                        process: "Đã hoàn thành",
                        public: 1,
                        short_introduction: null,
                        slug: "khu-do-thi-phu-long---dragon-city",
                        target: {name: 'project', value: 1350},
                        type: "Khu đô thị mới",
                        type_id: 3,
                        value: 1350,
                    }
                }
            }/>
        default:
            return null;
    }
}


export default SavePost