import { Link } from "react-router-dom";

const Icon = ({link, icon, text}) => {
    return (
        <div className="icon">
            <>
                {link &&    <Link to={link}>
                                <span className="material-symbols-outlined">{icon}</span>
                                <>{text}</>
                            </Link> }
            </>
            <>
                {!link &&   <div className="standart-icon">
                                <span className="material-symbols-outlined">{icon}</span>
                                <>{text}</>
                            </div> }
            </>
        </div>
    );
}

export default Icon;