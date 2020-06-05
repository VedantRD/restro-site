import React, { useEffect, useState } from 'react'
import restroImg from '../assets/restro.jpg'

export default function OrderSummary({ customerData }) {

    console.log(customerData)
    const { restaurant, items, order_id } = customerData
    const [totalPrice, setTotalPrice] = useState(0)
    const [totalMrp, setTotalMrp] = useState(0)

    useEffect(() => {
        let totalMrp = 0
        let totalPrice = 0
        if (items) {
            items.map(item => {
                totalPrice += item.price
                return totalMrp = totalMrp + item.price + (item.price * item.tax_pct / 100)

            })
        }
        setTotalMrp(totalMrp)
        setTotalPrice(totalPrice)
    }, [items])

    return (
        <>
            {restaurant &&
                <div className='container py-3 px-5 mainContainer'>

                    {/* <div className='row no-gutters justify-content-between mb-1'>
                        <span></span>
                        <span className='mr-2'>Order Id : {order_id}</span>
                    </div> */}

                    <div className='row no-gutters'>

                        {/* ------- Left Side ------- */}
                        <div className='col-md-7 col-sm-12 pr-4 orderedItems'>
                            <div className=''>
                                {items.map(item => {

                                    let price = item.price + (item.price * item.tax_pct / 100)

                                    return (
                                        <div className='card mb-1' key={item.name}>
                                            <div className='card-body pl-4'>
                                                <div className='row no-gutters'>
                                                    <span style={{ fontSize: 20 }}>
                                                        {item.name} x <b>{item.quantity}</b>
                                                    </span>
                                                </div>
                                                <div className='row no-gutters'>
                                                    <span>{item.category}</span>
                                                </div>
                                                <div className='row no-gutters mt-2'>
                                                    <b className='mr-2'>Price : </b><span>₹{price}</span>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>


                        {/* ------- Right Side ------- */}
                        <div className='col-md-5 col-sm-12'>

                            {/* ----- bill details ----- */}
                            <div className='card billInfo'>
                                <div className='card-body'>
                                    <div className='row no-gutters mb-3 justify-content-between'>
                                        <h5 className='d-inline'>Order Summary</h5>
                                        <span className=''>{order_id}</span>
                                    </div>
                                    <div className='row no-gutters mb-1'>
                                        <span className=''>Total Price</span>
                                        <span className='ml-auto'>₹{totalPrice}</span>
                                    </div>
                                    <div className='row no-gutters mb-1'>
                                        <span className=''>Total MRP (Including Taxes)</span>
                                        <span className='ml-auto'>₹{totalMrp}</span>
                                    </div>
                                    <div className='row no-gutters mb-1'>
                                        <span className=''>Delivery Charges</span>
                                        <b className='ml-auto'>FREE</b>
                                    </div>
                                    <div className='row no-gutters mb-1'>
                                        <span className=''>Discount</span>
                                        <b className='ml-auto text-success'>- 0</b>
                                    </div>
                                    <hr></hr>
                                    <div className='row no-gutters'>
                                        <b className=''>Final Amount</b>
                                        <b className='ml-auto'>₹ {totalMrp}</b>
                                    </div>
                                </div>
                            </div>

                            {/* -- restaurant details --- */}
                            <div className='px-1 mt-3'>
                                <div className='row no-gutters justify-content-center'>
                                    <img src={restroImg} alt='restaurant img' className='restaurant-img'></img>
                                </div>
                                <div className='row no-gutters mt-2'>
                                    <span className='' style={{ fontSize: 25 }}>{restaurant.name}</span>
                                </div>
                                <div className='row no-gutters'>
                                    <span className=''>{restaurant.street}, {restaurant.zipcode}</span>
                                </div>
                                <div className='row no-gutters'>
                                    <span className=''>{restaurant.city}, {restaurant.state}</span>
                                </div>
                            </div>


                        </div>

                    </div>
                </div>
            }
        </>
    )
}
