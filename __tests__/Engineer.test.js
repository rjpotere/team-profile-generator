const Engineer = require('../lib/Engineer');

describe("Employee class", () => {
    it("Creates a new employee", () => {
        const employee = new Engineer("Ryan", 1, "email@email.com", "githubuser");
        expect(employee).toEqual(employee)
    });
});

describe("getRole", () => {
    it("Return role", () => {
        expect(new Engineer().getRole("Engineer")).toBe("Engineer");
    })
});

describe("getGithub", () => {
    it("Return github username", () => {
        expect(new Engineer("githubuser").getGithub("githubuser")).toBe("githubuser");
    })
});