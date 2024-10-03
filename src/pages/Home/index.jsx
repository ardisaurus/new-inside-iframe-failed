import * as React from "react";
import useStoragePermission from "./useStoragePermission";

function Safari() {
  const { askForPermission, needPermission, haveCheckedPermission } =
    useStoragePermission();

  return (
    <div className="element">
      <h2 style={{ color: "red", fontSize: "1.2em" }}>New testing (updated)</h2>
      <p>needPermission : {needPermission ? "false" : "true"}</p>
      <p>haveCheckedPermission : {haveCheckedPermission ? "false" : "true"}</p>

      <ol>
        <li>click `Test Cookie and Close Tab` in this new tab.</li>
        <a href="./add-cookies" target="_blank">
          click here
        </a>
        <li>Click this button and click allow permission</li>
        <button
          type="button"
          onClick={() => askForPermission()}
          className="btn yellow continue btn-yellow-hover"
          style={{ padding: ".4em", margin: ".2em" }}
        >
          click here
        </button>
        <li>Reload this page </li>
        <button
          type="button"
          onClick={() => window.location.reload()}
          className="btn yellow continue btn-yellow-hover"
          style={{ padding: ".4em", margin: ".2em" }}
        >
          Click to Reload
        </button>
      </ol>
    </div>
  );
}
export default Safari;
