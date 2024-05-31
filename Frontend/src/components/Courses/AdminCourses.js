import React, { useState, useEffect } from "react";
import {
  Grid,
  GridRow,
  GridColumn,
  Segment,
  Dimmer,
  Loader,
} from "semantic-ui-react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Card from "./AdminCourseCard";
import { useContext } from "react";
import { courseContext } from "../../App";

const CoursesGrid = ({
  Cart,
  onAddHandle,
  isLogin,
  handleIsLogout,
  handleIsLogin,
}) => {
  let context = useContext(courseContext);
  const [startIndex, setStartIndex] = useState(0);
  const [isLoaderActive, setIsLoaderActive] = useState(true);
  const itemsPerPage = 4;

  const handleForward = () => {
    if (startIndex + itemsPerPage < context.availableCourses.length) {
      setStartIndex(startIndex + itemsPerPage);
    }
  };

  const handleBackward = () => {
    if (startIndex - itemsPerPage >= 0) {
      setStartIndex(startIndex - itemsPerPage);
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoaderActive(false);
    }, 2000);

    return () => {
      setIsLoaderActive(true);
    };
  }, []);

  return (
    <div
      style={{
        marginLeft: "20px",
        display: "flex",
        alignItems: "center",
        width: "100%",
      }}
    >
      {isLoaderActive ? (
        <Segment style={{ marginLeft: "20px", width: "100%", height: "100px" }}>
          <Dimmer active>
            <Loader size="massive" content="Loading" />
          </Dimmer>
        </Segment>
      ) : (
        <>
          <IoIosArrowBack
            onClick={handleBackward}
            style={{ cursor: "pointer", fontSize: "30px" }}
          />
          <Grid columns={4} divided>
            <GridRow>
              {context.search
                ? context.filteredCourses
                    .slice(startIndex, startIndex + itemsPerPage)
                    .map((course, index) => (
                      <GridColumn key={index}>
                        <Card
                          data={course}
                          Cart={Cart}
                          onAddHandle={onAddHandle}
                          isLogin={isLogin}
                          handleIsLogout={handleIsLogout}
                          handleIsLogin={handleIsLogin}
                        />
                      </GridColumn>
                    ))
                : context.availableCourses
                    .slice(startIndex, startIndex + itemsPerPage)
                    .map((course, index) => (
                      <GridColumn key={index}>
                        <Card
                          data={course}
                          Cart={Cart}
                          onAddHandle={onAddHandle}
                          isLogin={isLogin}
                          handleIsLogout={handleIsLogout}
                          handleIsLogin={handleIsLogin}
                        />
                      </GridColumn>
                    ))}
            </GridRow>
          </Grid>
          <IoIosArrowForward
            onClick={handleForward}
            style={{ cursor: "pointer", fontSize: "30px", marginLeft: "20px" }}
          />
        </>
      )}
    </div>
  );
};

export default CoursesGrid;
