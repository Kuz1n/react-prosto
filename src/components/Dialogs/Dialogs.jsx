import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import MessageItem from './Message/MessageItem'



const Dialogs = (props) => {

    let dialogsElements = props.props.dialogs.map( (d) => <DialogItem name={d.name} id={d.id}/> );
    let messagesElements = props.props.messages.map( (m) => <MessageItem message={m.text} id={m.id}/> );

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;