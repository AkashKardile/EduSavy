import CoursesGrid from "../../Courses/Courses";

const CourseContainer = ({
  Cart,
  onAddHandle,
  onhandleSubscribeCourse,
  isLogin,
  handleIsLogin,
  handleIsLogout,
}) => {
  return (
    <div
      style={{
        margin: "50px",
      }}
    >
      <CoursesGrid
        Cart={Cart}
        onAddHandle={onAddHandle}
        onhandleSubscribeCourse={onhandleSubscribeCourse}
        isLogin={isLogin}
        handleIsLogin={handleIsLogin}
        handleIsLogout={handleIsLogout}
      />
    </div>
  );
};

export default CourseContainer;
