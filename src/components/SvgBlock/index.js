// This is SvgBlock component, It will render svgs like in the services section.

import styled from "styled-components";

const RightBlock = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 40%;
position: relative;
@media only Screen and (max-width: 48rem){
  display: none;
}
`;

const SvgBlock = ({ svg }) => {

  const SvgIcon = require(`../../assets/${svg}`).default;
  return <RightBlock>

    <img src={SvgIcon} alt="Services" />
  </RightBlock>;
};

export default SvgBlock;
