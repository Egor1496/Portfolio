import React from "react";
import styles from "./TypographyDemo.module.css";

const TypographyDemo = () => {
  return (
    <div className={styles.main}>
      <h1>h1. Bootstrap heading</h1>
      <h2>h2. Bootstrap heading</h2>
      <h3>h3. Bootstrap heading</h3>
      <h4>h4. Bootstrap heading</h4>
      <h5>h5. Bootstrap heading</h5>
      <h6>h6. Bootstrap heading</h6>
      <p>
        <small>This line of text is meant to be treated as fine print.</small>
      </p>
      <p>
        <strong>rendered as bold text</strong>
      </p>
      <p>
        <em>rendered as italicized text</em>
      </p>
      <p>Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.</p>
      <p>An abbreviation of the word attribute is <abbr title="attribute">attr</abbr></p>
      <p><abbr title="HyperText">HTML</abbr> is the best thing since sliced bread.</p>
      <address>
        <strong>Full Name</strong>
        <br />
        <a href="mailto:#">first.last@example.com</a>
      </address>
      <blockquote>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </blockquote>
      <ol>
        <li>Lorem ipsum dolor sit amet</li>
      </ol>
      <ul>
        <li>Lorem ipsum dolor sit amet</li>
        <li>Nulla volutpat aliquam velit
          <ul>
            <li>Phasellus iaculis neque</li>
          </ul>
        </li>
        <li>Faucibus porta lacus fringilla vel</li>
      </ul>
      <dl>
        <dt>Description lists</dt>
        <dd>A description list is perfect for defining terms.</dd>
      </dl>
    </div>
  );
}

export { TypographyDemo };