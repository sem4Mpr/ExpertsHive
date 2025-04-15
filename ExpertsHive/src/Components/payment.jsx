import React from "react";
import styled from "styled-components";

const Payment = () => {
  return (
    <Modal>
      <Form>
        <PaymentOptions>
          <PaymentButton type="button" name="paypal">
            <h1 style={{fontSize: "25px", fontWeight: "1000px"}}>PayPal</h1>
          </PaymentButton>
          <PaymentButton type="button" name="apple-pay">
            <svg
              xmlSpace="preserve"
              viewBox="0 0 512 210.2"
              y="0px"
              x="0px"
              id="Layer_1"
              version="1.1"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Apple Pay SVG paths */}
              <path
                d="M93.6,27.1C87.6,34.2,78,39.8,68.4,39c-1.2-9.6,3.5-19.8,9-26.1c6-7.3,16.5-12.5,25-12.9  C103.4,10,99.5,19.8,93.6,27.1 M102.3,40.9c-13.9-0.8-25.8,7.9-32.4,7.9c-6.7,0-16.8-7.5-27.8-7.3c-14.3,0.2-27.6,8.3-34.9,21.2  c-15,25.8-3.9,64,10.6,85c7.1,10.4,15.6,21.8,26.8,21.4c10.6-0.4,14.8-6.9,27.6-6.9c12.9,0,16.6,6.9,27.8,6.7  c11.6-0.2,18.9-10.4,26-20.8c8.1-11.8,11.4-23.3,11.6-23.9c-0.2-0.2-22.4-8.7-22.6-34.3c-0.2-21.4,17.5-31.6,18.3-32.2  C123.3,42.9,107.7,41.3,102.3,40.9 M182.6,11.9v155.9h24.2v-53.3h33.5c30.6,0,52.1-21,52.1-51.4c0-30.4-21.1-51.2-51.3-51.2H182.6z   M206.8,32.3h27.9c21,0,33,11.2,33,30.9c0,19.7-12,31-33.1,31h-27.8V32.3z M336.6,169c15.2,0,29.3-7.7,35.7-19.9h0.5v18.7h22.4V90.2  c0-22.5-18-37-45.7-37c-25.7,0-44.7,14.7-45.4,34.9h21.8c1.8-9.6,10.7-15.9,22.9-15.9c14.8,0,23.1,6.9,23.1,19.6v8.6l-30.2,1.8  c-28.1,1.7-43.3,13.2-43.3,33.2C298.4,155.6,314.1,169,336.6,169z M343.1,150.5c-12.9,0-21.1-6.2-21.1-15.7c0-9.8,7.9-15.5,23-16.4  l26.9-1.7v8.8C371.9,140.1,359.5,150.5,343.1,150.5z M425.1,210.2c23.6,0,34.7-9,44.4-36.3L512,54.7h-24.6l-28.5,92.1h-0.5  l-28.5-92.1h-25.3l41,113.5l-2.2,6.9c-3.7,11.7-9.7,16.2-20.4,16.2c-1.9,0-5.6-0.2-7.1-0.4v18.7C417.3,210,423.3,210.2,425.1,210.2z"
                id="XMLID_34_"
              ></path>
            </svg>
          </PaymentButton>
          <PaymentButton type="button" name="google-pay">
            <h1 style={{fontSize: "25px", fontWeight: "1000px"}}>G Pay</h1>
          </PaymentButton>
        </PaymentOptions>

        <Separator>
          <Line />
          <p>or pay using credit card</p>
          <Line />
        </Separator>

        <CreditCardForm>
          <InputContainer>
            <InputLabel>Card holder full name</InputLabel>
            <InputField type="text" placeholder="Enter your full name" />
          </InputContainer>

          <InputContainer>
            <InputLabel>Card Number</InputLabel>
            <InputField type="number" placeholder="0000 0000 0000 0000" />
          </InputContainer>

          <InputContainer>
            <InputLabel>Expiry Date / CVV</InputLabel>
            <SplitInputs>
              <InputField type="text" placeholder="01/23" />
              <InputField type="number" placeholder="CVV" />
            </SplitInputs>
          </InputContainer>
        </CreditCardForm>

        <PurchaseButton>Checkout</PurchaseButton>
      </Form>
    </Modal>
  );
};

// Styled Components
const Modal = styled.div`
  margin: 50px auto;
  width: 30vw;
  height: 80vh;
  border: 1px solid black;
  background: rgba(0, 0, 0, 0.1); /* optional backdrop */
  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 1000; /* ensure it's on top */

  & > div {
    background: #ffffff;
    box-shadow: 0px 187px 75px rgba(0, 0, 0, 0.01),
      0px 105px 63px rgba(0, 0, 0, 0.05), 0px 47px 47px rgba(0, 0, 0, 0.09),
      0px 12px 26px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1);
    border-radius: 26px;
    max-width: 450px;
    width: 100%;
  }
`;


const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
`;

const PaymentOptions = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  justify-content: center;
`;

const PaymentButton = styled.button`
  background-color: #f9f9f9;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    transform: scale(1.03);
  }

  svg {
    width: 100%;
    height: auto;
  }
`;

const Separator = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #888;
  font-size: 14px;
  font-weight: 500;

  p {
    margin: 0;
    white-space: nowrap;
  }
`;

const Line = styled.div`
  flex-grow: 1;
  height: 1px;
  background: #ccc;
`;

const CreditCardForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputLabel = styled.label`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 6px;
  color: #333;
`;

const InputField = styled.input`
  padding: 10px 14px;
  font-size: 15px;
  border-radius: 10px;
  border: 1px solid #ccc;
  outline: none;

  &:focus {
    border-color: #7c5dfa;
    box-shadow: 0 0 0 2px rgba(124, 93, 250, 0.2);
  }
`;

const SplitInputs = styled.div`
  display: flex;
  gap: 10px;

  input {
    flex: 1;
  }
`;

const PurchaseButton = styled.button`
  padding: 14px;
  background-color: #7c5dfa;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background-color: #6a48e6;
  }
`;




export default Payment;
