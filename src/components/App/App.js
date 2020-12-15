import './App.css';
import NavBar from "../NavBar/NavBar";
import MainPage from "../Main/main-page/main-page";
import PetitionPage from "../Main/petition-page/petition-page";

function App() {
  return (
    <div className="app">
      <NavBar />
      <PetitionPage />
    </div>
  );
}

export default App;
