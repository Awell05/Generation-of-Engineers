// const { getRandomValues } = require('crypto');
const fs = require('fs');




const generateHtml = ()=> {

    const generateCards = (team) => {
        let output = '';
        team.forEach(employee => {
            switch(getRole(employee)){
                case "Manager":
                    output +=
                     `<li> ${employee.name} </li> 
                     <li> ${employee.id} </li> 
                     <li> ${employee.email} </li> 
                     <li> ${employee.number} </li> `
                    break;
                case "Engineer":
                    output += 
                    `<li> ${employee.name} </li>
                    <li> ${employee.id} </li> 
                    <li> ${employee.email} </li> 
                    <li> ${employee.github} </li> `
                    break;
                case "Intern":
                    output += `<li> ${employee.name} </li>
                    <li> ${employee.id} </li> 
                    <li> ${employee.email} </li> 
                    <li> ${employee.school} </li> `
                 break;
        
            };
        });
    };

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
${generateCards()}
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
});
};

module.exports = generateHtml;