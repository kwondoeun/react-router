import { Fragment, useState } from "react";
import ColorComponent from "./component3/ColorComponent";
import ColorContext from "./contexts/ContextAPI";


const App = () => {
    /*
    p 495
    1. ContextAPI를 외부에 선언 createContext() Hook 사용
    2. 자식 컴포넌트에서는 consumer로 데이터를 받기
    3. 부모 컴포넌트 provider로 데이터를 전달 (변경)
    */

    //select태그를 만들어서 useState를 활용해서 color값을 변경
    const[color, setColor] = useState('red');
    const handleChagne = (e) => {
        setColor(e.target.value);
    }

    return (
        <Fragment>
            <select onChange={handleChagne}>
                <option>red</option>
                <option>green</option>
                <option>blue</option>
                <option>yellow</option>
                <option>orange</option>
            </select>

            <ColorContext.Provider value={{ color: color }}>
                {/* provider는 사용할 root 컴포넌트에 선언한다. */}
                <ColorComponent />
            </ColorContext.Provider>

        </Fragment>
    )
}

export default App;