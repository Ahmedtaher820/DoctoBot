export interface Login {
    email: string
    password: string
}
export interface Register {
    email: string
    password: string
    name: string
    phone: string
    passwordConfirm: string
}
export interface DocInfo {
    img: string
    name: string
    phone: string
    category: string
    type?: string

}
export interface DocProfile {
    img: string
    name: string
    category: string
    uuid: string
}




export interface Paginate {
    currentPage: number,
    limit: number,
    numberOfPages: number,
    next: number,
    prev: number
}
export interface Doctors {
    _id: string
    name: string
    age: string
    specialiaty: string
    educationYears: string
    whatsapp: string
    experienceYears: string
    isAvailable: boolean
    contactNumber: string
    email: string
    address: string
    image: string
    created_at: string
    rating: string
}
export interface Nurses {
    _id?: string
    name: string
    age: string
    shift: string
    experienceYears: string
    whatsapp: string
    isAvailable: boolean
    contactNumber: string
    email: string
    address: string
    image: string
    created_at: string
    rating: string
}


export interface PaginationMeta {
    current_page: number
    from: number
    last_page: number
    links: {
        url: string | null
        label: string
        active: boolean
    }[]
    path: string
    per_page: number
    to: number
    total: number
}

export interface PaginationLinks {
    first: string
    last: string
    prev: string | null
    next: string | null
}

export interface Pagination<T> {
    data: T[]
    links: PaginationLinks
    meta: PaginationMeta
}

export interface User {
    name: string
    email: string
    password: string
    role: string
    active: boolean
    _id: string
}