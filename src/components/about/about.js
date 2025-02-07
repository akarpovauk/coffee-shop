import assets from '../../assets/assets';
import AboutIt from './about-it';
// import '../../assets/scss/fonts.scss';

import './about.scss';

const About = ({title}) => {
	return (
		<section className="about about_1" data-tab ='1' id='about_1'>
			<div className="wrapper">
				<div className="image"></div>
				<div className="about__info">
					<h2 className="section-title">{title[0].title}</h2>
					<div className="divider">
							<img src={assets['beans_b.svg']}
							alt="coffe beans icon" 
							className="divider__img" />
					</div>

					<p className="text">
						Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
						Afraid at highly months do things on at. Situation recommend objection do intention 
						<br/>
						so questions. As greatly removed calling pleased improve an. Last ask him cold feel
						met spot shy want. Children me laughing we prospect answered followed. At it went
						is song that held help face. 
						<br/> <br/>
						Now residence dashwoods she excellent you. Shade being under his bed her, Much
						read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
						horrible but confined day end marriage. Eagerness furniture set preserved far
						recommend. Did even but nor are most gave hope. Secure active living depend son
						repair day ladies now.
					</p>

					{/* <p className="text">
						Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
						<br/><br/>
						Afraid at highly months do things on at. Situation recommend objection do intention
						so questions. <br />
						As greatly removed calling pleased improve an. Last ask him cold feel <br />
						met spot shy want. Children me laughing we prospect answered followed. At it went
						is song that held help face.
					</p> */}

					{/* <p className="text">
						Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
						<br/><br/>
						Afraid at highly months do things on at. Situation recommend objection do intention <br />
						so questions. <br />
						As greatly removed calling pleased improve an. Last ask him cold feel <br />
						met spot shy want. Children me laughing we prospect answered followed. At it went <br />
						is song that held help face.
					</p> */}
					
				</div>
			</div>
			<div className="divider-line"></div>
		</section>

		// <section className="about about_2" data-tab ='2' id='about_2'>
		// 	<div className="wrapper">
		// 		<div className="image"></div>
		// 		<div className="about__info">
		// 			<h2 className="section-title">About our beans</h2>
		// 			<div className="divider">
		// 					<img src={assets['beans_b.svg']}
		// 					alt="coffe beans icon" 
		// 					className="divider__img" />
		// 			</div>
					// <p className="text">
					// 	Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
					// 	<br/><br/>
					// 	Afraid at highly months do things on at. Situation recommend objection do intention
					// 	so questions. <br />
					// 	As greatly removed calling pleased improve an. Last ask him cold feel <br />
					// 	met spot shy want. Children me laughing we prospect answered followed. At it went
					// 	is song that held help face.
					// </p>
		// 		</div>
		// 	</div>
		// 	<div className="divider-line"></div>
		// </section>

		// <AboutIt/>

		// <section className="about about_3" data-tab ='3' id='about_3'>
		// 	<div className="wrapper">
		// 		<div className="image"></div>
		// 		<div className="about__info">
		// 			<h2 className="section-title">About our goods</h2>
		// 			<div className="divider">
		// 					<img src={assets['beans_b.svg']}
		// 					alt="coffe beans icon" 
		// 					className="divider__img" />
		// 			</div>
					// <p className="text">
					// 	Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
					// 	<br/><br/>
					// 	Afraid at highly months do things on at. Situation recommend objection do intention <br />
					// 	so questions. <br />
					// 	As greatly removed calling pleased improve an. Last ask him cold feel <br />
					// 	met spot shy want. Children me laughing we prospect answered followed. At it went <br />
					// 	is song that held help face.
					// </p>
		// 		</div>
		// 	</div>
		// 	<div className="divider-line"></div>
		// </section>

	)
}

export default About;