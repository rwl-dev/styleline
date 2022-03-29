import type { CSS } from "./deps.ts";

const removeUppercase = (prop: string) => {
  const uppercaseRegex = /([A-Z])/g;
  if (uppercaseRegex.test(prop)) {
    return prop.replace(uppercaseRegex, (match) =>
      `-${match.toLowerCase()}`);
  } else return prop;
};

export const convertStyle = (style: CSS.Properties): string => {
  const obj = Object(style);
  let styleString = "";
  for (const prop in obj) {
    styleString += `${removeUppercase(prop)}: ${obj[prop]};`;
  }
  return styleString;
};
