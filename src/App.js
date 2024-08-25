import TabBar from "./components/tabbar/Tabbar.jsx";
import WidgetSection from "./components/WidgetSection/WidgetSection.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import { useState } from "react";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearch = (query) => {
    setSearchQuery(query.toLowerCase());
  };

  return (
    <div className="w-auto">
      <Navbar onSearch={handleSearch} />
      <div className="w-full bg-blue-100 min-h-[100vh] pt-12">
        <div className="h-full w-full flex flex-col pt-8 px-10">
          <div className="h-full">
            <TabBar />
          </div>
          <div className="h-full">
            <WidgetSection searchQuery={searchQuery} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
