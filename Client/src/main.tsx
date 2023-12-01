import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { SearchDataProvider } from './context/contextProducts.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SearchDataProvider>
        <App />
    </SearchDataProvider>
  </React.StrictMode>,
)
