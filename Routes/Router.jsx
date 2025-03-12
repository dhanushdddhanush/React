import {BrowserRouter , Route, Routes} from "react-router-dom";
import Usestateexample from "../Components/ExampleUseState";
import Useeffectexample from "../Components//ExampleUseEffect";
import Userefexample from "../Components//ExampleUseRef";
import CallingRoutes from "./CallingRoutes";
import FilteredList from "../Components//FilteredList";
// import Jokes from "../Components//Jokes";
import Poki from "../Components//Poki";
export default function Router(){
    return(
<BrowserRouter>
<Routes>
<Route path="/" element={<CallingRoutes/>} />
<Route path="/use-state" element={<Usestateexample/>} />
<Route path="/use-effect" element={<Useeffectexample/>}/>
<Route path="/use-ref" element={<Userefexample/>}/>
<Route path="/use-memo" element={<FilteredList/>}/>
{/* <Route path="/jokes" element={<Jokes/>}/> */}
<Route path="/poki" element={<Poki/>}/>

</Routes>



</BrowserRouter>
    );

}