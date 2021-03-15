import useGif from "./useGif";
import { useState } from "react";

const Tagged = () => {
  const [tag, setTag] = useState("Dog");
  const { gif, fetchData } = useGif(tag);
  return (
    <div className="container col-md-6 p-5">
      <h1 className="lead text-warning">{tag} GIFF</h1>
      <img className="img-fluid" src={gif} alt="Tagged gif"></img>
      <div className="container p-2">
        <input type="text" onChange={(e) => setTag(e.target.value)}></input>
        <button className="btn btn-primary m-2" onClick={() => fetchData(tag)}>
          Generate
        </button>
      </div>
    </div>
  );
};

export default Tagged;
