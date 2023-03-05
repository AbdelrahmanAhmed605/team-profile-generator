const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  describe("Initialization", () => {
    it("should create an object with a name, id, email, and github username if provided valid arguments", () => {
      const engineer = new Engineer("Abed", "3", "abed@hotmail.com", "AbdelrahmanAhmed605");

      // Verify that the new object has the correct properties
      expect(engineer.name).toEqual("Abed");
      expect(engineer.id).toEqual("3");
      expect(engineer.email).toEqual("abed@hotmail.com");
      expect(engineer.github).toEqual("AbdelrahmanAhmed605");
    });

    it("should throw an error if provided no arguments", () => {
      // Wrap the object initialization in a callback function that Jest will run
      const cb = () => new Engineer();

      // Verify that an error was thrown in the callback function
      expect(cb).toThrow();
    });

    it("should throw an error if 'github' is not a string", () => {
      const cb = () => new Engineer("Abed", "2", "abed@hotmail.com", 3);
      const err = new Error(
        "Expected parameter 'github' to be a non-empty string"
      );

      expect(cb).toThrowError(err);
    });

    it("should throw an error if not provided a github username", () => {
      const cb = () => new Engineer("Abed", "2", "abed@hotmail.com");

      const err = new Error(
        "Expected parameter 'github' to be a non-empty string"
      );

      expect(cb).toThrowError(err);
    });
  });

  describe("getGithub", () => {
    it("should return the office number of the Engineer class instance", () => {
      const engineer = new Engineer("Abed", "2", "abed@hotmail.com", "AbdelrahmanAhmed605");
      const github = "AbdelrahmanAhmed605";

      expect(engineer.getGithub()).toEqual(github);
    });
  });

  describe("getRole", () => {
    it("should return 'Engineer' as the role of the Engineer class instance", () => {
      const engineer = new Engineer("Abed", "2", "abed@hotmail.com", "AbdelrahmanAhmed605");

      expect(engineer.getRole()).toEqual("Engineer");
    });
  });
});
