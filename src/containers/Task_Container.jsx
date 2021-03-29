import { connect } from "react-redux";
import { compose } from "redux";
import { setActiveItem, setCompleteItem } from "../store/action-creators/data";

import TaskField from "../components/TaskField/TaskField";

function Task_Container({ data, setActiveItem, activeItem, setCompleteItem }) {
  return (
    <TaskField
      data={data}
      activeItem={activeItem}
      setActiveItem={setActiveItem}
      setCompleteItem={setCompleteItem}
    />
  );
}

const mapStateToProps = (state) => {
  return {
    data: state.data.data,
    activeItem: state.data.activeItem,
  };
};
export default compose(
  connect(mapStateToProps, { setActiveItem, setCompleteItem })
)(Task_Container);
