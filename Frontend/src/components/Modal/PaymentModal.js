import React, { useState } from "react";
import {
  FormInput,
  FormGroup,
  Button,
  Form,
  Segment,
  ModalDescription,
} from "semantic-ui-react";
import axios from "axios";
import QRCode from "qrcode.react";

const PaymentActionForm = ({ onHandlePayment }) => {
  const [paymentId, setPaymentId] = useState("");
  const [payerName, setPayerName] = useState("");
  const [paymentAmount, setPaymentAmount] = useState("");
  const [paymentDescription, setPaymentDescription] = useState("");
  const [status, setStatus] = useState("");

  const handleAddPayment = () => {
    axios
      .post("http://localhost:2000/addPayment", {
        Payment_Id: paymentId,
        Payer_Name: payerName,
        Payment_Amount: paymentAmount,
        Payment_Description: paymentDescription,
      })
      .then((res) => setStatus(res.data))
      .catch((e) => console.log(e));

    setPaymentId("");
    setPayerName("");
    setPaymentAmount("");
    setPaymentDescription("");
    onHandlePayment();
  };

  return (
    <>
      <Segment inverted>
        <Form inverted>
          <FormGroup widths="equal">
            <FormInput
              fluid
              label={<label style={{ color: "black" }}>Payment ID</label>}
              placeholder="Enter Payment ID"
              value={paymentId}
              onChange={(e) => setPaymentId(e.target.value)}
              required
            />
            <FormInput
              fluid
              label={<label style={{ color: "black" }}>Payer Name</label>}
              placeholder="Enter Payer Name"
              value={payerName}
              onChange={(e) => setPayerName(e.target.value)}
              required
            />
          </FormGroup>
          <FormGroup widths="equal">
            <FormInput
              fluid
              icon="rupee"
              iconPosition="right"
              label={<label style={{ color: "black" }}>Amount</label>}
              placeholder="Enter Payment Amount"
              type="number"
              value={paymentAmount}
              onChange={(e) => setPaymentAmount(e.target.value)}
              required
            />
          </FormGroup>
          <FormGroup widths="equal">
            <FormInput
              fluid
              label={<label style={{ color: "black" }}>Description</label>}
              placeholder="Enter Payment Description"
              value={paymentDescription}
              onChange={(e) => setPaymentDescription(e.target.value)}
              required
            />
          </FormGroup>
          <div style={{ textAlign: "center", margin: "20px 0" }}>
            <QRCode
              value={`Payment ID: ${paymentId}, Amount: ${paymentAmount}`}
            />
          </div>
          <Button
            type="submit"
            color="blue"
            size="medium"
            onClick={handleAddPayment}
          >
            Pay
          </Button>
        </Form>
      </Segment>
      <ModalDescription>
        <h3 style={{ color: "blue" }}>{status}</h3>
      </ModalDescription>
    </>
  );
};

export default PaymentActionForm;
