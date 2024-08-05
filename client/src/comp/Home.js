import useFetch from "./useFetch";
import NoteList from "./NoteList";

const Home = () => {

    const {data: notes, isLoading, error} = useFetch("http://localhost:4000/notes");

    return (
        <div className="home">
            <div className="notes">
                {error && <>{error.message}</>}
                {isLoading && <>Loading...</>}
                {notes && <NoteList notes={notes} title="Notes" />}
            </div>
        </div>
    );
}

export default Home;