# Styleline

【[English](./README.md) / 日本語】

[![Deno docs](https://img.shields.io/badge/deno-docs-green?logo=deno)](https://doc.deno.land/https://raw.githubusercontent.com/windchime-yk/styleline/main/mod.ts)

HTML要素のstyle属性にCSS要素をオブジェクト形式で記述できるようにするDenoモジュール。

## 利用方法

```typescript
import {
  convertStyle,
  properties,
} from "https://pax.deno.dev/windchime-yk/styleline@{VERSION}/mod.ts";
```

## 利用例

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
