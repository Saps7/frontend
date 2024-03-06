import './App.css';
import {React, useEffect} from 'react';
import Header from './components/Header';
import Book from './components/Book';

function App() {
  const [books, setBooks] = ([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/getAllBooks').then(res => {
      res.json().then(books =>{
        setBooks(books);
      })
    })
  });

  return (
    <div className="App">
      <header className="App-header">
       <Header />
      </header>
      <div>
        {books.map(book => (
          <Book book={book} />
        ))}
      </div>
    </div>
  );
}

export default App;
