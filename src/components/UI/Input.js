import styles from 'styled-components';
import searchIcon from '../../svg/icon--search.svg';

const Input = styles.input`
  --near-black: rgba(0,0,0,.25);
  --horizontal-padding: 16px;
  background-image: ${props => {
    switch (props.hasIcon) {
      case 'search':
        return `url(${searchIcon})`;
      default:
        return false;
    }
  }};
  background-color: var(--near-black);
  background-position: ${props => {
    return props.hasIcon ? 'var(--horizontal-padding)' : '0'
  }} 15px;
  background-repeat: no-repeat;
  background-size: 14px;
  border: none;
  border-radius: 8px;
  color: var(--white);
  font-size: .88rem;
  padding: 14px;
  padding-left: ${props => props.hasIcon ? '44px' : 'var(--horizontal-padding)'};
  padding-right: var(--horizontal-padding);
  position: relative;
  width: -webkit-fill-available;
  &::placeholder {
    color: var(--near-white);
  }
  &:focus {
    outline: none;
  }
`;

export default Input;