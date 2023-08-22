import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = url => {
    const [response, setResponse] = useState();

    useEffect(() => {
      axios.get(url)
        .then(response => setResponse(response.data.rows))
        .catch(err => console.log(err));
    }, [url])

    return response;
    
};

export default useFetch;