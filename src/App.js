import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Landing from './Page/Landing';
import Products from './Page/Products';
import About from './Page/About';
import Delivery from './Page/Delivery';

function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Landing />
        <Products />
        <About />
        <Delivery />
        <Footer />
      </header>
    </div>
  );
}

export default App;
