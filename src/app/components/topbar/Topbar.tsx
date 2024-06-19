import { Icon } from '@iconify/react';

export const Topbar = () => {
    return (
        <div className="container-fluid bg-dark px-5 d-none d-lg-block">
            <div className="row gx-0">
                <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
                    <div className="d-inline-flex align-items-center" style={{ height: "45px" }}>
                        <small className="d-flex align-items-center me-3 text-light"><Icon className='me-1' icon={'mdi:google-maps'} />123 Street, New York, USA</small>
                        <small className="d-flex align-items-center me-3 text-light"><Icon className='me-1' icon={'ic:round-phone'} />+012 345 6789</small>
                        <small className="d-flex align-items-center text-light"><Icon className='me-1' icon={'ri:mail-fill'} />info@example.com</small>
                    </div>
                </div>
                <div className="col-lg-4 text-center text-lg-end">
                    <div className="d-inline-flex align-items-center" style={{ height: "45px" }}>
                        <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2 d-flex justify-content-center align-items-center" href="">
                            <Icon icon="ri:facebook-fill" />
                        </a>
                        <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2 d-flex justify-content-center align-items-center" href="">
                            <Icon icon="mdi:instagram" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
