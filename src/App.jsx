import { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import MyHeader from './components/UI/MyHeader';
import BookList from './components/BookList';
import MyButton from './components/UI/MyButton';
import Modal from './components/Modal';

function App() {
  const [books, setBooks] = useState([
    {
      id: 0,
      title: 'Book 1',
      author: 'Anna',
      pages: 192,
      src: 'http://placeimg.com/200/200/animals',
      createdAt: '21-aug-21',
    },
    {
      id: 1,
      title: 'Book 2',
      author: 'Anna',
      pages: 192,
      src: 'http://placeimg.com/200/200/animals',
      createdAt: '21-aug-21',
    },
  ]);

  const addBook = (newBook) => {
    setBooks([
      ...books,
      {
        ...newBook,
        id: Date.now(),
        src: 'http://placeimg.com/200/200/animals',
      },
    ]);
  };

  const removeBook = (id) => {
    setBooks(books.filter((b) => b.id !== id));
  };

  const [visible, setVisible] = useState(false);
  const toggleModal = () => {
    setVisible(!visible);
  };

  return (
    <div className='App'>
      <MyHeader title='Book tracker app' toggle={toggleModal} />
      <BookList books={books} remove={removeBook} />
      <MyButton onClick={toggleModal} className='modal-button button'>
        <AiOutlinePlus />
      </MyButton>
      <Modal
        title='Add new book'
        visible={visible}
        add={addBook}
        toggle={toggleModal}
      />
    </div>
  );
}

export default App;
