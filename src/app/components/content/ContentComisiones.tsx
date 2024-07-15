import { ImageBlog } from "../image/ImageBlog"
import Image from '../../assets/img/concejo/19.jpg'
export const ContentComisiones = () => {
    return (
        <div className="col-lg-8">
            <h1>Comisiones</h1>
            <hr />
            <p>
                Las <strong>Comisiones</strong> internas del Concejo se encargan del estudio y despacho de todos los proyectos ingresados. Están integradas en las formas que los sectores políticos están representados en el seno del Concejo proporcionalmente por mínimo tres concejales y máximo cinco, uno de los cuales es designado por sus pares como Presidente de la Comisión.
            </p>
            <ImageBlog img={Image} desc="Imagen del Concejo del Municipio de Charata en Comision Activa" alt="Comision del Concejo Deliberante" />
            <p>
                Los asuntos que han sido girados a Comisión, producido el despacho de las correspondientes Comisiones, serán girados a la Secretaría del Concejo y entrarán a formar parte automáticamente del Orden del día.
            </p>
            <p>
                En el Concejo Deliberante funcionan seis comisiones de trabajo, estando cada una de ellas compuesta por hasta cinco miembros, quienes son designados a propuesta de los Bloques Legislativos en la primera Sesión Ordinaria del período. Estas Comisiones son:
            </p>
            <ul className="list-group">
                <li className="list-group-item"><strong>Comisión de Asuntos Generales</strong></li>
                <li className="list-group-item"><strong>Comisión de Hacienda y Presupuesto</strong></li>
                <li className="list-group-item"><strong>Comisión de Obras y Servicios Públicos</strong></li>
                <li className="list-group-item"><strong>Comisión de Inventario</strong></li>
                <li className="list-group-item"><strong>Comisión Investigadora</strong></li>
                <li className="list-group-item"><strong>Comisión de Desarrollo Local, Promoción y Asistencia a la Población</strong></li>
                <li className="list-group-item"><strong>Comisión Regularizadora de Tierras Fiscales, Ordenamiento Urbano y Medio Ambiente</strong></li>
            </ul>

            <hr className="mt-5"/>
            <div className="comision mt-5">
                <h4>Comisión de Asuntos Generales</h4>
                <p>Integrantes: Luciana Evelin Guilaña, Angel René Carabajal, Elbio Marcelo Spahn, Silvia Mabel Oger, y Carlos Roberto Fedorchuk.</p>
                <p>Esta comisión se encarga de evaluar y despachar los asuntos generales que no están específicamente asignados a otras comisiones. Su labor es fundamental para garantizar un estudio integral de todos los proyectos ingresados.</p>
            </div>

            <div className="comision">
                <h4>Comisión de Hacienda y Presupuesto</h4>
                <p>Integrantes: Angel René Carabajal, Elbio Marcelo Spahn, Luciana Evelin Guilaña, Néstor Javier Lorenzin y Paola Gauna.</p>
                <p>Esta comisión es responsable de analizar y elaborar el presupuesto del Concejo, así como de supervisar la correcta ejecución de los recursos financieros. Su trabajo es esencial para asegurar la transparencia y eficiencia en el manejo de fondos públicos.</p>
            </div>

            <div className="comision">
                <h4>Comisión de Obras y Servicios Públicos</h4>
                <p>Integrantes: Analia Marisel Farias, Angel René Carabajal, Elbio Marcelo Spahn, Néstor Javier Lorenzin, y Carlos Roberto Fedorchuk.</p>
                <p>Encargada de revisar y aprobar proyectos relacionados con la infraestructura y servicios públicos de la comunidad, esta comisión vela por el desarrollo y mantenimiento adecuado de obras públicas y servicios esenciales.</p>
            </div>

            <div className="comision">
                <h4>Comisión de Inventario</h4>
                <p>Integrantes: Luciana Evelin Guilaña, Analia Marisel Farias, Angel René Carabajal, Silvia Mabel Oger y Carlos Roberto Fedorchuk.</p>
                <p>Su función principal es llevar un control detallado y actualizado del inventario de bienes y recursos del Concejo, asegurando la correcta gestión y administración de los mismos.</p>
            </div>

            <div className="comision">
                <h4>Comisión Investigadora</h4>
                <p>Integrantes: Luciana Evelin Guilaña, Elbio Marcelo Spahn, Paola Edit Gauna, y Silvia Mabel Oger.</p>
                <p>Esta comisión tiene la responsabilidad de investigar cualquier irregularidad o denuncia que surja en el ámbito del Concejo. Su labor es crucial para mantener la integridad y transparencia de la institución.</p>
            </div>

            <div className="comision">
                <h4>Comisión de Desarrollo Local, Promoción y Asistencia a la Producción</h4>
                <p>Integrantes: Analia Marisel Farias, Angel René Carabajal, Elbio Marcelo Spahn, Silvia Mabel Oger, y Néstor Javier Lorenzin.</p>
                <p>Orientada a fomentar el desarrollo económico local, esta comisión trabaja en la promoción y asistencia a la producción, apoyando iniciativas que impulsen el crecimiento y bienestar de la comunidad.</p>
            </div>

            <div className="comision">
                <h4>Comisión Regularizadora de Tierras Fiscales, Ordenamiento Urbano y Medio Ambiente</h4>
                <p>Integrantes: Luciana Evelin Guilaña, Angel René Carabajal, Analía Marisel Farias, Néstor Javier Lorenzin y Paola Edit Gauna.</p>
                <p>Su objetivo es regularizar la tenencia de tierras fiscales y promover un ordenamiento urbano sostenible, además de cuidar y preservar el medio ambiente.</p>
            </div>

            <div className="comision">
                <h4>Comisión Especial de Parque Industrial</h4>
                <p>Integrantes: Se prorroga para el inicio del período de sesiones 2024.</p>
                <p>Esta comisión será constituida en el próximo período de sesiones y se centrará en la planificación y desarrollo del parque industrial, buscando impulsar el sector industrial de la región.</p>
            </div>
        </div>
    );
};
