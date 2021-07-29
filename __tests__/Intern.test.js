const Intern = require('../lib/Intern');

describe("Employee class", () => {
    it("Creates a new employee", () => {
        const employee = new Intern("Ryan", 1, "email@email.com", "PSU");
        expect(employee).toEqual(employee)
    });
});

describe("getRole", () => {
    it("Return role", () => {
        expect(new Intern().getRole("Intern")).toBe("Intern");
    })
});

describe("getSchool", () => {
    it("Return school name", () => {
        expect(new Intern().getSchool("PSU")).toBe("PSU");
    })
});