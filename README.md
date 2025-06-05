# React + TypeScript + Vite

## Run locally
1. Clone the repo
2. Go to the project folder
    ```bash
    cd pokedex-myneflow-challenge
    ```

3. and install dependencies
    ```bash
    npm install
    ```
4. Run the app
    ```bash
    npm run dev
    ```

## Testing

[Vitest](https://vitest.dev/) is used for testing with [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) and [@testing-library/jest-dom](https://testing-library.com/docs/ecosystem-jest-dom/)

**Running Tests:**
```bash
npm test
```

I had to brush up a bit on how the tests work and tried to use Vitest, as it is something I had not used before, instead it was Jest.


### Notes
- **State Management**:
    For the status of the application I decided to use Zustand, because I think it is very easy to use and simpler.

- **API calls**: From my previous experience using React, for the API calls I use React Query [React Query](https://tanstack.com/query/latest/docs/framework/react/overview)

- **Design**: In addition to using TailwindCSS, I based it on the following example (Pokedex Website Concept)[https://www.behance.net/gallery/113562309/Pokemon-Pokedex-Website-Redesign-Concept]

### Vite

This project working in Vite with HMR and some ESLint rules.

- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

