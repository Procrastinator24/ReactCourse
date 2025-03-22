import ReactDOM from "react-dom";
import FeedbackFormComp from "./FeedbackFormComp.jsx";

export const FeedBackFormPortal = ({isOpen, onClose}) =>{
    if (!isOpen) return null

    const portalRoot = document.getElementById('portal')
    return ReactDOM.createPortal(
        <FeedbackFormComp onClose={onClose}/>,
        portalRoot
    )
}