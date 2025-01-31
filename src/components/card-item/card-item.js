import assets from '../../assets/assets';

import './card-item.scss';

const CardItem = () => {
	return(
		<article className="card">
			<img 
				src={assets['aromistico_coffee.jpeg']}
				alt="coffee product" 	
				className="card-img" />
			<p className="card-country">Brazil</p>
			<p className="card-price">6.99$</p>
		</article>
	);
}

export default CardItem;