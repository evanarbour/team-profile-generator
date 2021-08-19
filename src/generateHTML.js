
// dynamically create manager card based on user info
const createManager = (employee) => {
    return `
    
    `
}
// dynamically create engineer card 
const createEngineer = () => {

}
// // dynamically create intern card 
const createIntern = () => {

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