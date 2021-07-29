const Employee = require('../lib/Employee');

describe("Employee class", () => {
    it("Creates a new employee", () => {
        const employee = new Employee("Ryan", 1, "email@email.com");
        expect(employee).toEqual(employee)
    });
});

describe("getName", () => {
    it("Return name", () => {
        expect(new Employee("Ryan").getName("Ryan")).toBe("Ryan");
    })
});

describe("getRole", () => {
    it("Return role", () => {
        expect(new Employee("Employee").getName("Employee")).toBe("Employee");
    })
});

describe("getId", () => {
    it("Return id", () => {
        expect(new Employee("1").getName("1")).toBe("1");
    })
});

describe("getEmail", () => {
    it("Return email", () => {
        expect(new Employee("Ryan@email.com").getName("Ryan@email.com")).toBe("Ryan@email.com");
    })
});