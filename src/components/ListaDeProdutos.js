// ListadeProdutos.js
import React from 'react';
import Produto from './Produto';
import styled from 'styled-components';

// Dados dos produtos
const produtos = [
  {
    id: 1,
    title: "Hidratante Facial",
    description: "Hidratante facial para todos os tipos de pele.",
    imageUrl: "https://drogariavenancio.vtexassets.com/arquivos/ids/1154495/54284_z.jpg?v=638543294575600000"
  },
  {
    id: 2,
    title: "Sérum Anti-idade",
    description: "Sérum anti-idade com vitamina C.",
    imageUrl: "https://d16w7cuzwgzfcy.cloudfront.net/Custom/Content/Products/17/20/172003_la-roche-posay-serum-anti-idade-retinol-b3-30ml-p557201_z1_637750870882840573.jpg"
  },
  {
    id: 3,
    title: "Protetor Solar",
    description: "Protetor solar com FPS 50 para o rosto.",
    imageUrl: "https://drogariacristal.com/media/catalog/product/cache/dc75f304252411b8c602e1e96d99390d/p/r/protetor_solar_facial_episol_sec_oc_pele_oleosa_fps_60_60g.jpg"
  },
  {
    id: 4,
    title: "Esfoliante Facial",
    description: "Esfoliante facial para remoção de células mortas.",
    imageUrl: "https://cdn.awsli.com.br/2500x2500/764/764220/produto/108580329/96a0f57da2.jpg"
  },
  {
    id: 5,
    title: "Máscara de Argila",
    description: "Máscara facial de argila verde para controle de oleosidade.",
    imageUrl: "https://d531mnmtf91fa.cloudfront.net/Custom/Content/Products/10/11/1011174_mascara-de-argila-vermelha-fenzza-10887_m2_637480303273809058.jpg"
  },
  {
    id: 6,
    title: "Creme para Olhos",
    description: "Creme para a área dos olhos com ação anti-rugas.",
    imageUrl: "https://oceane.vtexassets.com/arquivos/ids/203328/AP2001119CUNIF_creme_para_area_dos_olhos_com_vitamina_c_vitamin_c_eye_cream_1.jpg?v=638258142908330000"
  },
  {
    id: 7,
    title: "Água Micelar",
    description: "Água micelar para limpeza e remoção de maquiagem.",
    imageUrl: "https://www.dotcosmeticos.com.br/media/catalog/product/cache/1/image/2200x/040ec09b1e35df139433887a97daa66f/l/a/labotrat-agua-micelar-250ml-dot.jpg"
  },
  {
    id: 8,
    title: "Tônico Facial",
    description: "Tônico facial para equilibrar o pH da pele.",
    imageUrl: "https://drogariasp.vteximg.com.br/arquivos/ids/811261-1000-1000/28002---tonico-facial-adstringente-nivea-200ml-1.jpg?v=638060644551630000"
  },
  {
    id: 9,
    title: "Óleo Facial",
    description: "Óleo facial hidratante para pele seca.",
    imageUrl: "https://epocacosmeticos.vteximg.com.br/arquivos/ids/510416-800-800/oleo-facial-antioxidante-sallve.jpg?v=637992106631600000"
  },
  {
    id: 10,
    title: "Sabonete Facial",
    description: "Sabonete facial para pele sensível.",
    imageUrl: "https://albumm.com.br/wp-content/uploads/2021/05/sabonete-liquido-facial-garnier-skinactive-uniformmatte-vitamina-c.jpg"
  }
];

// Estilos para o grid de produtos
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); // Ajusta o número de colunas e o tamanho dos itens
  gap: 32px; // Aumenta o espaço entre os itens
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
`;

const ListaDeProdutos = () => {
  return (
    <Grid>
      {produtos.map(produto => (
        <Produto key={produto.id} produto={produto} />
      ))}
    </Grid>
  );
};

export default ListaDeProdutos;
