const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Library');

// Book Schema
const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  genre: String,
  pages: Number,
  publishedYear: Number,
  rating: Number
});

const Book = mongoose.model('Book', bookSchema);

// Employee Schema
const employeeSchema = new mongoose.Schema({
  name: String,
  age: Number,
  position: String,
  department: String,
  salary: Number
});

const Employee = mongoose.model('Employee', employeeSchema);

// Student Schema
const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  grade: String,
  subjects: [String]
});

const Student = mongoose.model('Student', studentSchema);

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

// Create a new employee
const createEmployee = async (name, age, position, department, salary) => {
  try {
    const newEmployee = new Employee({
      name,
      age,
      position,
      department,
      salary
    });
    const savedEmployee = await newEmployee.save();
    console.log('New employee created:');
    console.log(savedEmployee);
  } catch (error) {
    console.error(error);
  }
};

// Create a new student
const createStudent = async (name, age, grade, subjects) => {
  try {
    const newStudent = new Student({
      name,
      age,
      grade,
      subjects
    });
    const savedStudent = await newStudent.save();
    console.log('New student created:');
    console.log(savedStudent);
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

// Read all employees
const readAllEmployees = async () => {
  try {
    const allEmployees = await Employee.find({});
    console.log('All employees:');
    console.log(allEmployees);
  } catch (error) {
    console.error(error);
  }
};

// Read all students
const readAllStudents = async () => {
  try {
    const allStudents = await Student.find({});
    console.log('All students:');
    console.log(allStudents);
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

// Update an employee by their ID
const updateEmployeeById = async (id, updatedFields) => {
  try {
    const updatedEmployee = await Employee.findByIdAndUpdate(id, updatedFields, { new: true });
    console.log('Updated employee:');
    console.log(updatedEmployee);
  } catch (error) {
    console.error(error);
  }
};

// Update a student by their ID
const updateStudentById = async (id, updatedFields) => {
  try {
    const updatedStudent = await Student.findByIdAndUpdate(id, updatedFields, { new: true });
    console.log('Updated student:');
    console.log(updatedStudent);
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

// Delete an employee by their ID
const deleteEmployeeById = async (id) => {
  try {
    const deletedEmployee = await Employee.findByIdAndDelete(id);
    console.log('Deleted employee:');
    console.log(deletedEmployee);
  } catch (error) {
    console.error(error);
  }
};

// Delete a student by their ID
const deleteStudentById = async (id) => {
  try {
    const deletedStudent = await Student.findByIdAndDelete(id);
    console.log('Deleted student:');
    console.log(deletedStudent);
  } catch (error) {
    console.error(error);
  }
};

// Example usage
const main = async () => {
  try {
    await createBook('The Great Gatsby', 'F. Scott Fitzgerald', 'Fiction', 180, 1925, 4.5);
    await createBook('To Kill a Mockingbird', 'Harper Lee', 'Fiction', 336, 1960, 4.8);
    await readAllBooks();
    await updateBookById('<bookId>', { rating: 5.0 });
    await deleteBookById('<bookId>');

    await createEmployee('John Doe', 30, 'Manager', 'Sales', 50000);
    await createEmployee('Jane Smith', 25, 'Developer', 'IT', 60000);
    await readAllEmployees();
    await updateEmployeeById('<employeeId>', { salary: 55000 });
    await deleteEmployeeById('<employeeId>');

    await createStudent('Alice Johnson', 18, '12th Grade', ['Math', 'Science', 'English']);
    await createStudent('Bob Thompson', 17, '11th Grade', ['History', 'Art']);
    await readAllStudents();
    await updateStudentById('<studentId>', { grade: '10th Grade' });
    await deleteStudentById('<studentId>');
  } catch (error) {
    console.error(error);
  } finally {
    mongoose.connection.close();
  }
};

main();
