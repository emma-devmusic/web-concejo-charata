'use client'

import Link from "next/link"

export const SidebarNavigation = () => {
    return (
        <div className="col-lg-4">
            <div className="mb-5 wow slideInUp" data-wow-delay="0.1s">
                <div className="section-title section-title-sm position-relative pb-3 mb-4">
                    <h3 className="mb-0">Categories</h3>
                </div>
                <div className="link-animated d-flex flex-column justify-content-start">
                    <Link className="h5 fw-semi-bold bg-light rounded py-2 px-3 mb-2" href="#"><i className="bi bi-arrow-right me-2"></i>Web Design</Link>
                    <Link className="h5 fw-semi-bold bg-light rounded py-2 px-3 mb-2" href="#"><i className="bi bi-arrow-right me-2"></i>Web Development</Link>
                    <Link className="h5 fw-semi-bold bg-light rounded py-2 px-3 mb-2" href="#"><i className="bi bi-arrow-right me-2"></i>Web Development</Link>
                    <Link className="h5 fw-semi-bold bg-light rounded py-2 px-3 mb-2" href="#"><i className="bi bi-arrow-right me-2"></i>Keyword Research</Link>
                    <Link className="h5 fw-semi-bold bg-light rounded py-2 px-3 mb-2" href="#"><i className="bi bi-arrow-right me-2"></i>Email Marketing</Link>
                </div>
            </div>
        </div>
    )
}
