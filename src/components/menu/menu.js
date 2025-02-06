import './menu.scss';
import '../../assets/scss/fonts.scss';

const Menu = () => {
	return (
		<nav className="menu">
			<ul className="menu-list">
				<li className="menu-item">
					<button className="menu-font menu-link">Coffee house</button>
				</li>
				<li className="menu-item">
					<button className="menu-font menu-link">Our coffee</button>
				</li>
				<li className="menu-item">
					<button className="menu-font menu-link">For your pleasure</button>
				</li>
			</ul>
		</nav>
	);
}

export default Menu;