import { TestComponent } from "../index";

test("TestComponent", () => {
  expect(TestComponent("q")).toBe("TestComponent q");
});
