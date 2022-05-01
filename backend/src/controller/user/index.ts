import { Request, Response, NextFunction } from "express"
import HttpStatusCode from "../../http.status"
import User from "../../models/user.model"
import { ApiResponse } from "../../types/response"


export default class UserController{

    public async index(req: Request, res: Response, next: NextFunction){
        const users = await User.find({}, {
            password: false,
            __v: false,
        }).lean()
        const response : ApiResponse = {
            code   : HttpStatusCode.OK,
            message: "Danh sách user",
            data: users
        }
        res.status(response.code).json(response)
    }
}