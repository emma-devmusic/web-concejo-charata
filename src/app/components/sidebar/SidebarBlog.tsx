

import { RecentPosts } from "./RecentsPost";

export const SidebarBlog = () => {

    return (
        <div className="col-lg-4">
            <div className="mb-5 wow slideInUp" data-wow-delay="0.1s" style={{
                position: 'sticky',
                top: '100px'
            }}>
                <RecentPosts />
            </div>
        </div>
    )
};
