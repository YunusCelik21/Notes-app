import {useState, useEffect} from 'react'

const useFetch = (link) => {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    // json fake database
    useEffect(() => {
        // abort the fetch when unmounted
        const abort = new AbortController();

        fetch(link, {signal: abort.signal})
            .then(res => {
                if (!res.ok) {
                    throw Error("could not fetch the data for that resource");
                }
                return res.json();
            })
            .then(data => {
                setData(data);
                setIsLoading(false);
                setError(null);
            })
            .catch(err => {
                // do not update the state if aborted
                if (err.name === "AbortError") {
                    console.log("fetch aborted")
                }
                else {
                    setError(err.message);
                    setIsLoading(false);
                }
            });

        return () => abort.abort();
    }, [])

    return {data, isLoading, error};
}

export default useFetch;