export interface Login {
    email: string
    password: string
}
export interface Register {
    email: string
    password: string
    name: string
    phone: string
}
export interface DocInfo {
    img: string
    name: string
    phone: string
    category: string
    type?: string
    
}
export interface DocProfile{
    img:string
    name:string
    category: string
    uuid: string
}