// Produto.js
import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  border: 1px solid #ddd;
  padding: 12px; // Reduz o padding dentro do card
  margin: 16px;
  width: 100%;
  max-width: 240px; // Reduz o tamanho máximo do card
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); // Ajusta a sombra
  background-color: #fff;
  transition: transform 0.3s, box-shadow 0.3s;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  }
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Imagem = styled.img`
  width: 100%;
  height: 150px; // Reduz a altura da imagem
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 12px; // Espaço entre a imagem e o título
`;

const Titulo = styled.h2`
  color: #333;
  font-size: 16px; // Reduz o tamanho da fonte
  margin: 8px 0 4px; // Ajusta as margens
  text-align: center;
`;

const Descricao = styled.p`
  color: #666;
  font-size: 14px;
  text-align: center;
`;

const Produto = ({ produto }) => {
  return (
    <CardContainer>
      <Imagem src={produto.imageUrl} alt={produto.title} />
      <Titulo>{produto.title}</Titulo>
      <Descricao>{produto.description}</Descricao>
    </CardContainer>
  );
};

export default Produto;
