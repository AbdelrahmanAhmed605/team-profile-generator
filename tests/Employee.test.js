const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("Initialization", () => {
    it("should create an object with a name, id, and email if provided valid arguments", () => {
      const employee = new Employee("Abed", "3", "abed@hotmail.com");

      // Verify that the new object has the correct properties
      expect(employee.name).toEqual("Abed");
      expect(employee.id).toEqual("3");
      expect(employee.email).toEqual("abed@hotmail.com");
    });

    it("should throw an error if provided no arguments", () => {
      // Wrap the object initialization in a callback function that Jest will run
      const cb = () => new Employee();

      // Verify that an error was thrown in the callback function
      expect(cb).toThrow();
    });

    it("should throw an error if 'name' is not a string", () => {
      const cb = () => new Employee(3, "2", "abed@hotmail.com");
      const err = new Error(
        "Expected parameter 'name' to be a non-empty string"
      );

      expect(cb).toThrowError(err);
    });

    it("should throw an error if 'id' is not a number", () => {
      const cb = () => new Employee("Abed", "2a", "abed@hotmail.com");
      const err = new Error(
        "Expected parameter 'id' to be a whole positive number"
      );

      expect(cb).toThrowError(err);
    });

    it("should throw an error if 'id' is a float", () => {
      const cb = () => new Employee("Abed", "2.2", "abed@hotmail.com");
      const err = new Error(
        "Expected parameter 'id' to be a whole positive number"
      );

      expect(cb).toThrowError(err);
    });

    it("should throw an error if 'id' is not positive", () => {
      const cb = () => new Employee("Abed", "-2", "abed@hotmail.com");
      const err = new Error(
        "Expected parameter 'id' to be a whole positive number"
      );

      expect(cb).toThrowError(err);
    });

    it("should throw an error if 'email' is not a string", () => {
      const cb = () => new Employee("Abed", "2", 2);
      const err = new Error(
        "Expected parameter 'email' to be a non-empty string"
      );

      expect(cb).toThrowError(err);
    });

    it("should throw an error if not provided an email", () => {
      const cb = () => new Employee("Abed", "2");

      const err = new Error(
        "Expected parameter 'email' to be a non-empty string"
      );

      expect(cb).toThrowError(err);
    });
  });

  describe("getName", () => {
    it("should return the name of the employee class instance", () => {
        const employee = new Employee("Abed", "2", "abed@hotmail.com");
        const name = "Abed"

      expect(employee.getName()).toEqual(name);
    });
  });
    
    describe("getId", () => {
      it("should return the id of the employee class instance", () => {
        const employee = new Employee("Abed", "2", "abed@hotmail.com");
        const id = "2";

        expect(employee.getId()).toEqual(id);
      });
    });

    describe("getEmail", () => {
      it("should return the name of the employee class instance", () => {
        const employee = new Employee("Abed", "2", "abed@hotmail.com");
        const email = "abed@hotmail.com";

        expect(employee.getEmail()).toEqual(email);
      });
    });

    describe("getRole", () => {
      it("should return 'Employee' as the role of the employee class instance", () => {
        const employee = new Employee("Abed", "2", "abed@hotmail.com");

        expect(employee.getRole()).toEqual('Employee');
      });
    });
});
