import './Header.css';

const Header = ({ employees, increase, bestEmployees }) => {
  let bestEmployeesValue;

  if (bestEmployees.length === 0) {
    bestEmployeesValue = '...';
  }
  if (bestEmployees.length === 1) {
    bestEmployeesValue = bestEmployees;
  }
  if (bestEmployees.length > 1) {
    bestEmployeesValue = bestEmployees.join(', ').slice(0, -1);
  }

  return (
    <div className='app-info'>
      <h1 className='app-info__title'>Учет сотрудников в компании Vago Corp</h1>
      <h3 className='app-info__title'>
        Общее число сотрудников:{' '}
        <span className='app-info__highlight'>{employees}</span>
      </h3>
      <h3 className='app-info__title'>
        Премию получат: <span className='app-info__highlight'>{increase}</span>
      </h3>
      <h4 className='app-info__title'>
        Лучшие сотрудники:
        <span className='app-info__highlight'>{` ${bestEmployeesValue}`}</span>
      </h4>
    </div>
  );
};

export default Header;
