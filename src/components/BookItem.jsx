import { AiOutlineClose } from 'react-icons/ai';
import MyButton from './UI/MyButton';

const BookItem = (props) => {
  const handleClick = (id) => {
    props.remove(id);
  };

  return (
    <div className='book-list__element'>
      <img
        src={props.src}
        alt={`${props.title} by ${props.author}`}
        className='book-list__image'
      />
      <div className='book-list__content'>
        <h2 className='book-list__title'>{props.title}</h2>
        <p className='book-list__author'>{props.author}</p>
        <p className='book-list__pages'>
          Pages:{' '}
          <span className='book-list__pages-value'>
            {props.pages}
          </span>
        </p>
        <p className='book-list__date'>
          <span className='book-list__date-value'>
            {props.createdAt}
          </span>
        </p>
      </div>
      <MyButton
        onClick={() => handleClick(props.id)}
        className='book-list__button button'
      >
        <AiOutlineClose />
      </MyButton>
    </div>
  );
};

export default BookItem;
