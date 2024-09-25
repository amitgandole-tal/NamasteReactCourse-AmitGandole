# Swiggy Clone App

This project is an assignment completed while working through the **Namaste React** course.

## App Structure (Planning)

- **Header**
  - Logo
  - Navigation Items
- **Body**
  - Search
  - Restaurant Container
  - Restaurant Card
    - Image
    - Restaurant Name, Star Rating, Cuisine, Delivery Time
- **Footer**
  - Copyright
  - Links
  - Address
  - Contact

---

## React Notes

**Important information to review before attempting interviews:**

### React Hooks

(Normal JavaScript utility functions)

- `useState()` - Used to update state variables and trigger the render reconciliation cycle.
- `useEffect()` - Called once the render cycle is completed. Often used to call APIs.
  - If called with `[]`, it will only run once.
  - If called without any argument, it runs every time the render is triggered.
  - If called with a specific state: `[myObject]`, it will run whenever `myObject` is updated, triggering a render cycle.
  - To clean up (destroy) subscriptions or listeners, you can use:
    ```js
    return () => {
      // Write your cleanup code here
    };
    ```

### Custom Hooks

Custom hooks are like services. You can write reusable logic in a custom hook and use it in multiple components.

---

## React Fiber

To deeply understand React Fiber, refer to this resource:  
[React Fiber Architecture](https://github.com/acdlite/react-fiber-architecture)

### How do React state and hooks work?

1. React uses the **reconciliation** method to compute the difference between the old and new DOM objects.
2. This computed "diff" is then used by the renderer, which updates the DOM based on these differences.
3. This process is part of the **React Fiber** algorithm.

---

## Bundling the Application

---

## Lazy Loading / On-Demand Loading

- Use `React.lazy()` for lazy loading components.
- Utilize `Suspense` in routing (check `App.js` for implementation).

---

## Ways to Add CSS

- SCSS
- SASS
- Styled Components
- Material UI
- Chakra UI
- Tailwind CSS

---

## Higher-Order Components (HOC)

A **Higher-Order Component** is a function that takes a component and returns a new component.

---

## Config-Driven UI

1. Data is configuration.
2. The UI changes according to the configuration.

---

## React Lifecycle Methods

- `constructor`
- `render`
- `componentDidMount`
- `componentDidUpdate`
- `componentWillUnmount`

---

## Other Important Interview Topics

1. Event Loop
2. Virtual DOM
3. React v6 Features
4. `useRef` Hook
5. `useContext`
6. Optimization Techniques
7. Error Handling, Error Boundaries
8. `try...catch`
9. Axios
10. Angular vs. React
11. JavaScript
12. Promises
13. Debounce
14. Using hook debounce/lodash implementation
15. Custom Hooks

---
