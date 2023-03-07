import './App.css';
import About from './components/About';
import Book from './components/Book';
import Footer from './components/Footer';
import Header from './components/Header';
import Services from './components/Services';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Header />
      <About />
      <Services />
      <Book />
      <Footer />
    </div>
  );
}

export default App;
