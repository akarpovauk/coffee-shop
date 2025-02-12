import { Component } from 'react';

// import logo from './logo.svg';
import Header from '../header/header';
import Main from '../main/main';
import About from '../about/about';
import Cards from '../cards/cards';
import Footer from '../footer/footer';

// import assets from '../../assets/assets';
import './app.scss';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pageNum: 1,
			term: '',
			filter: ''
		}
	}

	getBtnNum = (e) => {
		this.setState ({
			pageNum: +e.target.getAttribute('data-btn'),
			term: '',
			filter: ''
		})
	}

	searchCard = (items, term) => {
		if (term.length === 0) {
			return items;
		}

		return items.filter(item => {
			return item.name.indexOf(term) > -1
		})
	}

	onUpdateSearch = (term) => {
		this.setState ({term});
	}

	filterCards = (items, filter) => {
		if (filter.length === 0) {
			return items;
		}
		return items.filter(item => item.country === filter)
	}

	onFilterSelect = (filter) => {
		this.setState({filter});
		if (filter === this.state.filter) {
			this.setState({
				filter: ''
			});
		}
	}

	render () {
		const page1 = {
			h1: "Everything You Love About Coffee",
			aboutTitle: "About Us"
		}
		const page2 = 
			{h1: "Our Coffee",
			aboutTitle: "About our beans"
		}
		const page3 = 
			{h1: "For your pleasure",
			aboutTitle: "About our goods"
		}
	
		const cards1 = [
			{   
				id: 1,
				img: 'solimo_coffee.jpeg',
				alt: "2 packs of Siolimo coffee",
				name: "Solimo Coffee Beans 2 kg",
				country: "Brazil",
				price: 10.73
			},
			{
				id: 2,
				img: 'presto.jpeg',
				alt: "pack of Presto coffee",
				name: "Presto Coffee Beans 1 kg",
				country: "Columbia",
				price: 15.99
			},
			{
				id: 3,
				img: 'aromistico_coffee.jpeg',
				alt: "multiple packs of AROMISTICO coffee",
				name: "AROMISTICO Coffee 1 kg",
				country: "Kenya",
				price: 6.99
			}
		]
		const cards2 = [
			{
				id: 1,
				img: 'solimo_coffee.jpeg',
				alt: "2 packs of Siolimo coffee",
				name: "Solimo Coffee Beans 2 kg",
				country: "Brazil",
				price: 10.73
			},
			{
				id: 3,
				img: 'aromistico_coffee.jpeg',
				alt: "multiple packs of AROMISTICO coffeee",
				name: "AROMISTICO Coffee 1 kg",
				country: "Kenya",
				price: 6.99
			},
			{
				id: 2,
				img: 'presto.jpeg',
				alt: "pack of Presto coffee",
				name: "Presto Coffee Beans 1 kg",
				country: "Columbia",
				price: 15.99
			},
			{	
				id: 4,
				img: 'aromistico_coffee.jpeg',
				alt: "multiple packs of AROMISTICO coffeee",
				name: "AROMISTICO Coffee 1 kg",
				country: "Brazil",
				price: 9.99
			},
			{
				id: 5,
				img: 'aromistico_coffee.jpeg',
				alt: "multiple packs of AROMISTICO coffeee",
				name: "AROMISTICO Coffee 2 kg",
				country: "Kenya",
				price: 10.99
			},
			{
				id: 6,
				img: 'aromistico_coffee.jpeg',
				alt: "multiple packs of AROMISTICO coffeee",
				name: "AROMISTICO Coffee 2 kg",
				country: "Brazil",
				price: 11.99
			}
		]
		const cards3 = [
			{
				id: 1,
				img: 'solimo_coffee.jpeg',
				alt: "2 packs of Siolimo coffee",
				name: "Solimo Coffee Beans 2 kg",
				country: "Brazil",
				price: 10.73
			},
			{
				id: 3,
				img: 'aromistico_coffee.jpeg',
				alt: "multiple packs of AROMISTICO coffeee",
				name: "AROMISTICO Coffee 1 kg",
				country: "Kenya",
				price: 6.99
			},
			{
				id: 2,
				img: 'presto.jpeg',
				alt: "pack of Presto coffee",
				name: "Presto Coffee Beans 1 kg",
				country: "Columbia",
				price: 15.99
			},
			{
				id: 4,
				img: 'aromistico_coffee.jpeg',
				alt: "multiple packs of AROMISTICO coffeee",
				name: "AROMISTICO Coffee 1 kg",
				country: "Brazil",
				price: 9.99
			},
			{
				id: 5,
				img: 'aromistico_coffee.jpeg',
				alt: "multiple packs of AROMISTICO coffeee",
				name: "AROMISTICO Coffee 2 kg",
				country: "Kenya",
				price: 10.99
			},
			{
				id: 6,
				img: 'aromistico_coffee.jpeg',
				alt: "multiple packs of AROMISTICO coffeee",
				name: "AROMISTICO Coffee 2 kg",
				country: "Brazil",
				price: 11.99
			}
		]

		let allPages = {
			1: page1,
			2: page2,
			3: page3
		};
	
		let cardsOnPages = {
			1: cards1,
			2: cards2,
			3: cards3
		}
		
		const {term, pageNum, filter} = this.state;
		let page = allPages[pageNum];
		let cards = cardsOnPages[pageNum];
		const visibleCards = this.filterCards(this.searchCard(cards, term), filter);

		return (
			<div className="app">
				<Header onMenuClick = {this.getBtnNum}/>
				<Main pageContent = {page}
					pageNum = {pageNum}/>
	
				<About pageContent = {page}
					pageNum = {pageNum}/>
	
				<Cards cardContent = {visibleCards}
					pageNum = {pageNum}
					onUpdateSearch= {this.onUpdateSearch}
					filter = {filter}
					onFilterSelect={this.onFilterSelect}/>
				<Footer onMenuClick = {this.getBtnNum}/>
			</div>
		);
	}
}

export default App;