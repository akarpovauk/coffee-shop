import './search-panel.scss';

const SearchPanel = () => {
	return(
		<div className="search">
			<label htmlFor="search"
				className='search-label'>Looking for</label>
			<input type="text" 
				className='search-block'
				placeholder='start typing here...'
				id='search'/>
		</div>
	);
}

export default SearchPanel;