import { useDispatch, useSelector } from "react-redux";
import { TypedUseSelectorHook } from "react-redux"; 
import {AppDispatch, RootState} from "../store";

// 타입 스크립트가 추론을 못하면 => 사용자가 타입 지정 annotate 
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
export const useTypedDispatch = () => useDispatch<AppDispatch>();


// interface Obj<T>{
//     name : T;
// }

// interface State {
//     state : {
//         data : string,
//         loading : boolean
//     }
// }

// const obj : Obj<State> = {
//     name : {
//         state : {
//             data : 'abcd',
//             loading : false
//         }
//     }
// }