import Image from "next/image"
import team1 from '../../assets/img/team-1.jpg';
import team2 from '../../assets/img/team-2.jpg';
import team3 from '../../assets/img/team-3.jpg';
import { Icon } from "@iconify/react/dist/iconify.js";
import { Profile } from "./Profile";


export const Team = () => {
    return (
        <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container py-5">
                <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{maxWidth: "600px"}}>
                    <h5 className="fw-bold text-primary text-uppercase">Equipo</h5>
                    <h1 className="mb-0">Miembros del Concejo Municipal de Charata</h1>
                </div>
                <div className="row g-5">
                    {/* <Profile /> */}
                </div>
            </div>
        </div>
    )
}