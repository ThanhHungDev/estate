

export const index = async (req: any, res: any, next: any ) => {

    /// response 
    const response = {
        code   : 200,
        message: "danh sách slider"
    }
    res.status(response.code).json(response)
}
