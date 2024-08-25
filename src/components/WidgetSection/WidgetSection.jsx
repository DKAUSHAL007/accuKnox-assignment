import React from "react";
import { useSelector } from "react-redux";
import Category from "./Category";
import AddWidgetModal from "./AddWidget.jsx"; // Importing the AddWidgetModal component

function WidgetSection() {
  const { categories, searchTerm } = useSelector((state) => state.widget);

  const filteredCategories = categories
    .map((category) => {
      const filteredWidgets = category.widgets.filter((widget) =>
        widget.name.toLowerCase().includes(searchTerm.toLowerCase()),
      );

      if (filteredWidgets.length > 0) {
        return {
          ...category,
          widgets: filteredWidgets,
        };
      }

      return null;
    })
    .filter((category) => category !== null); // Remove null entries

  return (
    <div className="flex items-center h-full flex-col p-4 gap-0">
      {filteredCategories.map((category) => (
        <div key={category.id} className="w-full h-[340px] p-2">
          <div className="h-full box-border relative">
            <p className="text-lg font-bold mb-2">{category.name}</p>
            <div
              className="h-[280px] flex items-center gap-4 overflow-x-auto scrollbar-hide"
              style={{ width: "calc(2 * 600px + 1 * 16px)" }} // Adjust the width to fit two widgets
            >
              <div className="flex gap-2 h-full">
                {category.widgets.map((widget) => (
                  <Category
                    key={widget.id}
                    widget={widget}
                    categoryId={category.id}
                  />
                ))}
              </div>
              {/* Replace the Add Widget Button with the AddWidgetModal component */}
            </div>
            <AddWidgetModal categoryId={category.id} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default WidgetSection;
