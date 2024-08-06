import { Link } from "react-router-dom";

const Icon = ({icon, text}) => {
    return (
        <div className="icon">
            <span className="material-symbols-outlined">{icon}</span>
            <>{text}</>
        </div>
    );
}

export default Icon;