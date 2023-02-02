import { useState } from "react";
import React, { Component } from "react";
import Switch from "react-switch";
import adminActions from "../store/admin/actions";
const {adminAuthors} = adminActions

const BasicHooksExample = () => {
    let e = Boolean
    const [checked, setChecked] = useState(e);
    const handleChange = nextChecked => {
      setChecked(nextChecked);
    };
  
    return (
      <div className="example">
          <Switch
            onChange={handleChange}
            checked={checked}
            className="react-switch"
          />
      </div>
    );
  };

export default BasicHooksExample