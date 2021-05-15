import './App.css';
import Navbar from './components/navbar'
import Banner from './components/Banner'
import Appeteasers from '../src/components/Dishes/Categories/Appeteasers'
import FinoSides from '../src/components/Dishes/Categories/FinoSides'
// import BurgerWraps from '../src/components/Dishes/Categories/BurgerWraps'
function App() {
  return (
    <div >
      <Navbar/>
      <Banner/>
      <Appeteasers/>
      <FinoSides/>
      {/* <BurgerWraps/> */}
    </div>
  );
}

export default App;
