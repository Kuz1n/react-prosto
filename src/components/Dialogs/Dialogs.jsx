import { NavLink } from 'react-router-dom'
import s from './Dialogs.module.css'

const DialogItem = (props) => {
    return (
        <NavLink to={"/dialogs/" + props.id} className={s.item}>{props.name}</NavLink>
    )
}

const MessageItem = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Саша" id="1"/>
                <DialogItem name="Димыч" id="2"/>
                <DialogItem name="Александр" id="3"/>
                <DialogItem name="Саша" id="1"/>
                <DialogItem name="Саша" id="1"/>
            </div>
            <div className={s.messages}>
                <MessageItem message='Hi'/>
                <MessageItem message='Hello'/>
                <MessageItem message='Yo'/>
                <MessageItem message='Yo'/>
                <MessageItem message='Yo'/>
            </div>
        </div>
    )
}

export default Dialogs;