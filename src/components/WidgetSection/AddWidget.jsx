import React, { useState } from "react";
import { FaPlus, FaTimes } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addWidget } from "../../redux/reducers.js";

const AddWidgetModal = ({ categoryId }) => {
  const [showModal, setShowModal] = useState(false);
  const [widgetName, setWidgetName] = useState("");
  const [widgetContent, setWidgetContent] = useState("");
  const dispatch = useDispatch();

  const handleAddWidget = () => {
    dispatch(
      addWidget({
        categoryId, // Make sure this is the correct ID
        widget: { name: widgetName, content: widgetContent },
      }),
    );
    console.log(categoryId);
    setShowModal(false);
    setWidgetName("");
    setWidgetContent("");
  };

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="absolute top-9 right-0 p-2 bg-gray-100 w-[550px] h-[280px] rounded-xl flex flex-col items-center justify-center text-gray-400 border border-gray-300"
      >
        <div className="bg-white p-2 w-full rounded-xl h-full flex flex-col items-center justify-center">
          <p className="font-bold flex items-center border-2 border-gray-200 px-4 py-1 rounded-md gap-2 text-lg">
            Add Widget
            <span>
              <FaPlus />
            </span>
          </p>
        </div>
      </button>

      {showModal && (
        <div className="z-[999] fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-end items-center">
          <div className="bg-white h-full w-[50vw] shadow-lg">
            <div className="h-16 w-full flex items-center justify-between">
              <h3 className="text-lg h-full w-full flex items-center pl-4 font-semibold bg-blue-950 text-white">
                Add Widget
              </h3>
              <button
                onClick={() => setShowModal(false)}
                className="flex items-center justify-center w-16 h-full bg-blue-950 text-white"
              >
                <FaTimes />
              </button>
            </div>
            <p className="text-lg pl-4 font-semibold">
              Add Details to your widgets below.
            </p>

            <div className="p-4 flex flex-col gap-2">
              <input
                type="text"
                placeholder="Widget Name"
                value={widgetName}
                onChange={(e) => setWidgetName(e.target.value)}
                className="p-2 mb-4 w-full focus:outline-none border rounded-lg"
              />
              <textarea
                placeholder="Widget Content"
                value={widgetContent}
                onChange={(e) => setWidgetContent(e.target.value)}
                className="p-2 h-40 mb-4 w-full focus:outline-none border rounded-lg"
              />
            </div>
            <div className="w-full mt-auto pl-4 flex justify-start">
              <button
                onClick={() => setShowModal(false)}
                className="mr-2 border-[1px] border-blue-950 rounded-md p-2 w-24 text-gray-600"
              >
                Cancel
              </button>
              <button
                onClick={handleAddWidget}
                className="p-2 bg-blue-950 text-white w-24 ml-4 rounded-lg"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddWidgetModal;
