const Manager = require('../lib/Manager');


describe("Employee class", () => {
    it("Creates a new employee", () => {
        const employee = new Manager("Ryan", 1, "email@email.com", 10);
        expect(employee).toEqual(employee)
    });
});

describe("getRole", () => {
    it("Return role", () => {
        expect(new Manager().getRole("Manager")).toBe("Manager");
    })
});

describe("getOfficeNumber", () => {
    it("Return github username", () => {
        expect(new Engineer(10).getGithub(10)).toBe(10);
    })
});