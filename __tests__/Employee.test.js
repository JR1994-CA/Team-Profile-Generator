
const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee.js');

test("creates Employee object", () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe("object");
});

test("creates object with name", () => {

    const name = '';
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
});

test("creates object with name and id", () => {

    const id = '';
    const employee = new Employee('', id);
    expect(employee.id).toBe(id);
})

test("creates object with name, id and email", () => {
    const email = '';
    const employee = new Employee('', '', email);
    expect(employee.email).toBe(email);

})

test("getName() functionality", () => {

    const name = '';
    const employee = new Employee(name);
    expect(employee.getName()).toBe(name);
})
test("getId() functionality", () => {

    const id = '';
    const employee = new Employee('', id);
    expect(employee.getId()).toBe(id);
})
test("getEmail() functionality", () => {

    const email = '';
    const employee = new Employee('', '', email);
    expect(employee.getEmail()).toBe(email);
})


