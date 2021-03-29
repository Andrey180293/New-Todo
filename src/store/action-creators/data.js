import { db, auth } from "../../servises/firebase";

export const GET_DATA = "GET_DATA";
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
      id: item.id,
    });

    dispatch(getData());
  };
};

export const deleteDataItem = (item) => {
  return async (dispatch) => {
    console.log(`${item}`);
    let setStore = db.collection("store").doc(`${item}`).delete();
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

export const setCompleteItem = (checked, item, el) => {
  return async (dispatch) => {
    console.log([...item.arr]);
    let updateStore = db
      .collection("store")
      .doc(`${item.name}`)
      .update({
        ...item,
        arr: [
          ...item.arr.map((f) =>
            f.id === el.id ? { ...el, complete: checked } : f
          ),
        ],
      });
    await updateStore
      .then(() => {
        console.log("Document successfully updating!");
      })
      .catch((error) => {
        console.error("Error removing document: ", error);
      });
    dispatch(getData());
  };
};

export const setTextFieldItem = (item, el) => {
  return async (dispatch) => {
    //console.log([...item.arr]);
    let updateStore = db
      .collection("store")
      .doc(`${item.name}`)
      .update({
        ...item,
        arr: [...item.arr, el],
      });
    await updateStore
      .then(() => {
        console.log("Document successfully updating!");
      })
      .catch((error) => {
        console.error("Error removing document: ", error);
      });
    dispatch(getData());
  };
};

export const removeTextFieldItem = (item, el) => {
  return async (dispatch) => {
    //console.log([...item.arr]);
    let updateStore = db
      .collection("store")
      .doc(`${item.name}`)
      .update({
        ...item,
        arr: [...item.arr.filter((f) => f.id !== el.id)],
      });
    await updateStore
      .then(() => {
        console.log("Document successfully updating!");
      })
      .catch((error) => {
        console.error("Error removing document: ", error);
      });
    dispatch(getData());
  };
};
