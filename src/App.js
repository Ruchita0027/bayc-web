import './App.css';
import Home from './components/home/home';
import ButtonAppBar from './components/navbar/navbar';
import Footer from './components/footer/footer';

function App() {
  return (
    <div>
      <header className="App-header">
        <ButtonAppBar />
        <Home />
        <Footer />
      </header>
    </div>
  );
}

export default App;
