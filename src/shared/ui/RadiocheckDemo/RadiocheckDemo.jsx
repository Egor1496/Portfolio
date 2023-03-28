import React from "react";
import css from "./RadiocheckDemo.module.css"

const RadiocheckDemo = () => {
  return (
    <div className={css.main}>
      <label htmlFor="checkbox1">
        <input type="checkbox" id="checkbox1" required />
        Unchecked
      </label>
      <br />
      <br />
      <label>
        <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" required />
        Radio is off
      </label>
      <br />
      <br />
      <table >
        <thead>
          <tr>
            <th width="20px">
              <label htmlFor="checkbox-table-1">
                <input type="checkbox" id="checkbox-table-1" />
              </label>
            </th>
            <th>Rank</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <label htmlFor="checkbox-table-2">
                <input type="checkbox" id="checkbox-table-2" />
              </label>
            </td>
            <td>1</td>
            <td>The Shawshank Redemption</td>
          </tr>
          <tr>
            <td>
              <label htmlFor="checkbox-table-3">
                <input type="checkbox" id="checkbox-table-3" />
              </label>
            </td>
            <td>2</td>
            <td>The Godfather</td>
          </tr>
          <tr>
            <td>
              <label htmlFor="checkbox-table-4">
                <input type="checkbox" id="checkbox-table-4" />
              </label>
            </td>
            <td>3</td>
            <td>The Godfather: Part II</td>
          </tr>
          <tr>
            <td>
              <label htmlFor="checkbox-table-5">
                <input type="checkbox" id="checkbox-table-5" />
              </label>
            </td>
            <td>4</td>
            <td>Pulp Fiction</td>
          </tr>
          <tr>
            <td>
              <label htmlFor="checkbox-table-6">
                <input type="checkbox" id="checkbox-table-6" />
              </label>
            </td>
            <td>5</td>
            <td>The Good, the Bad and the Ugly</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export { RadiocheckDemo };