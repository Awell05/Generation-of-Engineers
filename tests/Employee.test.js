const employee = require('../lib/Employee');

describe('employee', () => {
    it ('should provide prompts to user to select team role', ()=>{
       const employeeInfo = new Employee ();

       expect(employee).toEqual(employeeInfo)
    })
})