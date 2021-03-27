import "../App.scss";

import {
  setAllProducts,
  setPhones,
  setMotorcycles,
  setQudrocopters,
  setRobots,
} from "../store/action-creators/product";
import { setFilter } from "../store/action-creators/filter";

import { setActiveSidebarLink, setLoad } from "../store/action-creators/theme";

import { connect } from "react-redux";
import Sidebar from "../components/Sidebar/sidebar";
import SortComponent from "../components/Header/SortComponent";
import { compose } from "redux";
import { StateType } from "../store/store";
import { FC } from "react";

type SidebarProps = {
  isActiveSidebarLink: number | false;
  setLoad: (isLoad: boolean) => void;
  setActiveSidebarLink: (isActiveSidebarLink: number | false) => void;
  setVisiblePopup: (visiblePopup: boolean) => void;
  toogleMenu: (isOpenMenu: boolean) => void;
  setMotorcycles: () => void;
  setPhones: () => void;
  setRobots: () => void;
  setQudrocopters: () => void;
  setFilter: () => void;
};

const Sidebar_Container: FC<SidebarProps> = ({
  isActiveSidebarLink,
  setPhones,
  setMotorcycles,
  setQudrocopters,
  setRobots,
  setActiveSidebarLink,
  setLoad,
  setFilter,
}) => {
  const SetPage = async (n: number) => {
    setLoad(false);
    await setActionType(n);
    await setActiveSidebarLink(n);
    setLoad(true);
  };

  const setActionType = (n: number) => {
    if (n === 0) return setMotorcycles();
    if (n === 1) return setPhones();
    if (n === 2) return setRobots();
    if (n === 3) return setQudrocopters();
  };

  const setProd = (i: number) => {
    if (i === 0) return "motorcycle";
    if (i === 1) return "phone";
    if (i === 2) return "robot";
    if (i === 3) return "qudrocopters";
  };
  return (
    <div className="col s12 m0 l2 hide-on-med-and-down">
      <Sidebar
        setProd={setProd}
        SetPage={SetPage}
        isActiveSidebarLink={isActiveSidebarLink}
      />
      <SortComponent setFilter={setFilter} />
    </div>
  );
};

const mapStateToProps = (state: StateType) => {
  return {
    theme: state.theme.theme,
    isLoad: state.theme.isLoad,

    isThemToogle: state.theme.isThemToogle,

    byFilter: state.filter.byFilter,
    isActiveSidebarLink: state.theme.isActiveSidebarLink,
    // @ts-ignore
    product: state.product.product,
  };
};

export default compose<StateType>(
  connect(mapStateToProps, {
    setAllProducts,
    setPhones,
    setMotorcycles,
    setQudrocopters,
    setRobots,
    setActiveSidebarLink,
    setLoad,
    setFilter,
  })
)(Sidebar_Container);
