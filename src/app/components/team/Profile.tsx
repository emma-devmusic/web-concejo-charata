
import Image from "next/image"
import { Concejal } from "@/app/types";
import Link from "next/link";

export const Profile = ({ profile }: { profile: Concejal }) => {

    return (
        <div className="col-md-6 col-xxl-3 wow slideInUp" data-wow-delay="0.3s">
            <div className="team-item bg-light overflow-hidden" style={{
                borderRadius: '10px !important'
            }}>
                <div className="team-img position-relative overflow-hidden">
                    <Image width={400} height={400} className="img-fluid w-100" src={`/assets/img/concejales/${profile.slug}${profile.slug === 'alejandro-juan-jose-barcala' ? '.jpg' : '.jpeg'}`} alt="Imagen del miembro del equipo" style={{
                        // width: 'auto',
                        // height: '500px',
                        // objectFit: 'cover'
                    }}/>
                    <div className="team-social">
                        <div className="d-flex flex-column align-items-center">
                            {/* <a className="btn btn-primary rounded-circle" href=""><Icon icon={'prime:twitter'} /></a> */}
                            {/* <a className="btn btn-primary rounded-circle" href=""><Icon icon={'ri:facebook-fill'} /></a> */}
                            {/* <a className="btn btn-primary rounded-circle" href=""><Icon icon={'bi:linkedin'} /></a> */}
                            {/* <Link className="btn btn-primary rounded-circle" href="/"><Icon icon={'bi:instagram'} /></Link> */}
                            <Link className="btn btn-lg btn-primary btn-lg-square mt-2" href={`/concejales/${profile.slug}`} style={{width: '80px'}}>Ver</Link>
                        </div>
                    </div>
                </div>
                <div className="text-center px-2 py-4">
                    <h4 className="text-primary">{profile.name}</h4>
                    <strong>{profile.block}</strong>
                    <p className="text-uppercase m-0">{profile.position}</p>
                </div>
            </div>
        </div>
    )
}
