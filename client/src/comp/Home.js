import useFetch from "./useFetch";
import NoteList from "./NoteList";

const Home = () => {
    const API_URL = process.env.API_URL || "http://localhost:4000";

    const {data: notes, isLoading, error} = useFetch(API_URL + "/notes");

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