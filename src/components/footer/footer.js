import Menu from '../menu/menu';
import assets from '../../assets/assets';
import './footer.scss';

const Footer = ({onMenuClick}) => {
	return (
		<section className="footer">
			<Menu onMenuClick={onMenuClick}/>
			<div className="divider">
				<img src={assets['beans_b.svg']}
					alt="coffe beans icon" 
					className="divider__img" />
			</div>
		</section>
	)
}

export default Footer;