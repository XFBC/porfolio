import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { PrismicProvider } from '@prismicio/react'
import { client } from './services/prismic'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <PrismicProvider client={client}>
      <App />
    </PrismicProvider>
  </React.StrictMode>
)
