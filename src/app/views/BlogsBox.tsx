'use client'

import { Layout } from './Layout';
import { CardBlog } from "../components/blog/CardBlog";
import { Blog } from "../types";
import { Spinner } from '../components/spinner/Spinner';
import { Dispatch, SetStateAction, useState } from 'react';
import { Search } from '../components/searchbar/Search';

interface Props {
    blogs: Blog[];
    title: string;
    section: string;
    withLayout?: boolean;
    isLoading?: boolean;
    setBlogs?: Dispatch<SetStateAction<Blog[]>>;
    paginado?: boolean;
    filter?: string;
    handleNextPage?: () => void;
    handlePrevPage?: () => void;
    pageState?: number;
    blogsNumber?: number
    setFirstDocument?: any;
    setLastDocument?: any;
    setIsLoading?: any;
    categorySelected?: string;
    setCategorySelected?: any;
}

const BlogsBox = ({ blogs, title, section, withLayout = true, isLoading, setIsLoading, paginado = false, handleNextPage, handlePrevPage, pageState, setBlogs, blogsNumber = 3, setFirstDocument, setLastDocument, categorySelected = '', setCategorySelected }: Props) => {

    const [loading, setLoading] = useState(false)

    if (!withLayout) return (
        <>
            {
                (isLoading || loading)
                    ? <div className='d-flex justify-content-center align-items-center' style={{ minHeight: '400px' }}>
                        <Spinner />
                    </div>
                    :
                    <div className="container-fluid" >
                        <div className="container ">
                            <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: "600px" }}>
                                <h5 className="fw-bold text-primary text-uppercase">{section}</h5>
                                <h1 className="mb-0">{title}</h1>
                            </div>
                            <div className="row g-5">
                                {

                                    blogs.map((blog: Blog) =>
                                        <CardBlog blogData={blog} key={blog.id} />
                                    )
                                }
                            </div>
                            {
                                paginado &&
                                <div className='d-flex gap-2 align-items-center justify-content-center my-5'>
                                    <button className='btn btn-primary' onClick={handlePrevPage}>Anterior</button>
                                    <div>{pageState}</div>
                                    <button className='btn btn-primary' onClick={handleNextPage}>Siguiente</button>
                                </div>
                            }
                        </div>
                    </div>
            }
        </>
    )

    return (
        <Layout title="Noticias y Participación">
            {
                (isLoading || loading)
                    ? <div className='d-flex justify-content-center align-items-center' style={{ minHeight: '400px' }}>
                        <Spinner />
                    </div>
                    :
                    <div className="container-fluid" >
                        <div className="container ">
                            <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: "600px" }}>
                                <h5 className="fw-bold text-primary text-uppercase">{section}</h5>
                                <h1 className="mb-0">{title}</h1>
                            </div>
                            {
                                setBlogs &&
                                <Search 
                                    setBlogs={setBlogs} 
                                    blogsNumber={blogsNumber}
                                    setIsLoading={setIsLoading}
                                    setFirstDocument={setFirstDocument}
                                    setLastDocument={setLastDocument}
                                    setCategorySelected={setCategorySelected}
                                    categorySelected={categorySelected}
                                />
                            }
                            <div className="row g-5" style={{ minHeight: '300px' }}>
                                {
                                    blogs.map((blog: Blog) =>
                                        <CardBlog blogData={blog} key={blog.id} />
                                    )
                                }
                            </div>
                            {
                                paginado &&
                                <div className='d-flex gap-2 align-items-center justify-content-center my-5'>
                                    <button className='btn btn-primary' onClick={handlePrevPage}>Anterior</button>
                                    <div>{pageState}</div>
                                    <button className='btn btn-primary' onClick={handleNextPage}>Siguiente</button>
                                </div>
                            }
                        </div>
                    </div>
            }
        </Layout>
    );
};

export default BlogsBox;