'use client'

import Link from "next/link"


export const SidebarNavSesiones = () => {
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
                    <Link className="h5 fs-6 fw-semi-bold rounded py-2 px-3 mb-2" href="/sesiones-del-concejo/#que-son-las-sesiones">¿Qué son las Sesiones?</Link>
                    <Link className="h5 fs-6 fw-semi-bold rounded py-2 px-3 mb-2" href="/sesiones-del-concejo/#como-se-clasifican">¿Cómo se clasifican las sesiones?</Link>
                    <Link className="h5 fs-6 fw-semi-bold rounded py-2 px-3 mb-2" href="/sesiones-del-concejo/#son-publicas-las-sesiones">¿Son públicas las sesiones del Concejo?</Link>
                    <Link className="h5 fs-6 fw-semi-bold rounded py-2 px-3 mb-2" href="/sesiones-del-concejo/#que-es-quorum">¿Qué significa «Quórum»?</Link>
                    <Link className="h5 fs-6 fw-semi-bold rounded py-2 px-3 mb-2" href="/sesiones-del-concejo/#que-es-ordenanza">¿Qué es una Ordenanza, Resolución, Declaración?</Link>
                </div>
            </div>
        </div>
    )
}
