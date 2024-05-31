import React from "react";
import { Grid, Segment, Button, MenuItem } from "semantic-ui-react";
import ShowModal from "../../Modal/SuccessFullModal";
import PaymentActionForm from "../../Modal/PaymentModal";

const Cart = ({ Carts, onRemoveHandle, handleSubscribeCourse }) => {
  const handleRemove = (courseId) => {
    onRemoveHandle(courseId);
  };

  const handleSubscribeCourses = (data) => {
    handleSubscribeCourse(data);
  };
  console.log("Carts", Carts);
  return (
    <div style={{ padding: "20px" }}>
      <Grid>
        {Carts.map((cart) => (
          <Grid.Row key={cart.Course_Id}>
            <Grid.Column>
              <Segment
                className="course-segment"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div className="course-details" style={{ marginRight: "20px" }}>
                  <div>
                    <b>Course Name:</b> {cart.Course_Name}
                  </div>
                  <div>
                    <b>Course ID:</b> {cart.Course_Id}
                  </div>
                </div>
                <Button color="red" onClick={() => handleRemove(cart._id)}>
                  Remove
                </Button>
                <MenuItem>
                  <ShowModal buttonName="Subscribe">
                    <PaymentActionForm
                      onHandlePayment={() => handleSubscribeCourses(cart)}
                    />
                  </ShowModal>
                </MenuItem>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        ))}
      </Grid>
    </div>
  );
};

export default Cart;
