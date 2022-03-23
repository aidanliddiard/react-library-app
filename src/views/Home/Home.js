import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <>
        <h1>Welcome to the Library Catalog!</h1>
        <Link to={`/books`}>To the Catalog</Link>
      </>
    </div>
  );
}
