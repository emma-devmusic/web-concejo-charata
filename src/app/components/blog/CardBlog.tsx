import Image from "next/image";
import blog1 from '../../assets/img/blog-1.jpg';
import { Blog } from "@/app/types";

export const CardBlog = ({blogData}: {blogData: Blog}) => {
    
    let createDate = new Date(blogData.data.date).toLocaleDateString()



    return (
        <div className="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
            <div className="blog-item bg-light rounded overflow-hidden">
                <div className="blog-img position-relative overflow-hidden">
                    <Image width={400} height={280} className="img-fluid" src={blog1} alt="Imagen de la noticia" />
                    <a className="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4" href="">{blogData.data.issue}</a>
                </div>
                <div className="p-4">
                    <div className="d-flex mb-3 justify-content-between">
                        <small className="me-3"><i className="far fa-user text-primary"></i>Por <strong>{blogData.data.creator}</strong></small>
                        <small><i className="far fa-calendar-alt text-primary me-2"></i>{createDate}</small>
                    </div>
                    <h4 className="mb-1">{blogData.data.title}</h4>
                    <p>{blogData.data.description}</p>
                    <a className="text-uppercase" href={`shares/${blogData.id}`}>Leer Más <i className="bi bi-arrow-right"></i></a>
                </div>
            </div>
        </div>
    );
};
