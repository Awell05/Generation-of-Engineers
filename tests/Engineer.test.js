const {Engineer} = require('../lib/Engineer');
const engineerInfo = new Engineer ("Jackie", 9, "jki@email.com", "jackill09");
describe('Engineer', () => {
    it ('should create new engineer class', ()=>{
       expect(typeof(engineerInfo)).toEqual("object");
    })
})
describe('Engineer', () => {
    it ('getGithub method should return github', () => {
        expect(engineerInfo.getGithub()).toEqual("jackill09");
    })
})
describe("Engineer", () => {
    it('getRole method should return role', () =>{
        expect(engineerInfo.getRole()).toEqual("Engineer")
    })
})