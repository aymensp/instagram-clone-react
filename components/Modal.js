import { useState } from "react"
import { useSelector } from "react-redux"
import { getOpenModal } from "../slices/appSlice"

function Modal() {
    
    const modal = useSelector(getOpenModal)
    const [open, setopen] = useState(modal)

    return (
        <div>
            {modal ? <h1>I am a modal</h1> : false}

        </div>
    )
}

export default Modal
