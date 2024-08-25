import React from "react";
import { FaTimes } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { removeWidget } from "../../redux/reducers";

function Category({ widget, categoryId }) {
  const dispatch = useDispatch();
  const handleRemoveWidget = () => {
    dispatch(removeWidget({ categoryId, widgetId: widget.id }));
  };
  return (
    <div className="relative p-3 bg-gray-100 w-[550px] h-full rounded-3xl">
      <div className="bg-white p-2 w-full rounded-3xl max-w-xl h-full">
        <h1 className="font-bold ">{widget.name}</h1>
        <p className="">{widget.content}</p>
      </div>
      <button
        onClick={handleRemoveWidget}
        className="absolute w-8 h-8 top-4 rounded-full hover:bg-gray-200 flex items-center justify-center transition-all right-3 text-black"
      >
        <FaTimes className="text-xl" />
      </button>
    </div>
  );
}

export default Category;
