const fs = require('fs');
const generateCss = () => {
    let styleSheet = 
    `
     * {
        font-family: "Lucida Console", "Courier New", monospace:
     }

     .nav {
        background-image: linear-gradient(to right, blue , green);
        color: white;
        height: 200 px;
        padding: 150 px;
        margin: 150 px;
        text-align: center;
    
     }

     .div {
        color: black;
        background-color: white;
        width: 40%;
        height: 300px;
     }
    `;
    

    fs.writeFile("./dist/style.css", styleSheet, (err) => {
        if (err)
            console.log(err);
        else {
                console.log ('style.css file generated. Take a look!');
}}
)};


module.exports = generateCss;