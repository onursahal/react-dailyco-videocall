import React from "react";
import DailyIframe from "@daily-co/daily-js";

const CallFrame = () => {
  return DailyIframe.wrap(MY_IFRAME);
};

function App() {
  return <div>Camera</div>;
}

export default App;
