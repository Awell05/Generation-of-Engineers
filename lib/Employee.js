const inquirer = require('inquirer');


inquirer
.prompt ([
    {
        type: 'input',
        message: "What is the team manager's name?",
        name: 'managerName',
    },
    { 
        type: 'input',
        message: "What is the team manager's id?",
        name: 'id',       
    },
    {
        type: 'input',
        message: "What is the team manager's email ?",
        name: 'email',
    },
    {
        type: 'input',
        message: "What is the team manager's office number?",
        name: 'number',
    },
    {
        type: 'list',
        message: 'Which type of team member would you like to add?',
        name: 'teamMember',
        choices: ['Engineer', 'Intern'],
    }

])
.then((answer)=>{
    console.log(answer);
    console.log(answer.teamMember);
    switch(answer.teamMember) {
        case "Engineer":
        console.log('you have chosen engineer team member');
        break;
        case "Intern":
        console.log('you have chosen intern team memeber');
        break;
    }
}).catch((err)=>{
    console.log(err)
});


// class Employee {
//     constructor(name, id, email,number){
//         this.name = name;
//         this.id = id;
//         this.email = email;
//         this.number = number;
//     }

//     getName(){
//         console.log(this.name);
//     }

//     getId(){console.log(this.id)};

//     getEmail(){console.log(this.email)};

//     getRole(){
//         return "Employee"
//     }
// }





// module.exports = Employee;