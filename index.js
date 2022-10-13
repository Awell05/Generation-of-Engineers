const inquirer = require('inquirer');
const fs = require('fs');
const {engineerQs, Engineer} = require('./lib/Engineer');
const {internQs, Intern} = require('./lib/Intern');
const { managerQs, Manager } = require('./lib/Manager');
const team = []
inquirer
    .prompt(managerQs)
    .then((answer) => {
        console.log(answer);
        const newManager = new Manager(answer.name,answer.id,answer.email,answer.number)
        console.log(newManager)
        team.push(newManager);
        console.log(team);
        return
        switch (answer.teamMember) {
            case "Engineer":
                promptEngineer()        
                break;
            default:
                promptIntern()
                break;
        }
    }).catch((err) => {
        console.log(err)
    });

    function promptEngineer(){
        console.log("prompt engineer trigerred")
        //provide prompt for engineer and push answers to team array
    }
    
    function promptIntern(){
        console.log("prompt intern trigerred")
    }