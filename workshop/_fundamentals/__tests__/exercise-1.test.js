const letterCount = require("../exercise-1");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 1", () => {
  expect(letterCount(["crisp", "bacon"])).toBe(10);
  // add more tests here...
  expect(letterCount(["fried", "eggs"])).toBe(9);
  expect(letterCount(["one", "two", "three"])).toBe(11);
  expect(letterCount(["JavaScript", "HTML", "CSS", "React"])).toBe(22);
});
