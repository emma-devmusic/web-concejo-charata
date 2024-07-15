
export const metadata = {
    title: 'Comsisiones del Concejo',
    description: 'Una breve descripcion sobre las comisiones del Concejo del Municipio de Charata',
    keywords: 'concejo, descripcion, comisiones, trabajo, charata, municipio, sesiones'
};
export default function ComisionesLayout({
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