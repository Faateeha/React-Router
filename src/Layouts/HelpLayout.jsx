import { NavLink, Outlet } from "react-router-dom";


export default function HelpLayout(){
    return (
        <div className="help-layout">
            <h2>Website Help</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quia quae distinctio cumque expedita? Magnam quis alias odio possimus doloribus, perspiciatis ad distinctio perferendis, illum officia libero porro molestias dolor.</p>

            <nav>
                <NavLink to="faq">View the FAQ</NavLink>
                <NavLink to="contact">Contact Us</NavLink>
            </nav>

            <Outlet />
        </div>

        
    )
}