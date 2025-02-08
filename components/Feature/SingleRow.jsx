import React from 'react'
import '../../style/Feature/Tables.css'
import { FaCheck } from "react-icons/fa6";
import { ImCross } from "react-icons/im";

const SingleRow = ({item}) => {

  return (
     <tr><td>
                    <h5>{item?.heading}</h5>
                    <p>{item?.text}</p>
                    
                   </td> <td><FaCheck size={26} color='green'/></td>
                     <td><FaCheck size={26} color='green'/></td>
                    </tr>
  )
}

export default SingleRow