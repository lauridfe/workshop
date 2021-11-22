import NavBar from "./components/NavBar";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

function App() {
  return (
    <div className="App">
      <NavBar />
    </div>
  );
}

export default App;
