import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Lista } from "./components/Lista"
import { NuevoEmpleado } from "./components/NuevoEmpleado"
import { EditarEmpleado } from "./components/EditarEmpleado"


function App() {

  return (
     <BrowserRouter>
          <Routes>
               <Route path="/" element={<Lista />} />
               <Route path="/nuevoempleado" element={<NuevoEmpleado />} />
               <Route path="/editarempleado/:id" element={<EditarEmpleado />} />
          </Routes>
     </BrowserRouter>
  )
}

export default App
