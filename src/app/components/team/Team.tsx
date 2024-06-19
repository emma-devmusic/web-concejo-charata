import Image from "next/image"
import team1 from '../../assets/img/team-1.jpg';
import team2 from '../../assets/img/team-2.jpg';
import team3 from '../../assets/img/team-3.jpg';
import { Icon } from "@iconify/react/dist/iconify.js";


export const Team = () => {
    return (
        <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container py-5">
                <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{maxWidth: "600px"}}>
                    <h5 className="fw-bold text-primary text-uppercase">Equipo</h5>
                    <h1 className="mb-0">Miembros del Concejo Municipal de Charata</h1>
                </div>
                <div className="row g-5">
                    <div className="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
                        <div className="team-item bg-light rounded overflow-hidden">
                            <div className="team-img position-relative overflow-hidden">
                                <Image width={400} height={400} className="img-fluid w-100" src={team1} alt="Imagen del miembro del equipo"/>
                                    <div className="team-social">
                                        <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><Icon icon={'prime:twitter'} /></a>
                                        <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><Icon icon={'ri:facebook-fill'} /></a>
                                        <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><Icon icon={'bi:instagram'} /></a>
                                        <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><Icon icon={'bi:linkedin'} /></a>
                                    </div>
                            </div>
                            <div className="text-center py-4">
                                <h4 className="text-primary">Nombre Completo</h4>
                                <p className="text-uppercase m-0">Cargo</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 wow slideInUp" data-wow-delay="0.6s">
                        <div className="team-item bg-light rounded overflow-hidden">
                            <div className="team-img position-relative overflow-hidden">
                                <Image width={400} height={400} className="img-fluid w-100" src={team2} alt="Imagen del miembro del equipo"/>
                                    <div className="team-social">
                                    <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><Icon icon={'prime:twitter'} /></a>
                                        <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><Icon icon={'ri:facebook-fill'} /></a>
                                        <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><Icon icon={'bi:instagram'} /></a>
                                        <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><Icon icon={'bi:linkedin'} /></a>
                                    </div>
                            </div>
                            <div className="text-center py-4">
                                <h4 className="text-primary">Nombre Completo</h4>
                                <p className="text-uppercase m-0">Cargo</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 wow slideInUp" data-wow-delay="0.9s">
                        <div className="team-item bg-light rounded overflow-hidden">
                            <div className="team-img position-relative overflow-hidden">
                                <Image width={400} height={400} className="img-fluid w-100" src={team3} alt="Imagen del miembro del equipo"/>
                                    <div className="team-social">
                                    <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><Icon icon={'prime:twitter'} /></a>
                                        <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><Icon icon={'ri:facebook-fill'} /></a>
                                        <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><Icon icon={'bi:instagram'} /></a>
                                        <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><Icon icon={'bi:linkedin'} /></a>
                                    </div>
                            </div>
                            <div className="text-center py-4">
                                <h4 className="text-primary">Nombre Completo</h4>
                                <p className="text-uppercase m-0">Cargo</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}