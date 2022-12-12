import Navigation from './components/Navigation/navigation';
import Logo from './components/Logo/logo';
import './App.css';
import ImageLinkForm from './components/ImageLinkForm/imageLinkForm';
import Rank from './components/Rank/Rank';
import ParticlesBg from 'particles-bg';

function App() {
  return (
    <div className="App">
      <ParticlesBg type="random" bg={true} />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm/>
    </div>
  );
}

export default App;
