import React from 'react';
import ReactDOM from 'react-dom/client';
import { TodoProvider } from './contexts/TodoContext';
import { RouterProvider } from 'react-router-dom';
import { router } from './routers';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <TodoProvider>
      <RouterProvider router={router} />
    </TodoProvider>
  </React.StrictMode>
);
