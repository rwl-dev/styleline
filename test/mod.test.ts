import { assertEquals } from "../deps.ts";
import { convertStyle, properties } from "../mod.ts";

const singleValue = properties({
  color: "red",
});

const multiValue = properties({
  color: "red",
  fontWeight: "bold",
});

Deno.test("convert style - single value", () => {
  assertEquals(convertStyle(singleValue), "color: red;");
});

Deno.test("convert style - multi value", () => {
  assertEquals(convertStyle(multiValue), "color: red;font-weight: bold;");
});
