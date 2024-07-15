import { ImageObject } from "@/app/types";
import Image, { StaticImageData } from "next/image";

interface Props {
    img: string | ImageObject | StaticImageData;
    desc: string;
    alt: string;
}

export const ImageBlog = ({ img, desc, alt }: Props) => {
    return (
        <div className="d-flex flex-column ">
            <hr />
            <Image src={img} width={800} height={600} alt={alt} style={{
                width: '100%',
                height: 'auto',
                objectFit: 'cover'
            }} />
            <i className="text-gray mt-3">{desc}</i>
            <hr />
        </div>
    );
};
