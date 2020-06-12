import React, { useState } from 'react';
import './styles.scss';

const Filter = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const onChangeHandler = (e) => {
    setValue(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    onSubmit(value);
  };

  return (
    <form className='form filter-form' onSubmit={onSubmitHandler}>
      <div className='form-group' style={{ flex: 2 }}>
        <input
          value={value}
          onChange={onChangeHandler}
          type='text'
          className='form-input'
          placeholder='Filter by country name'
        />
      </div>
      <div className='form-group'>
        <button type='submit'>Filter</button>
      </div>
    </form>
  );
};

export default Filter;
