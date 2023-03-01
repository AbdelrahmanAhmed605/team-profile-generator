/* Parent Employee class to be used for Managers, Engineers, and Interns
Each Employee must have a name, id, and email (the children classes contain their own special constructors as well)*/
class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName() {
    return this.name;
  }
    getId() {
      return this.id;
  }
    getEmail() {
      return this.email;
  }
    getRole() {
      return "Employee";
  }
}
module.exports = Employee;
