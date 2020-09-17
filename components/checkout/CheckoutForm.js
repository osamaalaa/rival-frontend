import React,{useState , useEffect , useRef} from 'react';
import { connect } from 'react-redux';
import OrderSummary from './OrderSummary';

import Payment from '../payments/Payment';
import useForm from './userForm';
import PayPalButton from "./PayPalButton";
import axios from "axios";
import { resetCart } from '../../store/actions/cartActions';
import Router from 'next/router'
import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from "react-redux";
import Barcode from 'react-barcode';

import { useReactToPrint } from 'react-to-print';
import itlandLogo from '../../images/logoLoginModal.png';   // logoForPrintRecipt

class ComponentToPrint extends React.Component {
    constructor(props) {
        super(props);
        const min = 1;
        const max = 10000;
        const rand = min + Math.random() * (max - min);
    
        this.state = {barcode: rand};
      }
    render() {
        
      return (
       <div>
               <img src={itlandLogo} alt="itland-logo" Style="width: 18%; padding: 17px;"  />
             <br />
            <OrderSummary />
            <div Style="margin-left: 50px;">
                     <Barcode value={this.state.barcode} width= "3" height= "100" textAlign="center"  
                                          textPosition= "bottom" displayValue= {true} className="btn btn-primary center" />
            </div>
            

       </div>
      );
    }
  }
   

function CheckoutForm({total, shipping , products }  ) {
    const currentUser = JSON.parse(localStorage.getItem('user'));
    const componentRef = useRef();

    
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,  
      });



    const dispatch = useDispatch();
    const [showCash, setShowCash] = React.useState(false);
    const [showPayment, setShowPayment] = React.useState(false);
    const [paymentMethod, setPaymentMethod] = React.useState("");


    const min = 1;
    const max = 10000;
    const randonBarCode = min + Math.random() * (max - min);
    const [barCodeNum, setBarcodeNum] = React.useState(randonBarCode);

    const onClickRadioCash = () => {
        setPaymentMethod("CashOnDelivery");
        setShowCash(true);
        setShowPayment(false);}
    const onClickRadioPayment = () => {

        setPaymentMethod("OnlinePayment-creditCard");
        setShowCash(false);
        setShowPayment(true);
        setBarcodeNum(randonBarCode);
    };

const onCLickOnCash = () =>{ 

    if(promoCode === 'osama'){
        totalAmount = totalAmount - 10;
        toast.success('Cach on Delivery has been confirmed With Discount 10 EGP, Total Price is'+ totalAmount, {
            position: "top-center",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
        });
    
        setTimeout(function(){ Router.push('/thankyou'); }, 3000);
        
    }else if (promoCode === 'itland'){
        totalAmount = totalAmount - 50;
        toast.success('Cach on Delivery has been confirmed With Discount 50 EGP , Total Price is '+ totalAmount , {
            position: "top-center",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
        });
    
        setTimeout(function(){ Router.push('/thankyou'); }, 3000);
    }else{
    toast.success('Cach on Delivery has been confirmed without Any discounts , Total Price is ' + totalAmount, {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
    });

    setTimeout(function(){ Router.push('/thankyou'); }, 3000);
    }

    
}
    function handleSubmit() {
        const currentUser = JSON.parse(localStorage.getItem('user'));
        console.log(currentUser)
        var min = 1;
        var max = 100;
        var rand =  min + (Math.random() * (max-min));
        if(currentUser){
        let data = {
            customer_country: "Egypt",
            customer_first_name:  state.firstName.value  ,
            customer_last_name: state.lastName.value ,
            customer_Address:  state.address.value, 
            customer_city: state.city.value  , 
            customer_postal:  state.zip.value , 
            customer_email: state.email.value , 
            customer_phone:  state.phone.value, 
            customer_notes:  state.notes.value, 
            products_details: productsFinal , 
            billing_method:  paymentMethod, 
            products_price_total: totalAmount,
            barcode: barCodeNum,
            CUSTOMER_ID: rand,     
            CUSTOMER_TYPE: "Registered User"
          
        } ;

        // let arr = sentProducts + state.firstName.value
        let arr = products.map(v => ({...v ,CUSTOMER_ID: rand ,  CUSTOMER_NAME: state.firstName.value +" "+ state.lastName.value , CUSTOMER_EMAIL: state.email.value ,CUSTOMER_PHONE:  state.phone.value  }))
        // let preparProducts = JSON.stringify({
        // arr
                 
        // });
            // console.log("PreparingPriducts " + preparProducts );
        axios
            .post("http://localhost:4000/RivalServices/addToCart", data, {
                headers: { Accept: "application/json" }
            })
            .then(function(response) {
                console.log(response);
               
            })
             .catch(function(error) {});

             axios
             .post("http://localhost:4000/RivalServices/InsertProductsForCheckout", arr, {
                 headers: { Accept: "application/json" }
             })
             .then(function(response) {
                 console.log(response);
                
             }).catch(function(error){})

             axios
             .post("http://localhost:4000/RivalServices/insertInCustomerUsersAll", data, {
                 headers: { Accept: "application/json" }
             })
             .then(function(response) {
                 console.log(response);
                
             })
              .catch(function(error) {});

             dispatch(resetCart());
    }else{


        let data = {
            customer_country: "Egypt",
            customer_first_name:  state.firstName.value  ,
            customer_last_name: state.lastName.value ,
            customer_Address:  state.address.value, 
            customer_city: state.city.value  , 
            customer_postal:  state.zip.value , 
            customer_email: state.email.value , 
            customer_phone:  state.phone.value, 
            customer_notes:  state.notes.value, 
            products_details: productsFinal , 
            billing_method:  paymentMethod, 
            products_price_total: totalAmount,
            barcode: barCodeNum,
            CUSTOMER_ID: rand,     
            CUSTOMER_TYPE: "Casual User"
          
        } ;

        // let arr = sentProducts + state.firstName.value
        let arr = products.map(v => ({...v ,CUSTOMER_ID: rand ,  CUSTOMER_NAME: state.firstName.value +" "+ state.lastName.value , CUSTOMER_EMAIL: state.email.value ,CUSTOMER_PHONE:  state.phone.value  }))
        // let preparProducts = JSON.stringify({
        // arr
                 
        // });
            console.log( data );
        axios
            .post("http://localhost:4000/RivalServices/addToCart", data, {
                headers: { Accept: "application/json" }
            })
            .then(function(response) {
                console.log( response);
               
            })
             .catch(function(error) {});

             axios
             .post("http://localhost:4000/RivalServices/InsertProductsForCheckout", arr, {
                 headers: { Accept: "application/json" }
             })
             .then(function(response) {
                 console.log(response);
                
             }).catch(function(error){})

             axios
             .post("http://localhost:4000/RivalServices/insertInCustomerUsersAll", data, {
                 headers: { Accept: "application/json" }
             })
             .then(function(response) {
                 console.log(response);
                
             })
              .catch(function(error) {});

             dispatch(resetCart());
    }



}



    let totalAmount = (total + shipping).toFixed(2)
    let pros = JSON.stringify(products, "\n") ;

  

    const result = products.map(({  title, price , quantity}) => [" "+ title, "Price: "+ price, "Quantity: "+  quantity + " "]);
    let productsFinal = JSON.stringify(result).replace(/]|[[""]/g, '');
    // const user = JSON.parse(localStorage.getItem('user'));  
let stateSchema ;
    if(currentUser){
        stateSchema = {
            firstName: {value: currentUser.username, error: ""},
            lastName: {value: currentUser.lastName, error: ""},
            address: {value: currentUser.Address, error: ""},
            city: {value: currentUser.City, error: ""},
    
            zip: {value: "", error: ""},
            email: {value: currentUser.email, error: ""},
            phone: {value: currentUser.PhoneNumber, error: ""},
            notes: {value: "", error: ""}
        };
    }else{
        stateSchema = {
            firstName: {value: "", error: ""},
            lastName: {value: "", error: ""},
            address: {value: "", error: ""},
            city: {value: "", error: ""},
            zip: {value: "", error: ""},
            email: {value: "", error: ""},
            phone: {value: "", error: ""},
            notes: {value: "", error: ""}
        };
    }
    
    const validationStateSchema = {
        firstName: {
            required: false,
            validator: {
            regEx: /^[a-zA-Z]+$/,
            error: "Invalid first name format."
            }
        },
 
        lastName: {
            required: false,
            validator: {
            regEx: /^[a-zA-Z]+$/,
            error: "Invalid last name format."
            }
        },

        address: {
            required: false,
            validator: {
                error: "Invalid address format."
            }
        },

        city: {
            required: false,
            validator: {
                error: "Invalid last name format."
            }
        },
        zip: {
            required: false,
            validator: {
                regEx: /^\d{5}$|^\d{5}-\d{4}$/,
                error: "Invalid zip format, use like 12345."
            }
        },

        email: {
            required: false,
            validator: {
                regEx: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                error: "Invalid email format."
            }
        },

        phone: {
            required: false,
            validator: {
                regEx: /^\+[0-9]?()[0-9](\s|\S)(\d[0-9]{9})$/,
                error: "Invalid phone number format use like +2923432432432."
            }
        },
        notes: {
            required: false
        }
    };

    const { state, handleOnChange, handleOnSubmit, disable } = useForm (
        stateSchema,
        validationStateSchema,
        handleSubmit
    );
    
    const errorStyle = {
        color: "red",
        fontSize: "13px",
        position: "absolute",
        lineHeight: "1.25"
    };

    const toggle = e => {
        console.log("hello");
        setState({
            modal: !state.modal
        });
        console.log( 'after setState: ', state );
    }

    const handleFields = e => setState({ [e.target.name]: e.target.value } ) ;
    // const handlePromoCode = (evt) => 
    // {
    //     evt.preventDefault();

    //     alert(`Submitting Name ${name}`)
    // }

    const toggle_two = e => {
        console.log("hello");
        setState({
            modal2: !state.modal2
        });
        console.log( 'after setState: ', state );
      }

    const showAlert = ev => {
        alert("Rival does not buy or sell items. Rival is not and cannot be a party to or control in any manner any transaction between two users of the Site and cannot guarantee that a buyer or seller will complete a transaction or accept the return of an item or provide any refund for the same.")
        ev.preventDefault(); 
    };
    const [promoCode, setPromoCode] = React.useState(""); // promoCode
    useEffect(() => {
            
    })
    return (
        <React.Fragment>
        <ToastContainer transition={Zoom} />
        <section className="checkout-area ptb-60">
            {/* <ToastContainer transition={Zoom} /> */}
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className="user-actions">
                            <i className="fas fa-sign-in-alt"></i>
                            <span>Returning customer? <a href="/">Click here to return to Home Page</a></span>
                        </div>
                    </div>
                </div>
                
                <form onSubmit={handleOnSubmit}>
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="billing-details">
                                <h3 className="title">Billing Details</h3>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <input placeholder="First Name"
                                            required={true}
                                                type="text" 
                                                name="firstName"
                                                className="form-control" 
                                                onChange={handleOnChange}
                                                value={state.firstName.value}
                                            />
                                            {state.firstName.error && <p style={errorStyle}>{state.firstName.error}</p>}
                                        </div>        
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <input required={true}
                                            placeholder="Last Name"
                                                type="text" 
                                                name="lastName"
                                                className="form-control" 
                                                onChange={handleOnChange}
                                                value={state.lastName.value}
                                            />
                                            {state.lastName.error && <p style={errorStyle}>{state.lastName.error}</p>}
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <input type="email" placeholder="Email Address" required={true}
                                                name="email"
                                                className="form-control" 
                                                onChange={handleOnChange}
                                                value={state.email.value}
                                            />
                                            {state.email.error && <p style={errorStyle}>{state.email.error}</p>}
                                           
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <input required={true}
                                            placeholder="Phone"
                                                type="text" 
                                                name="phone"
                                                className="form-control" 
                                                onChange={handleOnChange}
                                                value={state.phone.value}
                                            />
                                            {state.phone.error && <p style={errorStyle}>{state.phone.error}</p>}
                                        </div>
                                    </div>
                                   

                                    <div className="col-lg-12 col-md-6">
                                        <div className="form-group">
                                            <input placeholder="Address" required={true}
                                                type="text" 
                                                name="address"
                                                className="form-control" 
                                                onChange={handleOnChange}
                                                value={state.address.value}
                                            />
                                            {state.address.error && <p style={errorStyle}>{state.address.error}</p>}
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-6">
                                        <div className="form-group">
                                            <input placeholder="Town / City" required={true}
                                                type="text" 
                                                name="city"
                                                className="form-control" 
                                                onChange={handleOnChange}
                                                value={state.city.value}
                                            />
                                            {state.city.error && <p style={errorStyle}>{state.city.error}</p>}
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12">
                                        <div className="form-group">
                                            <div className="select-box">
                                                <select required={true}
                                                    className="form-control"
                                                    name="country"
                                                >
                                                  <option value="5">United Arab Emirates</option>
                                                    <option value="1">China</option>
                                                    <option value="2">United Kingdom</option>
                                                    <option value="0">Germany</option>
                                                    <option value="3">France</option>
                                                    <option value="4">Japan</option> 
                                                    <option value="1">Egypt</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <input required={true}
                                            placeholder="Postcode / Zip"
                                                type="text" 
                                                name="zip"
                                                className="form-control"
                                                onChange={handleOnChange}
                                                value={state.zip.value}
                                            />
                                            {state.zip.error && <p style={errorStyle}>{state.zip.error}</p>}
                                        </div>
                                    </div>
                                    {/* <div className="col-lg-6 col-md-12">
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="create-an-account" />
                                            <label className="form-check-label" htmlFor="create-an-account">Create an account?</label>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-12">
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="ship-different-address" />
                                            <label className="form-check-label" htmlFor="ship-different-address">Ship to a different address?</label>
                                        </div>
                                    </div> */}

                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <textarea name="notes" id="notes" cols="20" rows="5" placeholder="Order Notes" className="form-control" value={state.notes.value} onChange={handleOnChange}/>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6 mt-3">
                                        <div className="form-group">
                                            <label>Do You Have Promo Code? </label>
                                            <input type="text" placeholder="Enter Promo Code" value={promoCode} onChange={e => setPromoCode(e.target.value)}
                                                className="form-control" 
                                               
                        />
                                            {/* {state.email.error && <p style={errorStyle}>{state.email.error}</p>} */}
                                           
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="order-details">
                                <h3 className="title">Your Order</h3>
                       
                              
                                           <OrderSummary />
                        <p>It does not require To print Invoice .</p>
                                    <div style={{ display: "none" }}><ComponentToPrint ref={componentRef} /></div>
                                            <button onClick={handlePrint} className="btn btn-primary center" Style="margin-top: 10px;
                                            margin-left: 128px;"  disabled={disable}>Print Invoice</button>

                                <div className="payment-method row">
                                <div className="col-lg-6 col-md-12">
                                        <input type="radio" id="cash-on-delivery" name="radio-group"  onClick={onClickRadioCash} />
                                        &nbsp;  <label htmlFor="cash-on-delivery">Cash on Delivery</label>
                                              {/* <Cash /> */}
                                    </div>
                                    <div className="col-lg-6 col-md-12">
                                        <input type="radio" id="direct-bank-transfer" name="radio-group" defaultChecked={false} onClick={onClickRadioPayment}/>
                                       &nbsp; <label htmlFor="direct-bank-transfer">Direct Bank Transfer</label>
                                       
                                    </div>
                                    <p>  Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                                    </p>
                                </div>
                                <div className="col-lg-12 col-md-12"> 
                                        <p><input type="checkbox" className="mr-1"  defaultChecked={true} />
                                        By buying from us, you agree to our<a href="" onClick={showAlert}>Terms and Policies.</a></p>  
                                </div>
                            
                                <PayPalButton
                                        totalAmount={totalAmount}
                                        disabled={disable}
                                        />
                                        <div className="row">
                                            
                                            {  showPayment ?  <Payment
                                                    amount={totalAmount * 100}
                                                    disabled={disable}
                                                /> : null}

                                { showCash ?  <button className="btn btn-primary col-lg-6" onClick={onCLickOnCash} disabled={disable} >Cash On Delivery</button>: null }
                          
                            </div>
                  </div>
                        </div>
                    </div>
                </form>
            </div>
        </section>
        </React.Fragment>
    );
}









const mapStateToProps = (state) => {
    return {
        total: state.total,
        shipping: state.shipping,
        products: state.addedItems,
        barcode: state.barcode
        
     
    }
}
export default connect(
    mapStateToProps
)(CheckoutForm)
