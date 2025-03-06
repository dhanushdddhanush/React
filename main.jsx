import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Usestateexample from './ExampleUseState.jsx'
import Useeffectexample from './ExampleUseEffect.jsx'
import Userefexample from './ExampleUseRef.jsx'
import CallingRoutes from './Routes/CallingRoutes.jsx'
import Router from './Routes/Router'; 

createRoot(document.getElementById('root')).render(
  <StrictMode>
   {/* <Usestateexample/>
   <Useeffectexample/>
   <Userefexample/> */}
  
  <Router />


  </StrictMode>,
)
