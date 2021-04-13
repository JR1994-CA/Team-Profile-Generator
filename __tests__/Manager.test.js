const Manager = require('../lib/Manager.js');

test("creates manager object with office number", () => {
    const number = '';
    const manager = new Manager('', '', '', number);
    expect(manager.officeNumber).toBe(number);

});

test("getRole() functionality", () => {
    const role = "Manager";
    const manager = new Manager();
    expect(manager.getRole()).toBe(role);
});
