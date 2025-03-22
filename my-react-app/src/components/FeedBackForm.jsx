import {useState} from "react";
import {FeedBackFormPortal} from "./FeedBackFormPortal.jsx";

const Appp = () =>{
    const[isFormOpen, setIsFormOpen] = useState(false)

    const openForm = () => setIsFormOpen(true)

    const closeForm = () => setIsFormOpen(false)
    return(
        <div className={"App"}>
            <h1 className="">Welcome!</h1>
            <div>
                <button className="btn btn-primary" onClick={openForm}>Открыть форму обратной связи</button>
            </div>
            <FeedBackFormPortal
            isOpen={isFormOpen}
            onClose={closeForm}
            />
        </div>
    )
}

export default Appp;