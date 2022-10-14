const {Intern} = require('../lib/Intern');
const internInfo = new Intern ("toya",5,"toya@email.com","USC");

describe('Intern', () => {
    it ('should create an intern object', ()=>{
       expect(typeof(internInfo)).toEqual('object');
    })
})
describe('Intern', () => {
    it('getSchool method should return school', ()=> {
        expect(internInfo.getSchool()).toEqual("USC");
    })
})
describe('Intern', () => {
    it('getRole method should return role', () =>{
        expect(internInfo.getRole()).toEqual("Intern");
    })
})