// link to create html file
const generateHTML = require('./src/generateHTML');

// link to employee data
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// push input data to this array
const teamArray = [];

// node modules
const inquirer = require('inquirer');
const fs = require('fs');

// manager prompts 
const addManager = () => {
    return inquirer.prompt ([
        {
            type: "input",
            name: "name", 
            message: "Team Manager's name:",
        }, {
            type: "input", 
            name: "id", 
            message: "Manager ID:",
        }, {
            type: "input", 
            name: "email", 
            message: "Manager email address:"
        }, {
            type: "input", 
            name: "officeNumber", 
            message: "Please enter office number:"
        }
        
    ])
    // add manager information to array 
    .then(managerInput => {
        const {name, id, email, officeNumber} = managerInput;
        const manager = new Manager (name, id, email, officeNumber);
        teamArray.push(manager);
        console.log(manager);
    })
};

// employee prompts 
const addEmployee = () => {
    console.log(`
    --------
    Adding Employees to Team
    --------`);

    return inquirer.prompt ([
        {
            type: "list",
            name: "role",
            message: "Please choose employee role:",
            choices: ['Engineer', 'Intern'],
        }, {
            type: "input", 
            name: "name", 
            message: "Enter employee name:", 
        }, {
            type: "input", 
            name: "id", 
            message: "Enter employee ID:", 
        }, {
            type: "input", 
            name: "email", 
            message: "Enter employee email address:", 
        }, {
            type: "input", 
            name: "github",
            message: "Please enter github username:", 
            when: (input) => input.role === "Engineer",
        }, {
            type: "input", 
            name: "school", 
            message: "Please enter school name:", 
            when: (input) => input.role === "Intern",
        }, {
            // confirm if adding more employees to the team
            type: "confirm", 
            name: "confirmMoreTeam", 
            message: "Add more team members?",
            default: false
        }
    ])
    .then(employeeInfo => {
        let {name, id, email, role, github, school, confirmMoreTeam} = employeeInfo;
        let employee;

        if (role === "Engineer") {
            employee = new Engineer (name, id, email, github);
            console.log(employee);
        } else if (role === "Intern") {
            employee = new Intern (name, id, email, school);
            console.log(employee);
        }
        // add employee information to array 
        teamArray.push(employee);

        // if user wants to add more team members, start at beginning of addEmployee 
        if (confirmMoreTeam) {
            return addEmployee(teamArray);
        } else {
            // if not, get completed array
            console.log(teamArray);
            return teamArray;
        } 
    })
};




// start with adding manager info
addManager()
// then add employee info
.then(addEmployee)
// then take data from teamArray and pass into generateHTML
.then(teamArray => {
    return generateHTML(teamArray)
})

