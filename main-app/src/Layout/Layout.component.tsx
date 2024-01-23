import { Outlet } from "react-router-dom";
import NavBar from "../components/navbar/NavBar.component";


export interface Item {
    name: string;
    url?: string;
    children?: Item[];
}

function Layout() {
    return (
        <div className='nav-wrapper' style={{ width: '100%' }}>
            <NavBar />
            <Outlet />
        </div>
    );
}

export default Layout;
