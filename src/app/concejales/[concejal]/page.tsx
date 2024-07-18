'use client'

import { Features } from "@/app/components";
import { getConcejalBySlug } from "@/app/mocks/concejales";
import { Layout } from "@/app/views/Layout";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";


export default function ConcejalPage() {

    const params = useParams()
    const profile = getConcejalBySlug(`${params.concejal}`)

    return (
        <div id="concejal-page">
            <Layout title={profile.name}>
                <div className="row ">
                    <div className="col-md-6 wow slideInUp" >
                        <div className="team-item bg-light rounded overflow-hidden">
                            <div className="team-img position-relative overflow-hidden">
                                <Image
                                    width={400}
                                    height={400}
                                    className="img-fluid w-100" src={`/assets/img/concejales/${profile.slug}${profile.slug === 'alejandro-juan-jose-barcala' ? '.jpg' : '.jpeg'}`}
                                    alt="Imagen del miembro del equipo"
                                />
                            </div>
                            <div className="text-center px-2 py-4">
                                <strong>{profile.block}</strong>
                            </div>
                        </div>
                        <div className="mt-5">
                            <div className="d-flex justify-content-between">
                                <strong>Contacto</strong>
                            </div>
                            <hr />
                            <Link href={profile.instagram} target="_blank" className="text-danger"><Icon icon={'bi:instagram'} /> Instagram</Link>
                            <span className="d-block mt-1"> <Icon icon={'ic:baseline-email'} /> {profile.email}</span>
                        </div>
                    </div>
                    <div className="col-md-6 mt-5 mt-md-0 wow slideInUp" data-wow-delay="0.3s">
                        <h3>{profile.name}</h3>
                        <hr />
                        {
                            profile.details.map((e, i) =>
                                <p key={i}>{e}</p>
                            )
                        }
                        <p className="fs-6">{profile.description}</p>

                    </div>
                    <Features />

                </div>
            </Layout>
        </div>
    );
}