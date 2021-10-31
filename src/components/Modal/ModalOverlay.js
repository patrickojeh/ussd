import classes from './ModalOverlay.module.css';

const ModalOverlay = (props) => {
  return <div className={classes['modal-overlay']} onClick={props.onCloseModal}></div>
}

export default ModalOverlay;