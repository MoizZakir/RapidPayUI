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
      <h2 style={{ fontWeight: '600' }}>White label (full app) Changelog</h2>
      
      <div>
        <table>
          <tr className='tr1'>
            <th className='th1'> Version</th>
            <th className='th2'> Date</th>
            <th className='th3'> Changes</th>
          </tr>
          <tr>
            <td>2.0.89 (version 89)</td>
            <td>09/12/2024</td>
            <td>
              <h4>Added</h4>
              <ul>
                <li> Added samsung pay logo</li>
               
              </ul>
              <h4>Fixed</h4>
              <ul>
                <li> Performance enhancements and bug fixes</li>
                
              </ul>
            </td>
          </tr>
          <tr>
            <td>1.0.0</td>
            <td>12/12/2021</td>
            <td>
              <h4>Added</h4>
              <ul>
                <li>Performance enhancements and bug fixes</li>
                
              </ul>
              <h4>Fixed</h4>
              <ul>
                <li>Fixed web proxy starting foreground service</li>
                <li>Fixed rate limit crash</li>
                <li>Performance enhancements and bug fixes</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>1.0.0</td>
            <td>12/12/2021</td>
            <td>
              <h4>Added</h4>
              <ul>
                <li>Performance enhancements and bug fixes</li>
                <li>Supports nexgo n62 nfc reader</li>
                
              </ul>
              <h4>Fixed</h4>
              <ul>
                <li>Fixed purchase arabic string</li>
                <li>Fixed amount and currency strings in arabic</li>
                <li>Fixed settings arabic strings</li>
                <li>Fixed some devices being filtered from the play store</li>
                <li>Fixed printing reversed receipts</li>
                <li>Fixed print text when reconcile is not balanced</li>
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