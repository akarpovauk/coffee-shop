
import './menu.scss';
import '../../assets/scss/fonts.scss';

const Menu =({onMenuClick}) => {

	return (
		<nav className="menu">
			<ul className="menu-list">
				<li className="menu-item">
					<button 
						// onClick={this.getBtnNum}
						onClick={onMenuClick}
						data-btn = "1"
						className="menu-font menu-link">Coffee house</button>
				</li>
				<li className="menu-item">
					<button 
						// onClick={this.getBtnNum}
						onClick={onMenuClick}
						data-btn = "2"
						className="menu-font menu-link">Our coffee</button>
				</li>
				<li className="menu-item">
					<button 
						// onClick={this.getBtnNum}
						onClick={onMenuClick}
						data-btn = "3"
					className="menu-font menu-link">For your pleasure</button>
				</li>
			</ul>
		</nav>
	);

}

export default Menu;