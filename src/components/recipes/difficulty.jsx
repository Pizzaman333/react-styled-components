import styled from "styled-components";

const Div = styled.div`
  background-color: #ff6b6b; /* Coral */
  border-radius: 8px;
  padding: 1rem;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h4`
  font-size: 1.25rem;
  color: #ffffff;
  margin: 0 0 0.5rem 0;
  text-transform: uppercase;
`;

const ButtonList = styled.ul`
  display: flex;
  gap: 0.5rem;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Button = styled.button`
  background-color: #4ecdc4; /* Teal */
  border: none;
  border-radius: 6px;
  padding: 0.5rem 1rem;
  color: #ffffff;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
`;

const HighlightedButton = styled(Button)`
  background-color: #9b59b6; /* Bright purple */
  font-weight: bold;

  &:hover {
    background-color: #8e44ad;
  }
`;

export const Difficulty = ({ difficulty }) => (
  <Div>
    <Title>Difficulty</Title>
    <ButtonList>
      <li>
        {difficulty === 0 ? (
          <HighlightedButton>Easy</HighlightedButton>
        ) : (
          <Button>Easy</Button>
        )}
      </li>
      <li>
        {difficulty === 1 ? (
          <HighlightedButton>Medium</HighlightedButton>
        ) : (
          <Button>Medium</Button>
        )}
      </li>
      <li>
        {difficulty === 2 ? (
          <HighlightedButton>Hard</HighlightedButton>
        ) : (
          <Button>Hard</Button>
        )}
      </li>
    </ButtonList>
  </Div>
);