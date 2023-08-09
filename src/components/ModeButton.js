import {useSelector, useDispatch} from 'react-redux'
import {darkMode,lightMode} from '../features/modeSlice.js'

export default function ModeButton(){
    const mode = useSelector((state) => state)
    const dispatch = useDispatch()

    return (
        <div style={{'padding': ' 15px', 'background-color':mode.color1}}>
            <button onClick={() => mode.darkMode ? dispatch(lightMode()) : dispatch(darkMode())}
            >{mode.darkMode ? "light mode" : 'Dark mode'}</button>
        </div>
    )
}