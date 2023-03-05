// Import the parent Employee class
const Employee = require("./Employee");

// Create a `Engineer` class that extends the `Employee` class
class Engineer extends Employee {
  constructor(name, id, email, github) {
    if (typeof github !== "string" || !name.trim().length) {
      throw new Error("Expected parameter 'github' to be a non-empty string");
    }

    super(name, id, email);
    this.github = github;
  }

  getGithub() {
    return this.github;
  }

  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
