import React, { useState } from 'react';
import PropTypes from 'prop-types';

const InputTodo = ({ addTodoProps }) => {
  const [state, setState] = useState([]);

  const onChange = (e) => {
    setState({
      [e.target.name]: e.target.value,
    });
  };

  const { title } = state;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTodoProps(title);
      setState({
        title: '',
      });
    } else {
      const alert = 'Please enter a todo';
      alert(alert);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        className="input-text"
        placeholder="Add Todo..."
        value={title}
        name="title"
        onChange={onChange}
      />
      <button type="button">Submit</button>
    </form>
  );
};

InputTodo.propTypes = {
  addTodoProps: PropTypes.func,
};

InputTodo.defaultProps = {
  addTodoProps: () => {},
};

export default InputTodo;
