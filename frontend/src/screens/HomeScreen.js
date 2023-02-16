import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllLists } from "../actions/listsActions";

const HomeScreen = () => {
  const dispatch = useDispatch();

  const allLists = useSelector((state) => state.allLists);
  const { loading, error, lists } = allLists;

  useEffect(() => {
    dispatch(getAllLists());
  }, [dispatch]);

  return <></>;
};

export default HomeScreen;
