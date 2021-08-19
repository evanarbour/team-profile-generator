const Engineer = require('../lib/Engineer');

describe("Engineer", () => {
    describe("Object", () => {
        it("creates an Engineer object", () => {
            const engineer = new Engineer ("Evan Arbour", 22, "evan.arbour@email.com", "github");

            expect(engineer.name).toBe('Evan Arbour');
            expect(engineer.id).toEqual(22);
            expect(engineer.email).toBe("evan.arbour@email.com");
            expect(engineer.github).toBe("github");

        })
    })
    describe("getGithub", () => {
        it("returns engineer github from getGithub()", () => {
            const engineer = new Engineer ("Evan Arbour", 22, "evan.arbour@email.com", "github");

            expect(engineer.getGithub()).toBe("github");
        })
    })
    describe("getRole", () => {
        it("returns engineer role from getRole()", () => {
            const engineer = new Engineer ("Evan Arbour", 22, "evan.arbour@email.com", "github");

            expect(engineer.getRole()).toBe("Engineer");
        })
    })

})