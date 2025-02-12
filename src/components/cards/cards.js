// import assets from '../../assets/assets';
import '../search-panel/search-panel';
import SearchPanel from '../search-panel/search-panel';
import FilterPanel from '../filter-panel/filter-panel';
import CardItem from '../card-item/card-item';

import './cards.scss';

const Cards = ({cardContent, pageNum, onUpdateSearch, filter, onFilterSelect}) => {

	let classNames = "cards";
	classNames += ` ${classNames}_${pageNum}`;

	const cards = cardContent.map((item) => {
		const {id, ...itemProps} = item
		return (
			<CardItem key ={id} {...itemProps}/>
		)
	})


	return(
		<section className={classNames}>
			<div className="container">
				<div className="panel">
					<SearchPanel onUpdateSearch = {onUpdateSearch}/>
					<FilterPanel filter = {filter}
						onFilterSelect= {onFilterSelect}/>
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