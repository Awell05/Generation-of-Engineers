const manager = require('../lib/Manager');

describe('manager',() =>{
    it ('should generate a prompt for the user to input managers name, employee ID, email address, and office number'), () => {
        // const manager = new Manager {prompt.name, prompt.id, prompt.email,prompt.officeNumber};
        
        expect(manager).toEqual(managerInfo);
    }
})