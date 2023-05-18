import { NavLink } from "react-router-dom";
import * as FaIcons from 'react-icons/fa'

const Sidebar = () => {
    return (
        <div className="Sidebar bg-light">
            <ul>
                <li>
                    <NavLink to="/ShowData" exact className="text-dark rounded py-2 w-100 d-inline-block"><FaIcons.FaRegPlusSquare className="me-2" />Ingresar datos</NavLink>
                </li>

                <li>
                    <NavLink to="/ShowTrack" exact className="text-dark rounded py-2 w-100 d-inline-block"><FaIcons.FaRegFolder className="me-2" />Ingresar Trackings</NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;