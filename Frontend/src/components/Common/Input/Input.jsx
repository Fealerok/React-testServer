import React, { useEffect, useRef, useState } from 'react'
import styles from "./index.module.scss";

const Input = ({label_text}) => {

  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState('');


  return (
    <form action="" className={styles.form_input}>
        <label className={isFocused || value.length > 0? styles.focused : '' }>{label_text}</label>
        <input type="text" placeholder='' onChange={(e) => {setValue(e.target.value.trim())}} onFocus={() => {setIsFocused(true)}} onBlur={() => setIsFocused(false)}/>
    </form>
  )
}

export default Input

