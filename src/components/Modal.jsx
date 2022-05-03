import { AiOutlineClose } from 'react-icons/ai';
import MyForm from './MyForm';

const Modal = ({ title, visible, toggle, add }) => {
  return (
    <div className={`modal ${!visible ? 'hidden' : ''}`}>
      <div className='modal__inner'>
        <div className='modal__inner-content'>
          <div className='modal__header'>
            <span className='modal__header-title'>{title}</span>
            <button
              onClick={toggle}
              className='modal__header-button button'
            >
              <AiOutlineClose />
            </button>
          </div>
          <div className='modal__content'>
            <MyForm toggle={toggle} add={add} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
