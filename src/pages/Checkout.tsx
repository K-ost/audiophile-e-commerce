import styled from "styled-components"
import Backlink from "../components/Backlink"
import HeadBanner from "../components/HeadBanner"
import { useEffect } from "react"
import { useForm } from "react-hook-form"

// Styles
const CheckoutGrid = styled.div`
  grid-row-gap: 32px;
  margin: 0 0 var(--margin);
  .checkout_form { grid-area: 1 / 1 / 2 / 3; }
  .checkout_total { grid-area: 1 / 3 / 2 / 4; align-self: start; position: sticky; top: 20px; }
  h3 { margin: 0 0 40px; }
  h6 { margin: 0 0 30px; }
  @media screen and (max-width: 1020px) {
    .checkout_form, .checkout_total { grid-area: auto; }
  }
  @media screen and (max-width: 750px) {
    h3 { margin: 0 0 30px; }
  }
`
const CheckoutBox = styled.div`
  background: var(--color-white);
  border-radius: 8px;
  padding: 54px 48px 48px;
  &.checkout_total { padding: 32px; }
  @media screen and (max-width: 1020px) {
    padding: 32px;
  }
  @media screen and (max-width: 750px) {
    padding: 24px;
    &.checkout_total { padding: 32px 24px; }
  }
`

const Checkout: React.FC = () => {
  const { handleSubmit, register, formState: { errors } } = useForm()
  
  useEffect(() => {
    document.body.style.backgroundColor = 'var(--color-secondary)'
  }, [])

  // submitForm
  const submitForm = (e: any) => {
    console.log(e)
  }

  return (
    <>
      <HeadBanner type="simple" />
      <div className="container">
        <Backlink />

        <form onSubmit={handleSubmit(submitForm)}>

          <CheckoutGrid className="grid grid-3 grid-tb-1">
            <CheckoutBox className="checkout_form">
              <h3>Checkout</h3>
            </CheckoutBox>

            <CheckoutBox className="checkout_total">
              <h6>Summary</h6>
            </CheckoutBox>
          </CheckoutGrid>

        </form>
        
      </div>
    </>
  )
}

export default Checkout
