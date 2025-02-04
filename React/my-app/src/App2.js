import React from "react";
// import Library from "./2-jsx/Library";
import * as Ex from "./2-jsx/Ex";

function App() {
  //return <Libaray />;
  // return (
  //   <MainApp>
  //     <Header />
  //     <Nav />
  //     <Main>
  //       <Section />
  //       <Aside />
  //     </Main>
  //     <Footer />
  //   </MainApp>
  // );
  // return <Ex.Hello name="정채빈" />;
  // return <Ex.Sum num1={2} num2={10} />;
  // return <Ex.DrinkMachine price="2000" />;
  return <Ex.Greeting hour={6} />;
}

export default App;
