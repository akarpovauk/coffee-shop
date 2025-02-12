import './filter-panel.scss';

const FilterPanel = ({filter, onFilterSelect}) => {
	const btnsData = [
		{name: 'Brazil', label: 'Brazil'},
		{name: 'Kenya', label: 'Kenya'},
		{name: 'Columbia', label: 'Columbia'}
	];

	const btns = btnsData.map(({name, label}) => {
		const active = filter === name;
		const clazz = active ? "btn btn_filter active" : "btn btn_filter";
		return (
			<button 
				type ='button'
				key = {name}
				onClick={() => onFilterSelect(name)}
				className={clazz}>{label}</button>
		)
	})
	return (
		<div className="filters-block">
			<div className="label label_filter">Or filter</div>
			<div className="btn-group">
				{btns}
				{/* <button 
					type ='button'
					className="btn btn_filter">Brazil</button>
				<button 
					type ='button'
					className="btn btn_filter">Kenya</button>
				<button 
					type='button'
					className="btn btn_filter">Columbia</button> */}
			</div>
		</div>
	);
}

export default FilterPanel;