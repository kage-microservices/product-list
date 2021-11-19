import { actions, store } from "@kage/store";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { ProductList } from "./Components/ProductList.component";

export default function Root(props) {
  return (
    <Provider store={store}>
      {props.name} is mounted!
      <ProductList />
    </Provider>
  );
}
