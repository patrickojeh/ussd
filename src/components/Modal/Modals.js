import { Fragment } from 'react';
import classes from './Modal.module.css';
import ModalOverlay from './ModalOverlay';
import USSDModal from './USSDModal';
import SortModal from './SortModal';

const Modals = (props) => {
  const modalType = {
    sort: 'SORT',
    ussd: 'USSD'
  }
  return <Fragment>
    <div className={`${classes['modal']} ${props.onShow ? classes['modal--show'] : ''}`}>
    {
      (props.type === modalType.ussd && props.onShow) &&
      <USSDModal bankId={props.id} />
    }
    {
      (props.type === modalType.sort && props.onShow) &&
      <SortModal onClose={props.onClose} />
    }
    </div>
    {
      props.onShow &&
      <ModalOverlay onCloseModal={props.onClose} />
    }    
  </Fragment>
}

export default Modals;