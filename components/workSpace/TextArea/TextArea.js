'use client'
import styles from './textArea.module.css'
import { useState, useRef } from 'react'
const TextArea = ()=>{
    const [textValue, setTextValue]= useState('');
    const [areaHeight, setAreaHeight]= useState(3);
    const textAreaRef= useRef(null);
    const updateHeight=()=>{

    }
    const resizeTextArea= (event)=>{
        setTextValue(event.target.value);
        console.log(event.target.scrollHeight);
        
    }

    return(
        <>
            <textarea className={`py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400
                dark:placeholder-neutral-500 dark:focus:ring-neutral-600 ${styles.textAreaProp}`}
                rows="5" placeholder="This is a textarea placeholder" 
                onChange={resizeTextArea} ref={textAreaRef} value={textValue}>
           </textarea>
        </>  
        
    )

}

export default TextArea;