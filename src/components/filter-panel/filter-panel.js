import './filter-panel.scss';

const FilterPanel = () => {
	return (
		<div className="filter">
			<div className="label">Or filter</div>
			<div className="btn-group">
				<button 
					type ='button'
					className="btn">Brazil</button>
				<button 
					type ='button'
					className="btn">Kenya</button>
				<button 
					type='button'
					className="btn">Columbia</button>
			</div>
		</div>
	);
}

export default FilterPanel;