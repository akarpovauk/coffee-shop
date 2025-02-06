import assets from '../../assets/assets';

import './card-item.scss';

const CardItem = () => {
	return(
		<article className="card">
			<div className="card__img">
				<img 
					src={assets['aromistico_coffee.jpeg']}
					alt="coffee product" 	
					className="card-img" />
			</div>
			<div className="card__info">
				<p className="card-name">Solimo Coffee Beans 2 kg</p>
				<p className="card-country">Brazil</p>
				<p className="price"><span>6.99$</span></p>
			</div>
		</article>
	);
}

export default CardItem;