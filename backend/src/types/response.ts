export interface ApiResponse {
    [key: string]: any,
    code: number,
    message: string,
    data?: any,
    error?: Error
}