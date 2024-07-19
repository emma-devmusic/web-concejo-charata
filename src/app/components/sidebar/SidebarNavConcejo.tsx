'use client'

import Link from "next/link"
import { Dispatch, SetStateAction } from "react";

interface Props {
    isActive: boolean;
    setIsActive: Dispatch<SetStateAction<boolean>>;
}


export const SidebarNavConcejo = ({ isActive, setIsActive }: Props) => {
    return (
        <div className="col-lg-4">
            <div className="mb-5 wow slideInUp" data-wow-delay="0.1s" style={{
                position: 'sticky',
                top: '100px'
            }}>
                <div className="section-title section-title-sm position-relative pb-3 mb-4">
                    <h3 className="mb-0">Navegación</h3>
                </div>
                <div className="link-animated d-flex flex-column justify-content-start">
                    <Link className="h5 fs-6 fw-semi-bold rounded py-2 px-3 mb-2" href="/concejo-del-municipio/#que-es-el-concejo">¿Qué es el concejo?</Link>
                    <Link className="h5 fs-6 fw-semi-bold rounded py-2 px-3 mb-2" href="/concejo-del-municipio/#donde-funciona">¿Dónde Funciona el Concejo Municipal?</Link>
                    <Link className="h5 fs-6 fw-semi-bold rounded py-2 px-3 mb-2" href="/concejo-del-municipio/#como-se-compone">¿Cómo se compone el Concejo Municipal?</Link>
                    <Link className="h5 fs-6 fw-semi-bold rounded py-2 px-3 mb-2" href="/concejo-del-municipio/#funciones-del-concejal">¿Cuáles son las funciones de un concejal?</Link>
                    <Link className="h5 fs-6 fw-semi-bold rounded py-2 px-3 mb-2" href="/concejo-del-municipio/#requisitos-de-ley">¿Qué requisitos exige la ley para acceder a una concejalía?</Link>
                    <Link className="h5 fs-6 fw-semi-bold rounded py-2 px-3 mb-2" href="/concejo-del-municipio/#como-funciona">¿Cómo funciona el Concejo Municipal?</Link>
                    <Link className="h5 fs-6 fw-semi-bold rounded py-2 px-3 mb-2" href="/concejo-del-municipio/#que-es-una-sesion">¿Qué es una sesión?</Link>
                    <Link className="h5 fs-6 fw-semi-bold rounded py-2 px-3 mb-2" href="/concejo-del-municipio/#clasificacion">¿Cómo se clasifican las sesiones?</Link>
                    <Link className="h5 fs-6 fw-semi-bold rounded py-2 px-3 mb-2" href="/concejo-del-municipio/#son-publicas">¿Son públicas las sesiones del Concejo?</Link>
                    <Link className="h5 fs-6 fw-semi-bold rounded py-2 px-3 mb-2" href="/concejo-del-municipio/#que-es-quorum">¿Qué significa «Quórum»?</Link>
                    <Link className="h5 fs-6 fw-semi-bold rounded py-2 px-3 mb-2" href="/concejo-del-municipio/#que-es-ordenanza">¿Qué es una Ordenanza, resolución, declaración?</Link>
                    <Link className="h5 fs-6 fw-semi-bold rounded py-2 px-3 mb-2" href="/concejo-del-municipio/#como-elevan-proyectos">¿Cómo elevan sus proyectos y pedidos los concejales?</Link>
                    <Link className="h5 fs-6 fw-semi-bold rounded py-2 px-3 mb-2" href="/concejo-del-municipio/#donde-se-reunen">¿Dónde se reúnen los concejales para celebrar sus reuniones?</Link>
                </div>
            </div>
        </div>
    )
}
