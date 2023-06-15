const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Library');

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  genre: String,
  pages: Number,
  publishedYear: Number,
  rating: Number
});

const Book = mongoose.model('Book', bookSchema);

// Create a new book
const createBook = async (title, author, genre, pages, publishedYear, rating) => {
  try {
    const newBook = new Book({
      title,
      author,
      genre,
      pages,
      publishedYear,
      rating
    });
    const savedBook = await newBook.save();
    console.log('New book created:');
    console.log(savedBook);
  } catch (error) {
    console.error(error);
  }
};

// Read all books
const readAllBooks = async () => {
  try {
    const allBooks = await Book.find({});
    console.log('All books:');
    console.log(allBooks);
  } catch (error) {
    console.error(error);
  }
};

// Update a book by its ID
const updateBookById = async (id, updatedFields) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(id, updatedFields, { new: true });
    console.log('Updated book:');
    console.log(updatedBook);
  } catch (error) {
    console.error(error);
  }
};

// Delete a book by its ID
const deleteBookById = async (id) => {
  try {
    const deletedBook = await Book.findByIdAndDelete(id);
    console.log('Deleted book:');
    console.log(deletedBook);
  } catch (error) {
    console.error(error);
  }
};

// Example usage
const main = async () => {
  try {
    await createBook('The Great Gatsby', 'F. Scott Fitzgerald', 'Fiction', 180, 1925, 4.5);
    await readAllBooks();
    await updateBookById('<bookId>', { rating: 5.0 });
    await deleteBookById('<bookId>');
  } catch (error) {
    console.error(error);
  } finally {
    mongoose.connection.close();
  }
};

main();
