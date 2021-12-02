import React from "react";
import Header from "../include/Header";
import Footer from "../include/Footer";
import Contents from "../include/Contents";

function Main() {
  return (
    <div>
      <Header />
      <Contents>
        <section id="youtubeCont">
          <div className="container">
            <div className="wrap__title">
              <h2><strong>Youtube</strong><em>Reference</em></h2>
            </div> 
            <div className="youtube__cont">
                  
            </div>
          </div>
        </section>
      </Contents>
      <Footer />
    </div>
  );
}

export default Main;