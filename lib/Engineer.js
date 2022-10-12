const employee = require('./Employee');

class Engineer extends employee {
    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github;
    }
    getGithub(){}
    getRole(){
        return 'Engineer'
    }
}

module.exports = Engineer;