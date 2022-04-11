import HttpStatus from "../../http.status"

export const index = async (req: any, res: any, next: any ) => {

    /// response 
    const response = {
        code   : HttpStatus.OK,
        message: "danh sách slider"
    }
    res.status(response.code).json(response)
}
export const store = async ( req: any, res : any, next: any ) => {
    const { slider } = req.body
    /// response 
    const response = {
        code   : HttpStatus.CREATED,
        message: slider
    }
    res.status(response.code).json(response)
}