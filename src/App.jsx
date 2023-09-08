import './App.css';
import { Navbar, Hero, Footer, CardShowcase } from './components';

function App() {
  return (
    <>
      <div className="max-w-7xl m-auto">
        <Navbar />
        <Hero />
        <CardShowcase />
        <Footer />
      </div>
    </>
  );
}

export default App;
