import { useState, useEffect } from "react";
import axios from "axios";

const useGif = (tag) => {
  const [gif, setGif] = useState("");

  const fetchData = async (tag) => {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${process.env.REACT_APP_API_KEY}&tag=${tag}&rating=r`;
    const { data } = await axios.get(url);
    const src = data.data.images.downsized_medium.url;
    setGif(src);
  };

  useEffect(() => {
    fetchData(tag);
  }, [tag]);

  return { gif, fetchData };
};

export default useGif;
