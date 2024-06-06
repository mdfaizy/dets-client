
import {FiEdit} from "react-icons/fi"
import './iconBtn.css';


const IconBtn = ({
    text,
    onclick,
    children,
    disabled,
    outline=false,
    customClasses,
    type,
}) => {
  return (
    <button className='iconBtn_contant' 
    disabled={disabled}
    onClick={onclick}
    type={type}>
        {
            children ? (
                <>
                    <span>
                        {text}
                    </span>
                    {children}
                </>
            ) : (text)
        }
        <FiEdit/>
    </button>
  )
}

export default IconBtn