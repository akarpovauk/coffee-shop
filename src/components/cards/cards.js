import '../search-panel/search-panel';
import SearchPanel from '../search-panel/search-panel';
import FilterPanel from '../filter-panel/filter-panel';
import CardItem from '../card-item/card-item';

import './cards.scss';

const Cards = () => {
	return(
		<section className="cards">
			<div className="container">
				<div className="panel">
					<SearchPanel/>
					<FilterPanel/>
				</div>
				<div className="cards-wrapper">
					<CardItem/>
					<CardItem/>
					<CardItem/>
				</div>
			</div>
		</section>
	);
}

export default Cards;