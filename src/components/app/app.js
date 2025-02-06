// import logo from './logo.svg';
import Header from '../header/header';
import Main from '../main/main';
import About from '../about/about';
import Cards from '../cards/cards';
import Footer from '../footer/footer';

import './app.scss';

function App() {
  return (
    <div className="app">
		<Header/>
		<Main/>
		<About/>
		<Cards/>
		<Footer/>
    </div>
  );
}

export default App;