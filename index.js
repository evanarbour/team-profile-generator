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
            validate: answer => {
                if (answer !== '') {
                    return true;
                } 
                return 'Please enter at least one character.'
            }
        }, {
            type: "input", 
            name: "id", 
            message: "Manager ID:",
            validate: answer => {
                const id = answer.match(
                    /^[1-9]\d*$/
                );
                if (id) {
                    return true;
                }
                return "Please enter a number greater than zero."
            }
        }, {
            type: "input", 
            name: "email", 
            message: "Manager email address:",
            validate: answer => {
                if (answer !== '') {
                    return true;
                } 
                return 'Please enter at least one character.'
            }
        }, {
            type: "input", 
            name: "officeNumber", 
            message: "Please enter office number:",
            validate: answer => {
                const officeNum = answer.match(
                    /^[1-9]\d*$/
                );
                if (officeNum) {
                    return true;
                }
                return "Please enter a number greater than zero."
            }
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
    ------------------------
    Adding Employees to Team
    ------------------------`);

    return inquirer.prompt ([
        {
            type: "list",
            name: "role",
            message: "Please choose employee role:",
            choices: ['Engineer', 'Intern'],
            validate: answer => {
                if (answer !== '') {
                    return true;
                } 
                return 'Please enter at least one character.'
            }
        }, {
            type: "input", 
            name: "name", 
            message: "Enter employee name:",
            validate: answer => {
                if (answer !== '') {
                    return true;
                } 
                return 'Please enter at least one character.'
            }
        }, {
            type: "input", 
            name: "id", 
            message: "Enter employee ID:",
            validate: answer => {
                const empId = answer.match(
                    /^[1-9]\d*$/
                );
                if (empId) {
                    return true;
                }
                return "Please enter a number greater than zero."
            }
        }, {
            type: "input", 
            name: "email", 
            message: "Enter employee email address:",
            validate: answer => {
                if (answer !== '') {
                    return true;
                } 
                return 'Please enter at least one character.'
            }
        }, {
            type: "input", 
            name: "github",
            message: "Please enter github username:", 
            when: (input) => input.role === "Engineer",
            validate: answer => {
                if (answer !== '') {
                    return true;
                } 
                return 'Please enter at least one character.'
            }
        }, {
            type: "input", 
            name: "school", 
            message: "Please enter school name:", 
            when: (input) => input.role === "Intern",
            validate: answer => {
                if (answer !== '') {
                    return true;
                } 
                return 'Please enter at least one character.'
            }
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
            employee = new Engineer (name, id, email, github,);
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
            console.log(`\n------Full Team------\n`)
            console.log(teamArray);
            return teamArray;
        } 
    })
};




// start with adding manager info
addManager()
// then add employee info
.then(addEmployee)
// then take data from 'teamArray' and pass into generateHTML
.then(teamArray => {
    return generateHTML(teamArray)
})

.then((teamPageData) => {
    const fullHtmlPage = teamPageData;

    fs.writeFile('./dist/index.html', fullHtmlPage, (err) => 
    err ? console.log(err) : console.log('Team Profile successfully created in index.html!'));
})

.catch((error) => {
    console.error("There was a problem creating your index.html", error)
})
