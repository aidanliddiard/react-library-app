import { useEffect, useState } from 'react';
import Book from '../../components/book/Book';
import { getBookById } from '../../services/books';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function BookDetail() {
  const params = useParams(); // TODO: Use id from route
  console.log(params);

  const [book, setBook] = useState(null);

  useEffect(() => {
    getBookById(params.id).then(({ data }) => setBook(data));
  }, [params.id]);

  if (!book) return <h3>Loading book...</h3>;

  return (
    <>
      <Link to={`/books`}>Back to Catalog</Link>
      <Book book={book} showDetail />
    </>
  );
}

export default BookDetail;
