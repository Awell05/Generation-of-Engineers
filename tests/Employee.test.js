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
describe('class Employee id property', () =>{
    it('the getId method should return the id', ()=>{
        expect(employeeInfo.getId()).toEqual(1)
    })
})
describe('class Employee email property', () =>{
    it('the getEmail method should return the email', () =>{
        expect(employeeInfo.getEmail()).toEqual("andreshea@email.com")
    })
})
describe('class Employee role property', () =>{
    it('the getRole method should return the role',()=>{
        expect(employeeInfo.getRole()).toEqual('Employee')
    })
})