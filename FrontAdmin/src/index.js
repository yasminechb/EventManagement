import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {QueryClientProvider,QueryClient} from "react-query"

const root = ReactDOM.createRoot(document.getElementById('root'));
const querycl = new QueryClient()
root.render(
  <QueryClientProvider client={querycl}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </QueryClientProvider>
);


