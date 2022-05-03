import { useState } from 'react';
import MyButton from './UI/MyButton';

const MyForm = ({ toggle, add }) => {
  const [data, setData] = useState({
    title: '',
    author: '',
    pages: '',
  });

  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleClick = (event) => {
    event.preventDefault();
    if (data.title && data.author && data.pages) {
      add(data);
      toggle();
    }
  };

  const handleCancel = () => {
    setData({
      title: '',
      author: '',
      pages: '',
    });
    toggle();
  };

  return (
    <form onSubmit={handleSubmit} className='modal__form form'>
      <div className='form__group'>
        <label htmlFor='title' className='form__label'>
          Title
        </label>
        <input
          value={data.title}
          onChange={handleChange}
          id='title'
          name='title'
          type='text'
          placeholder='Book title'
          className='form__input'
        />
      </div>
      <div className='form__group'>
        <label htmlFor='author' className='form__label'>
          Author
        </label>
        <input
          value={data.author}
          onChange={handleChange}
          id='author'
          name='author'
          type='text'
          placeholder='Book author'
          className='form__input'
        />
      </div>
      <div className='form__group'>
        <label htmlFor='pages' className='form__label'>
          Pages
        </label>
        <input
          value={data.pages}
          onChange={handleChange}
          id='pages'
          name='pages'
          type='text'
          placeholder='Book pages'
          className='form__input'
        />
      </div>
      <MyButton onClick={handleClick} className='form__button button'>
        Submit
      </MyButton>
      <MyButton
        onClick={handleCancel}
        className='form__button button'
      >
        Cancel
      </MyButton>
    </form>
  );
};

export default MyForm;
