import App from "../App";
import { connect } from "react-redux";
import { compose } from "redux";
import { getData } from "../store/action-creators/data";
import { useEffect } from "react";

function App_Container({ getData, data }) {
  useEffect(() => {
    getData();
  }, []);
  return <App />;
}
const mapStateToProps = (state) => {
  return {
    data: state.data.data,
  };
};
export default compose(connect(mapStateToProps, { getData }))(App_Container);
