# SotyBook

Construiremos nuestra UI siguiendo la metodología (CDD) Component-Driven Development. Es un proceso que construye UIs de “abajo hacia arriba”, empezando con los componentes y terminando con las vistas. CDD te ayudará a escalar la cantidad de complejidad con la que te enfrentas a medida que construyes la UI.

Utilizamos Storybook para construir el componente de forma aislada usando datos de prueba. Vamos a “testear visualmente” la apariencia del componente a medida que cambiemos cada estado.

Este proceso es similar a **Test-driven development (TDD)** al que podemos llamar **“Visual TDD”**.

1. Iniciar proyecto con storybook

```js
npx sb init
```

2. Storybook genera los sig. scripts

```js
"scripts": {
   "storybook": "start-storybook -p 6006",
   "build-storybook": "build-storybook"
  }
```

3. Testing with storybook

