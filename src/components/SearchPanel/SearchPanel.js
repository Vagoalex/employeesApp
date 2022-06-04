import { Component } from 'react';
import './SearchPanel.css';

class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
    };
  }

  onChangeInput = (e) => {
    const { onSearchData } = this.props;
    const value = e.target.value;
    this.setState(({ term }) => ({ term: (term = value) }));
    onSearchData(value);
  };

  render() {
    const { term } = this.state;
    return (
      <input
        onChange={this.onChangeInput}
        type='text'
        className='form-control search-input'
        placeholder='Найти сотрудника'
        value={term}
      />
    );
  }
}

export default SearchPanel;
