import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NoteAdd = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const note = {title, text: body};
        setIsLoading(true);
        
        fetch("http://localhost:4000/notes", {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(note)
        })
            .then(() => {
                setIsLoading(false);
                console.log("note added");
                navigate("/");
            })
    }

    return (
        <div className="note-add">
            <h2>Add a New Note</h2>
            <form onSubmit={handleSubmit}>
                <label>Note Title:</label>
                <input 
                    type="text"
                    required
                    placeholder="Add title..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Note Body:</label>
                <textarea
                    required
                    placeholder="Add some notes..."
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                {!isLoading && <button>Add Note</button>}
                {isLoading && <button disabled>Adding Note...</button>}
            </form>
        </div>
    );
}

export default NoteAdd;