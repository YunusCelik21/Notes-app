import { useEffect, useState } from "react";
import useFetch from "./useFetch";
import { useNavigate, useParams } from "react-router-dom";

const NoteEdit = () => {
    const API_URL = process.env.API_URL || "http://localhost:4000";
    const {id} = useParams();
    const {data: note, error} = useFetch(API_URL + "/notes/" + id);

    const [title, setTitle] = useState("Loading...");
    const [body, setBody] = useState("Loading...");
    const [isLoading, setIsLoading] = useState(false);
    
    useEffect(() => {
        if (note) {
           setTitle(note[0].title);
           setBody(note[0].text);
        }
        if (error) {
            console.log(error.message);
            setTitle("");
            setBody("");
        }
    }, [note, error])

    const navigate = useNavigate();

    const handleSubmit = () => {
        const note = {title, text: body};
        setIsLoading(true);

        fetch(API_URL + "/notes/" + id, {
            method: "PUT",
            body: JSON.stringify(note),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            }
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Could not update the data");
                }
                setIsLoading(false);
                console.log("Note updated");
                navigate(-1);
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div className="note-edit">
            <h2>Edit the Note</h2>
            <form onSubmit={handleSubmit}>
                <label>Note Title:</label>
                <input 
                    type="text"
                    required
                    placeholder="Edit title..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Note Body:</label>
                <textarea
                    required
                    placeholder="Edit the body..."
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                {!isLoading && <button>Edit</button>}
                {isLoading && <button disabled>Editing...</button>}
            </form>
        </div>
    );
}

export default NoteEdit;