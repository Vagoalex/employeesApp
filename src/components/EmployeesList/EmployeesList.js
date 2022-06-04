import EmployeesListItem from '../EmployeesListItem/EmployeesListItem';

import './EmployeesList.css';

const EmployeesList = ({ data, onToggleProp, onDeleteItem }) => {
  const employeesItems = data.map((item) => {
    const { id, ...items } = item;

    return (
      <EmployeesListItem
        key={id}
        data={items}
        onDeleteItem={() => onDeleteItem(id)}
        onToggleProp={(e) =>
          onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))
        }
      />
    );
  });
  return <ul className='app-list list-group'>{employeesItems}</ul>;
};

export default EmployeesList;
