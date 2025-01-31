import Menu from '../menu/menu';
import './main.scss';

const Main = () => {
	return (
		<section className="main">
			<Menu/>
			<div className="container">
				<div className="content">
					<h1 className="title icon icon_main">Everything You Love About Coffee</h1>
					<div className="more">
						<h2 className="more__subtitle">We makes every day full of energy and taste</h2>
						<h2 className="more__subtitle">Want to try our beans?</h2>
						<a className='more__link' href="#about">More</a>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Main;

