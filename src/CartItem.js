import React from "react";

class CartItem extends React.Component {
    constructor() {
        super();
        this.state = {
            price: 999,
            title: 'Phone',
            qty: 1,
            img: ''
        }
        // this.testing();
    }

    // testing() {
    //     const promise = new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             resolve('done');
    //         }, 5000);
    //     })

    //     promise.then(() => {
    //         // setState acts like a synchronous call
    //         this.setState({ qty: 100 });
    //         console.log('state', this.state);
    //     });
    // }

    increaseQuantity = () => {
        // console.log("this", this.state);

        // setState Calls Asynchronously

        // setState from 1 : object form when we don't need previous state
        // this.setState({
        //     qty: this.state.qty + 1
        // })

        // setState form 2 : function form when we need previous state

        // we can use callback function as a second argument to overcome the asynchronous nature of the setState.
        this.setState((prevState) => {
            return {
                qty: prevState.qty + 1
            }
        }, () => {
            console.log('this.state', this.state);
        });

    }

    decreaseQuantity = () => {

        // this.setState({
        //     qty: this.state.qty - 1
        // })

        const { qty } = this.state;

        if (qty === 0)
            return;

        this.setState((prevState) => {
            return {
                qty: prevState.qty - 1
            }
        })
    }

    render() {
        const { title, price, qty } = this.state;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} />
                </div>
                <div className="right-block">
                    <div style={{ fontSize: 25 }}> {title}</div>
                    <div style={{ color: '#777' }}>Rs. {price}</div>
                    <div style={{ color: '#777' }}>Qty : {qty}</div>
                    <div className="cart-item-actions">
                        {/* Buttons*/}
                        <img
                            alt="increase"
                            className="action-icons"
                            src="https://cdn-icons-png.flaticon.com/128/992/992651.png"
                            onClick={this.increaseQuantity} />
                        <img
                            alt="decrease"
                            className="action-icons"
                            src="https://cdn-icons-png.flaticon.com/128/992/992683.png"
                            onClick={this.decreaseQuantity} />

                        <img
                            alt="delete"
                            className="action-icons"
                            src="https://cdn-icons-png.flaticon.com/128/1214/1214428.png" />
                    </div>
                </div>
            </div>
        )
    }
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}

export default CartItem;