import { db, auth } from "../../servises/firebase";

export const GET_DATA = "SET_DATA";
export const SET_ACTIVE_ITEM = "SET_ACTIVE_ITEM";

export const getData = () => {
  return async (dispatch) => {
    await db
      .collection("store")
      .get()
      .then((querySnapshot) => {
        let items = [];
        querySnapshot.forEach((doc) => {
          items.push(doc.data());
        });
        dispatch({ type: GET_DATA, payload: [...items] });
      });
  };
};

export const setActiveItem = (payload) => ({ type: SET_ACTIVE_ITEM, payload });

export const setData = (item) => {
  return async (dispatch) => {
    let setStore = db.collection("store").doc(`${item.text}`);
    await setStore.set({
      name: item.text,
      arr: [],
      color: item.color,
    });

    dispatch(getData());
  };
};

export const deleteDataItem = (item) => {
  return async (dispatch) => {
    let setStore = db.collection("cities").doc(`${item}`).delete();
    await setStore
      .then(() => {
        console.log("Document successfully deleted!");
      })
      .catch((error) => {
        console.error("Error removing document: ", error);
      });
    dispatch(getData());
  };
};
