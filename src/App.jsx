import "./App.css";
import Counter from "./components/Counter";
import GameNamePicker from "./components/GameNamePicker";
import ImageGallery from "./components/ImageGallery";
import Media from "./components/Media";
import Progres from "./components/Progres";

function App() {
  return (
    <div >
    <h2 className="hFlex"> BY<a href="https://github.com/Jony2110">JONNY</a></h2>
      <div className="container">
    
    <Counter />
    <Media />
    <Progres />
    <GameNamePicker />
    <ImageGallery />
  </div>
    </div>
  );
}

export default App;
