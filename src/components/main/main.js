import assets from '../../assets/assets';

import './main.scss';

const Main = () => {
	return (

		<section className="main main_1" data-tab='1'>
			<div className="container">

				<div className="content">
					<h1 className="title">
						Everything You Love About Coffee
					</h1>
					<div className="divider">
						<img src={assets['beans_w.svg']}
						alt="coffe beans icon" 
						className="divider__img" />
					</div>
					<div className="more">
						<h2 className="subtitle">We makes every day full of energy and taste</h2>
						<h2 className="subtitle">Want to try our beans?</h2>
						<a className='link btn' href="#about_1">More</a>
					</div>
				</div>

			</div>
		</section>

		// <section className="main main_2" data-tab='2'>
		// 	<div className="container">
		// 		<div className="content">
		// 			<h1 className="title">
		// 				Our Coffee
		// 			</h1>
		// 		</div>
		// 	</div>
		// </section>

		// <section className="main main_3" data-tab='3'>
		// 	<div className="container">
		// 		<div className="content">
		// 			<h1 className="title">
		// 				For your pleasure
		// 			</h1>
		// 		</div>
		// 	</div>
		// </section>
		
	)
}

export default Main;

