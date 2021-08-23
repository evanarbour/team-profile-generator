
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
                <p>Email:<a href="mailto:${employee.email}"> ${employee.email}</a></p>
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
                <p>Email:<a href="mailto:${employee.email}"> ${employee.email}</a></p>
                <p>Github:<a href="https://www.github.com/${employee.github}" target="_blank"> ${employee.github}</a></p>
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
                <p>Email:<a href="mailto:${employee.email}"> ${employee.email}</a></p>
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
        const role = employee.getRole();
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

    // join all of the strings together (from employee data) into the 'htmlArray'
    
    console.log('----htmlArray HERE----');
    console.log(htmlArray);

    // const teamCards = htmlArray.join('');
   

    // create variable to pass the data to 'createTeamPage'
    const teamPageData = createTeamPage(htmlArray);
    console.log('---- FULL HTML CODE HERE ----')
    console.log(teamPageData);
    return teamPageData;
    
}

// generate HTML file with 'teamCards' data
const createTeamPage = (htmlArray) => {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>My Team</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/foundation-sites@6.6.3/dist/css/foundation.min.css" integrity="sha256-ogmFxjqiTMnZhxCqVmcqTvjfe1Y/ec4WaRj/aQPvn+I=" crossorigin="anonymous">
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
            <link href="https://fonts.googleapis.com/css2?family=Changa+One&display=swap" rel="stylesheet">
            <link rel="stylesheet" href="./style.css">
        </head>
        <body>
            <header>
                <!-- background image -->
            </header>
            <div class="grid-x align-center text-center title-container">
                <div class="cell">
                    <h1 class="title">I got a really big team</h1>
                    <h4>and they need some really big rings</h4>
                </div>
            </div>

            <div class="grid-container">
                <div class="grid-x grid-margin-x align-center text-center small-up-2 medium-up-3">
                    ${htmlArray}
                </div>
            </div>

            <script src="https://cdn.jsdelivr.net/npm/foundation-sites@6.6.3/dist/js/foundation.min.js" 
            integrity="sha256-pRF3zifJRA9jXGv++b06qwtSqX1byFQOLjqa2PTEb2o=" crossorigin="anonymous"></script>
        </body>
        </html>`
}


module.exports = generateHTML;