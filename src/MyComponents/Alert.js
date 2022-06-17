import React from "react";

export default function Alert(props) {
  const Alert = props.Alert;
  const captalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt().toUpperCase() + lower.slice(1);
  };

  return (
    Alert && (
      <div>
        <div
          className={`alert alert-${Alert.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{captalize(Alert.type)} :</strong> {captalize(Alert.msg)}
        </div>
      </div>
    )
  );
}
