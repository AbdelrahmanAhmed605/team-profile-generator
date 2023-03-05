// Import the parent Employee class
const Employee = require("./Employee");

// Create a `Intern` class that extends the `Employee` class
class Intern extends Employee {
  constructor(name, id, email, school) {
    if (typeof school !== "string" || !school.trim().length) {
      throw new Error("Expected parameter 'school' to be a non-empty string");
    }
    super(name, id, email);
    this.school = school;
  }

  getSchool() {
    return this.school;
  }

  getRole() {
    return "Intern";
  }
}

module.exports = Intern;
