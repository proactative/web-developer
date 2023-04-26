import './App.css';
import Header from '../Header/Header';
import Intro from '../Intro/Intro';
import Portfolio from '../Portfolio/Portfolio';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <Intro />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
