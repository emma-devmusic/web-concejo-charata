import { Icon } from "@iconify/react/dist/iconify.js"
import CountUp from "react-countup"

export const Facts = () => {

    return (
        <div className="container-fluid facts py-5 pt-lg-0">
            <div className="container py-5 pt-lg-0">
                <div className="row gx-0">
                    <div className="col-lg-4 wow zoomIn" data-wow-delay="0.1s">
                        <div className="bg-primary shadow d-flex align-items-center justify-content-center p-4" style={{ height: "150px" }}>
                            <div className="bg-white d-flex align-items-center justify-content-center rounded mb-2" style={{ width: "60px", height: "60px" }}>
                                <Icon icon='fa-solid:users' className="text-primary fs-5f"/>
                            </div>
                            <div className="ps-4">
                                <h5 className="text-white mb-0">Ciudadanos Felices</h5>
                                <h1 className="text-white mb-0" data-toggle="counter-up"><CountUp end={123} duration={5}/></h1>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 wow zoomIn" data-wow-delay="0.3s">
                        <div className="bg-light shadow d-flex align-items-center justify-content-center p-4" style={{ height: "150px" }}>
                            <div className="bg-primary d-flex align-items-center justify-content-center rounded mb-2" style={{ width: "60px", height: "60px" }}>
                                <Icon icon='material-symbols:done' className="text-white fs-4"/>
                            </div>
                            <div className="ps-4">
                                <h5 className="text-primary mb-0">Proyectos</h5>
                                <h1 className="mb-0 text-primary"><CountUp end={123} duration={5}/></h1>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 wow zoomIn" data-wow-delay="0.6s">
                        <div className="bg-primary shadow d-flex align-items-center justify-content-center p-4" style={{ height: "150px" }}>
                            <div className="bg-white d-flex align-items-center justify-content-center rounded mb-2" style={{ width: "60px", height: "60px" }}>
                                <Icon icon='et:search' className="text-primary fs-5"/>
                            </div>
                            <div className="ps-4">
                                <h5 className="text-white mb-0">Transparencia</h5>
                                <h1 className="text-white mb-0" ><CountUp end={123} duration={5}/></h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}