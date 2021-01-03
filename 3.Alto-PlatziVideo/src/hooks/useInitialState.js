import { useState, useEffect } from "react";

const useInitiaState = (API) => {

    const [videos, setVideos] = useState({ mylist: [], trends: [], originals: [] });

    useEffect(() => {
      fetch(API)
        .then(response => response.json())
        .then(data => setVideos(data))
        .catch(error => {
          console.log(`Error is ${error}`)
        });
    }, []);

    return videos;
};

export default useInitiaState;