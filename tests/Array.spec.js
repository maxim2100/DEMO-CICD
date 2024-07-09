import { expect } from "chai";


describe("stam test suite", () => {
    describe("Test array get sorted", () => {
        it("should sort array by name", () => {
            const name = ["a", "c", "v","b","a"];
            expect(name.sort()).to.equal(['a', 'a', 'b', 'c', 'v' ]);
        })
    })
})
