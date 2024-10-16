import React from 'react'
import styles from "./index.module.scss"
import Input from '../../Common/Input/Input'

const EnteringMessage = () => {
  return (
    <div className={styles.entering_message}>
      <form className={styles.enter_message_form}>
        <Input label_text={"Введите сообщение"}></Input>
        <div className={styles.space}></div>
        <button onClick={(e) => {e.preventDefault()}}>Отправить</button>
      </form>
    </div>
  )
}

export default EnteringMessage