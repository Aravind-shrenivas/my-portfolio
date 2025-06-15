
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';

console.log('Main.tsx loading...');

const rootElement = document.getElementById("root");
console.log('Root element:', rootElement);

if (rootElement) {
  createRoot(rootElement).render(
    <BrowserRouter basename="/my-portfolio">
      <App />
    </BrowserRouter>
  );
  console.log('App rendered successfully');
} else {
  console.error('Root element not found');
}
