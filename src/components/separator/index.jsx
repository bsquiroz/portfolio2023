/* eslint-disable react/prop-types */

import "./styles.css";

export const Separator = ({ sepator = "30px" }) => {
    return <div className="separator" style={{ margin: `${sepator} 0` }}></div>;
};
