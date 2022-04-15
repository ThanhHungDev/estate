import HttpStatus from "../../http.status"
import Slider from "../../models/slider.model"


export const index = async (req: any, res: any, next: any ) => {

    /// response 
    const response = {
        code   : HttpStatus.OK,
        message: "danh sách slider"
    }
    res.status(response.code).json(response)
}
export const store = async ( req: any, res : any, next: any ) => {
    const response : any = { code: undefined }
    const { src, alt, topic, title, excerpt, content } = req.body
    /// giả sử khúc này  tới đây bạn đã sử dụng middleware ở ngoài để validate dữ liệu đầu vào
    try {
        /// check email tồn tại
        // const isExist = await Slider.findOne({ src })
        // if( isExist ){
        //     response.code = HttpStatus.CONFLICT /// 409 Conflict
        //     throw new Error("src đã tồn tại!!")
        // }
        /// lưu vào db mongo
        const result = await new Slider({ src, alt, topic, title, excerpt, content }).save()
        /// khúc này nếu bạn kỹ tính hãy tạo 1 phương thức chung để format dữ liệu 
        /// còn mình làm nhanh thì trả ra dữ liệu luôn
        response.code             = HttpStatus.CREATED
        response.data             = result.toJSON()
        response.message          = "tạo slider thành công"
        response.internal_message = "tạo slider thành công"
        res.status(response.code).json(response)
    } catch (error: any) {
        let err                       = { error: 'error', message: error.message }
            response.code             = response.code || HttpStatus.INTERNAL_SERVER_ERROR
            response.message          = error.message
            response.internal_message = error.message
            response.errors           = [ err ]
        return res.status(response.code).json(response)
    }
}