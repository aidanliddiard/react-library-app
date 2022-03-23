import BookList from './views/Books/BookList';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import Home from './views/Home/Home';
import BookDetail from './views/Books/BookDetail';

function App() {
  // TODO: Add routes to books & views
  return (
    <BrowserRouter>
      <h1>Library Catalog</h1>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/books">
          <BookList />
        </Route>
        <Route path="/books/:id">
          <BookDetail />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
