# easy_letters
Fullstack CV &amp; cover letter creator 


# AgroMachines_Firebase

Company website revuilt with Vite &amp; Firebase

# descriptions 
pnpm create vite main-app --template react-ts
pnpm add react-router-dom localforage match-sorter sort-by
pnpm add sass
pnpm add firebase
pnpm install react-icons


/* vscode prompt terminal
firebase experiments:enable webframeworks 
firebase init

pnpm add -S aos
pnpm add -S @types/aos@latest
pnpm add -S @types/node@latest

pnpm add -S react-slick
pnpm add -S @types/react-slick@latest
pnpm add -S slick-carousel


pnpm add -S react-device-detect
pnpm add -S react-render-if-visible  


pnpm add -S react-photo-album /* nice photo album 

pnpm add -D vite-plugin-sitemap
pnpm add -D terser  /* roll up build plug-in

pnpm add @uidotdev/usehooks  /* blocks UI under pop up https://usehooks.com/uselockbodyscroll ### other interesting react hooks there 
pnpm add react-swipeable

firebase init functions

    /* allow npm installation 
    /* in package.json change "build" like below to move index.html to function's folder:
     "scripts": {
        "dev": "vite",
        "build": "tsc && vite build && cp dist/index.html functions/dynamicIndex/index.html && rm dist/index.html",
        "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
        "preview": "vite preview"
    },

    /*in Firebase.json add:
    {
    "rewrites": [
      {
        "source": "**",
        "function": "dynamicIndex"
      }
    ]
} 

When ready update index.ts with the new function:

# go in the functions folder and: 

    firebase logout     /* logout if needed from the current logged account
    firebase login      /* log to ai.reddigit@gmail.com
    npm run lint -- --fix
    npm run build

    /* disable eslint line length if needed:

    add in .eslintrc.js:
     rules: {
            .... other rules
            "max-len": "off",
            },

# deploy the new functions from functions folder:
    firebase deploy --only functions

# deploy project on preview link from main-app folder:

firebase hosting:channel:deploy --expires 10m preview2



## commands no comments

pnpm create vite main-app --template react-ts
pnpm add react-router-dom localforage match-sorter sort-by
pnpm add sass
pnpm add firebase

 /* vscode prompt terminal
firebase experiments:enable webframeworks
firebase init

pnpm add -D vite-plugin-sitemap
pnpm add -D terser

pnpm add -S react-device-detect
pnpm add -S aos
pnpm add -S @types/aos@latest

/* insalled till here. Ready to be used as template for new projects
/* firebase must be configered through - .env , utils/firebase-utils.ts, firebase.json

# still not installed

pnpm install react-icons

pnpm add @uidotdev/usehooks
pnpm add react-swipeable

pnpm add -S react-map-interaction
pnpm add -S react-render-if-visible  


pnpm add -S @types/aos@latest
pnpm add -S @types/node@latest

pnpm add -S react-slick
pnpm add -S @types/react-slick@latest
pnpm add -S slick-carousel
pnpm add -S react-photo-album











# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
