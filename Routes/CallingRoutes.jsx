import { Link, useNavigate } from "react-router-dom";
const CallingRoutes=()=>{
    const navigate = useNavigate();
    const Handleusestate=()=>{
        navigate("/use-state");
    };
    const Handleuseeffect=()=>{
        navigate("/use-effect")
    }
    return(
    <>
    <h1>React Router Dom Example</h1>
    <button onClick={Handleusestate}> Call UseState</button>
    <button onClick={Handleuseeffect}>Call Useeffect</button>
   <button><Link to="/use-ref">useRef Example</Link></button>

    </>
    );
}
export default CallingRoutes