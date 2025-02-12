import { Component } from 'react';
import './search-panel.scss';

class SearchPanel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			term: ''
		}
	}

	onUpdateLocalSearch = (e) => {
		const term = e.target.value;
		this.setState({term});
		this.props.onUpdateSearch(term);
	}

	render() {
		return(
			<div className="search">
				<label htmlFor="search"
					className='label_search'>Looking for</label>
				<input type="text" 
					className='search__input input__placeholder'
					placeholder='start typing here...'
					id='search'
					value ={this.state.term}
					onChange={this.onUpdateLocalSearch}/>
			</div>
		);
	}
}

export default SearchPanel;