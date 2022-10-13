const Employee = require('../lib/Employee');
const employeeInfo = new Employee ("Andreshea Caldwell",1,"andreshea@email.com");

describe('employee', () => {
    it ('should create an instantion of an employee class', ()=>{
       expect(typeof(employeeInfo)).toEqual("object")
    })
})

describe('class Employee name property', ()=>{
    it('the getName method should return the name', ()=>{
        expect(employeeInfo.getName()).toEqual("Andreshea Caldwell")
    })
})