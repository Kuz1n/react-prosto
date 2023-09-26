import { NavLink } from 'react-router-dom'
import s from './../Dialogs.module.css'

const DialogItem = (props) => {
    return (
        <NavLink to={"/dialogs/" + props.id} className={s.item}>
            <div>
                <img className={s.ava} src='https://papik.pro/uploads/posts/2022-01/1643605021_5-papik-pro-p-sobaka-logotip-5.jpg' />
                {props.name}
            </div>
        </NavLink>
    )
}

export default DialogItem;