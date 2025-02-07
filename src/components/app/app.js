// import logo from './logo.svg';
import Header from '../header/header';
import Main from '../main/main';
import About from '../about/about';
import Cards from '../cards/cards';
import Footer from '../footer/footer';

// import assets from '../../assets/assets';

import './app.scss';

function App() {
	const mainH1 = [
		{ page: 1, h1: "Everything You Love About Coffee"},
		{ page: 2, h1: "Our Coffee"},
		{ page: 3, h1: "For your pleasure"},
	]

	const aboutTitle = [
		{ page: 1, title: "About Us"},
		{ page: 2, title: "About our beans"},
		{ page: 3, title: "About our goods"}
	]

	const cardContent1 = [
		{
			img: 'solimo_coffee.jpeg',
			alt: "2 packs of Siolimo coffee",
			name: "Solimo Coffee Beans 2 kg",
			price: 10.73
		},
		{
			img: 'presto.jpeg',
			alt: "pack of Presto coffee",
			name: "Presto Coffee Beans 1 kg",
			price: 15.99
		},
		{
			img: 'aromistico_coffee.jpeg',
			alt: "multiple packs of AROMISTICO coffee",
			name: "AROMISTICO Coffee 1 kg",
			price: 6.99
		}
	]

	const cardContent2 = [
		{
			img: 'aromistico_coffee.jpeg',
			alt: "multiple packs of AROMISTICO coffeee",
			name: "AROMISTICO Coffee 1 kg",
			country: "Brazil",
			price: 6.99
		},
		{
			img: 'aromistico_coffee.jpeg',
			alt: "multiple packs of AROMISTICO coffeee",
			name: "AROMISTICO Coffee 1 kg",
			country: "Kenya",
			price: 7.99
		},
		{
			img: 'aromistico_coffee.jpeg',
			alt: "multiple packs of AROMISTICO coffeee",
			name: "AROMISTICO Coffee 1 kg",
			country: "Columbia",
			price: 8.99
		},
		{
			img: 'aromistico_coffee.jpeg',
			alt: "multiple packs of AROMISTICO coffeee",
			name: "AROMISTICO Coffee 1 kg",
			country: "Brazil",
			price: 9.99
		},
		{
			img: 'aromistico_coffee.jpeg',
			alt: "multiple packs of AROMISTICO coffeee",
			name: "AROMISTICO Coffee 1 kg",
			country: "Brazil",
			price: 10.99
		},
		{
			img: 'aromistico_coffee.jpeg',
			alt: "multiple packs of AROMISTICO coffeee",
			name: "AROMISTICO Coffee 1 kg",
			country: "Brazil",
			price: 11.99
		}
	]

	const cardContent3 = [
		{
			img: 'solimo_coffee.jpeg',
			alt: "2 packs of Siolimo coffee",
			name: "Solimo Coffee Beans 2 kg",
			country: "Brazil",
			price: 6.99
		},
		{
			img: 'aromistico_coffee.jpeg',
			alt: "multiple packs of AROMISTICO coffeee",
			name: "AROMISTICO Coffee 1 kg",
			country: "Kenya",
			price: 7.99
		},
		{
			img: 'presto.jpeg',
			alt: "pack of Presto coffee",
			name: "Presto Coffee Beans 1 kg",
			country: "Columbia",
			price: 15.99
		},
		{
			img: 'aromistico_coffee.jpeg',
			alt: "multiple packs of AROMISTICO coffeee",
			name: "AROMISTICO Coffee 1 kg",
			country: "Brazil",
			price: 9.99
		},
		{
			img: 'aromistico_coffee.jpeg',
			alt: "multiple packs of AROMISTICO coffeee",
			name: "AROMISTICO Coffee 1 kg",
			country: "Brazil",
			price: 10.99
		},
		{
			img: 'aromistico_coffee.jpeg',
			alt: "multiple packs of AROMISTICO coffeee",
			name: "AROMISTICO Coffee 1 kg",
			country: "Brazil",
			price: 11.99
		}
	]

  	return (
		<div className="app">
			<Header/>
			<Main mainH1 = {mainH1}/>

			<About title = {aboutTitle}/>

			<Cards cardContent = {cardContent1}/>
			<Footer/>
		</div>
  	);
}

export default App;