import useFetch from "./useFetch";
import NoteList from "./NoteList";

const Home = () => {

    const {data: notes, isLoading, error} = useFetch("http://localhost:8000/notes");

    return (
        <div className="home">
            <div className="notes">
                {error && <div>{error}</div>}
                {isLoading && <div>Loading...</div>}
                {notes && <NoteList notes={notes} title="Notes" />}
                {/*<NoteList notes={notes.filter((note) => note.date.substring(3,5) === "07")} title="July Notes"/>
                <NoteList notes={notes.filter((note) => note.date.substring(3,5) === "01")} title="January Notes"/>*/}
            </div>
        </div>
    );
}

export default Home;