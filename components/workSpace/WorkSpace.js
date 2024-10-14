import styles from './WorkSpace.module.css'
import TextArea from './TextArea/TextArea';
const WorkSpace =(props)=>{

    return(
    <div className={` flex flex-col gap-1 border border-solid border-stone-700 rounded px-5 py-5 text-white ${styles.backgroundBlock}`} >

        <div className={`text-xl uppercase font-sans font-bold`}>New Paste</div>
        <TextArea />
    </div>


    )


}

export default WorkSpace;