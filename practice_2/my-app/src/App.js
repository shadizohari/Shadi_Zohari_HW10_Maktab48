import Companion from './sections/Companion';
import Preferences from './sections/Preferences';
import Navbar from './sections/Navbar'
import  './font-fa/font.css'


function App() {
  return (
    <div>
      <Navbar/>
      <Preferences/>
      <Companion/>
    </div>
  );
}

export default App;
