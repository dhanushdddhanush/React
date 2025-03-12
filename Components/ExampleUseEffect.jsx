import { useEffect ,useState} from "react";
const Useeffectexample=()=>{


    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos/1")
            .then((response) => response.json())
            .then((json) => setData(json));
    }, []); 

    return (
   < >  
   <h1>Use Effect Example</h1>
    <div>{JSON.stringify(data)}</div>;
    </> 
)
};




export default Useeffectexample