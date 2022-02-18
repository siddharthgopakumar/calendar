import React, { useState } from "react";

export default function Footer({
  monthMinusOne,
  monthPlusOne,
  yearMinusOne,
  yearPlusOne,
}) {
  console.log("Footer");
  return (
    <div className="footer">
      <button id="previous-year" onClick={yearMinusOne}>
        {"<<"}
      </button>
      <button id="previous-month" onClick={monthMinusOne}>
        {"<"}
      </button>
      <button id="next-month" onClick={monthPlusOne}>
        {">"}
      </button>
      <button id="next-year" onClick={yearPlusOne}>
        {">>"}
      </button>
    </div>
  );
}
