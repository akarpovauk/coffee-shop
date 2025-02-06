import './search-panel.scss';

const SearchPanel = () => {
	return(
		<div className="search">
			<label htmlFor="search"
				className='label_search'>Looking for</label>
			<input type="text" 
				className='search__input input__placeholder'
				placeholder='start typing here...'
				id='search'/>
		</div>
	);
}

export default SearchPanel;