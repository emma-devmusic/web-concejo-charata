'use client'
import { ContentComisiones } from "../components/content/ContentComisiones";
import { SidebarBlog } from "../components/sidebar/SidebarBlog";
import { Layout } from "../views/Layout";

export default function ComisionesPage() {
    return (
        <div>
            <Layout title="Comisiones del Concejo">
                <div className="row">
                    <ContentComisiones />
                    <SidebarBlog />
                </div>
            </Layout>
        </div>
    );
}