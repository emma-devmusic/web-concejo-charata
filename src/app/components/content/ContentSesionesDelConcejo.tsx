import { ImageBlog } from "../image/ImageBlog"
import Imagen from '../../assets/img/concejo/15.jpg'
import Imagen2 from '../../assets/img/concejo/17.jpg'
import Link from "next/link";
export const ContentSesionesDelConcejo = () => {
    return (
        <div className="col-lg-8">
            <h2 id="que-son-las-sesiones">¿Qué son las Sesiones?</h2>
            <hr />
            <p>Las <strong>sesiones</strong> son el espacio en el cual nuestros concejales someten a discusión los diferentes proyectos que han ingresado al Concejo. A su vez, en las mismas también son debatidos otros asuntos de interés para la ciudadanía.</p>
            <p>En el <Link href={'/concejo-del-municipio'}><strong>Concejo Deliberante de Charata</strong></Link>, el período de sesiones ordinarias se extiende desde marzo a diciembre. Las sesiones ordinarias pueden ser prorrogadas por un lapso determinado.  Las sesiones extraordinarias tienen lugar cuando el Concejo se encuentre en receso y fuera del período de prórroga.</p>
            <ImageBlog img={Imagen} alt="Imagen del Concejo de Charata" desc="Sesion del Concejo Del Municipio de Charata" />
            <p>Para poder celebrar una sesión es necesario contar con mayoría absoluta, o sea un <Link href={'/concejo-del-municipio#que-es-quorum'}><strong>quórum</strong></Link> compuesto por la mitad más uno de los concejales que integran el cuerpo; entendiéndose como cinco el número mínimo para sesionar y resolver los asuntos autorizados por la ley como simple mayoría. Pero un número menor podrá reunirse en minoría con el objeto de conminar a los que por su inasistencia sin permisos previos o sin aviso al cuerpo, dificultasen la celebración de sesiones.</p>
            <p>En las sesiones se trata el <Link href={'/orden-del-dia'}><strong>Orden del Día</strong></Link>, confeccionado con anterioridad, donde se enuncian los distintos proyectos que han tenido tratamiento en las Comisiones y se transcriben los respectivos despachos de éstas. Además se tratan los proyectos y las notas que han sido presentados durante los plazos correspondientes por mesa de entradas del Concejo Municipal.</p>


            <h3 className='fs-3 mt-5' id="como-se-clasifican">¿Cómo se clasifican las sesiones?</h3>
            <div>
                Las Sesiones pueden ser:
                <ul>
                    <li className="mb-2">
                        <strong className="text-primary"><i>Preparatorias:</i></strong> el Concejo se reunirá en Sesión preparatoria dentro de los diez días anteriores a la finalización del mandato de los Concejales salientes.
                    </li>
                    <li className="mb-2">
                        <strong className="text-primary"><i>Ordinarias:</i></strong> el concejo se reunirán en Sesión ordinaria en los días y horas que el mismo establezca. Como mínimo una vez por semana, dentro del período que comprende desde el 1ro. de marzo al 15 de Diciembre de cada año. Este término podrá ser prorrogado cuando así lo disponga los dos tercios del Cuerpo.
                    </li>
                    <li className="mb-2">
                        <strong className="text-primary"><i>De Prorroga:</i></strong> El Concejo se reunirá en Sesión de prorroga pro decisión del mismo extraordinaria o de la Presidencia y deberán seguir cronológicamente a las Ordinarias, con una interrupción máxima de treinta días, a partir de este plazo se considerará vencida dicha prorroga, debiendo determinarse los asuntos pendientes de la sanción que se ha de tratar en la misma previamente a su declaración.
                    </li>
                    <li className="mb-2">
                        <strong className="text-primary"><i>Extraordinarias:</i></strong> Cuando el Concejo esté en receso y fuera del período de prórroga, podrán ser convocados por el Intendente o a pedido de un tercio de los miembros del Concejo. En estas Sesiones sólo podrán tratarse los asuntos considerados en la convocatoria y solo podrán ingresarse temas con el acuerdo de los dos tercios del cuerpo. El Concejo determinará en estos casos, si la convocatoria obedece a razones de urgencia o de interés general, debiendo expedirse en forma afirmativa por los dos tercios de los miembros del Concejo, la convocatoria quedará desechada.
                    </li>
                    <li className="mb-2">
                        <strong className="text-primary"><i>Especiales:</i></strong> Son las que se convoquen durante el período de Sesiones Ordinarias y de Prorroga, para tratar los puntos que seguidamente se detallan:
                        <ul>
                            <li>las Cuentas de la administración.</li>
                            <li>Las sanciones de los miembros del cuerpo cuando se trate de aplicar los incisos b, c y d del artículo 49 de la ley 4233/95.</li>
                            <li>Para recibir personalidades por ser imposible su asistencia a las sesiones preestablecidas ya reguladas por el cuerpo</li>
                            <li>
                                Para cuestiones urgentes cuando circunstancias excepcionales hicieran imposible seguir los trámites ordinarios previstos por este reglamento para la sanción de las normas municipales, y no se trate de normas que regulen materia tributaria, impositiva, o modificaciones a la presente norma, podrán convocarse por el Intendente o a pedido de un tercio del total de los miembros del Concejo. En estas Sesiones sólo podrán tratarse los asuntos considerados en la convocatoria. El Concejo determinará en estos casos, si la convocatoria es procedente, debiendo expedirse en forma afirmativa por los dos tercios del total de los miembros del Concejo, en defecto de ello la convocatoria quedará inmediatamente desechada.
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>

            <ImageBlog img={Imagen2} desc="Concejo del Municipio de Charata en Sesión Activa" alt="Imagen del Concejo del Municipio de Charata" />

            <h3 className='fs-3 mt-5' id="son-publicas-las-sesiones">¿Son públicas las sesiones del Concejo?</h3>
            <p>
                Las Sesiones serán públicas, pero podrán hacerlas secretas por Resolución de los dos tercios de los miembros del cuerpo.
            </p>


            <h3 className='fs-3 mt-5' id="que-es-quorum">¿Qué significa «Quórum»?</h3>
            <p>
                Es el número mínimo de concejales requeridos para la toma de decisiones. Para formar el quórum legal es necesaria la presencia de más de la mitad del número de concejales integrantes del cuerpo, entendiéndose como cinco el número mínimo para sesionar y resolver los asuntos autorizados por la ley como simple mayoría.
            </p>


            <h3 className='fs-3 mt-5' id="que-es-ordenanza">¿Qué es una Ordenanza, resolución, declaración?</h3>
            <p>
                <strong>Ordenanza:</strong> Es una decisión que se toma para crear, reformar, suspender una regla que implique una obligación, una prohibición general u otorgue derechos a terceros.
            </p>
            <p>
                <strong>Resolución:</strong> Es la forma de referirse a la adopción de medidas relativas a la composición u organización interna del Concejo y del Municipio todo.
            </p>
            <p>
                <strong>Declaración:</strong> Es una proposición que tiene por objeto, en general, expresar una opinión sobre asuntos de interés local, provincial, nacional o internacional.
            </p>
        </div>
    );
};
