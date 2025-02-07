import assets from '../../assets/assets';

import './card-item.scss';

const CardItem = ({img, alt, name, country, price}) => {
	return(
		<article className="card">
			<div className="card__img">
				<img 
					// src={assets['aromistico_coffee.jpeg']}
					src={assets[img]}
					alt={alt}	
					className="card-img" />
			</div>
			<div className="card__info">
				<p className="card-name">{name}</p>
				<p className="card-country">{country}</p>
				<p className="price"><span>{price}$</span></p>
			</div>
		</article>
	);
}

export default CardItem;