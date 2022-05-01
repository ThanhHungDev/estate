import { Request, Response, NextFunction } from "express"
import HttpStatusCode from "../../http.status"
import Category from "../../models/category.model"
import { ApiResponse } from "../../types/response"


export default class UserController{

    public async index(req: Request, res: Response, next: NextFunction){
        const categories = await Category.find({}, { __v: false }).lean()
        const categoryParent = categories.filter(item => !item.parent)
        const response : ApiResponse = {
            code   : HttpStatusCode.OK,
            message: "Danh sách categories",
            data: categories.filter(item => !!item.parent).map(item => item),
            parents: categoryParent,
        }
        res.status(response.code).json(response)
    }
}