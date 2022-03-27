import "./assets/css/App.css";

import Routes from "./Routes/Routes";
import Productstate from "./context/Products/Productstate";

function App() {
  return (
    <div className="App">
      <Productstate>
        <Routes />
      </Productstate>
    </div>
  );
}

export default App;
