// Import required packages to create prompts and their validations
const inquirer = require("inquirer");
const emailValidator = require("email-validator");
// Import classes
const Engineer = require("./../lib/Engineer");
const Intern = require("./../lib/Intern");
const Manager = require("./../lib/Manager");

// Team class which has methods to prompt the user for the team members and creates class (Manager, Eng, Intern)
// instances using the given information. Instances of all the members are places into the Team class' constructor
// array for the specific Team's instance
class Team {
  constructor() {
    // contains all members of the team for the specific Team instance
    this.teamMembers = [];
  }

  // Prompts the user for the manager's information and creates a Manager class instance with the given
  // information. This instance is pushed into the teamMembers constructor
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
        //creates an Manager instance given the user's prompted Manager info and pushes it to teamMembers
        this.teamMembers.push(
          new Manager(
            manager.managerName,
            manager.managerID,
            manager.managerEmail,
            manager.managerOfficeNum
          )
        );
        this.promptTeamInfo();
      })
      .catch((err) => console.log(err));
  }

  // Prompts the user to either add an Engineer or Intern team member or confirm that they have completed adding
  // all the members. Engineer or Instance class instances are made for each member and added to the Team's
  // teamMembers array
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
              //creates an Engineer instance given the user's prompted Engineer info and pushes it to teamMembers
              this.teamMembers.push(
                new Engineer(
                  engineer.engineerName,
                  engineer.engineerID,
                  engineer.engineerEmail,
                  engineer.engineerGithub
                )
              );
              // recursion of the promptTeamInfo method which will prompt the user to either add another team
              // member or confirm that the team has been completed
              this.promptTeamInfo();
            })
            .catch((err) => console.log(err));
        } else if (userChoice.role === "Add an Intern team member") {
          inquirer
            .prompt(internQuestions)
            .then((intern) => {
              //creates an Intern instance given the user's prompted Intern info and pushes it to teamMembers
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
          this.getTeamInfo();
        }
      })
      .catch((err) => console.log(err));
  }
  // returns the teamMembers array containing class instances of all the members of the team
  getTeamInfo() {
    console.log(this.teamMembers);
    return this.teamMembers;
  }
}
module.exports = Team;