// Menu.js
import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: #fff; // Fundo branco para um look clean
  padding: 16px 24px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); // Sombra leve
`;

const NavList = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: center; // Centraliza o menu
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  margin: 0 20px; // Espaçamento entre os itens do menu
  font-size: 16px;
  font-weight: 500; // Fonte um pouco mais espessa
  color: #333; // Cor do texto
  transition: color 0.3s ease, transform 0.3s ease; // Transições suaves para o efeito de hover

  &:hover {
    color: #007bff; // Cor de destaque no hover
    transform: translateY(-2px); // Levanta o item um pouco no hover
  }
`;

const Menu = () => {
  return (
    <Nav>
      <NavList>
        <NavItem>Home</NavItem>
        <NavItem>Produtos</NavItem>
        <NavItem>Contato</NavItem>
      </NavList>
    </Nav>
  );
};

export default Menu;
