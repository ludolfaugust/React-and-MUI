import React from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

function TopNavbar() {
  return (
    <div>
      <div className="phoneicon">
        <PhoneIcon />
        <p className="phonenumber">030998776555</p>
      </div>
      <div className="phoneicon">
        <EmailIcon />
        <p className="phonenumber">shop@mail.com</p>
      </div>
    </div>
  );
}

export default TopNavbar;
