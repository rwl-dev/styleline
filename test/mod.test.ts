import { assertEquals } from "../deps.ts";
import type { CSS } from "../deps.ts";
import { convertStyle } from "../mod.ts";

const singleValue: CSS.Properties = {
  color: "red",
};

const multiValue: CSS.Properties = {
  color: "red",
  fontWeight: "bold",
};

Deno.test("convert style - single value", () => {
  assertEquals(convertStyle(singleValue), "color: red;");
});

Deno.test("convert style - multi value", () => {
  assertEquals(convertStyle(multiValue), "color: red;font-weight: bold;");
});
