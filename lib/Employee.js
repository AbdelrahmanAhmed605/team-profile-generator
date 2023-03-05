/* Parent Employee class to be used for Managers, Engineers, and Interns
Each Employee must have a name, id, and email (the children classes contain their own special constructors as well)*/
class Employee {
  constructor(name, id, email) {
    if (typeof name !== "string" || !name.trim().length) {
      throw new Error("Expected parameter 'name' to be a non-empty string");
    }

    //since the parameters will be obtained from an inquirer prompt, the number will be inside a string
    if (!/^[0-9]+$/.test(id) || !id.trim().length) {
      throw new Error("Expected parameter 'id' to be a whole positive number");
    }

    if (typeof email !== "string" || !email.trim().length) {
      throw new Error("Expected parameter 'email' to be a non-empty string");
    }

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
