const intern = require('../lib/Intern');

describe('Intern', () => {
    it ('should provide prompts to user to select team role and generate role and school', ()=>{
       const internInfo = new Intern ();

       expect(Intern).toEqual(internInfo);
    })
})