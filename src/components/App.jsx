import React from 'react';
import { InputField } from './InputField/InputField';
import { ContactsList } from './contactsList/ContactsList';

import { SearchFilter } from './SearchFilter/SearchFilter';

export class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount(){
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      this.setState({
        contacts: JSON.parse(storedContacts),
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  }

  deleteContact = (id) => {
    this.setState(prevState => ({contacts: prevState.contacts.filter(contact => contact.id !== id)}))
  }

  updateContactState = (newContact) => {
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  changeFilter = (event) => {
    this.setState({filter: event.target.value})
  }

  getFilteredData = () => {
    if (this.state.filter) {
      return this.state.contacts.filter(contact => contact.name.toLowerCase().includes(this.state.filter.toLowerCase()))
    }
    return this.state.contacts;
  }

  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <h1>Phonebook</h1>
        <InputField contacts={this.state.contacts} updateContactState={this.updateContactState}/>

         <h2>Contacts</h2>
        <ContactsList contacts={this.state.contacts} getFilteredData={this.getFilteredData} deleteContact={this.deleteContact}>
          <SearchFilter changeFilter={this.changeFilter} filterState={this.state.filter} />
        </ContactsList>
      </div>
    );
  }
}
