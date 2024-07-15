
export const metadata = {
    title: 'Transparencia | Concejo del municipio de Charata',
    description: 'Enterate de toda la informacion relevante de conocimiento publico. Conoce el salario y proyectos de los concejales del Concejo De La Municipalidad de Charata',
    keywords: 'salario, sueldo, transparencia, concejo, concejales, charata, municipio'
};
export default function TransparenciaLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            {children}
        </div>
    );
}