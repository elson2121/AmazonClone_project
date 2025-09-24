import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { DataProvider } from './components/Dataprovider/Dataprovider.jsx'
  import {initailState,reducer} from './Utils/reducer.jsx'
  

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DataProvider reducer={reducer} initialState={initailState}>  
    <App />
    </DataProvider>
  </StrictMode>,
)
