import s from './Dialogs.module.css'

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.item}>Саша</div>
                <div className={s.item}>Димыч</div>
                <div className={s.item}>Александр</div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How is you</div>
                <div className={s.message}>yo</div>
            </div>
        </div>
    )
}

export default Dialogs;