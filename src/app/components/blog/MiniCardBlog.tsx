import { Blog } from "@/app/types";
import Image from "next/image";
import Link from "next/link";

export const MiniCardBlog = ({blogData}: {blogData: Blog}) => {
    return (
        <div className="d-flex rounded overflow-hidden mb-3">
            <Image className="img-fluid" width={100} height={100} src={blogData.data.image} style={{ width: '100px', height: '100px', objectFit: 'cover' }} alt={'Imagen del Blog'} />
            <Link href={`/shares/${blogData.id}`} className="h5 fw-semi-bold d-flex align-items-center bg-light px-3 mb-0 w-100">
                {blogData.data.title}
            </Link>
        </div>
    );
};
