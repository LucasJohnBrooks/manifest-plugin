# 🚀 manifest-plugin

A powerful **Webpack plugin** designed to generate a customizable and lightweight manifest of your compiled assets. Simplify asset management, improve cache control, and integrate seamlessly into modern web development workflows.

![Manifest Plugin Banner](https://raw.githubusercontent.com/LucasJohnBrooks/manifest-plugin/main/banner.png)

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

## 🚀 Usage

### Basic Setup

```js
const ManifestPlugin = require('manifest-plugin');

module.exports = {
  // your webpack config
  plugins: [
    new ManifestPlugin({
      fileName: 'manifest.json',  // default
    }),
  ],
};
```

### Sample Output (`manifest.json`)

```json
{
  "main.js": "main.9f123abc.js",
  "style.css": "style.a8c76f.css"
}
```

---

## ⚙️ Options

| Option     | Type     | Default           | Description                              |
| ---------- | -------- | ----------------- | ---------------------------------------- |
| `fileName` | `string` | `'manifest.json'` | Output filename for the manifest file.   |
| `map`      | `func`   | `undefined`       | Custom function to modify manifest keys. |

Example with custom `map`:

```js
new ManifestPlugin({
  fileName: 'my-manifest.json',
  map: (key, value) => key.toUpperCase(),
});
```

---

## 💡 Why Use manifest-plugin?

✅ Better control over assets in caching/CDN
✅ Useful for server-side rendering or asset injection
✅ Easy integration with frameworks like React, Vue, Next.js

---

## 🛠 Development

1. Clone the repository:

```bash
git clone https://github.com/LucasJohnBrooks/manifest-plugin.git
cd manifest-plugin
```

2. Install dependencies:

```bash
npm install
```

3. Build:

```bash
npm run build
```

4. Run Tests:

```bash
npm test
```

---

## 🙌 Contributing

Contributions, suggestions, and issue reports are warmly welcome!
Please open an issue or submit a pull request.

---

## 📄 License

MIT License © [Lucas John Brooks](https://github.com/LucasJohnBrooks)

---

## 🌐 Links

* 🔗 **GitHub:** [manifest-plugin](https://github.com/LucasJohnBrooks/manifest-plugin)
* 📦 **NPM:** [manifest-plugin](https://www.npmjs.com/package/manifest-plugin)

---

![Logo](https://raw.githubusercontent.com/LucasJohnBrooks/manifest-plugin/main/logo.png)
