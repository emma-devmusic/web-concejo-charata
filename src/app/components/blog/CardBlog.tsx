import Image from "next/image";
import blog1 from '../../assets/img/blog-1.jpg';
import { Blog } from "@/app/types";
import { useEffect, useState } from 'react';
import { Spinner } from "../spinner/Spinner";

export const CardBlog = ({ blogData }: { blogData: Blog }) => {

    // const [show, setShow] = useState(false)

    // useEffect(() => {
    //     setTimeout(() => {
    //         setShow(true)
    //     }, 1000);
    // }, [])

    // if (!show) return  <div className='d-flex justify-content-center align-items-center' style={{ minHeight: '300px' }}> <Spinner /> </div>
    // if (show)
        return (
            <div className="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
                <div className="blog-item bg-light rounded overflow-hidden">
                    <div className="blog-img position-relative overflow-hidden">
                        <Image width={400} height={280} className="img-fluid" src={blogData.data.image} alt="Imagen de la noticia"
                            style={{
                                height: '280px',
                                width: '400px',
                                objectFit: 'cover'
                            }}
                        />
                        <a className="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4" href="">{blogData.data.issue}</a>
                    </div>
                    <div className="p-4">
                        <div className="d-flex justify-content-between mb-1">
                            <small className="me-3"><i className="far fa-user text-primary"></i>Por <strong>{blogData.data.creator}</strong></small>
                            <small><i className="text-primary me-2"></i>{blogData.data.date}</small>
                        </div>
                        <h4 className="mb-1">{blogData.data.title}</h4>
                        <div className="d-flex">
                            <small className="me-3"><i className="text-primary"></i>Categoría: <strong>{blogData.data.category}</strong></small>
                        </div>
                        <hr className="my-2" />
                        <p>{blogData.data.description}</p>
                        <a className="text-uppercase" href={`shares/${blogData.id}`}>Leer Más <i className="bi bi-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        );
};
