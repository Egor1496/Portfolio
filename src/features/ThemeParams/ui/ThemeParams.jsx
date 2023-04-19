import React from "react";

import { THEME_COLORS, BASE_PARAMS } from "../../../entities";

const ThemeParams = ({ thisNumberTheme }) => {

  const style = (`
    :root {
      --fontSizeDef1: `+ BASE_PARAMS[thisNumberTheme][0] + `;
      --fontSizeDef2: `+ BASE_PARAMS[thisNumberTheme][1] + `;
      --fontSizeDef3: `+ BASE_PARAMS[thisNumberTheme][2] + `;
      --сolorA1: `+ BASE_PARAMS[thisNumberTheme][3] + `;
      --сolorA2: `+ BASE_PARAMS[thisNumberTheme][4] + `;
      --сolorH1: `+ BASE_PARAMS[thisNumberTheme][5] + `;
      --сolorH2: `+ BASE_PARAMS[thisNumberTheme][6] + `;
      --сolorP1: `+ BASE_PARAMS[thisNumberTheme][7] + `;
      --сolorP2: `+ BASE_PARAMS[thisNumberTheme][8] + `;
      --сolorControl1: `+ BASE_PARAMS[thisNumberTheme][9] + `;
      --сolorControl2: `+ BASE_PARAMS[thisNumberTheme][10] + `;
      --bgDisableControl1: `+ BASE_PARAMS[thisNumberTheme][11] + `;
      --bgDisableControl2: `+ BASE_PARAMS[thisNumberTheme][12] + `;
      --color4: `+ THEME_COLORS[thisNumberTheme][0] + `;
      --color2: `+ THEME_COLORS[thisNumberTheme][1] + `;
      --color3: `+ THEME_COLORS[thisNumberTheme][2] + `;
      --color1: `+ THEME_COLORS[thisNumberTheme][3] + `;
      --color5: `+ THEME_COLORS[thisNumberTheme][4] + `;
    }
`);

  return (
    <div id="theme-params">
      <style type="text/css">
        {style}
      </style>
    </div>
  );
}

export { ThemeParams };