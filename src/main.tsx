import React from 'react'
import ReactDOM from 'react-dom/client'

import "./reset.min.css"
import "./styles.css"
import { OrgApp } from './OrgApp'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <OrgApp />
  </React.StrictMode>,
)
