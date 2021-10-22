import React from "react";
import Footer from "./footer";
import Header from "./header";

class WebLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <>
        <Header />
        <div>{children}</div>
        <Footer />
      </>
    );
  }
}

export default WebLayout;
