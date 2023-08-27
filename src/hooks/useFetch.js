import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = url => {

    const [response, setResponse] = useState();

    useEffect(() => {
      if (true) {
        url
      } else {
        
      }
      axios.get(url)
        .then(response => setResponse(response.data))
        .catch(err => console.log(err));
    }, [url])

    return response;
    
};

export default useFetch;