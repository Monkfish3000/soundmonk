import './App.css';
import { Navbar, Hero, Footer } from './components';

function App() {
  return (
    <>
      <div className="max-w-7xl m-auto">
        <Navbar />
        <Hero />
        <Footer />
      </div>
    </>
  );
}

export default App;
