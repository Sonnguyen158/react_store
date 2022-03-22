import React from 'react'
import styled from 'styled-components'
import { PageHero, StripeCheckout } from '../components'
// extra imports
import { useCartContext } from '../context/cart_context'
import { Link } from 'react-router-dom'

const CheckoutPage = () => {
  const {cart} = useCartContext()

  return (
    <>
      <PageHero title='checkout'/>
      <Wrapper className='page'>
        {
          cart.length < 1 ? (
            <div className='empty'>
              <h3>your cart is empty</h3>
              <Link to='/products' className='btn'>
                Shop now
              </Link>
            </div>
          ) : (
            <StripeCheckout />
          )
        }
      </Wrapper>
    </>
  )
}
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .empty {
    text-align: center;
  }
`
export default CheckoutPage
