import { useRef } from "react";

const Userefexample = () => {
    const inputRef = useRef(null);

    const handleFocus = () => {
        inputRef.current.focus(); 
    };

    return (
        <>
        <h1>Use Ref Example</h1>
        <div>
            <input ref={inputRef} type="text" placeholder="Type something..." />
            <button onClick={handleFocus}>Focus Input</button>
        </div>
        </>
    );
};

export default Userefexample;
