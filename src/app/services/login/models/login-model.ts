export interface LoginRequestModel {
    email: string,
    password: string
}

export interface LoginResposneModel {
    userId: number
    username: string
    email: string
    password: string
    status: string
    createdDate: Date
}