import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Public_Routes from './routes/routes';
import Navbar from './pages/navbar';
import Footer from './pages/footer';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Public_Routes />
      <Footer />
    </Router>
    </>
  );
}

export default App;
