import { useSelector, useDispatch} from 'react-redux'
import { updateCount } from '../storage/action'
import { useEffect } from 'react'
import Header from './Header'

function Home(props){
    const dispatch = useDispatch()
    let count = useSelector(state => state.countReducer.count)

    useEffect(() => {
        console.log(props)
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
            <Header props={props}/>
            <button onClick={()=>clickFunction('add')}>+</button>{count}<button onClick={()=>clickFunction('sub')}>-</button>
            <button onClick={()=>props.history.push("/Login",{backgroundColor : '#010101'})}>Login</button>
        </div>
    )
}

export default Home