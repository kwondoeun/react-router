import { createContext, useState } from "react";

//1. 초기값 설정
const UserContext = createContext({
    state : {id: 'aaa', name :'bbb'},
    action : {
        setUser: () => {}
    }
})

//2. Provider 정의 - 구조분해 할당은 반드시 children으로
const UserProvider = ({children}) => {

    const [user, setUser] = useState({id: 'aaa', name :'bbb'});

    const value = {
        state: user,
        action: {setUser} //원래 키:값이지만 하나만 쓸땐 줄여서 쓸수 있다. 이값이 키
    }

    //console.log(children);
    //console.log(value);

    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    )

}

//3. 컨슈머, 프로바이더 반환
const UserConsumer = UserContext.Consumer;

export {UserProvider, UserConsumer}

//4. 기본 export
export default UserContext;