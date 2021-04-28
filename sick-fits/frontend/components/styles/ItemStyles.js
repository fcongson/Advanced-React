import styled from "styled-components";

const ItemStyles = styled.div`
  border-radius: 2rem;
  background: var(--white);
  box-shadow: var(--bs);
  position: relative;
  display: flex;
  flex-direction: column;
  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    font-weight: 300;
    flex-grow: 1;
    padding: 0 3rem;
    font-size: 1.5rem;
  }
  .buttonList {
    display: grid;
    width: 100%;
    border-top: 1px solid var(--lightGray);
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-gap: 1px;
    background: var(--lightGray);
    border-bottom-left-radius: 2rem;
    border-bottom-right-radius: 2rem;
    text-align: center;
    & > * {
      background: var(--white);
      border: 0;
      font-size: 1rem;
      padding: 1rem;
      &:first-child {
        border-bottom-left-radius: 2rem;
      }
      &:last-child {
        border-bottom-right-radius: 2rem;
      }
    }
  }
`;

export default ItemStyles;
