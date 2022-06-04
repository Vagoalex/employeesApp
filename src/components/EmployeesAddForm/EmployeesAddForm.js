import { Component } from 'react';
import './EmployeesAddForm.css';

class EmployeesAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      salary: '',
    };
  }

  onChangeInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmitForm = (e) => {
    try {
      e.preventDefault();
      const { name, salary } = this.state;
      const { addNewEmployee } = this.props;
      const isValid = name.length > 3 && !name.match(/\d/) && salary !== null;

      if (isValid) {
        addNewEmployee(name, salary);
      } else {
        throw new Error(
          'ERROR!\nNot valid employee!\nPlease, validate your inputs.'
        );
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      this.setState(({ name, salary }) => ({
        name: (name = ''),
        salary: (salary = ''),
      }));
    }
  };

  render() {
    const { name, salary } = this.state;
    return (
      <div className='app-add-form'>
        <h3>Добавьте нового сотрудника</h3>
        <form onSubmit={this.onSubmitForm} className='add-form d-flex'>
          <input
            onChange={this.onChangeInput}
            type='text'
            className='form-control new-post-label'
            placeholder='Как его зовут?'
            value={name}
            name='name'
          />
          <input
            onChange={this.onChangeInput}
            type='number'
            className='form-control new-post-label'
            placeholder='З/П в $?'
            value={salary}
            name='salary'
          />

          <button type='submit' className='btn btn-outline'>
            Добавить
          </button>
        </form>
      </div>
    );
  }
}

export default EmployeesAddForm;
