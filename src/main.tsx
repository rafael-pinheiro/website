import React from 'react'
import ReactDOM from 'react-dom/client';
import { Router } from './framework/router';
import { MDXProvider } from './framework/MDXProvider';
import { ThemeProvider } from './framework/theme';
import '../node_modules/magic.css/dist/magic.css';
import 'animate.css';
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <MDXProvider>
        <Router />
      </MDXProvider>
    </ThemeProvider>
  </React.StrictMode>
);
