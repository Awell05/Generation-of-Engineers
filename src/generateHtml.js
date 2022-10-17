const { getRandomValues } = require('crypto');
const fs = require('fs');


// function generateManagerCards(manager){
//     return `<div>${manager.name}</div>`}



const generateHtml = ()=> {
    let indexData = 
     `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./style.css"/>
    <title> Software Engineer Team </title>
</head>
<body>
    <nav class ="nav"> My Team </nav>
<div class = "div" >
{generateCards}
{generateManagerCards()}
    {generateEngineerCards()}
    {generateInternCards()}
</div>
    <script src="index.js"></script> 
</body>
</html>
`
fs.writeFile('./dist/index.html', indexData, (err) => {
    if (err)
        console.log(err);
    else {
            console.log ('Index.HTML file generated. Take a look!');
    }

    const generateCards = (team) => {
        team.forEach(employee => {
            switch(getRole(employee)){
                case "Manager":
                    // let managerCard = document.createElement("h3");
    
                    break;
                case "Engineer":

                    break;
                case "Intern":

                 break;
            }
        })
    }
});
};

module.exports = generateHtml;