import React, { Component } from 'react';
import { connect } from 'react-redux';
import { endUnboxing } from '../../actions';

class UnboxConfirmation extends Component {
  constructor(props) {
    super(props);
  }

  cancel(event) {
    event.preventDefault();
    this.props.dispatch(endUnboxing());
  }

  render() {
    return (
      <div>
        <div
          className="modal fade show"
          id="tradeOfferSentModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="tradeOfferSentModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-body text-center">
                <h5 className="text-center text-uppercase">Trade Offer Sent</h5>
                <p className="text-white">
                  Me saatsime sulle sinu vKey eest vahetustehingu.<br />Please view &amp;
                  aktsepteeri vahetustehing oma vahetustehingute leheküljel.
                </p>
                <a
                  className="btn btn-primary text-white text-uppercase"
                  href={this.props.unbox.tradeOfferUrl}
                  target="_blank"
                >
                  Minu Vahetustehingud
                </a>
                <button
                  className="btn btn-secondary text-uppercase"
                  onClick={this.cancel.bind(this)}
                >
                  Tühista
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="opacity" />
      </div>
    );
  }
}

export default connect(state => ({
  unbox: state.unbox,
}))(UnboxConfirmation);
