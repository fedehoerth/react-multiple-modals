import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { modalsRoot, display } from '../../constants';

import './styles.css';

class Modal extends React.Component {
  el = document.createElement('div');

  static propTypes = {
    display: PropTypes.bool,
    onClose: PropTypes.func.isRequired,
  };

  static defaultProps = {
    display: display.none,
  };

  componentDidMount() {
    modalsRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalsRoot.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(
      (
        <div className={classnames('modal', { 'modal--shown': this.props.display === display.block })}>
          <button className="modal__close" onClick={this.props.onClose}>CLOSE</button>
          <div className="modal__container">
            {this.props.children}
          </div>
        </div>
      ),
      this.el,
    );
  }
}

export default Modal;
