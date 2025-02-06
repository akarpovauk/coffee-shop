import assets from '../../assets/assets';
import '../search-panel/search-panel';
import SearchPanel from '../search-panel/search-panel';
import FilterPanel from '../filter-panel/filter-panel';
import CardItem from '../card-item/card-item';

import './cards.scss';

const Cards = () => {
	return(
		<section className="cards cards_1">
			<div className="container">
				<div className="panel">
					<SearchPanel/>
					<FilterPanel/>
				</div>
				<div className="title-wrapper">
					<h2 className="section-title">Our best</h2>
				</div>
				<div className="cards-wrapper">
					<CardItem/>
					<CardItem/>
					<CardItem/>
				</div>
			</div>
		</section>

		// <section className="cards cards_2">
		// 	<div className="container">
		// 		<div className="panel">
		// 			<SearchPanel/>
		// 			<FilterPanel/>
		// 		</div>
		// 		<div className="title-wrapper">
		// 			<h2 className="section-title">Our best</h2>
		// 		</div>
		// 		<div className="cards-wrapper">
		// 			<CardItem/>
		// 			<CardItem/>
		// 			<CardItem/>
		// 			<CardItem/>
		// 			<CardItem/>
		// 			<CardItem/>
		// 		</div>
		// 	</div>
		// </section>

		// <section className="cards cards_3">
		// 	<div className="container">
		// 		<div className="panel">
		// 			<SearchPanel/>
		// 			<FilterPanel/>
		// 		</div>
		// 		<div className="title-wrapper">
		// 			<h2 className="section-title">Our best</h2>
		// 		</div>
		// 		<div className="cards-wrapper">
		// 			<CardItem/>
		// 			<CardItem/>
		// 			<CardItem/>
		// 			<CardItem/>
		// 			<CardItem/>
		// 			<CardItem/>
		// 		</div>
		// 	</div>
		// </section>
	);
}

export default Cards;