import { Link } from "react-router-dom";

const Icon = ({link, icon, text}) => {
    return (
        <div className="icon">
            <div>
                {link && <Link to={link}>
                <span className="material-symbols-outlined">{icon}</span>
                <dev>{text}</dev>
                </Link> }
            </div>
            <div>
                {!link && <div className="standart-icon">
                <span className="material-symbols-outlined">{icon}</span>
                <dev>{text}</dev>
                </div> }
            </div>
        </div>
    );
}

export default Icon;