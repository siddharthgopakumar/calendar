import React, { Component, useState, useEffect } from "react";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

import "../styles/App.css";

const App = () => {
  const [month1, setMonth1] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());

  

  function setMonth(month) {
    setMonth1(month);
  }

  function setYearAux(yearly) {
    setYear(yearly);
  }

  function monthMinusOne() {
    setMonth1(month1 == 0 ? 11 : Number(month1) - 1);
  }

  function monthPlusOne() {
    setMonth1(month1 == 11 ? 0 : Number(month1) + 1);
  }

  function yearMinusOne() {
    setYear(Number(year) - 1);
  }

  function yearPlusOne() {
    setYear(Number(year) + 1);
  }

  return (
    <div id="main">
      <Header
        setMonth={setMonth}
        setYearAux={setYearAux}
        year={year}
        mo={month1}
      />
      <Body monthNo={month1} yearNo={year} />
      <Footer
        monthMinusOne={monthMinusOne}
        monthPlusOne={monthPlusOne}
        yearMinusOne={yearMinusOne}
        yearPlusOne={yearPlusOne}
      />
    </div>
  );
};

export default App;
