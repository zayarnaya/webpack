**Сборка WebPack 5 + React + TS + SCSS modules**

- конфигурационные файлы разделены на общий, development и production (сборка делается в разные директории - `dist`  и `build` соответственно)
- правила и конфигурация плагинов вынесены в модули
- dev server с hot reload
- code splitting (chunks) + отдельные файлы скриптов (в сборке демонстрационный скрипт чисто ради скрипта)
- aliases

Зависимости: 
```
  "devDependencies": {
    "@babel/core": "7.23.7",
    "@babel/preset-env": "7.23.8",
    "@babel/preset-react": "7.23.3",
    "@types/react": "18.2.47",
    "@types/react-dom": "18.2.18",
    "@types/react-router-dom": "5.3.3",
    "babel-loader": "9.1.3",
    "classnames": "2.5.1",
    "css-loader": "6.9.0",
    "html-webpack-plugin": "5.6.0",
    "mini-css-extract-plugin": "2.7.7",
    "node-sass": "9.0.0",
    "prettier": "3.2.4",
    "sass": "1.69.7",
    "sass-loader": "13.3.3",
    "style-loader": "3.3.4",
    "ts-loader": "9.5.1",
    "typescript": "5.3.3",
    "webpack": "5.89.0",
    "webpack-cli": "5.1.4",
    "webpack-dev-server": "4.15.1",
    "webpack-merge": "5.10.0",
    "webpack-notifier": "1.15.0"
  },
  "dependencies": {
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "react-router-dom": "6.21.2"
  }
```

Установка зависимостей `npm install`

Development build `npm run dev`

Dev server `npm run serve`

Production build `npm run build`
