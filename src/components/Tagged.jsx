
import useGif from "./useGif";

const Random = () => {
  const { gif, fetchData } = useGif();

  return (
    <div className="container col-md-6">
      <h1 className="lead text-secondary">Random GIFF</h1>
      <img className="img-fluid" src={gif} alt="random gif"></img>
      <div className="container p-2">
        <button className="btn btn-primary" onClick={fetchData}>
          Generate
        </button>
      </div>
    </div>
  );
};

export default Random;
