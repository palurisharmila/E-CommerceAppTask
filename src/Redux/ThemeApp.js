import { useDispatch,useSelector } from "react-redux";
import { toggleChange } from "./ThemeStore";

const ThemeApp=()=>{
    const dispatch=useDispatch();
    const theme=useSelector(state=>state.Theme.theme)

    const changeTheme=()=>{
        dispatch(toggleChange())
    }
return(
<div className={`app ${theme}`}>
    <h1>Theme Changer</h1>
    <button onClick={changeTheme}>Click to {theme} Mode</button>
    </div>
)
}
export default ThemeApp
