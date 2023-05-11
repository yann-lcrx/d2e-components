# D2E Components

A down-to-earth React Typescript component library which focuses on delivering simple, accessible components for developers to use.

## Setup

`npm i d2e-components`

## Deployment

Run `npm run build`, move to the created `dist` folder, then run `npm publish`

## Available components

### Modal

A simple modal which handles keyboard controls by default (press Escape to close).

```tsx
import { useModal, Modal } from "d2e-components";

function MyComponent() {
  const { isShowing, toggle } = useModal();

  return (
    <div className="App">
      <button onClick={toggle}>Afficher la modale</button>

      <Modal hide={toggle} isShowing={isShowing} label="sample">
        It works
      </Modal>
    </div>
  );
}
```
