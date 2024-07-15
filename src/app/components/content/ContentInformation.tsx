import Image from "next/image"
import imageConcejo from '../../assets/img/concejo/9.jpg';
import imageSession from '../../assets/img/concejo/3.jpg';
import { Dispatch, SetStateAction } from "react"
import { ImageBlog } from "../image/ImageBlog";

export const ContentInformation = ({ setIsActive }: { setIsActive: Dispatch<SetStateAction<boolean>> }) => {

    console.log(imageConcejo)

    const handleTop = (e: any) => {
        console.log(e.target)
    }

    return (
        <div className="mb-5">
            <h1 onScrollCapture={handleTop} id="que-es-el-concejo">¿Qué es el Concejo?</h1>
            <p>
                El Concejo Municipal es el encargado de legislar. Junto al Poder Ejecutivo encabezado por el Intendente, conforma la Municipalidad de la ciudad de Charata.
            </p>
            <p>
                Este espacio es el foro de debate permanente y de decisión para el desarrollo de la ciudad, donde se escuchan las necesidades y opiniones de los vecinos y se toman decisiones estratégicas que marcarán el camino de las transformaciones de la ciudad.
            </p>
            <p>
                La gente es parte del Concejo a través de sus propuestas y de la información pública; por esta razón, la claridad y el acceso a la información son objetivos primordiales.
            </p>
            <p>
                Los 9 Concejales debaten proyectos, se informan con especialistas en cada tema y analizan su viabilidad para dar respuestas realistas que mejoren la calidad de vida de los ciudadanos.
            </p>

            <ImageBlog img={imageConcejo} desc="Concejo del Municipio de Charata en Sesión Activa" alt="Concejo del municipio de Charata en Sesion"/>

            <h3 onClick={handleTop} className='fs-3 mt-5' id="donde-funciona">¿Dónde funciona el Concejo Municipal?</h3>
            <p>
                Funciona en la planta alta del edificio municipal, cito en calle Rivadavia 370 de la ciudad de Charata, provincia de Chaco, ubicado en el centro cívico de la comunidad, lugares en los que también se sitúan el Correo Argentino, la Parroquia Nuestra Señora del Perpetuo Socorro, el Nuevo Banco del Chaco, el Banco Nación de la Nación Argentina, entre otros.
            </p>


            <h3 onClick={handleTop} className='fs-3 mt-5' id="como-se-compone">¿Cómo se compone el Concejo Municipal?</h3>
            <p>
                El Concejo Municipal está conformado por los concejales. Los municipios de 1ra categoría, las comunas de más de veinte mil (20.000) habitantes, se integran con hasta nueve (9) concejales. Además se compone de un Presidente de Concejo que es el primer integrante de la lista ganadora en las elecciones municipales. Administrativamente está compuesto por un Secretario de Concejo, un Prosecretario y un Prosecretario 1ro; cargos nombrados por Reglamento Interno Municipal.
            </p>


            <h3 onClick={handleTop} className='fs-3 mt-5' id="funciones-del-concejal">¿Cuáles son las funciones de un concejal?</h3>
            <p>
                El concejal es la voz del pueblo, representante elegido por voto directo de la ciudadanía para defender los derechos de los vecinos, procurándoles mayores servicios con el propósito de mejorar su calidad de vida, elevando al Poder Ejecutivo (Municipalidad de Charata) proyectos y propuestas para que éste los haga cumplir. Se preocupa por obras, servicios, cultura y educación. El Honorable Concejo Deliberante de la ciudad de Charata está conformado por 9 concejales, organizados en distintas comisiones para desarrollar un trabajo fecundo y coherente.
            </p>
            <p>
                Un concejal generalmente surge de la acción vecinalista o de instituciones donde se destaca por su sensibilidad social, primera condición para ejercer una concejalía.
            </p>


            <h3 onClick={handleTop} className='fs-3 mt-5' id="requisitos-de-ley">¿Qué requisitos exige la ley para acceder a una concejalía?</h3>
            <div>
                Para ser miembros de los concejos municipales se requiere:
                <ul>
                    <li>Estar inscriptos en el registro electoral del Municipio.</li>
                    <li>Tener veintiún (21) años cumplidos como mínimo a la fecha del comicio.</li>
                    <li>Saber leer y escribir el idioma nacional.</li>
                    <li>No estar comprendido en alguna inhabilidad prevista en la Ley Orgánica de Municipios (Ley 4.233).</li>
                </ul>
            </div>


            <h3 onClick={handleTop} className='fs-3 mt-5' id="como-funciona">¿Cómo funciona el Concejo Municipal?</h3>
            <p>
                Los concejales son convocados a las sesiones, además de las reuniones de comisión que cada una de ésta propone.
            </p>
            <p>
                El Concejo Municipal de Charata está conformado por 9 concejales elegidos en forma directa por el pueblo. Para ser miembros de los concejos municipales se requiere: estar inscriptos en el registro electoral del Municipio, tener veintiún (21) años cumplidos como mínimo a la fecha del comicio, saber leer y escribir el idioma nacional, no estar comprendido en alguna inhabilidad prevista en la Ley Orgánica de Municipios (Ley 4.233).
            </p>
            <p>
                La renovación del Concejo en nuestra ciudad se realiza en su totalidad cada cuatro años. Los mandatos tienen una duración de 4 años, pudiendo, los concejales, ser reelectos sin límite de mandatos.
            </p>
            <p>
                La ley establece que el Concejo Municipal funcione en sesiones ordinarias, extraordinarias, especiales y de prórroga. De todas maneras, durante todo el año, haya o no sesiones, el Concejo Municipal está abierto al público: funcionan las oficinas de los concejales y las dependencias administrativas.
            </p>


            <h3 onClick={handleTop} className='fs-3 mt-5' id="como-elevan-proyectos">¿Cómo elevan sus proyectos y pedidos los concejales?</h3>
            <p>
                Todo asunto promovido por un Concejal deberá presentarse en forma de Proyecto de Ordenanza, de Resolución o de Declaración, con excepción de toda proposición o propuesta hecha a viva voz donde desde su banca por un Concejal es considerada una moción.
            </p>
            <p>
                Se presentará en forma de Proyecto de Ordenanza toda proposición que puede ser sancionada como tal.
            </p>
            <p>
                Se presentará en forma de Proyecto de Resolución, todo aumento que tengan por propósito: el rechazo de solicitudes particulares, la adopción de medidas referentes a la confirmación u organización interna del Concejo, pedidos de informes, etc. Y en general toda solicitud tiende a la adopción de medidas orientadas al interés comunitario.
            </p>
            <p>
                Se presentará en forma de Proyecto de Declaración, toda proposición que tenga por objeto exteriorizar una opinión del Concejo respecto de cualquier asunto de carácter público o privado, o expresar su voluntad de práctica un acto de optar reglas generales referentes a sus procedimientos.
            </p>
            <p>
                Los proyectos deberán ser presentados por escrito o firmado por su autor o autores.
            </p>
            <p>
                Los Proyectos de ordenanzas o de Resolución deberán contener los motivos determinantes de sus disposiciones, las que deberán ser de carácter rigurosamente preceptivas.
            </p>


            <h3 onClick={handleTop} className='fs-3 mt-5' id="donde-se-reunen">¿Dónde se reúnen los concejales para celebrar sus reuniones?</h3>
            <p>
                Los concejales se reúnen en una sala especialmente equipada para tal fin, denominada «Sala de Sesiones del Concejo Municipal» o recinto.
            </p>
            <p>
                Los concejales son convocados a las sesiones, además de las reuniones de comisión que cada una de éstas propone.
            </p>
        </div>
    )
}
