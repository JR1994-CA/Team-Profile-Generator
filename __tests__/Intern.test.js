
const Intern = require("../lib/Intern.js");

test("creates Intern object with school", () => {
    const school = '';
    const intern = new Intern('', '', '', school);
    expect(intern.school).toBe(school);
});

test("getSchool() functionality", () => {
    const school = '';
    const intern = new Intern('', '', '', school);
    expect(intern.getSchool()).toBe(school);
});

test("getRole() returning Intern", () => {
    const role = 'Intern';
    const intern = new Intern();
    expect(intern.getRole()).toBe(role);
});