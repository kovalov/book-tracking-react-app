import BookItem from './BookItem';

const BookList = ({ books, remove }) => {
  return (
    <div className='book-list'>
      <div className='book-list__container container'>
        {books.map((book) => (
          <BookItem key={book.id} {...book} remove={remove} />
        ))}
      </div>
    </div>
  );
};

export default BookList;
