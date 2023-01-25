import { useContext } from "react";
import UserContext from "../contexts/ContextAPI2";
import C from "./C";
import D from "./D";


const B = () => {

    const {state, action} = useContext(UserContext);

    return (
        <>
        <h3>B컴포넌트</h3>
        컨텍스트안에 값: {state.id}<br/>
        컨텍스트안에 값: {state.name}<br/>

        <C/>
        <D/>
        </>
    )
}

export default B;