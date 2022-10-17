const inquirer = require('inquirer');
const fs = require('fs');
const { engineerQs, Engineer } = require('./lib/Engineer');
const { internQs, Intern } = require('./lib/Intern');
const { managerQs, Manager } = require('./lib/Manager');
const generateHtml = require('./src/generateHtml');
const generateCss = require('./src/generateCss');
const team = []

inquirer
    .prompt(managerQs)
    .then((answer) => {
        console.log(answer);
        const newManager = new Manager(answer.name, answer.id, answer.email, answer.number)
        console.log(newManager)
        team.push(newManager);
        console.log(team);
        switch (answer.teamMember) {
            case "Engineer":
                promptEngineer()
                break;
            case "Intern":
                promptIntern()
                break;
        }
    }).catch((err) => {
        console.log(err)
    });

function promptEngineer() {
    inquirer
        .prompt(engineerQs)
        .then((answer) => {
            console.log(answer)
            const newEngineer = new Engineer(answer.name, answer.id, answer.email, answer.github)
            console.log(newEngineer);
            team.push(newEngineer);
            console.log(team);
            switch (answer.teamMember) {
                case "Engineer":
                    promptEngineer()
                    break;
                case "Intern":
                    promptIntern()
                    break;
                default:
                    console.log(answer.teamMember);
                    generateHtml(answer.teamMember); 
                    generateCss(answer.teamMember);
            }
        }).catch((err) => {
            console.log(err)
        });
    }


    
    function promptIntern(){
        inquirer
            .prompt(internQs)
            .then((answer) => {
                console.log(answer)
                const newIntern = new Intern(answer.name, answer.id, answer.email, answer.school)
                console.log(newIntern);
                team.push(newIntern);
                console.log(team);
                switch (answer.teamMember) {
                    case "Engineer":
                        promptEngineer()
                        break;
                    case "Intern":
                        promptIntern()
                        break;
                    default: 
                        console.log(answer.teamMember);
                        generateHtml(answer.teamMember);
                        generateCss(answer.teamMember);
                        
                }
            }).catch((err) => {
                console.log(err)
            });
    }
  