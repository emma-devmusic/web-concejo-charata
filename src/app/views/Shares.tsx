'use client'

import { Layout } from './Layout';
import { CardBlog } from "../components/blog/CardBlog";
import { Blog } from "../types";
import { Spinner } from '../components/spinner/Spinner';

interface Props {
    blogs: Blog[];
    title: string;
    section: string;
    withLayout?: boolean;
    isLoading?: boolean;
}

const Shares = ({ blogs, title, section, withLayout = true, isLoading = false }: Props) => {




    if (!withLayout) return (
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
            </div>
        </div>
    )

    return (
        <Layout title="Noticias y Participación">
            <div className="container-fluid wow fadeInUp" >
                <div className="container ">
                    <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: "600px" }}>
                        <h5 className="fw-bold text-primary text-uppercase">{section}</h5>
                        <h1 className="mb-0">{title}</h1>
                    </div>
                    <div className="row g-5" style={{minHeight: '300px'}}>
                        {
                            isLoading
                                ? <div className='d-flex justify-content-center align-items-center' style={{minHeight: '300px'}}>
                                    <Spinner />
                                </div>
                                : blogs.map((blog: Blog) =>
                                    <CardBlog blogData={blog} key={blog.id} />
                                )
                        }
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Shares;