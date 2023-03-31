import React from "react";
import css from "./TypographyDemo.module.css";

const TypographyDemo = () => {
  return (
    <div className={css.main}>
      <h1>This is heading 1 / H1</h1>
      <h2>This is heading 2 / H2</h2>
      <h3>This is heading 3 / H3</h3>
      <h4>This is heading 4 / H4</h4>
      <h5>This is heading 5 / H6</h5>
      <h6>This is heading 6 / H6</h6>
      <br />
      <p>This is text wrapped in paragraph. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <br />
      <p>This is an example of using <strong>Strong</strong> in text.</p>
      <p>This is an example of using <em>emphasis</em> in text.</p>
      <p>Headquarters of the <abbr>UN</abbr> is in Geneva, Austria.</p>
      <address>
        <strong>w3resource</strong>
        <br />
        21 Ramkrishna Road
        <br />
        Burdwan, WB 713101
        <br />
      </address>
      <br />
      <blockquote>
        <p>You can't say A is made of B or vice versa. All mass is interaction.</p>
        <small>Statement titled "Principles" (c. 1950), quoted in Genius : The Life and Science of Richard Feynman (1992) by James Gleick</small>
      </blockquote>
      <br />
      <h3>This is an unordered list</h3>
      <ul>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>JavaScript</li>
        <li>PHP</li>
        <li>DataBases
          <ul>
            <li>MySQL</li>
            <li>POstgreSQL</li>
            <li>MS SQL Server</li>
          </ul>
        </li>
        <li>Tools and APIs</li>
        <li>JOSN</li>
        <li>C Language</li>
      </ul>
      <br />
      <br />
      <h3>This is an unordered list but styles removed</h3>
      <ul>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>JavaScript</li>
        <li>PHP</li>
        <li>DataBases
          <ul>
            <li>MySQL</li>
            <li>POstgreSQL</li>
            <li>MS SQL Server</li>
          </ul>
        </li>
        <li>Tools and APIs</li>
        <li>JOSN</li>
        <li>C Language</li>
      </ul>
      <br />
      <h3>This is an ordered list</h3>
      <ol>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>JavaScript</li>
        <li>PHP</li>
        <li>DataBases
          <ul>
            <li>MySQL</li>
            <li>PostgreSQL</li>
            <li>MS SQL Server</li>
          </ul>
        </li>
        <li>Tools and APIs</li>
        <li>JOSN</li>
        <li>C Language</li>
      </ol>
      <br />
      <h3>Description list</h3>
      <dl>
        <dt>Ten years ago</dt>
        <dd>a crack commando unit was sent to prison</dd>
        <dt>by a military court </dt>
        <dd>for a crime they didn't commit.</dd>
        <dd>These men promptly escaped from.</dd>
        <dt>a maximum security stockade to the Los Angeles underground.</dt>
        <dd>Today, still wanted by the government, they survive as soldiers of fortune.</dd>
      </dl>
      <br />
      <h3>Horizontal Description list</h3>
      <dl>
        <dt>Ten years ago</dt>
        <dd>a crack commando unit was sent to prison</dd>
        <dt>by a military court </dt>
        <dd>for a crime they didn't commit.</dd>
        <dd>These men promptly escaped from.</dd>
        <dt>a maximum security stockade to the Los Angeles underground.</dt>
        <dd>Today, still wanted by the government, they survive as soldiers of fortune.</dd>
      </dl>

    </div>
  );
}

export { TypographyDemo };