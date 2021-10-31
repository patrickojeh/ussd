import styled from 'styled-components';

const bgTheme = props => props['dark-theme'] ? 'var(--black)' : 'var(--white)';
const colorTheme = props => props['dark-theme'] ? 'var(--white)' : 'var(--near-black)';

const styles = `
  border: none;
  border-radius: 6px;
  color: var(--near-black);
  cursor: pointer;
  display: block;
  outline: none;
  padding: 14px 0 16px;
  font-size: 0.95rem;
  text-align: center;
  text-decoration: none;
  width: -webkit-fill-available;
`;

export const Button = styled.button`
  ${styles}
  background: ${bgTheme};
  color: ${colorTheme};
`;

export const ButtonLink = styled.a`
  &.btn {
    background: ${bgTheme};
    color: ${colorTheme};
    ${styles}
  }
`;