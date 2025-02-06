import React from "react";
import * as E from "./9-conditional/ConditionalRender";
import * as Ex from "./9-conditional/Ex";

function App() {
  // return <E.Conditional1 isLoggedIn="true" />;
  // return <E.LandingPage />;
  // return <Ex.UserProfile user="." name="정채빈" email="a@a.com" />;
  // return <Ex.Notification />;
  return <Ex.Premiun isPremium={false} />;
}

export default App;
