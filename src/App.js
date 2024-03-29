import './App.css';
import Footer from './components/homepage/Footer';
import Homepage from './components/homepage/Homepage';
import InfoCards from './components/homepage/InfoCards';
import Speedcubing from './components/homepage/Speedcubing';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <>
      <Navbar/>
      <Homepage/>
      <InfoCards/>
      <Speedcubing/>
      <Footer/>
    </>
  );
}

export default App;
