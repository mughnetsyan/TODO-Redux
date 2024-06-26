import { useToggleTaskMutation } from "entities/task/api";

import styles from './styles.module.css'

import checkImg from 'shared/assets/images/Vector-3.svg'



interface Props {
    id: string;
    completed: boolean
}


export const TaskCheckbox = ({id, completed}: Props) => {
    const [toggleTask] = useToggleTaskMutation()

    function checkHandler() {
        toggleTask({id})
    }

    return (
        <div className={styles.item}>
            <input type="checkbox" className={styles.checkbox} id={id} name={id} onChange={checkHandler} defaultChecked={completed}/>
            <label htmlFor={id} className={styles.label}>
                <div className={styles.slider}>
                    <img src={checkImg} className={styles.img}/>
                </div>
            </label>
        </div>
    )
}