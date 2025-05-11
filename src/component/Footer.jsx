import React from "react";

function Footer() {
  const d = new Date();
  let year = d.getFullYear();

  return (
    <div className="footer">
      <p>Copyright @ {year}</p>
    </div>
  );
}

export default Footer;
