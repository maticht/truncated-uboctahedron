import "./styles.css";
import styled from "styled-components";
import Background from "./components/Background";
import TextSection from "./components/TextSection";
import Model from "./components/Trtr"
import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";

export default function App() {
  return (
      <Wrapper className="App">
        <Background />
        <TextSection />
          <Canvas className="canvas">
              <OrbitControls/>
              <ambientLight intensity={0.001}/>
              <directionalLight position={[1, 0, 0]} intensity={1} color='#666666'/>
              <directionalLight position={[0, 1, 0]} intensity={1} color='#666666'/>
              <directionalLight position={[0, 0, 1]} intensity={1} color='#666666'/>
              <directionalLight position={[ -1, 0, 0 ]} intensity={1} color='#666666'/>
              <directionalLight position={[ 0, -1, 0 ]} intensity={1} color='#666666'/>
              <directionalLight position={[ 0, 0, -1 ]} intensity={1} color='#666666'/>
              <Model/>
          </Canvas>
      </Wrapper>
  );
}

const Wrapper = styled.div`
  canvas {
    margin-top: 10px;
    height: 250px;
  }
`;

