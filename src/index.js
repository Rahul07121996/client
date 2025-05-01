import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/App/layout/style.css'
import App from './App/layout/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {QueryClient,QueryClientProvider} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
// import reportWebVitals from './reportWebVitals';

const queryClient = new QueryClient()
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <QueryClientProvider client={queryClient}>
     <ReactQueryDevtools/>
     <App />
    </QueryClientProvider>

  </React.StrictMode>
  
);


// reportWebVitals();
