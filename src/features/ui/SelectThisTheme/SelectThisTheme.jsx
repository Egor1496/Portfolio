import React from "react";

import { THEME_COLORS, BASE_PARAMS } from "../../../entities/model";

const SelectThisTheme = ({ numberTheme, children }) => {

  const style = (`
    :root {
      --fontSizeDef1: `+ BASE_PARAMS[numberTheme][0] + `;
      --fontSizeDef2: `+ BASE_PARAMS[numberTheme][1] + `;
      --fontSizeDef3: `+ BASE_PARAMS[numberTheme][2] + `;
      --сolorA1: `+ BASE_PARAMS[numberTheme][3] + `;
      --сolorA2: `+ BASE_PARAMS[numberTheme][4] + `;
      --сolorH1: `+ BASE_PARAMS[numberTheme][5] + `;
      --сolorH2: `+ BASE_PARAMS[numberTheme][6] + `;
      --сolorP1: `+ BASE_PARAMS[numberTheme][7] + `;
      --сolorP2: `+ BASE_PARAMS[numberTheme][8] + `;
      --сolorControl1: `+ BASE_PARAMS[numberTheme][9] + `;
      --сolorControl2: `+ BASE_PARAMS[numberTheme][10] + `;
      --bgDisableControl1: `+ BASE_PARAMS[numberTheme][11] + `;
      --bgDisableControl2: `+ BASE_PARAMS[numberTheme][12] + `;
      --color4: `+ THEME_COLORS[numberTheme][0] + `;
      --color2: `+ THEME_COLORS[numberTheme][1] + `;
      --color3: `+ THEME_COLORS[numberTheme][2] + `;
      --color1: `+ THEME_COLORS[numberTheme][3] + `;
      --color5: `+ THEME_COLORS[numberTheme][4] + `;
    }
`);

  const styleElem = (
    <style type="text/css">
      {style}
    </style>
  );

  return (
    <>
      {styleElem}
      {children}
    </>
  );
}

export { SelectThisTheme };