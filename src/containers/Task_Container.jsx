import { connect } from "react-redux";
import { compose } from "redux";
import { setActiveItem } from "../store/action-creators/data";

import TaskField from "../components/TaskField";

function Task_Container({ data, setActiveItem, activeItem }) {
  return (
    <TaskField
      data={data}
      activeItem={activeItem}
      setActiveItem={setActiveItem}
    />
  );
}

const mapStateToProps = (state) => {
  return {
    data: state.data.data,
    activeItem: state.data.activeItem,
  };
};
export default compose(connect(mapStateToProps, { setActiveItem }))(
  Task_Container
);
