import Menu from '../menu/menu';
import './header.scss';

const Header = ({onMenuClick}) => {
	return (
		<div className="header">
			<Menu onMenuClick = {onMenuClick}/>
		</div>
	);
}

export default Header;