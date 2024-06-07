import React, { useState, useEffect } from "react";

const BOARD_SIZE = 20;
const INITIAL_SNAKE = [{ x: 10, y: 10 }];
const INITIAL_DIRECTION = { x: 0, y: -1 };

const generateChargingPoint = () => {
  const x = Math.floor(Math.random() * BOARD_SIZE);
  const y = Math.floor(Math.random() * BOARD_SIZE);
  return { x, y };
};

const SnakeGame: React.FC = () => {
  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [direction, setDirection] = useState(INITIAL_DIRECTION);
  const [chargingPoint, setChargingPoint] = useState(generateChargingPoint());
  const [isGameActive, setIsGameActive] = useState(true);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowUp":
          if (direction.y === 0) setDirection({ x: 0, y: -1 });
          break;
        case "ArrowDown":
          if (direction.y === 0) setDirection({ x: 0, y: 1 });
          break;
        case "ArrowLeft":
          if (direction.x === 0) setDirection({ x: -1, y: 0 });
          break;
        case "ArrowRight":
          if (direction.x === 0) setDirection({ x: 1, y: 0 });
          break;
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [direction]);

  useEffect(() => {
    if (isGameActive) {
      const gameInterval = setInterval(() => {
        setSnake((prevSnake) => {
          const newSnake = [...prevSnake];
          const newHead = {
            x: newSnake[0].x + direction.x,
            y: newSnake[0].y + direction.y,
          };

          if (checkCollision(newHead, newSnake)) {
            setIsGameActive(false);
            clearInterval(gameInterval);
            return prevSnake;
          }

          newSnake.unshift(newHead);

          if (newHead.x === chargingPoint.x && newHead.y === chargingPoint.y) {
            setChargingPoint(generateChargingPoint());
            setScore((prevScore) => prevScore + 1);
          } else {
            newSnake.pop();
          }

          return newSnake;
        });
      }, 200);

      return () => clearInterval(gameInterval);
    }
  }, [isGameActive, direction, chargingPoint]);

  const checkCollision = (
    head: { x: number; y: number },
    snake: Array<{ x: number; y: number }>
  ) => {
    if (head.x < 0 || head.x >= BOARD_SIZE || head.y < 0 || head.y >= BOARD_SIZE) {
      return true;
    }

    for (let i = 1; i < snake.length; i++) {
      if (snake[i].x === head.x && snake[i].y === head.y) {
        return true;
      }
    }

    return false;
  };

  const handleRestart = () => {
    setSnake(INITIAL_SNAKE);
    setDirection(INITIAL_DIRECTION);
    setChargingPoint(generateChargingPoint());
    setIsGameActive(true);
    setScore(0);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Electric Car Charging Game</h1>
      <div style={styles.board}>
        {Array.from({ length: BOARD_SIZE }).map((_, row) =>
          Array.from({ length: BOARD_SIZE }).map((_, col) => {
            const isSnake = snake.some(
              (segment) => segment.x === col && segment.y === row
            );
            const isChargingPoint =
              chargingPoint.x === col && chargingPoint.y === row;
            return (
              <div
                key={`${row}-${col}`}
                style={{
                  ...styles.cell,
                  ...(isSnake ? styles.snake : {}),
                  ...(isChargingPoint ? styles.chargingPoint : {}),
                }}
              ></div>
            );
          })
        )}
      </div>
      <p style={styles.score}>Score: {score}</p>
      {!isGameActive && (
        <div>
          <h2 style={styles.gameOver}>Game Over</h2>
          <button onClick={handleRestart} style={styles.button}>
            Restart Game
          </button>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    // textAlign: "center",
    marginTop: "50px",
    color: "#FFFFFF",
    backgroundColor: "#121212",
    height: "100vh",
    display: "flex",
    flexDirection: "column" as "column",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontSize: "24px",
    marginBottom: "20px",
  },
  board: {
    display: "grid",
    gridTemplateColumns: `repeat(${BOARD_SIZE}, 20px)`,
    gridTemplateRows: `repeat(${BOARD_SIZE}, 20px)`,
    gap: "1px",
  },
  cell: {
    width: "20px",
    height: "20px",
    backgroundColor: "#333333",
  },
  snake: {
    backgroundColor: "#4CAF50",
  },
  chargingPoint: {
    backgroundColor: "#FFEB3B",
  },
  score: {
    fontSize: "18px",
    marginTop: "20px",
  },
  gameOver: {
    fontSize: "24px",
    color: "#FF0000",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    marginTop: "20px",
  },
};

export default SnakeGame;
