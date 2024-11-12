//Student Grades with Map

const students = new Map();
students.set("Furkan", 35);
students.set("Ahmet", 12);
students.set("Kemal", 5);
students.set("Kadir", 96);

students.forEach((grade, name) => {
  console.log(`${name}'s grade: ${grade}`);
});
