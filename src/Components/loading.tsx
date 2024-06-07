import React, { useState, useEffect } from "react";
import styled from "styled-components";

interface ProgressProps {
  width: number;
}

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #000;
  color: #fff;
  flex-direction: column;
`;

const ProgressBar = styled.div`
  width: 80%;
  height: 20px;
  background-color: #ddd;
  border-radius: 10px;
  overflow: hidden;
  margin-top: 20px;
`;

const Progress = styled.div<ProgressProps>`
  width: ${(props) => props.width}%;
  height: 100%;
  background-color: #3b82f6;
  transition: width 0.2s ease;
`;

const LoadingScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (progress < 100) {
      timer = setTimeout(() => {
        setProgress((prev) => prev + 1);
      }, 20); // 2000ms / 100 = 20ms
    } else {
      onComplete();
    }
    return () => clearTimeout(timer);
  }, [progress, onComplete]);

  return (
    <LoadingContainer>
      <h1>Loading {progress}%</h1>
      <ProgressBar>
        <Progress width={progress} />
      </ProgressBar>
    </LoadingContainer>
  );
};

export default LoadingScreen;
