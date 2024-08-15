import Image from "next/image";
import { Blog } from "@/app/types";
import Link from "next/link";


export const CardBlog = ({ blogData }: { blogData: Blog }) => {
        return (
            <div className="col-lg-4">
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
                        <Link className="text-uppercase" href={`shares/${blogData.id}`}>Leer Más <i className="bi bi-arrow-right"></i></Link>
                    </div>
                </div>
            </div>
        );
};
