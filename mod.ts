import type { CSS } from "./deps.ts";

/**
 * 文字列内のUppercaseを判別し、Lowercaseに変換する
 */
const removeUppercase = (prop: string) => {
  const uppercaseRegex = /([A-Z])/g;
  if (uppercaseRegex.test(prop)) {
    return prop.replace(uppercaseRegex, (match) => `-${match.toLowerCase()}`);
  } else return prop;
};

/**
 * CSSルール記述のラッパー関数
 */
export const properties = (style: CSS.Properties): CSS.Properties => style;

/**
 * CSSルールのObjectをstyle属性に利用できる文字列に変換
 */
export const convertStyle = (style: CSS.Properties): string => {
  const obj = Object(style);
  let styleString = "";
  for (const prop in obj) {
    styleString += `${removeUppercase(prop)}: ${obj[prop]};`;
  }
  return styleString;
};
