const Intern = require("../lib/Intern");

describe("Intern", () => {
  describe("Initialization", () => {
    it("should create an object with a name, id, email, and school if provided valid arguments", () => {
      const intern = new Intern("Abed", "3", "abed@hotmail.com", "UBC");

      // Verify that the new object has the correct properties
      expect(intern.name).toEqual("Abed");
      expect(intern.id).toEqual("3");
      expect(intern.email).toEqual("abed@hotmail.com");
      expect(intern.school).toEqual("UBC");
    });

    it("should throw an error if provided no arguments", () => {
      // Wrap the object initialization in a callback function that Jest will run
      const cb = () => new Intern();

      // Verify that an error was thrown in the callback function
      expect(cb).toThrow();
    });

    it("should throw an error if 'school' is not a string", () => {
      const cb = () => new Intern("Abed", "2", "abed@hotmail.com", 3);
      const err = new Error(
        "Expected parameter 'school' to be a non-empty string"
      );

      expect(cb).toThrowError(err);
    });

    it("should throw an error if not provided a github username", () => {
      const cb = () => new Intern("Abed", "2", "abed@hotmail.com");

      const err = new Error(
        "Expected parameter 'school' to be a non-empty string"
      );

      expect(cb).toThrowError(err);
    });
  });

  describe("getGithub", () => {
    it("should return the office number of the Intern class instance", () => {
      const intern = new Intern("Abed", "2", "abed@hotmail.com", "UBC");
      const school = "UBC";

      expect(intern.getSchool()).toEqual(school);
    });
  });

  describe("getRole", () => {
    it("should return 'Intern' as the role of the Intern class instance", () => {
      const intern = new Intern("Abed", "2", "abed@hotmail.com", "UBC");

      expect(intern.getRole()).toEqual("Intern");
    });
  });
});
