const inquirer = require("inquirer");
const emailValidator = require("email-validator");
const Engineer = require("./../lib/Engineer");
const Intern = require("./../lib/Intern");
const Manager = require("./../lib/Manager");

class Team {
  constructor() {
    this.teamMembers = [];
  }

  async promptManagerInfo() {
    const managerQuestions = [
      {
        type: "input",
        message: "Please enter the Team Manager's name: ",
        name: "managerName",
        validate: function (value) {
          if (value === "") {
            return "Field cannot be blank, please enter the Team Manager's name";
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        message: "Please enter the Team Manager's Employee ID: ",
        name: "managerID",
        validate: function (value) {
          const regex = /^[0-9]+$/;
          if (value === "") {
            return "Field cannot be blank, please enter the Team Manager's name";
          } else if (!regex.test(value)) {
            return "input must be a valid number";
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        message: "Please enter the Team Manager's Email Address: ",
        name: "managerEmail",
        validate: function (value) {
          return emailValidator.validate(value)
            ? true
            : "Please enter a valid email address";
        },
      },
      {
        type: "input",
        message: "Please enter the Team Manager's Office Number: ",
        name: "managerOfficeNum",
        validate: function (value) {
          const regex = /^[0-9]+$/;
          if (value === "") {
            return "Field cannot be blank, please enter the Team Manager's name";
          } else if (!regex.test(value)) {
            return "input must be a valid number";
          } else {
            return true;
          }
        },
      },
    ];

    inquirer
      .prompt(managerQuestions)
        .then((manager) => {
          let managerInstance = new Manager(
            manager.managerName,
            manager.managerID,
            manager.managerEmail,
            manager.managerOfficeNum
          );
        this.teamMembers.push(managerInstance);
        this.promptTeamInfo();
      })
      .catch((err) => console.log(err));
  }

  async promptTeamInfo() {
    const engineerQuestions = [
      {
        type: "input",
        message: "Please enter the Engineer's name: ",
        name: "engineerName",
        validate: function (value) {
          if (value === "") {
            return "Field cannot be blank, please enter the Engineer's name";
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        message: "Please enter the Engineer's Employee ID: ",
        name: "engineerID",
        validate: function (value) {
          const regex = /^[0-9]+$/;
          if (value === "") {
            return "Field cannot be blank, please enter the Engineer's name";
          } else if (!regex.test(value)) {
            return "input must be a valid number";
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        message: "Please enter the Engineer's Email Address: ",
        name: "engineerEmail",
        validate: function (value) {
          return emailValidator.validate(value)
            ? true
            : "Please enter a valid email address";
        },
      },
      {
        type: "input",
        message: "Please enter the Engineer's Github Username: ",
        name: "engineerGithub",
        validate: function (value) {
          if (value === "") {
            return "Field cannot be blank, please enter the Engineer's Github Username";
          } else {
            return true;
          }
        },
      },
    ];

    const internQuestions = [
      {
        type: "input",
        message: "Please enter the Intern's name: ",
        name: "internName",
        validate: function (value) {
          if (value === "") {
            return "Field cannot be blank, please enter the Intern's name";
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        message: "Please enter the Intern's Employee ID: ",
        name: "internID",
        validate: function (value) {
          const regex = /^[0-9]+$/;
          if (value === "") {
            return "Field cannot be blank, please enter the Intern's name";
          } else if (!regex.test(value)) {
            return "input must be a valid number";
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        message: "Please enter the Intern's Email Address: ",
        name: "internEmail",
        validate: function (value) {
          return emailValidator.validate(value)
            ? true
            : "Please enter a valid email address";
        },
      },
      {
        type: "input",
        message: "Please enter the Intern's School: ",
        name: "internSchool",
        validate: function (value) {
          if (value === "") {
            return "Field cannot be blank, please enter the Intern's School";
          } else {
            return true;
          }
        },
      },
    ];

    inquirer
      .prompt([
        {
          type: "list",
          message: "Please select your next action:",
          name: "role",
          choices: [
            "Add an Engineer team member",
            "Add an Intern team member",
            "Finish building team",
          ],
        },
      ])
      .then((userChoice) => {
        if (userChoice.role === "Add an Engineer team member") {
          inquirer
            .prompt(engineerQuestions)
            .then((engineer) => {
              this.teamMembers.push(
                new Engineer(
                  engineer.engineerName,
                  engineer.engineerID,
                  engineer.engineerEmail,
                  engineer.engineerGithub
                )
              );
              this.promptTeamInfo();
            })
            .catch((err) => console.log(err));
        } else if (userChoice.role === "Add an Intern team member") {
          inquirer
            .prompt(internQuestions)
            .then((intern) => {
              this.teamMembers.push(
                new Intern(
                  intern.internName,
                  intern.internID,
                  intern.internEmail,
                  intern.internSchool
                )
              );
              this.promptTeamInfo();
            })
            .catch((err) => console.log(err));
        } else {
          return this.teamMembers;
        }
      })
      .then((members) => console.log(members))
      .catch((err) => console.log(err));
  }
  getTeamInfo() {
    return this.teamMembers;
  }
}
const game = new Team();
game.promptManagerInfo();
