
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';

console.log('Main.tsx loading...');

const rootElement = document.getElementById("root");
console.log('Root element:', rootElement);

// Use basename only in production, not in development
const basename = import.meta.env.PROD ? "/my-portfolio" : "";
console.log('Using basename:', basename);

if (rootElement) {
  createRoot(rootElement).render(
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  );
  console.log('App rendered successfully');
} else {
  console.error('Root element not found');
}
