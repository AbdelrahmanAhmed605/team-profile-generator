// Import the parent Employee class
const Employee = require("./Employee");

// Create a `Manager` class that extends the `Employee` class
class Manager extends Employee {
  constructor(name, id, email, officeNum) {
    super(name, id, email);
    this.officeNum = officeNum;
  }

  getOfficeNumber() {
    return this.officeNum;
  }

  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
