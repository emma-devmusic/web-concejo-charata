
export interface Concejal {
    id: number;
    name: string;
    position: string;
    salary: number;
    slug: string;
    block: string;
    instagram: string;
    description: string;
    email: string;
}

export interface ImageObject {
    blurDataURL: string;
    blurHeight: number;
    blurWidth: number;
    height: number;
    src: string;
    width: number;
}