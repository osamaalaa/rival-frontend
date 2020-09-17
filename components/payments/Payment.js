import React from 'react';
import axios from "axios"
import Router from 'next/router'
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { resetCart } from '../../store/actions/cartActions';

class Payments extends React.Component {
    handleClick = () => {
        this.props.resetCart(); 
        toast.success('Order has been confirmed', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
        });

        setTimeout(function(){ Router.push('/thankyou'); }, 3000);
    }
    render(){
        let { amount } = this.props;
        const onToken = async token => {
            const body = {
                amount: amount,
                token: token
            };  
            console.log(amount);
            await axios.post("/api/stripe/checkout", body);
            await axios.post("http://localhost:3000/api/checkout", body);
        };

        return (
            <React.Fragment>
                <ToastContainer transition={Zoom} />

                <div className="order-btn col-lg-6">
                    <StripeCheckout 
                        name="Novine"
                        description="React Next eCommerce Templates"
                        amount={amount}
                        currency="USD"
                        token={onToken}
                        stripeKey="pk_test_51Gt0U8LKoJzvjfIn1gujwrZUS5tnj3shsSMEu4bcqutA6fgfb8AMKt8idcFrjfjVSz9FgLvOocVq2Eo9pgB2JXo300JU2sLr2Z"
                        billingAddress={false}
                        closed={this.handleClick}
                    >
                        <button disabled={this.props.disabled} className={`btn btn-primary ${this.props.disabled ? 'btn-disabled' : ''}`} >
                            Bank Transfer
                        </button>
                    </StripeCheckout>
                    {/* <button disabled={this.props.disabled} token={onToken} amount={amount} onClick={this.handleClick} className={`btn btn-primary ${this.props.disabled ? 'btn-disabled' : ''}`} >
                            Cash On Delivery
                        </button> */}
                </div>
            </React.Fragment>
        );
    }
}

const mapDispatchToProps= (dispatch)=>{
    return {
        resetCart: () => { dispatch(resetCart()) }
    }
}

export default connect(
    null,
    mapDispatchToProps
)(Payments)