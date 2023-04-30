import { useProxy } from 'valtio/utils'
import { headerState } from '../state/headerState';

export const useHeaderState = ()=>{
    const $headerState = useProxy(headerState)

    function setCount(newCount){
        $headerState.count = newCount;
    }
    return [$headerState.count, setCount]
}