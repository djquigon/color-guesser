import Header from './components/Header.jsx';
import ColorGuesser from './components/ColorGuesser.jsx';
import Footer from './components/Footer.jsx';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <main className='flex flex-col content-center items-center justify-evenly w-screen h-screen bg-gray-900 text-gray-50 shadow-[inset_0_0_4px_black]'>
        <ColorGuesser/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
