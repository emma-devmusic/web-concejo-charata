'use client'
import { ContentSesionesDelConcejo } from "../components/content/ContentSesionesDelConcejo";
import { SidebarNavSesiones } from "../components";
import { Layout } from "../views/Layout"

export default function SesionesDelConcejoPage() {
    return (
        <div>
            <Layout title="Sesiones del Concejo">
                <div className="row">
                    <ContentSesionesDelConcejo />
                    <SidebarNavSesiones />
                </div>
            </Layout>
        </div>
    );
}