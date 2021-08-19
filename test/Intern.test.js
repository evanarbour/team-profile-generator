const Intern = require('../lib/Intern');

describe("Intern", () => {
    describe("Object", () => {
        it("creates an Intern object", () => {
            const intern = new Intern ("Evan Arbour", 22, "evan.arbour@email.com", "State College");

            expect(intern.name).toBe('Evan Arbour');
            expect(intern.id).toEqual(22);
            expect(intern.email).toBe("evan.arbour@email.com");
            expect(intern.school).toBe("State College");

        })
    })
    describe("getSchool", () => {
        it("returns intern school from getSchool()", () => {
            const intern = new Intern ("Evan Arbour", 22, "evan.arbour@email.com", "State College");

            expect(intern.getSchool()).toBe("State College");
        })
    })
    describe("getRole", () => {
        it("returns intern role from getRole()", () => {
            const intern = new Intern ("Evan Arbour", 22, "evan.arbour@email.com", "State College");

            expect(intern.getRole()).toBe("Intern");
        })
    })

})