# Team Profile Generator

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

A Node.js command-line application that takes in information about employees on a software engineering team and generates an HTML webpage that displays summaries for each person. The inquirer prompts ask the user to enter the team's information which is then displayed as bootstrap cards on the HTML webpage. During this project, Abdelrahman learnt the following skills:
- Creating classes and extending them to their children
- Creating constructors and methods for classes
- Adding validation checks on class constructors to ensure appropriate information is passed to the class instances
- Using jest module to create tests for applications
- Creating tests that check for errors using jest's toThrowError method

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [How to Contribute](#how-to-contribute)
- [Tests](#tests)
- [Questions](#questions)

## Installation

As the project does not use publishing softwares like Heroku and is only availabe in the command line, the user will have to install the inquirer and email-validator packages. To install these packages, the user must run these commands in the terminal before running the application: `npm i inquirer@8.2.4` and `npm i email-validator`. Please ensure you are in the project directory when installing these packages.

## Usage

For a walkthrough of how to use the application, refer to the following demonstration:

Once the packages are installed, to run the application, the user must type node index in the terminal. This will then generate a sequence of prompts requesting information regarding the Manager's information.  Once all the prompts have been completed, the user will be presented with the option to add an Engineer or Intern to the team or confirm that the team has been completed. The user will be able to add as many Engineers and Interns to the team until they confirm their team is complete. When the user confirms the completion of the team, an index.html file will be created in the `dist` folder. The user can then open up the html file on their web browser where they will see all the inputted team member's information presented.

## License

This project is licensed under the MIT License. To see the license permissions for commercial and non-commercial use, modification, and distribution of the software, please see the full text of the license, available at https://opensource.org/licenses/MIT.

## How to Contribute

N/A

## Tests

There is an Employee class containing 3 sub-classes (Manager, Engineer, Intern). When the user inputs their information, this information is used to create instances of those classes. Inside the `tests` folder are files containing tests for each class. The tests check to ensure that instances of the classes contain appropriate data (constructors are of the right type and follow their intended format). The tests also check to ensure that the method functions of the classes behave appropriately and return the intended information.

## Questions

If you have any questions regarding this application, feel free to reach me at abdelrahman.ahmed605@hotmail.com with the subject title "Question for Professional-readme-generator"
You can also find me on github here: https://github.com/AbdelrahmanAhmed605
