import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SkeletonBox from "./components/SkeletonLoading/SkeletonBox";
import App from "./App";
import { loadCategories } from "./redux/actions";

function Root() {
  const dispatch = useDispatch();
  const loadingCategories = useSelector((state) => state.categories.loading);

  useEffect(() => {
    dispatch(loadCategories());
  }, [dispatch]);

  return loadingCategories ? <SkeletonBox /> : <App />;
}

export default Root;
