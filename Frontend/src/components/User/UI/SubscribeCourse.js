import React from "react";
import { useNavigate } from "react-router-dom";
import { Grid, Segment, Button } from "semantic-ui-react";

const Subscribe = ({
  SubscribeCourse,
  Name,
  Cart,
  Names,
  handleSubscribeCourse,
}) => {
  const navigate = useNavigate();

  const handleStartLearning = (CourseId) => {
    navigate("/userLearning", {
      state: {
        CourseId,
        SubscribeCourse,
      },
    });
  };
  return (
    <div style={{ padding: "20px" }}>
      <Grid>
        {SubscribeCourse.map((course) => (
          <Grid.Row key={course.Course_Id}>
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
                    <b>Course Name:</b> {course.Course_Name}
                  </div>
                  <div>
                    <b>Course ID:</b> {course.Course_Id}
                  </div>
                </div>

                <Button
                  color="orange"
                  onClick={() => handleStartLearning(course.Course_Id)}
                >
                  Start Learing
                </Button>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        ))}
      </Grid>
    </div>
  );
};

export default Subscribe;
