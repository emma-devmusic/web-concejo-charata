
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
    details: string[];
}

export interface ImageObject {
    blurDataURL: string;
    blurHeight: number;
    blurWidth: number;
    height: number;
    src: string;
    width: number;
}

export interface Blog {
    id: string;
    data: DataBlog
}

export interface DataBlog {
    category: string;
    image: string;
    html: string;
    date: string;
    issue: string;
    title: string;
    creator: string;
    description: string;
    id: string;
}

