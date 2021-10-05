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
                        address: "đường Đồng Văn Cống",
                        address2: "Quận 2 - Thành phố Thủ Đức, Tp Hồ Chí Minh",
                        area_total: null,
                        currentTarget: {value: 1356},
                        id: 1356,
                        introduction: "<p><strong>1. Vị trí:</strong></p><p style=\"padding-left: 30px;\">Nhà Phố Shophouse D2Eight ở vị trí 4 mặt&nbsp; tiền đường Đồng Văn Cống-đường Phan Văn Đáng- đường Nguyễn Thanh Sơn, ngay cạnh dự án Vista Verde</p><p><strong>2. Tiện ích:</strong></p><p style=\"padding-left: 30px;\">Đang cập nhật</p><p><strong>3. Chủ đầu tư:</strong></p><ul><li>Công ty TNHH CapitaLand</li><li>Các dự án khác:&nbsp;The Vista, Vista Verde, Parcspring, The Krista (TP HCM), Mulberry Lane, Seasons Avenue (Hà Nội)...&nbsp;</li></ul><p><strong>4. Chính sách ưu đãi:</strong></p><p style=\"padding-left: 30px;\">Đang cập nhật</p><p><strong>5. Quy mô:</strong></p><ul><li>Tổng diện tích: 3,326m2.</li><li>Quy Mô: 28 căn nhà phố shophouse.</li><li>Diện tích xây dựng mỗi căn: 531 - 735m2.</li><li>Số tầng 8 tầng: 1 hầm, 1 trệt, 1 lửng, 4 lầu, 1 gác mái.</li></ul><p><strong>6. Tiến độ dự án:</strong></p><ul><li>Năm khởi công: 12/03/2018</li><li>Thời gian hoàn thành: 2019</li><li>Thời gian bàn giao: Cuối tháng 05/2019</li></ul>",
                        label: "Nhà phố Shophouse D2Eight",
                        name: "Nhà phố Shophouse D2Eight",
                        process: "Đã hoàn thành",
                        public: 1,
                        short_introduction: "<p><strong>1. Vị trí:</strong></p><p style=\"padding-left: 30px;\">Nhà Phố Shophouse D2Eight ở vị trí 4 mặt&nbsp; tiền đường Đồng Văn Cống-đường Phan Văn Đáng- đường Nguyễn Thanh Sơn, ngay cạnh dự án Vista Verde</p><p><strong>2. Tiện ích:</strong></p><p style=\"padding-left: 30px;\">Đang cập nhật</p><p><strong>3. Chủ đầu tư:</strong></p><ul><li>Công ty TNHH CapitaLand</li><li>Các dự án khác:&nbsp;The Vista, Vista Verde, Parcspring, The Krista (TP HCM), Mulberry Lane, Seasons Avenue (Hà Nội)...&nbsp;</li></ul>",
                        slug: "nha-pho-shophouse-d2eight",
                        target: {name: 'project', value: 1356},
                        type: "Khu dân cư",
                        type_id: 2,
                        value: 1356,
                    }
                }
            }/>
        default:
            return null;
    }
}


export default SavePost