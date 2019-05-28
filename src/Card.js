import React, { Component } from 'react';

export default class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      amountPaid: props.cloth.count * props.pricePerCloth,
      isReceiveModalOpen: false,
    };
    this.handleAmountPaidChange = this.handleAmountPaidChange.bind(this);
    this.openReceiveModal = this.openReceiveModal.bind(this);
    this.closeReceiveModal = this.closeReceiveModal.bind(this);
  }

  handleAmountPaidChange(e) {
    this.setState({
      amountPaid: parseInt(e.target.value)
    })
  }

  openReceiveModal() {
    this.setState({
      isReceiveModalOpen: true,
    })
  }

  closeReceiveModal() {
    this.setState({
      isReceiveModalOpen: false,
    })
  }

  render() {
    const { cloth, currentBalance, onReceive } = this.props;

    return (
      <div className="each-card">
        <li className={ cloth.received ? 'received' : 'given' }>{ cloth.count }</li>
        { !cloth.received && 
            <React.Fragment>
              <button onClick={ this.openReceiveModal }>Receive</button>
              { this.state.isReceiveModalOpen &&
                  (
                    <React.Fragment>
                      <div className="opaque-bg" onClick={this.closeReceiveModal}></div>
                      <div className="receive-modal">
                        <label htmlFor="amount-paid">Amount you paid</label>
                        <input id="amount-paid" type="number" required value={this.state.amountPaid} onChange={this.handleAmountPaidChange} />
                        <button onClick={ () => {
                          onReceive(cloth.id, this.state.amountPaid, currentBalance);
                          this.closeReceiveModal();
                        } }>✅</button>
                      </div>
                    </React.Fragment>
                  )
              }
            </React.Fragment>
        }
      </div>
    );
  }
}
