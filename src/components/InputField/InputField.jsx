import { useState } from 'react';
import { nanoid } from 'nanoid';
import s from './InputField.module.css';


export const InputField =({contacts, updateContactState}) => {
const [name, setName] = useState('');
const [number, setNumber] = useState('');
 
const  handleValueChange = (field, event) => {
    switch (field) {
      case 'number':
        setNumber(event.target.value)
        break;
    
        case 'name':
          setName(event.target.value)
        break;
      default:
        break;
    }
  };

const  createContact = event => {
    event.preventDefault();

    const newContact = { name, number, id: nanoid(5) };

    if (contacts.some(contact => contact.name === name)) {
      alert(`Contact with the name ${name} already exists!`);
      return;
    }

    updateContactState(newContact);

    setNumber('');
    setName('');
  };

    return (
      <form className={s.formInput} onSubmit={createContact}>
        <label className={s.nameLabel}>
          Name <br />
          <input
          className={s.nameInput}
            name="name"
            value={name}
            type="text"
            placeholder='Enter contact name'
            onChange={event => handleValueChange('name', event)}
          />
        </label>

        <label className={s.numberLabel}>
          Number <br />
          <input
          className={s.numberInput}
            name="number"
            value={number}
            type="tel"
            placeholder='Enter contact number'
            onChange={event => handleValueChange('number', event)}
            required
          />
        </label>
        <button className={s.searchBTN} type="submit">Add contact</button>
      </form>
    );
}
