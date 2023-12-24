import { Routes, Route} from "react-router-dom"
import  IdeasPages from "./pages/IdeasPages"
import AboutPages from "./pages/AboutPages";







function App() {
  return (
  <div>

  <Routes>
    
    <Route path="/" Component={IdeasPages}/>
    <Route path="/about" Component={AboutPages}/>
    
    


  </Routes>

  {/* <FooterComponent/> */}
  </div>
  );
}
 
export default App
