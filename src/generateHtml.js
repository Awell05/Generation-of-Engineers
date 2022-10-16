const fs = require('fs');

// function generateManagerCards(manager){
//     return `<div>${manager.name}</div>`
// }
const generateHtml = ()=> {
    let indexData = 
     `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> Software Engineer Team </title>
</head>
<body>
<div>
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
});
};

module.exports = generateHtml;