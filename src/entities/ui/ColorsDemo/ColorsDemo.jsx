import React from "react";
import css from "./ColorsDemo.module.sass"

import { Grid, GridСell } from "../../../shared/ui";

const ColorsDemo = () => {
  return (
    <div className={css.div}>
      <Grid>
        <GridСell>
          <div className={css.cellColor}>
            <div className={`${css.color1}`}><h1>1</h1></div>
            <div className={`${css.color2}`}><h1>2</h1></div>
            <div className={`${css.color3}`}><h1>3</h1></div>
            <div className={`${css.color4}`}><h1>4</h1></div>
            <div className={`${css.color5}`}><h1>5</h1></div>
          </div>
        </GridСell>
        <GridСell>
          <div className={`${css.colorDef1}`}><h1>colorDef1</h1></div>
          <div className={`${css.colorDef2}`}><h1>colorDef2</h1></div>
        </GridСell>
        <GridСell>
          <div className={`${css.сolorP1}`}><h1>сolorP1</h1></div>
          <div className={`${css.сolorP2}`}><h1>сolorP2</h1></div>
        </GridСell>
        <GridСell>
          <div className={`${css.сolorA1}`}><h1>сolorA1</h1></div>
          <div className={`${css.сolorA2}`}><h1>сolorA2</h1></div>
        </GridСell>
        <GridСell>
          <div className={`${css.сolorH1}`}><h1>сolorH1</h1></div>
          <div className={`${css.сolorH2}`}><h1>сolorH2</h1></div>
        </GridСell>
        <GridСell>
          <div className={`${css.сolorControl1}`}><h1>сolorControl1</h1></div>
          <div className={`${css.сolorControl2}`}><h1>сolorControl2</h1></div></GridСell>
        <GridСell>
          <div className={`${css.bgDisableControl1}`}><h1>bgDisableControl1</h1></div>
          <div className={`${css.bgDisableControl2}`}><h1>bgDisableControl2</h1></div>
        </GridСell>
        <GridСell>
          <div className={`${css.fontSizeDef1}`}><h1>fontSizeDef1</h1></div>
          <div className={`${css.fontSizeDef2}`}><h1>fontSizeDef2</h1></div>
          <div className={`${css.fontSizeDef3}`}><h1>fontSizeDef3</h1></div></GridСell>
      </Grid>
    </div>
  );
}

export { ColorsDemo };