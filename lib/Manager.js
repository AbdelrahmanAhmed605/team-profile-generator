// Import the parent Employee class
const Employee = require("./Employee");

// Create a `Manager` class that extends the `Employee` class
class Manager extends Employee {
    constructor(name, id, email, officeNum) {
      //since the parameters will be obtained from an inquirer prompt, the number will be inside a string
      if (!/^[0-9]+$/.test(officeNum) || !officeNum.trim().length) {
        throw new Error(
          "Expected parameter 'officeNum' to be a whole positive number"
        );
      }
      super(name, id, email);
      this.officeNum = officeNum;
    }

    getOfficeNum() {
        return this.officeNum
    }

    getRole() {
        return "Manager";
    }
}

module.exports = Manager