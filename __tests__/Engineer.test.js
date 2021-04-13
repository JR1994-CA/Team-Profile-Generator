
const Engineer = require("../lib/Engineer.js");

test("creates Engineer object with github username", () => {
    const githubUserName = '';
    const engineer = new Engineer('', '', '', githubUserName);
    expect(engineer.github).toBe(githubUserName);
});

test("getRole() returning Engineer", () => {
    const role = "Engineer";
    const engineer = new Engineer();
    expect(engineer.getRole()).toBe(role);
});

test("getGitHub() functionality", () => {
    const username = '';
    const engineer = new Engineer('', '', '', username);
    expect(engineer.getGitHub()).toBe(username);
});