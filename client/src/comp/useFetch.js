import {useState, useEffect} from 'react'

const useFetch = (link) => {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    // json fake database
    useEffect(() => {
        console.log("changed the first note (probably deleted)");
        fetch(link)
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
                console.log(err.message);
                setError(err.message);
                setIsLoading(false);
            });
    }, [])

    return {data, isLoading, error};
}

export default useFetch;