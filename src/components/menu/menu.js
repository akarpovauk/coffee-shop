import './menu.scss';

const Menu = () => {
	return (
		<nav className="menu">
			<ul className="menu__list">
				<li className="menu-item">
					<button className="menu-link">Coffee house</button>
				</li>
				<li className="menu-item">
					<button className="menu-link">Our coffee</button>
				</li>
				<li className="menu-item">
					<button className="menu-link">For your pleasure</button>
				</li>
			</ul>
		</nav>
	);
}

export default Menu;