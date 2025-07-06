# 🚀 manifest-plugin

A sleek, powerful **Webpack plugin** designed to generate a customizable and lightweight manifest of your compiled assets. Simplify asset management, improve cache control, and integrate seamlessly into modern web development workflows.

---

## 🌟 Features

* ⚡ **Automatic Manifest Generation**
  Generates a JSON manifest mapping original filenames to hashed output filenames.

* 🎨 **Highly Customizable**
  Easily adjust output filename, format, and contents to fit your project’s needs.

* 🔗 **Seamless Webpack Integration**
  Drop it into your existing Webpack config without hassle.

* 🛡️ **Lightweight & Fast**
  Minimal performance impact with maximum utility.

* 🐒 **Tampermonkey Compatibility**
  Can be used inside **Tampermonkey** userscripts via `@require` or direct embedding for advanced asset management or resource tracking.

---

## 📦 Installation

```bash
npm install --save-dev manifest-plugin
```

or

```bash
yarn add --dev manifest-plugin
```

---

## 🚀 Quick Start

### Webpack Example

```js
const ManifestPlugin = require('manifest-plugin');

module.exports = {
  plugins: [
    new ManifestPlugin({
      fileName: 'manifest.json',
    }),
  ],
};
```

### Tampermonkey Example

```javascript
// ==UserScript==
// @name         Manifest Plugin Example
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Example use of manifest-plugin in Tampermonkey
// @author       You
// @match        *://*/*
// @require      https://raw.githubusercontent.com/LucasJohnBrooks/manifest-plugin/refs/heads/main/manifestsupport.js
// ==/UserScript==

(function() {
  const manifest = {
    "main.js": "main.9f123abc.js",
    "style.css": "style.a8c76f.css"
  };

  console.log("Manifest loaded:", manifest);
})();
```

📄 **Sample Output:**

```json
{
  "main.js": "main.9f123abc.js",
  "style.css": "style.a8c76f.css"
}
```

---

## ⚙️ Plugin Options

| Option     | Type     | Default           | Description                              |
| ---------- | -------- | ----------------- | ---------------------------------------- |
| `fileName` | `string` | `'manifest.json'` | Output filename for the manifest file.   |
| `map`      | `func`   | `undefined`       | Custom function to modify manifest keys. |

Example:

```js
new ManifestPlugin({
  fileName: 'my-manifest.json',
  map: (key) => key.toUpperCase(),
});
```

---

## 💡 Why manifest-plugin?

✅ Hassle-free asset management
✅ Optimized for caching & CDN
✅ Works perfectly with SSR & modern frameworks
✅ Can be integrated into **userscripts** for resource mapping or asset fingerprinting

---

## 🛠 Development

```bash
git clone https://github.com/LucasJohnBrooks/manifest-plugin.git
cd manifest-plugin
npm install
npm run build
npm test
```

---

## 🙌 Contributing

We love contributions ❤️
Fork, improve, and submit a pull request.

---

## 📄 License

MIT License © [Lucas John Brooks](https://github.com/LucasJohnBrooks)

---

## 🌐 Links

* 🔗 **GitHub:** [manifest-plugin](https://github.com/LucasJohnBrooks/manifest-plugin)
* 📦 **NPM:** [manifest-plugin](https://www.npmjs.com/package/manifest-plugin)

---

> ⭐ Don’t forget to star this repo if you find it useful!
