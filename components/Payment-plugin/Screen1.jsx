import React from 'react'
import '../../style/Payment-plugins/screen1.css'
import { useEffect, useState } from "react";

import { useNavigate } from 'react-router-dom';

import ReactDOM from 'react-dom'
import ReactCodeSinppet from 'react-code-snippet'


const Screen1 = () => {
  const navigate = useNavigate()


  return (
    <div style={{}} className='faq-screen1'>
      <h2 style={{ fontWeight: '600' }}>Payment Plugins Changelog</h2>
      <p>Some time an error occurs while using our service. Listed below the most occurrence of the error.</p>
      <div>
        <table>
          <tr className='tr1'>
            <th className='th1'> Version</th>
            <th className='th2'> Date</th>
            <th className='th3'> Changes</th>
          </tr>
          <tr>
            <td>1.0.0</td>
            <td>12/12/2021</td>
            <td>
              <h4>Added</h4>
              <ul>
                <li> it will be then v.20</li>
                <li>V.30</li>
                <li>V.30</li>
              </ul>
              <h4>Fixed</h4>
              <ul>
                <li> how it can be v.20</li>
                <li>V.30</li>
                <li>V.30</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>1.0.0</td>
            <td>12/12/2021</td>
            <td>
              <h4>Added</h4>
              <ul>
                <li>v.20</li>
                <li>V.30</li>
                <li>V.30</li>
              </ul>
              <h4>Fixed</h4>
              <ul>
                <li>v.20</li>
                <li>V.30</li>
                <li>V.30</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>1.0.0</td>
            <td>12/12/2021</td>
            <td>
              <h4>Added</h4>
              <ul>
                <li>v.20</li>
                <li>V.30</li>
                <li>V.30</li>
              </ul>
              <h4>Fixed</h4>
              <ul>
                <li>v.20</li>
                <li>V.30</li>
                <li>V.30</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>1.0.0</td>
            <td>12/12/2021</td>
            <td>
              <h4>Added</h4>
              <ul>
                <li>v.20</li>
                <li>V.30</li>
                <li>V.30</li>
              </ul>
              <h4>Fixed</h4>
              <ul>
                <li>v.20</li>
                <li>V.30</li>
                <li>V.30</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>1.0.0</td>
            <td>12/12/2021</td>
            <td>
              <h4>Added</h4>
              <ul>
                <li>v.20</li>
                <li>V.30</li>
                <li>V.30</li>
              </ul>
              <h4>Fixed</h4>
              <ul>
                <li>v.20</li>
                <li>V.30</li>
                <li>V.30</li>
              </ul>
            </td>
          </tr>
        </table>
      </div>

  



      <div className='Quick-btn'>
        <button>Next</button>
      </div>
    </div>
  )
}

export default Screen1