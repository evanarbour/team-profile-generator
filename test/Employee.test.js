const Employee = require('../lib/Employee');

describe("Employee", () => {
    describe("Object", () => {
        it("creates an Employee object", () => {
            const employee = new Employee ("Evan Arbour", 22, "evan.arbour@email.com");

            expect(employee.name).toBe('Evan Arbour');
            expect(employee.id).toEqual(22);
            expect(employee.email).toBe("evan.arbour@email.com");

        })
    })
    describe("getName", () => {
        it("returns employee name from getName()", () => {
            const employee = new Employee ("Evan Arbour", 22, "evan.arbour@email.com");

            expect(employee.getName()).toBe("Evan Arbour");
        })
    })
    describe("getID", () => {
        it("returns employee ID from getId()", () => {
            const employee = new Employee ("Evan Arbour", 22, "evan.arbour@email.com");

            expect(employee.getId()).toEqual(22);
        })
    })
    describe("getEmail", () => {
        it("returns employee Email from getEmail()", () => {
            const employee = new Employee ("Evan Arbour", 22, "evan.arbour@email.com");

            expect(employee.getEmail()).toBe("evan.arbour@email.com");
        })
    })
    describe("getRole", () => {
        it("returns employee role from getRole()", () => {
            const employee = new Employee ("Evan Arbour", 22, "evan.arbour@email.com");

            expect(employee.getRole()).toBe('Employee');
        })
    })
})
