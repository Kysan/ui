# kysan-ui

## Installation

Run

```
npm i kysan-ui
```

Install the TailwindCSS VSCode
https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss

Go to settings:
search -> "tailwind class attributes"
and then add "s" after "className" "class" and "ngClass"

that all :)

## Explication

résumé:
je fais mes UI 10x plus vite que vous grace à une méthode que j'ai inventé

pour résumé je fais du RowColumnFixedFull

TUTO YTB ICI

une fois que t'as compris ça tu peux refaire le layout de discord en 30 secondes
(je ferai un video ytb)

tout ce qu'il reste ensuite c'est les padding/margin, la typographie et enfin les icons

voila tout il ne vous reste plus qu'a apprendre

- routing (react-router)
- state management (Zustand/Redux)
- aggreagation (Axios/Fetch)

voila ceci n'est que la base de mon futur toolkit

"@leet/ui"
"@leet/state"
"@leet/routing"
"@leet/api"

note: je pense que Column et Row sont plus parlant que "VerticalBox" et "HorizontalBox"

## Exemple

```tsx
const Cart = () => {
  // ...

  return (
    <Column s="h-full gap-2 items-center overflow-auto">
      <Heading s="text-4xl font-minecraft font-black mb-4">Your Cart</Heading>
      <CartProducts />
      <CartActionButtons />
    </Column>
  );
};
```

## Todo

- video ytb
- doc plus détaillé
- doc en anglais
- exemple
- changer le nom de la lib en `flexy` ou `@kysan/ui`
