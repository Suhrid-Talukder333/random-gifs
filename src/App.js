
import Random from './components/Random';

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
      <div className="row p-3">
        <Random />
      </div>
    </>
  );
};

export default App;
