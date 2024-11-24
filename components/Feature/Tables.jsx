import React from 'react'
import '../../style/Feature/Tables.css'
import { FaCheck } from "react-icons/fa6";
import { ImCross } from "react-icons/im";

const Tables = () => {
  return (
    <div className='tables'>
        <h5>Transaction Types</h5>
        <table>
            <tr><td>
                <h5>Standard</h5>
                <p>Basic transaction for purchasing goods or services.</p>
                
                </td> <td><FaCheck size={26} color='green'/></td> <td><FaCheck size={26} color='green'/></td>
                </tr>

                <tr><td>
                <h5>Standard</h5>
                <p>Basic transaction for purchasing goods or services.</p>
                
                </td> <td><FaCheck size={26} color='green'/></td> <td><FaCheck size={26} color='green'/></td>
                </tr>
                <tr><td>
                <h5>Standard</h5>
                <p>Basic transaction for purchasing goods or services.</p>
                
                </td> <td><FaCheck size={26} color='green'/></td> <td><FaCheck size={26} color='green'/></td>
                </tr>
                <tr><td>
                <h5>Standard</h5>
                <p>Basic transaction for purchasing goods or services.</p>
                
                </td> <td><FaCheck size={26} color='green'/></td> <td><FaCheck size={26} color='green'/></td>
                </tr>
                <tr><td>
                <h5>Standard</h5>
                <p>Basic transaction for purchasing goods or services.</p>
                
                </td> <td><FaCheck size={26} color='green'/></td> <td><FaCheck size={26} color='green'/></td>
                </tr>
                <tr><td>
                <h5>Standard</h5>
                <p>Basic transaction for purchasing goods or services.</p>
                
                </td> <td><ImCross size={26} color='red'/></td> <td><FaCheck size={26} color='green'/></td>
                </tr>
                <tr><td>
                <h5>Standard</h5>
                <p>Basic transaction for purchasing goods or services.</p>
                
                </td> <td><FaCheck size={26} color='green'/></td> <td><ImCross size={26} color='red'/></td>
                </tr>
                <tr><td>
                <h5>Standard</h5>
                <p>Basic transaction for purchasing goods or services.</p>
                
                </td> <td><p className='p'>comming soon</p></td> <td><FaCheck size={26} color='green'/></td>
                </tr>
                <tr><td>
                <h5>Standard</h5>
                <p>Basic transaction for purchasing goods or services.</p>
                
                </td> <td><FaCheck size={26} color='green'/></td> <td><ImCross size={26} color='red'/></td>
                </tr>
                <tr><td>
                <h5>Standard</h5>
                <p>Basic transaction for purchasing goods or services.</p>
                
                </td> <td><FaCheck size={26} color='green'/></td> <td><FaCheck size={26} color='green'/></td>
                </tr>

           
        </table>

    </div>
  )
}

export default Tables