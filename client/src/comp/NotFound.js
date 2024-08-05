import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();

    const handleButton = () => {
        navigate("/");
    }

    return (
        <div className="not-found">
            <h2>Sorry!</h2>
            <h3>The page you are looking for cannot be found</h3>
            <h4>Possible Reasons</h4>
            <ul>
                <li>The address may have been typed incorrectly;</li>
                <li>It may be a broken or outdated link.</li>
            </ul>
            <button onClick={handleButton}>Go Home</button>
        </div>
    );
}

export default NotFound;