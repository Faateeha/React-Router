import { Outlet } from "react-router-dom";

export default function CareerLayout() {
    return(
        <div className="careers-layout">
            <h2>Careers</h2>
            <p>Join our team of world-class professionals</p>
            
            <Outlet />
        </div>
    )
}