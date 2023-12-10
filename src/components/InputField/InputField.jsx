import React from 'react';
import { nanoid } from 'nanoid';
import s from './InputField.module.css';


export class InputField extends React.Component {
  state = {
    name: '',
    number: '',
  };

  handleValueChange = (field, event) => {
    this.setState({ [field]: event.target.value });
  };

  createContact = event => {
    event.preventDefault();

    const { name, number } = this.state;

    const newContact = { name, number, id: nanoid(5) };

    if (this.props.contacts.some(contact => contact.name === name)) {
      alert(`Contact with the name ${name} already exists!`);
      return;
    }

    this.props.updateContactState(newContact);

    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form className={s.formInput} onSubmit={this.createContact}>
        <label className={s.nameLabel}>
          Name <br />
          <input
          className={s.nameInput}
            name="name"
            value={this.state.name}
            type="text"
            placeholder='Enter contact name'
            onChange={event => this.handleValueChange('name', event)}
          />
        </label>

        <label className={s.numberLabel}>
          Number <br />
          <input
          className={s.numberInput}
            name="number"
            value={this.state.number}
            type="tel"
            placeholder='Enter contact number'
            onChange={event => this.handleValueChange('number', event)}
            required
          />
        </label>
        <button className={s.searchBTN} type="submit">Add contact</button>
      </form>
    );
  }
}
