import Random from "./components/Random";
import Tagged from "./components/Tagged";
import vid from './video/Purple Flow Of Colors.mp4';
const App = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Suhrid
          </a>
        </div>
      </nav>
      <video autoPlay muted loop id="myVideo">
        <source src={vid} type="video/mp4" />
      </video>
      <div>
        <div className="row p-3 home">
          <Random />
          <Tagged />
        </div>
      </div>
    </>
  );
};

export default App;
