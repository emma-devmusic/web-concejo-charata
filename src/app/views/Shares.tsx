'use client'

import { Layout } from "./Layout";
import { CardBlog } from "../components/blog/CardBlog";
import { Blog } from "../types";

const Shares = ({blogs}: {blogs: any}) => {


    return (
        <Layout title="Noticias y Participación">
            <div className="container-fluid wow fadeInUp" data-wow-delay="0.1s">
                <div className="container ">
                    <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: "600px" }}>
                        <h5 className="fw-bold text-primary text-uppercase">Blogs - Noticias</h5>
                        <h1 className="mb-0">Enterate de Noticias y de la Participación Presidencial</h1>
                    </div>
                    <div className="row g-5">
                        {
                            blogs.map( (blog:Blog) => 
                                <CardBlog blogData={blog} key={blog.id}/>
                            )
                        }
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Shares;