import { Component } from 'react';
import Header from '../Header/Header';
import SearchPanel from '../SearchPanel/SearchPanel';
import Filter from '../Filter/Filter';
import EmployeesList from '../EmployeesList/EmployeesList';
import EmployeesAddForm from '../EmployeesAddForm/EmployeesAddForm';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { id: 1, name: 'John M.', salary: 1200, increase: false, liked: false },
        { id: 2, name: 'Peter P.', salary: 2500, increase: true, liked: false },
        { id: 3, name: 'Mark C.', salary: 3800, increase: false, liked: true },
      ],
      term: '',
      filter: 'all',
    };
    this.counterID = 4;
  }

  onDeleteItem = (id) => {
    this.setState(({ data }) => ({
      data: data.filter((item) => item.id !== id),
    }));
  };

  addNewEmployee = (name, salary) => {
    let defaultSalary = 1000;

    const newEmployee = {
      id: this.counterID++,
      name,
      salary: salary === '' ? (salary = defaultSalary) : +salary,
      increase: false,
      liked: false,
    };

    this.setState(({ data }) => {
      const newData = [...data, newEmployee];

      return {
        data: newData,
      };
    });
  };

  onToggleProp = (id, prop) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] };
        }
        return item;
      }),
    }));
  };

  onSearchData = (term) => {
    this.setState({ term });
  };

  onChangeFilter = (filter) => {
    this.setState({ filter });
  };

  filterData = (items, filter) => {
    switch (filter) {
      case 'all':
        return items;
      case 'increase':
        return items.filter((item) => item.increase);
      case 'moreThen1000':
        return items.filter((item) => item.salary > 1000);

      default:
        return items;
    }
  };

  filterString = (item, term) => {
    const lowerName = item.name.toLowerCase();
    const lowerTerm = term.toLowerCase();
    return lowerName.indexOf(lowerTerm) > -1;
  };

  render() {
    const { data, term, filter } = this.state;
    const employees = data.length;
    const increase = data.filter((person) => person.increase).length;
    const bestEmployees = data
      .filter((item) => item.liked)
      .map((person) => person.name);

    const filteredData = this.filterData(
      data.filter((item) => this.filterString(item, term)),
      filter
    );

    return (
      <div className='app'>
        <Header
          employees={employees}
          increase={increase}
          bestEmployees={bestEmployees}
        />

        <div className='search-panel'>
          <SearchPanel onSearchData={this.onSearchData} />
          <Filter filter={filter} onChangeFilter={this.onChangeFilter} />
        </div>

        <EmployeesList
          data={filteredData}
          onDeleteItem={this.onDeleteItem}
          onToggleProp={this.onToggleProp}
        />
        <EmployeesAddForm addNewEmployee={this.addNewEmployee} />
      </div>
    );
  }
}

export default App;
