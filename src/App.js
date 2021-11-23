import NavBar from "./components/NavBar";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import ListItemContainer from "./components/ListItemContainer";

library.add(fas);

function App() {
  return (
    <div className="App">
      <NavBar />
      <ListItemContainer greeting="Hola user" />
    </div>
  );
}

export default App;
