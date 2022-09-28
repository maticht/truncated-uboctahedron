import styled from "styled-components";

export default function TextSection() {
  return (
    <Wrapper>
        <Img src={require('../images/image_2022-09-27_05-15-18.png')} alt="Logo"/>
        <Description>Truncated cuboctahedron</Description>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  max-width: 380px;
  display: grid;
  gap: 20px;
  text-align: center;
  margin: 0 auto;
  padding: 50px 20px 10px;
`;

const Img = styled.img`
  margin: 0 auto;
  width: 70px;
`;

const Description = styled.p`
  max-width: 240px;
  color: rgba(255, 255, 255, 0.7);
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 130%;
  margin: 0 auto;
`;
