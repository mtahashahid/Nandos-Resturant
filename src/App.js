import './App.css';
import Navbar from './components/navbar'
import Banner from './components/Banner'
import Appeteasers from '../src/components/Dishes/Categories/Appeteasers'
function App() {
  return (
    <div >
      <Navbar/>
      <Banner/>
      <Appeteasers/>
    </div>
  );
}

export default App;
