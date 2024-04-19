import styled from "styled-components"
import Backlink from "../components/Backlink"
import HeadBanner from "../components/HeadBanner"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import Field from "../ui/Field"
import Input from "../ui/Input"
import Radio from "../ui/Radio"
import Btn from "../ui/Btn"
import delivery from "../assets/svg/delivery.svg"
import { FormValues, PayType } from "../types"
import { formFieldsOptions, getOrderTotal } from "../helpers/utils"
import Summary from "../components/Summary"
import Modal from "../ui/Modal"
import checkIcon from "../assets/svg/check.svg"
import Total from "../components/Total"
import { useAppStore } from "../store/store"
import { useNavigate } from "react-router-dom"

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
      .fieldhead, .group { flex: 1; }
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
  padding-left: 80px;
  margin-top: 30px;
  @media screen and (max-width: 750px) {
    padding-left: 70px;
  }
`

const SHIPPING: number = 50

const Checkout: React.FC = () => {
  const [payType, setPayType] = useState<PayType>('emoney')
  const { orders, removeAllOrders } = useAppStore()
  const total = getOrderTotal(orders)
  const VAT: number = total * 20 / 100
  const totalWithTaxes = total + SHIPPING + VAT 
  const { handleSubmit, register, reset, formState: { errors } } = useForm<FormValues>()
  const [modal, setModal] = useState<boolean>(false)
  const navigate = useNavigate()
  
  useEffect(() => {
    document.body.style.backgroundColor = 'var(--color-secondary)'
  }, [])

  // submitForm
  const submitForm = (e: FormValues) => {
    console.log(e)
    reset()
    setModal(true)
  }

  // backToHome
  const backToHome = () => {
    navigate('/')
    removeAllOrders()
  }

  return (
    <>
      <HeadBanner type="simple" />
      <div className="container">
        <Backlink />

        <form onSubmit={handleSubmit(submitForm)} noValidate>

          <CheckoutGrid className="grid grid-3 grid-tb-1">
            <CheckoutBox className="checkout_form">
              <h3>Checkout</h3>

              <div>
                <div className="subtitle">Billing Details</div>
                
                <div className="grid grid-narrow grid-2 grid-mb-1">
                  <Field label="Name" error={errors && errors.name?.message}>
                    <Input handler={register('name', formFieldsOptions.name)} placeholder="Alexei Ward" expand error={errors && !!errors.name} />
                  </Field>
                  <Field label="Email Address" error={errors && errors.email?.message}>
                    <Input type="email" handler={register('email', formFieldsOptions.email)} placeholder="alexei@mail.com" expand error={errors && !!errors.email} />
                  </Field>
                  <Field label="Phone Number" error={errors && errors.phone?.message}>
                    <Input type="tel" handler={register('phone', formFieldsOptions.phone)} placeholder="+1 202-555-0136" expand error={errors && !!errors.phone} />
                  </Field>
                </div>
                
                <div className="subtitle">Shipping info</div>
                
                <div className="grid grid-narrow grid-2 grid-mb-1">
                  <Field label="Address" className="fullgrid" error={errors && errors.address?.message}>
                    <Input handler={register('address', formFieldsOptions.address)} placeholder="1137 Williams Avenue" expand error={errors && !!errors.address} />
                  </Field>
                  <Field label="ZIP Code" error={errors && errors.zipcode?.message}>
                    <Input handler={register('zipcode', formFieldsOptions.zipcode)} placeholder="10001" expand error={errors && !!errors.zipcode} />
                  </Field>
                  <Field label="City" error={errors && errors.city?.message}>
                    <Input handler={register('city', formFieldsOptions.city)} placeholder="New York" expand error={errors && !!errors.city} />
                  </Field>
                  <Field label="Country" error={errors && errors.country?.message}>
                    <Input handler={register('country', formFieldsOptions.country)} placeholder="United States" expand error={errors && !!errors.country} />
                  </Field>
                </div>
                
                <div className="subtitle">Payment details</div>
                
                <div className="grid grid-narrow grid-2 grid-mb-1">
                  <Field label="Payment Method" className="fullgrid fullgrid-flexed">
                    <div className="group">
                      <Radio<PayType> handler={(val) => setPayType(val)} label="e-Money" name="payment" value="emoney" checked expand />
                      <Radio<PayType> handler={(val) => setPayType(val)} label="Cash on Delivery" name="payment" value="cash" expand />
                    </div>
                  </Field>

                  {payType === 'emoney' && <>
                    <Field label="e-Money Number" error={errors && errors.emoneyNum?.message}>
                      <Input handler={register('emoneyNum', formFieldsOptions.emoneyNum)} placeholder="238521993" expand error={errors && !!errors.emoneyNum} />
                    </Field>
                    <Field label="e-Money PIN" error={errors && errors.emoneyPin?.message}>
                      <Input handler={register('emoneyPin', formFieldsOptions.emoneyPin)} placeholder="6891" expand error={errors && !!errors.emoneyPin} />
                    </Field>
                  </>}
                </div>
              </div>

              {payType === 'cash' && <Delivery className="fullgrid delivery">
                The "Cash on Delivery" option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.
              </Delivery>}
              
            </CheckoutBox>

            <CheckoutBox className="checkout_total">
              <h6>Summary</h6>
              <Summary orders={orders} shipping={SHIPPING} total={total} totalWithTaxes={totalWithTaxes} vat={VAT} />
              <Btn value="CONTINUE & PAY" expand />
            </CheckoutBox>
          </CheckoutGrid>

        </form>
        
      </div>

      <Modal modal={modal} close={() => {}}>
        <img src={checkIcon} alt="" />
        <h3>THANK YOU<br /> FOR YOUR ORDER</h3>
        <div className="article">You will receive an email confirmation shortly.</div>
        <Total orders={orders} total={totalWithTaxes} />
        <Btn handler={backToHome} value="Back to home" expand />
      </Modal>
    </>
  )
}

export default Checkout
