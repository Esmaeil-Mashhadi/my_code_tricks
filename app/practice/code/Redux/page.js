'use client'

import { add } from "@/store/reducer";
import { useDispatch, useSelector } from "react-redux";

const ReduxPage = () => {

    const data = useSelector((state)=> state.addReducer)
    const dispatch = useDispatch()
    console.log(data);
    return (
        <div>
                <button  onClick={()=>dispatch(add("hi"))}>dispatching</button>
           
        </div>
    );
};

export default ReduxPage;