
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Mount the React app
const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(<App />);
} else {
  console.error("Could not find root element to mount React app");
}
