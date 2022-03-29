import type { CSS } from "./deps.ts";

/**
 * Determine uppercase and convert to lowercase and hyphen
 */
const removeUppercase = (prop: string) => {
  const uppercaseRegex = /([A-Z])/g;
  if (uppercaseRegex.test(prop)) {
    return prop.replace(uppercaseRegex, (match) => `-${match.toLowerCase()}`);
  } else return prop;
};

/**
 * Wrapper function for CSS rule descriptions
 */
export const properties = (style: CSS.Properties): CSS.Properties => style;

/**
 * Convert CSS rule Object to a string that can be used for style attributes
 */
export const convertStyle = (style: CSS.Properties): string => {
  const obj = Object(style);
  let styleString = "";
  for (const prop in obj) {
    styleString += `${removeUppercase(prop)}: ${obj[prop]};`;
  }
  return styleString;
};
