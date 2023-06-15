const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Library');

// Student Schema
const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  grade: String,
  subjects: [String]
});

const Student = mongoose.model('Student', studentSchema);

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

// Add more students
const addStudents = async () => {
  try {
    await createStudent('Mamatha', 25, '12th Grade', ['Math', 'Science', 'English']);
    await createStudent('Supana', 21, '11th Grade', ['History', 'Art']);
    await createStudent('Lakshmi', 19, '9th Grade', ['Physics', 'Chemistry']);
    await createStudent('Smitha', 18, '12th Grade', ['Biology', 'Geography']);
    console.log('Students added successfully!');
  } catch (error) {
    console.error(error);
  } finally {
    mongoose.connection.close();
  }
};

addStudents();
