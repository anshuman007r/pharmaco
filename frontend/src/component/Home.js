import { useSelector, useDispatch} from 'react-redux'
import { updateCount } from '../storage/action'
import { useEffect } from 'react'

export function Home(){
    const dispatch = useDispatch()
    let count = useSelector(state => state.countReducer.count)

    useEffect(() => {
        if(!count){
            dispatch(updateCount(0)) 
        }
    })

    function clickFunction(type){
        let value = count
        if( type === 'add'){
            value += 1
        }else{
            value -= 1
        }
        dispatch(updateCount(value))
    }

    return(
        <div>
            <h4>Hello</h4>
            <button onClick={()=>clickFunction('add')}>+</button>{count}<button onClick={()=>clickFunction('sub')}>-</button>
        </div>
    )
}
