# Styleline

【English / [日本語](./README_JP.md)】

[![Deno docs](https://img.shields.io/badge/deno-docs-green?logo=deno)](https://doc.deno.land/https://raw.githubusercontent.com/windchime-yk/styleline/main/mod.ts)

Deno module that allows CSS elements to be written in object format in the style
attribute of HTML elements.

## Notice

This module does not support pseudo-classes and pseudo-elements. This is due to
the nature of the direct description in the style attribute.

In the future, it will be changed to output class selectors. Instead of
describing them directly in the style attribute, they are described in the style
element.

## Usage

```typescript
import {
  convertStyle,
  properties,
} from "https://pax.deno.dev/windchime-yk/styleline@{VERSION}/mod.ts";
```

## Permission

Unneeded.

## Sample

```tsx
/** @jsx h */
import { h } from "https://x.lcas.dev/preact@10.5.12/mod.js";
import {
  convertStyle,
  properties,
} from "https://pax.deno.dev/windchime-yk/styleline@{VERSION}/mod.ts";

const sectionStyle = properties({
  marginTop: "10px",
});

const headingStyle = properties({
  fontSize: "2rem",
});

export const Component = () => (
  <section style={convertStyle(sectionStyle)}>
    <h2 style={convertStyle(headingStyle)}>Test</h2>
  </section>
);
```
