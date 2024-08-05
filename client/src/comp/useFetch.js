import {useState, useEffect} from 'react'

const useFetch = (link) => {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // abort the fetch when unmounted
        const controller = new AbortController();

        fetch(link, {signal: controller.signal})
            .then(res => {
                if (!res.ok) {
                    throw new Error("could not fetch the data for that resource");
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
                    setError(err);
                    setIsLoading(false);
                }
            });

        return () => {controller.abort()};
    }, [link])

    return {data, isLoading, error};
}

export default useFetch;