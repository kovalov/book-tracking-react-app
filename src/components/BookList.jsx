import BookItem from './BookItem';

const BookList = ({ books, remove }) => {
  return (
    <div className='book-list'>
      <div className='book-list__container container'>
        {/* {books.map((book) => (
          <BookItem key={book.id} {...book} remove={remove} />
        ))} */}

        {books.length ? (
          books.map((book) => (
            <BookItem key={book.id} {...book} remove={remove} />
          ))
        ) : (
          <h2 className='message'>Empty</h2>
        )}
      </div>
    </div>
  );
};

export default BookList;
