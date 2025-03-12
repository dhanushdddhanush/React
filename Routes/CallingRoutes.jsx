import { Link, useNavigate } from "react-router-dom";
const CallingRoutes=()=>{
    const navigate = useNavigate();
    const Handleusestate=()=>{
        navigate("/use-state");
    };
    const Handleuseeffect=()=>{
        navigate("/use-effect")
    }
    const Handlememo=()=>{
        navigate("/use-memo")
    }
    const Handlejoke=()=>{
        navigate("/jokes")
    }
    const Handlepoki=()=>{
        navigate("/poki")
    }
    return(
    <>
    <h1>React Router Dom Example</h1>
    <button onClick={Handleusestate}> Call UseState</button>
    <button onClick={Handleuseeffect}>Call Useeffect</button>
   <button><Link to="/use-ref">useRef Example</Link></button>
   <button onClick={Handlememo}>useMemo Example</button>
   <button onClick={Handlejoke}>Api Example</button>
   <button onClick={Handlepoki}>Test poki </button>

    </>
    );
}
export default CallingRoutes