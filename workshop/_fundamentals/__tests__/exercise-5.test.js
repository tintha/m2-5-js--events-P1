const getDaysInMonth = require("../exercise-5");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 5", () => {
  expect(getDaysInMonth("November")).toBe(30);
  // add more tests here...
  expect(getDaysInMonth("March")).toBe(31);
  expect(getDaysInMonth(5435)).toBe("error");
  expect(getDaysInMonth("June")).toBe(30);
  expect(getDaysInMonth("Julio")).toBe("error");
});
