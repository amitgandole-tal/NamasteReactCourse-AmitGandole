# Food app

/\*\* \***App Structure (Planning)**\*\*

- Header
- - Logo
- - Nav items
- Body
- - Search
- - Restraunt Container
- - Restraunt Card
- - Img
- - Name of res, star rating, cuisine, delivery time
- Footer
- - Copyright
- - Links
- - Address
- - Contact
    \*/

# React Hooks

(Normal JS Utility functions)

- useState() - To update states of variable and to trigger render reconcialiation cycle
- useEffect() - This will call once render cycle is completed. This can be used to call API.
  - if called with []. it will call once
  - if called without any argument, it will be called everytime render triggered.
  - if called with any perticular state : [myObject] : then it will call whenever myObject is updated and render cycle is triggered.
  - to unmount (destroy) subscriptions, we can use return () =>{ //Write your destroy code here }

## Custom Hooks

Custom hooks more are like services. We can write reusable code in custom hooks and that can be used in multiple components.

# React Fiber

Must read for understaing React fiber in depth :
https://github.com/acdlite/react-fiber-architecture

How react state or hooks work?

1. React uses reconcialiation method to compute between old and new dom objects. This computation means, Finding diff between old and new dom object.
2. This computed diff is getting used by renderer which updates and renders the dom based on the diff.
3. This Algorithm is know as React fiber.

# Bundling application

# Lazy Loading/On Demand Loading

    use lazy. import from react
    use suspense in routing (See in app.js)

# Ways to add css

SCSS
SASS
Styled Component
Material UI
Chakra UI
tailwind

# Higher order components

1. Is a function it takes a component and returns a component.

# Config driven UI :

    1. Data is config
    2. UI changes according to the configuration.

# LifeCycle :

Constructor
Render
ComponentDidMount
ComponentDidUpdate
ComponentWillUnmount

# Other Important Interview topics

1. event loop
2. virtual dom
3. v6 features
4. useRef hooks
5. useContext
6. optimization technqs
7. error handling, errorBoundry,
8. try catch
9. axios
10. angular vs react
11. js
12. promises
13. debounce
14. using hook debounce/lodash implementation
15. custom hooks
