import { Component } from 'react';
import './EmployeesListItem.css';

class EmployeesListItem extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const { data, onDeleteItem, onToggleProp } = this.props;
    const { name, salary, increase, liked } = data;
    let listGroupClasses = 'list-group-item d-flex justify-content-between';

    if (increase) {
      listGroupClasses += ' increase';
    }

    if (liked) {
      listGroupClasses += ' like';
    }

    return (
      <li className={listGroupClasses}>
        <span
          onClick={onToggleProp}
          data-toggle='liked'
          className='list-group-item-label'
        >
          {name}
        </span>
        <input
          onChange={this.onChangeInput}
          type='text'
          className='list-group-item-input'
          defaultValue={salary + '$'}
          disabled
        />
        <div className='d-flex justify-content-center align-items-center'>
          <button
            onClick={onToggleProp}
            type='button'
            className='btn-cookie btn-sm'
            data-toggle='increase'
          >
            <i className='fas fa-cookie'></i>
          </button>

          <button
            onClick={onDeleteItem}
            type='button'
            className='btn-trash btn-sm'
          >
            <i className='fas fa-trash'></i>
          </button>
          <i className='fas fa-star'></i>
        </div>
      </li>
    );
  }
}

export default EmployeesListItem;
