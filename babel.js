> vue babel 
```
  let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
console.log(x); // 1
console.log(y); // 2
console.log(z); // { a: 3, b: 4 }
```

> npm install --save-dev babel-plugin-transform-object-rest-spread

> {
  "plugins": [
    ["transform-object-rest-spread", { "useBuiltIns": true }]
  ]
}

or 

> {
  "plugins": ["transform-object-rest-spread"]
}
