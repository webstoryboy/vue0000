import React from "react";
import Header from "../include/Header";
import Footer from "../include/Footer";
import Contents from "../include/Contents";

function Main() {
  return (
    <div>
      <Header />
      <Contents>
        <section id="scriptCont">
          <div className="container">
            <div className="wrap__title">
              <h2><strong>Script</strong><em>Reference</em></h2>
            </div>
            <div className="script__cont">
                  
            </div>
          </div>
        </section>
      </Contents>
      <Footer />
    </div>
  );
}

export default Main;