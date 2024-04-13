import styled from "styled-components"
import Backlink from "../components/Backlink"
import HeadBanner from "../components/HeadBanner"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import Field from "../ui/Field"
import Input from "../ui/Input"
import Radio from "../ui/Radio"
import Btn from "../ui/Btn"
import delivery from "../assets/svg/delivery.svg"

// Styles
const CheckoutGrid = styled.div`
  --section: 53px;
  grid-row-gap: 32px;
  margin: 0 0 var(--margin);
  .checkout_form { grid-area: 1 / 1 / 2 / 3; }
  .checkout_total { grid-area: 1 / 3 / 2 / 4; align-self: start; position: sticky; top: 20px; }
  h3 { margin: 0 0 40px; }
  h6 { margin: 0 0 30px; }
  .grid-narrow {
    margin: 0 0 var(--section);
    .fullgrid { grid-area: 1 / 1 / 2 / 3; }
    .fullgrid-flexed {
      display: flex;
      label, .group { flex: 1; }
      .group {
        padding-left: var(--gap-sm);
        &>* {
          margin: 0 0 var(--gap-sm);
          &:last-child { margin: 0; }
        }
      }
    }
    &:last-child { margin: 0; }
  }
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
    --section: 32px;
    padding: 24px;
    &.checkout_total { padding: 32px 24px; }
    .grid-narrow {
      .fullgrid { grid-area: auto; }
      .fullgrid-flexed {
        display: block;
        .group { padding: 0; }
          &>* { margin: 0 0 var(--gap-sm); }
        }
      }
    }
  }
`
const Delivery = styled.div`
  background: url(${delivery}) 0 center no-repeat;
  padding-left: 80px;
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

  console.log('errors', errors)

  return (
    <>
      <HeadBanner type="simple" />
      <div className="container">
        <Backlink />

        <form onSubmit={handleSubmit(submitForm)}>

          <CheckoutGrid className="grid grid-3 grid-tb-1">
            <CheckoutBox className="checkout_form">
              <h3>Checkout</h3>

              <div className="subtitle">Billing Details</div>
              
              <div className="grid grid-narrow grid-2 grid-mb-1">
                <Field label="Name">
                  <Input handler={() => {}} placeholder="Alexei Ward" expand />
                </Field>
                <Field label="Name">
                  <Input type="email" handler={() => {}} placeholder="Email Address" expand />
                </Field>
                <Field label="Phone Number">
                  <Input type="tel" handler={() => {}} placeholder="+1 202-555-0136" expand />
                </Field>
              </div>
              
              <div className="subtitle">Shipping info</div>
              
              <div className="grid grid-narrow grid-2 grid-mb-1">
                <Field label="Address" className="fullgrid">
                  <Input handler={() => {}} placeholder="1137 Williams Avenue" expand />
                </Field>
                <Field label="ZIP Code">
                  <Input handler={() => {}} placeholder="10001" expand />
                </Field>
                <Field label="City">
                  <Input handler={() => {}} placeholder="New York" expand />
                </Field>
                <Field label="Country">
                  <Input handler={() => {}} placeholder="United States" expand />
                </Field>
              </div>
              
              <div className="subtitle">Payment details</div>
              
              <div className="grid grid-narrow grid-2 grid-mb-1">
                <Field label="Payment Method" className="fullgrid fullgrid-flexed">
                  <div className="group">
                    <Radio handler={() => {}} label="e-Money" name="payment" value="emoney" checked expand />
                    <Radio handler={() => {}} label="Cash on Delivery" name="payment" value="cash" expand />
                  </div>
                </Field>

                <Field label="e-Money Number">
                  <Input handler={() => {}} placeholder="238521993" expand />
                </Field>
                <Field label="e-Money PIN">
                  <Input handler={() => {}} placeholder="6891" expand />
                </Field>
              </div>

              <Delivery className="fullgrid">
                The "Cash on Delivery" option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.
              </Delivery>
              
            </CheckoutBox>

            <CheckoutBox className="checkout_total">
              <h6>Summary</h6>
              <Btn value="CONTINUE & PAY" expand />
            </CheckoutBox>
          </CheckoutGrid>

        </form>
        
      </div>
    </>
  )
}

export default Checkout
