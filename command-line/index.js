const figlet = require("figlet");


function text(){
    console.log(figlet.textSync('Ciao!', {
        font: "3D-ASCII",
    }));
    }

text()