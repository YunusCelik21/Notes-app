import { Link } from "react-router-dom";

const Icon = ({icon, text}) => {
    return (
        <div className="icon">
            <span className="material-symbols-outlined">{icon}</span>
            <div className="icon-text">{text}</div>
        </div>
    );
}

export default Icon;