import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
    
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
    }
    to {
        transform: translateX(-100%);
        }
        `;

const SidebarContainer = styled.div`


width: 250px;
height: 97vh;
overflow-y: scroll;
  background-color:white;
  position: fixed;
 
box-shadow: 150px 0px 50px 250px rgba(0, 0, 0, 0.36);
  top: 80px;
  
  left: ${({ isOpen }) => (isOpen ? '0' : '-1000px')};
  transition: left 0.3s ease-in-out;
  animation: ${({ isOpen }) => (isOpen ? slideIn : slideOut)} 0.3s ease-in-out;
  z-index: 1000;
`;

const SidebarButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1001;
  background-color: #3498db;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const SidebarItem = styled.div`
  color: black;
  padding: 15px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color:rgb(199, 199, 199);
    cursor: pointer;
  }
`;

const SubItemsContainer = styled.div`
  padding-left: 20px;
  border-bottom: 1px solid grey;
  background-color:white;
  
`;

const MenueBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [expandedItem, setExpandedItem] = useState(null);
    const navigate=useNavigate();

    const toggleSidebar = () => setIsOpen(!isOpen);

    const handleItemClick = (item) => {
        setExpandedItem(expandedItem === item ? null : item);
    };

    return (
        <>
            <SidebarButton onClick={toggleSidebar}>☰</SidebarButton>
            <SidebarContainer isOpen={isOpen}>
                <SidebarItem onClick={() => handleItemClick('item1')}>Product</SidebarItem>
                {expandedItem === 'item1' && (
                    <SubItemsContainer>

                       

                         <SidebarItem onClick={() => { toggleSidebar();}} ><a style={{color:'black', textDecoration:'none'}} href="/#certificates"> Certificate</a></SidebarItem>
                         {/* <SidebarItem ><a href=""> Infrastructure</a></SidebarItem> */}
                         <SidebarItem onClick={() => { toggleSidebar();}} ><a style={{color:'black', textDecoration:'none'}} href="/#technically"> Technically</a></SidebarItem>
                         <SidebarItem onClick={() => { toggleSidebar();}}><a style={{color:'black', textDecoration:'none'}} href="/#features"> Features</a></SidebarItem>
                         <SidebarItem onClick={() => { toggleSidebar();}}><a style={{color:'black', textDecoration:'none'}} href="/#pricing"> Pricing</a></SidebarItem>
                       
                        

                    </SubItemsContainer>
                )}
                <SidebarItem onClick={() => handleItemClick('item2')}>Company</SidebarItem>
                {expandedItem === 'item2' && (
                    <SubItemsContainer>

                        
                      <SidebarItem onClick={() => { toggleSidebar(); navigate('/about') }}>About</SidebarItem>
                      <SidebarItem onClick={() => { toggleSidebar(); navigate('/feature') }}>Features</SidebarItem>
                      {/* <SidebarItem onClick={() => { toggleSidebar(); navigate('/blog') }}>Blog</SidebarItem> */}
                      {/* <SidebarItem onClick={() => { toggleSidebar(); navigate('/news') }}>News</SidebarItem> */}
                      <SidebarItem onClick={() => { toggleSidebar(); navigate('/contact') }}>Contact</SidebarItem>
                      {/* <SidebarItem onClick={() => { toggleSidebar(); navigate('/compile') }}>Compilance</SidebarItem> */}
                      <SidebarItem onClick={() => { toggleSidebar(); navigate('/partners') }}>Partners</SidebarItem>
                      {/* <SidebarItem onClick={() => { toggleSidebar(); navigate('/career') }}>Career</SidebarItem> */}
                      <SidebarItem onClick={() => { toggleSidebar(); navigate('/privacy') }}>Privacy Policy</SidebarItem>


                        

                    </SubItemsContainer>

                )}
                <SidebarItem onClick={() => handleItemClick('item3')}> Developer</SidebarItem>
                {expandedItem === 'item3' && (
                    <SubItemsContainer>

                        


                        <SidebarItem onClick={() => { toggleSidebar(); navigate('/intro') }}>Get Started</SidebarItem>
                        <SidebarItem onClick={() => { toggleSidebar(); navigate('/sdk') }}>SDk</SidebarItem>
                        <SidebarItem onClick={() => { toggleSidebar(); navigate('/Android-sdk') }}>Android-SDK</SidebarItem>
                       

                    </SubItemsContainer>

                )}
                <SidebarItem onClick={() => handleItemClick('item4')}>Resources</SidebarItem>
                {expandedItem === 'item4' && (
                    <SubItemsContainer>

                        <SidebarItem onClick={() => { toggleSidebar(); navigate('/support') }}>Support</SidebarItem>


                        <SidebarItem onClick={() => { toggleSidebar(); navigate('/intro') }}>Documentation</SidebarItem>

                    </SubItemsContainer>

                )}
                <SidebarItem onClick={() => handleItemClick('item5')}>Guides</SidebarItem>
                {expandedItem === 'item5' && (
                    <SubItemsContainer>

                        <SidebarItem onClick={() => { toggleSidebar(); navigate('/intro') }}>Introduction</SidebarItem>
                        <SidebarItem onClick={() => { toggleSidebar(); navigate('/prepare') }}>Preparing Your App</SidebarItem>
                        <SidebarItem onClick={() => { toggleSidebar(); navigate('/quick') }}>Quick Start</SidebarItem>
                        <SidebarItem onClick={() => { toggleSidebar(); navigate('/sdk') }}>SDK</SidebarItem>
                        <SidebarItem onClick={() => { toggleSidebar(); navigate('/error') }}>Error Codes</SidebarItem>
                        <SidebarItem onClick={() => { toggleSidebar(); navigate('/faq') }}>FAQ</SidebarItem>

                    </SubItemsContainer>

                )}
                  <SidebarItem onClick={() => handleItemClick('item6')}>Remote Integration</SidebarItem>
                {expandedItem === 'item6' && (
                    <SubItemsContainer>

                        <SidebarItem onClick={() => { toggleSidebar(); navigate('/web-sdk') }}>Web SDK</SidebarItem>
                        <SidebarItem onClick={() => { toggleSidebar(); navigate('/Android-sdk') }}>Android-SDK Proxy</SidebarItem>
                        
                        

                    </SubItemsContainer>

                )}
                  <SidebarItem onClick={() => handleItemClick('item7')}>API EndPoints</SidebarItem>
                {expandedItem === 'item7' && (
                    <SubItemsContainer>

                        <SidebarItem onClick={() => { toggleSidebar(); navigate('/account') }}>Account API</SidebarItem>
                        <SidebarItem onClick={() => { toggleSidebar(); navigate('/merchant') }}>Merchant API</SidebarItem>
                      
                        
                        

                    </SubItemsContainer>

                )}
                    <SidebarItem onClick={() => handleItemClick('item8')}>Changelogs</SidebarItem>
                {expandedItem === 'item8' && (
                    <SubItemsContainer>

                        <SidebarItem  onClick={() => { toggleSidebar(); navigate('/sdk') }} >SDK</SidebarItem>
                        <SidebarItem onClick={() => { toggleSidebar(); navigate('/payment-plugin') }}>Payement Plugins</SidebarItem>
                      <SidebarItem onClick={() => { toggleSidebar(); navigate('/white-label') }}>White label(full app)</SidebarItem>
                        
                        

                    </SubItemsContainer>

                )}
               
            
            </SidebarContainer>
            
        </>
    );
};

export default MenueBar;