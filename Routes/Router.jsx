import {BrowserRouter , Route, Routes} from "react-router-dom";
import Usestateexample from "../ExampleUseState";
import Useeffectexample from "../ExampleUseEffect";
import Userefexample from "../ExampleUseRef";
import CallingRoutes from "./CallingRoutes";

export default function Router(){
    return(
<BrowserRouter>
<Routes>
<Route path="/" element={<CallingRoutes/>} />
<Route path="/use-state" element={<Usestateexample/>} />
<Route path="/use-effect" element={<Useeffectexample/>}/>
<Route path="/use-ref" element={<Userefexample/>}/>

</Routes>



</BrowserRouter>
    );

}