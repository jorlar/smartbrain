import Navigation from './components/Navigation/navigation';
import Logo from './components/Logo/logo';
import './App.css';
import ImageLinkForm from './components/ImageLinkForm/imageLinkForm';
import Rank from './components/Rank/Rank'

function App() {
  return (
    <div className="App">
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm/>
    </div>
  );
}

export default App;
