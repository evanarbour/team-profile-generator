
// dynamically create manager card based on user info
const createManager = (employee) => {
    return `
    <div class="cell">
        <div class="card">
            <div class="employee-name">
                <h3>${employee.name}</h3>
            </div>
            <div class="employee-role">
                <h5><span class="material-icons">
                    work
                    </span>
                    Manager</h5>
            </div>
            <div class="card-section">
                <p>ID: ${employee.id} </p>
                <p>Email: ${employee.email} </p>
                <p>Office Number: ${employee.officeNumber} </p>
            </div>
        </div>
    </div>`
}
// dynamically create engineer card 
const createEngineer = (employee) => {
    return `
    <div class="cell">
        <div class="card">
            <div class="employee-name">
                <h3>${employee.name}</h3>
            </div>
            <div class="employee-role">
              <h5><span class="material-icons">
                engineering
                </span> Engineer</h5>
            </div>
            <div class="card-section">
                <p>ID: ${employee.id} </p>
                <p>Email: ${employee.email}</p>
                <p>Github: ${employee.github} </p>
            </div>
        </div>
    </div>`
    
}
// // dynamically create intern card 
const createIntern = (employee) => {
    return `
    <div class="cell">
        <div class="card">
            <div class="employee-name">
                <h3${employee.name}</h3>
            </div>
            <div class="employee-role">
                <h5><span class="material-icons">school</span> Intern</h5>
            </div>
            <div class="card-section">
                <p>ID: ${employee.id}</p>
                <p>Email: ${employee.email}</p>
                <p>School: ${employee.school}</p>
            </div>
        </div>
    </div>`

}

// get 'teamArray' data from index.js and pass through 'for loop' to make cards for each member added by user
// then add those cards to an 'htmlArray'
generateHTML = (data) => {

    htmlArray = [];

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole()
        if (role === 'Manager') {
            const managerCard = createManager(employee)
            htmlArray.push(managerCard);
        } else if (role === 'Engineer') {
            const engineerCard = createEngineer(employee)
            htmlArray.push(engineerCard);
        } else if (role === 'Intern') {
            const internCard = createIntern(employee)
            htmlArray.push(internCard)
        };
    };

    // put all of the cards together in the 'htmlArray'
    const teamCards = htmlArray.join('');
    

}




module.exports = generateHTML;