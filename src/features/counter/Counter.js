import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './counterSlice';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: skyblue;
  margin: 4px;
`;

export default function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <StyledButton
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Increment
      </StyledButton>
      <span>{count}</span>
      <StyledButton
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </StyledButton>
    </div>
  );
}
