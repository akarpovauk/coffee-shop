import './filter-panel.scss';

const FilterPanel = () => {
	return (
		<div className="filters-block">
			<div className="label label_filter">Or filter</div>
			<div className="btn-group">
				<button 
					type ='button'
					className="btn btn_filter">Brazil</button>
				<button 
					type ='button'
					className="btn btn_filter">Kenya</button>
				<button 
					type='button'
					className="btn btn_filter">Columbia</button>
			</div>
		</div>
	);
}

export default FilterPanel;