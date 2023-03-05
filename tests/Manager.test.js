const Manager = require("../lib/Manager");

describe("Manager", () => {
    describe("Initialization", () => {
        it("should create an object with a name, id, email, and office number if provided valid arguments", () => {
            const manager = new Manager("Abed", "3", "abed@hotmail.com", "3");

            // Verify that the new object has the correct properties
            expect(manager.name).toEqual("Abed");
            expect(manager.id).toEqual("3");
            expect(manager.email).toEqual("abed@hotmail.com");
            expect(manager.officeNum).toEqual("3");
        });

        it("should throw an error if provided no arguments", () => {
            // Wrap the object initialization in a callback function that Jest will run
            const cb = () => new Manager();

            // Verify that an error was thrown in the callback function
            expect(cb).toThrow();
        });

        it("should throw an error if 'officeNum' is not a number", () => {
          const cb = () => new Manager("Abed", "2", "abed@hotmail.com", "3a");
          const err = new Error(
            "Expected parameter 'officeNum' to be a whole positive number"
          );

          expect(cb).toThrowError(err);
        });

        it("should throw an error if 'officeNum' is a float", () => {
          const cb = () => new Manager("Abed", "2", "abed@hotmail.com", "2.2");
          const err = new Error(
            "Expected parameter 'officeNum' to be a whole positive number"
          );

          expect(cb).toThrowError(err);
        });

        it("should throw an error if 'officeNum' is not positive", () => {
          const cb = () => new Manager("Abed", "2", "abed@hotmail.com", "-2");
          const err = new Error(
            "Expected parameter 'officeNum' to be a whole positive number"
          );

          expect(cb).toThrowError(err);
        });

        it("should throw an error if not provided an office number", () => {
          const cb = () => new Manager("Abed", "2", "abed@hotmail.com");

          const err = new Error(
            "Expected parameter 'officeNum' to be a whole positive number"
          );

          expect(cb).toThrowError(err);
        });
    });

    describe("getOfficeNum", () => {
      it("should return the office number of the manager class instance", () => {
        const manager = new Manager("Abed", "2", "abed@hotmail.com", "3");
        const officeNum = "3";

        expect(manager.getOfficeNum()).toEqual(officeNum);
      });
    });

    describe("getRole", () => {
      it("should return 'Manager' as the role of the manager class instance", () => {
        const manager = new Manager("Abed", "2", "abed@hotmail.com", "2");

        expect(manager.getRole()).toEqual("Manager");
      });
    });
});