const {Manager} = require('../lib/Manager');
const managerInfo = new Manager ("Leroy", 2, "leroy@email.com", 5687898741);
describe('Manager',() =>{
    it ('should create an new manager class', () => {
        expect(typeof(managerInfo)).toEqual("object");
    })
})
describe('class Manager role property',() =>{
    it('the getRole method should return role', () => {
        expect(managerInfo.getRole()).toEqual('Manager');
    } )
})
