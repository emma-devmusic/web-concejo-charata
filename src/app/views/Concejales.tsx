'use client'
import { Navbar, SmallBanner } from "../components"
import { ContentConcejales } from "../components/content/ContentConcejales"
import { Profile } from "../components/team/Profile";
import { concejales } from '../mocks/concejales';
import { Concejal } from "../types";
import { Layout } from "./Layout"

export const Concejales = () => {



    return (
        <Layout title="Concejales">
            <h2>Cuerpo del Concejo</h2>
            <hr />
            <p className="fs-4">
                <strong>Los Concejales</strong> son los representantes directos del pueblo, elegidos a través del voto popular para velar por los derechos y el bienestar de los vecinos. Su labor se centra en analizar, debatir y aprobar proyectos de ordenanza y propuestas que luego son ejecutadas por el <strong>Poder Ejecutivo municipal</strong>. Cada uno de los nueve concejales de Charata trabaja en diversas comisiones, donde se especializan en temas específicos como obras públicas, servicios, cultura y educación.
            </p>
            <hr />
            <div className="d-flex justify-content-center m-4">
                <Profile profile={concejales.filter(e => e.slug === 'alejandro-juan-jose-barcala')[0]} />
            </div>
            <div className="d-flex justify-content-center flex-column align-items-center">

                <div className="row g-3" >
                    {
                        concejales.map((e: Concejal) => (e.slug !== 'alejandro-juan-jose-barcala' && e.block !== 'Frente Chaqueño' && <Profile key={e.id} profile={e} />))
                    }
                </div>
                <hr style={{ width: '100%' }} />
                <div className="row g-3" style={{
                }}>
                    {
                        concejales.map((e: Concejal) => (e.slug !== 'alejandro-juan-jose-barcala' && e.block !== 'Juntos Por El Cambio' && <Profile key={e.id} profile={e} />))
                    }
                </div>
                <hr style={{ width: '100%' }} />
            </div>

            <ContentConcejales />
        </Layout>
    )
}
