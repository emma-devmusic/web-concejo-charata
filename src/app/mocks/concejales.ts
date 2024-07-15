import { Concejal } from "../types";


export const concejales: Concejal[] = [
    {
        id: 9,
        name: "Alejandro Juan José Barcala",
        position: "Presidente del Concejo",
        salary: 1000000,
        slug: "alejandro-juan-jose-barcala",
        block: "Juntos Por El Cambio",
        instagram: 'https://www.instagram.com/alejandrobarcala.ucr',
        description: 'Alejandro Juan José Barcala es el Presidente del Concejo de Charata, representando al bloque Juntos Por El Cambio. Con una destacada trayectoria, Alejandro lidera el concejo con dedicación y compromiso hacia el desarrollo y bienestar de la comunidad. Puedes seguir su labor y actividades en su Instagram.',
        email: 'alejandrobarcala22@gmail.com'
    },
    {
        id: 4,
        name: "Ángel René Carabajal",
        position: "Concejal",
        salary: 1000000,
        slug: "angel-rene-carabajal",
        block: "Juntos Por El Cambio",
        instagram: 'https://www.instagram.com/carabajal_rene_',
        description: 'Ángel René Carabajal es Concejal del bloque Juntos Por El Cambio. Con un fuerte enfoque en mejorar la calidad de vida de los ciudadanos, Ángel trabaja incansablemente en proyectos que buscan el progreso y desarrollo de Charata. Síguelo en Instagram para conocer más sobre su trabajo.',
        email: 'angelrenecarabajal@gmail.com'
    },
    {
        id: 5,
        name: "Luciana Evelin Guilaña",
        position: "Concejal",
        salary: 1000000,
        slug: "luciana-evelin-guilania",
        block: "Juntos Por El Cambio",
        instagram: 'https://www.instagram.com/luciana.guilana2023',
        description: 'Luciana Evelin Guilaña, Concejal del bloque Juntos Por El Cambio, se dedica a defender los derechos y servicios para los vecinos de Charata. Su compromiso y esfuerzo se reflejan en cada una de sus iniciativas. Conéctate con Luciana a través de su Instagram.',
        email: 'lucianaguilana@gmail.com'
    },
    {
        id: 7,
        name: "Marcelo Elbio Spahn",
        position: "Concejal",
        salary: 1000000,
        slug: "marcelo-elbio-spahn",
        block: "Juntos Por El Cambio",
        instagram: 'https://www.instagram.com/marcelospahn.concejal',
        description: 'Marcelo Elbio Spahn es Concejal por Juntos Por El Cambio. Marcelo se destaca por su trabajo en proyectos que buscan el desarrollo integral de la ciudad y el bienestar de sus habitantes. Sigue sus actividades y logros en su Instagram.',
        email: 'marceloespahn@hotmail.com'
    },
    {
        id: 8,
        name: "Analía Marisel Farias",
        position: "Concejal",
        salary: 1000000,
        slug: "analia-marisel-farias",
        block: "Juntos Por El Cambio",
        instagram: 'https://www.instagram.com/analiafarias23',
        description: 'Analía Marisel Farias, Concejal de Juntos Por El Cambio, está dedicada a las mejoras comunitarias y al servicio de la ciudadanía. Con una visión clara y un fuerte sentido de responsabilidad, Analía trabaja incansablemente por el bien de Charata. Puedes seguir su labor en Instagram.',
        email: 'analiamariself@gmail.com'
    },
    {
        id: 1,
        name: "Silvia Mabel Oger",
        position: "Concejal",
        salary: 1000000,
        slug: "silvia-mabel-oger",
        block: "Frente Chaqueño",
        instagram: 'https://www.instagram.com/silviaoger',
        description: 'Silvia Mabel Oger es Concejal del Frente Chaqueño. Con un firme compromiso hacia la justicia social y el desarrollo local, Silvia se dedica a representar a sus conciudadanos de manera eficaz y transparente. Conéctate con ella a través de su Instagram.',
        email: 'silviamabeloger@yahoo.com.ar'
    },
    {
        id: 2,
        name: "Paola Edit Gauna",
        position: "Concejal",
        salary: 1000000,
        slug: "paola-edit-gauna",
        block: "Frente Chaqueño",
        instagram: 'https://www.instagram.com/pao.gauna.concejal',
        description: 'Paola Edit Gauna, Concejal del Frente Chaqueño, se enfoca en mejorar los servicios públicos y representar de manera efectiva a la comunidad de Charata. Su dedicación y esfuerzo son evidentes en cada una de sus iniciativas. Síguela en Instagram.',
        email: 'paolae_g@hotmail.com'
    },
    {
        id: 3,
        name: "Néstor Javier Lorenzin",
        position: "Concejal",
        salary: 1000000,
        slug: "nestor-javier-lorenzin",
        block: "Frente Chaqueño",
        instagram: 'https://www.instagram.com/nestorlorenzin',
        description: 'Néstor Javier Lorenzin es Concejal del Frente Chaqueño. Con un enfoque en el bienestar y progreso de los habitantes de Charata, Néstor trabaja diligentemente para crear un entorno mejor y más justo. Puedes seguir su trabajo en Instagram.',
        email: 'nestorlorenzin@hotmail.com'
    },
    {
        id: 6,
        name: "Carlos Roberto Fedorchuk",
        position: "Concejal",
        salary: 1000000,
        slug: "carlos-roberto-fedorchuk",
        block: "Frente Chaqueño",
        instagram: 'https://www.instagram.com/carlosfedorchuk',
        description: 'Carlos Roberto Fedorchuk, Concejal del Frente Chaqueño, se dedica a la mejora de los servicios y derechos de la comunidad. Su trabajo incansable y su compromiso con los ciudadanos son notables. Síguelo en Instagram para conocer más sobre su labor.',
        email: 'carlos_fedorchuk@hotmail.com'
    },
];


export const getConcejalBySlug = (slug: string) => concejales.filter(concejal => concejal.slug === slug)[0]