import { useState } from "react";
import styleManiDiv from "../app.module.css";
import styleManiDivtabs from "../tabs.module.css";
import { Tab1, Tab2, Tab3 } from "../index";

export default function App() {
  const [activeTab, setActiveTab] = useState("Overview & Order");

  const renderContent = () => {
    if (activeTab === "Overview & Order") return <Tab1 />;
    if (activeTab === "About it") return <Tab2 />;
    if (activeTab === "Register points") return <Tab3 />;
  };

  return (
    <>
      <div className={styleManiDiv.mainDiv}>
        <div className={styleManiDivtabs.mainDivTabs}>
          <button
            className={`${
              activeTab === "Register points"
                ? styleManiDivtabs.activeTab
                : styleManiDivtabs.btns
            }`}
            style={{ borderRadius: "5px 0 0" }}
            onClick={() => setActiveTab("Register points")}
          >
            Register points
          </button>
          <button
            className={`${
              activeTab === "About it"
                ? styleManiDivtabs.activeTab
                : styleManiDivtabs.btns
            }`}
            onClick={() => setActiveTab("About it")}
          >
            About it
          </button>
          <button
            className={`${
              activeTab === "Overview & Order"
                ? styleManiDivtabs.activeTab
                : styleManiDivtabs.btns
            }`}
            style={{ borderRadius: "0 5px 0 0" }}
            onClick={() => setActiveTab("Overview & Order")}
          >
            Overview & Order
          </button>
        </div>
        <div className={styleManiDiv.contentDiv}>{renderContent()}</div>
      </div>
    </>
  );
}
