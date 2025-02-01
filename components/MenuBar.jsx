import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
height: 92vh;
overflow-y: scroll;
  background-color:white;
  position: fixed;
  border-top-right-radius: 20px;
  border-right: 1px solid grey;
  top: 80px;
  
  left: ${({ isOpen }) => (isOpen ? '0' : '-250px')};
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
    background-color: #34495e;
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

    const toggleSidebar = () => setIsOpen(!isOpen);

    const handleItemClick = (item) => {
        setExpandedItem(expandedItem === item ? null : item);
    };

    return (
        <>
            <SidebarButton onClick={toggleSidebar}>☰</SidebarButton>
            <SidebarContainer isOpen={isOpen}>
                <SidebarItem onClick={() => handleItemClick('item1')}>Item 1</SidebarItem>
                {expandedItem === 'item1' && (
                    <SubItemsContainer>

                        <SidebarItem>Sub Item 1</SidebarItem>

                        <SidebarItem>Sub Item 2</SidebarItem>

                    </SubItemsContainer>
                )}
                <SidebarItem onClick={() => handleItemClick('item2')}>Item 2</SidebarItem>
                {expandedItem === 'item2' && (
                    <SubItemsContainer>

                        <SidebarItem>Sub Item 3</SidebarItem>


                        <SidebarItem>Sub Item 4</SidebarItem>

                    </SubItemsContainer>

                )}
                <SidebarItem onClick={() => handleItemClick('item2')}>Item 2</SidebarItem>
                {expandedItem === 'item2' && (
                    <SubItemsContainer>

                        <SidebarItem>Sub Item 3</SidebarItem>


                        <SidebarItem>Sub Item 4</SidebarItem>

                    </SubItemsContainer>

                )}
                <SidebarItem onClick={() => handleItemClick('item2')}>Item 2</SidebarItem>
                {expandedItem === 'item2' && (
                    <SubItemsContainer>

                        <SidebarItem>Sub Item 3</SidebarItem>


                        <SidebarItem>Sub Item 4</SidebarItem>

                    </SubItemsContainer>

                )}
                <SidebarItem onClick={() => handleItemClick('item2')}>Item 2</SidebarItem>
                {expandedItem === 'item2' && (
                    <SubItemsContainer>

                        <SidebarItem>Sub Item 3</SidebarItem>


                        <SidebarItem>Sub Item 4</SidebarItem>

                    </SubItemsContainer>

                )}
                <SidebarItem onClick={() => handleItemClick('item2')}>Item 2</SidebarItem>
                {expandedItem === 'item2' && (
                    <SubItemsContainer>

                        <SidebarItem>Sub Item 3</SidebarItem>


                        <SidebarItem>Sub Item 4</SidebarItem>

                    </SubItemsContainer>

                )}
                <SidebarItem onClick={() => handleItemClick('item2')}>Item 2</SidebarItem>
                {expandedItem === 'item2' && (
                    <SubItemsContainer>

                        <SidebarItem>Sub Item 3</SidebarItem>


                        <SidebarItem>Sub Item 4</SidebarItem>

                    </SubItemsContainer>

                )}
                <SidebarItem onClick={() => handleItemClick('item2')}>Item 2</SidebarItem>
                {expandedItem === 'item2' && (
                    <SubItemsContainer>

                        <SidebarItem>Sub Item 3</SidebarItem>


                        <SidebarItem>Sub Item 4</SidebarItem>

                    </SubItemsContainer>

                )}
                <SidebarItem onClick={() => handleItemClick('item2')}>Item 2cd</SidebarItem>
                {expandedItem === 'item2' && (
                    <SubItemsContainer>

                        <SidebarItem>Sub Item 3</SidebarItem>


                        <SidebarItem>Sub Item 4</SidebarItem>

                    </SubItemsContainer>

                )}
            </SidebarContainer>
        </>
    );
};

export default MenueBar;