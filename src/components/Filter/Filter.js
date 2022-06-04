import './Filter.css';

const Filter = (props) => {
  const { onChangeFilter, filter } = props;

  const buttonsData = [
    { name: 'all', text: 'Все сотрудники' },
    { name: 'increase', text: 'На повышение' },
    { name: 'moreThen1000', text: 'З/П больше 1000$' },
  ];

  const activeClass = 'btn--active';
  const defaultClass = 'btn-outline';

  const buttons = buttonsData.map((button) => {
    const { name, text } = button;
    const isActive = filter === name;
    const buttonClass = isActive ? activeClass : defaultClass;

    return (
      <button
        onClick={() => onChangeFilter(name)}
        key={name}
        name={name}
        type='button'
        className={`btn ${buttonClass}`}
      >
        {text}
      </button>
    );
  });

  return <div className='btn-group'>{buttons}</div>;
};

export default Filter;
