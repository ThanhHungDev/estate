import { Request, Response, NextFunction } from 'express'
import { validationResult } from "express-validator"
import HttpStatus from "../../http.status"
import Slider from "../../models/slider.model"
import { ApiResponse } from "../../types/response"

export default class SliderController{

    public index = async (req: Request, res: Response): Promise<any> => {
        const response : ApiResponse = {
            code   : HttpStatus.OK,
            message: "Danh sách slider",
        }
        res.status(response.code).json(response)
    }


    public store = async ( req : Request, res: Response, next: NextFunction ) => {
        const response: ApiResponse = {
            code   : HttpStatus.OK,
            message: "Create slider",
        }
        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            res.status(HttpStatus.UNPROCESSABLE_ENTITY).json({ errors: errors.array() })
            return
        }
        
        try {
            const { src, alt, topic, title, excerpt, content } = req.body
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
            response.message          = "Tạo slider thành công"
            response.internal_message = "Tạo slider thành công"
            res.status(response.code).json(response)
        } catch (error) {
            const err                       = error instanceof Error ? error : new Error(typeof error === 'string' ? error : 'Server Error!')

            response.code             = response.code || HttpStatus.INTERNAL_SERVER_ERROR
            response.message          = err.message
            response.internal_message = err.message
            response.errors           = [ err ]

            return res.status(response.code).json(response)
        }
    }
}
