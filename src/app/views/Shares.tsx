'use client'

import { Layout } from './Layout';
import { CardBlog } from "../components/blog/CardBlog";
import { Blog } from "../types";
import { Spinner } from '../components/spinner/Spinner';
import { getNineBlogsByPage } from '@/services/blogs';
import { Dispatch, SetStateAction, useState } from 'react';

interface Props {
    blogs: Blog[];
    title: string;
    section: string;
    withLayout?: boolean;
    isLoading?: boolean;
    setBlogs?: Dispatch<SetStateAction<Blog[]>>;
    paginado?: boolean
}

const Shares = ({ blogs, title, section, withLayout = true, isLoading, setBlogs, paginado = false }: Props) => {

    const [loading, setLoading] = useState(false)


    const [pageState, setPageState] = useState(1);
    const handleBackward = () => {
        if (pageState === 1) return;
        setLoading(true)

        getNineBlogsByPage(null, blogs[0].data.id-1)
            .then((resp: any) => {if(setBlogs) setBlogs(resp)})
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
        setPageState(pageState - 1)
    }

    const handleForward = () => {

        if (blogs.length < 9) return;
        setLoading(true)
        getNineBlogsByPage(blogs[blogs.length - 1].data.id , null)
            .then((resp: any) => {if(setBlogs) setBlogs(resp)})
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
        setPageState(pageState + 1)
    }


    if (!withLayout) return (
        <>
            {
                (isLoading || loading)
                    ? <div className='d-flex justify-content-center align-items-center' style={{ minHeight: '400px' }}>
                        <Spinner />
                    </div>
                    :
                    <div className="container-fluid wow fadeInUp" data-wow-delay="0.1s">
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
                                    <button className='btn btn-primary' onClick={handleBackward}>Anterior</button>
                                    <div>1</div>
                                    <button className='btn btn-primary' onClick={handleForward}>Siguiente</button>
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
                    <div className="container-fluid wow fadeInUp" >
                        <div className="container ">
                            <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: "600px" }}>
                                <h5 className="fw-bold text-primary text-uppercase">{section}</h5>
                                <h1 className="mb-0">{title}</h1>
                            </div>
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
                                    <button className='btn btn-primary' onClick={handleBackward}>Anterior</button>
                                    <div>{pageState}</div>
                                    <button className='btn btn-primary' onClick={handleForward}>Siguiente</button>
                                </div>
                            }
                        </div>
                    </div>
            }
        </Layout>
    );
};

export default Shares;