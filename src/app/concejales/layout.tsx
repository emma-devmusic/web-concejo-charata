



export const metadata = {
    title: 'Concejales Del Municipio de Charata',
    description: 'Página de los concejales del municipio de Charata. Detalles, Información, Salarios y más.',
    keywords: 'concejo, concejales, charata, municipio, informacion'
};

export default function ConcelajesLayout({
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