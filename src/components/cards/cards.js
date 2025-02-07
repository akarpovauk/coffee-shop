import assets from '../../assets/assets';
import '../search-panel/search-panel';
import SearchPanel from '../search-panel/search-panel';
import FilterPanel from '../filter-panel/filter-panel';
import CardItem from '../card-item/card-item';

import './cards.scss';

const Cards = ({cardContent}) => {

	const cards = cardContent.map(item => {
		return (
			<CardItem {...item}/>
		)
	})

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
					{cards}
				</div>

			</div>
		</section>
	);
}

export default Cards;