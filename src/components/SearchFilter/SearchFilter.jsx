import React from 'react';
import s from './SearchFilter.module.css';

export class SearchFilter extends React.Component {
  render() {
    const { filterState, changeFilter } = this.props;
    return (
      <label className={s.searchLabel}>
        Find contacts by name
        <input
          name="filter"
          value={filterState}
          onChange={event => changeFilter(event)}
          type="text"
          placeholder='Enter contact name'
        />
      </label>
    );
  }
}
