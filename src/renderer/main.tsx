import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { App } from './modules/App';

const container = document.getElementById('root') as HTMLElement;
createRoot(container).render(<App />);


