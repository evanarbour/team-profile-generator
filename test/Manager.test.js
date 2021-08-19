const Manager= require('../lib/Manager');

describe("Manager", () => {
    describe("Object", () => {
        it("creates an Manager object", () => {
            const manager = new Manager ("Evan Arbour", 22, "evan.arbour@email.com", 385);

            expect(manager.name).toBe('Evan Arbour');
            expect(manager.id).toEqual(22);
            expect(manager.email).toBe("evan.arbour@email.com");
            expect(manager.officeNumber).toBe(385);

        })
    })
    describe("getofficeNumber", () => {
        it("returns manager office number from getofficeNumber()", () => {
            const manager = new Manager ("Evan Arbour", 22, "evan.arbour@email.com", 385);

            expect(manager.getofficeNumber()).toBe(385);
        })
    })
    describe("getRole", () => {
        it("returns manager role from getRole()", () => {
            const manager = new Manager ("Evan Arbour", 22, "evan.arbour@email.com", 385);

            expect(manager.getRole()).toBe("Manager");
        })
    })

})