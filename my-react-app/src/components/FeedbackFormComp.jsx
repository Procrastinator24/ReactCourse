import {useState} from "react";

export default function FeedbackFormComp({onClose}){
    const [name, setName] =useState("")
    const [message, setMessage] = useState("")


    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log('Message submit, ',{name})
        alert('Thanks for your message, ',{name})
        onClose()
    }

    return(
        <form className={"fdbckform"} onSubmit={handleSubmit}>
            <h1>FeedBack Form</h1>
            <h1>Name</h1>
            <input value={name} type={"text"} onChange={(e)=>{setName(e.target.value)}}/>
            <h1>Message</h1>
            <input type={"text"} value={message} required onChange={(e)=>{setMessage(e.target.value)}}/>
            <button type={"submit"}>Sumbit</button>
            <button type={"button"} onClick={onClose}>Close</button>
        </form>
    )
}