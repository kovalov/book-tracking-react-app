import { AiOutlineFileText } from 'react-icons/ai';
import MyButton from './MyButton';

const MyHeader = ({ title, toggle }) => {
  return (
    <header className='header'>
      <div className='header__container container'>
        <span className='header__title'>
          <span className='header__icon'>
            <AiOutlineFileText />
          </span>
          {title}
        </span>
        <MyButton onClick={toggle} className='header__button button'>
          Add
        </MyButton>
      </div>
    </header>
  );
};

export default MyHeader;
