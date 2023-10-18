import "./App.css";
import AppFooter from "./Components/AppFooter/AppFooter";
import AppHeader from "./Components/AppHeader/AppHeader";
import Home from "./Pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
//Your project enable with bootstrap

function App() {
  return (
    <div className="App">
      <AppHeader />

      <Home />

      <AppFooter />
    </div>
  );
}

export default App;
