/** @jsxImportSource @emotion/react */

import { darkGrey, lightGrey, mediaQuery1200 } from "../styleConstants";
import { ShortCard } from "./Card";

interface MonoTextCardProps {
  monoText: string;
  text: string;
}

export const MonoTextCard = (props: MonoTextCardProps) => (
  <ShortCard>
    <div
      css={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <span
        css={{
          fontSize: "24px",
          color: lightGrey,
          fontFamily: '"Courier Prime", Courier, monospace',
          wordBreak: "break-word",
          textAlign: "center",
          [mediaQuery1200]: {
            wordBreak: "normal",
          },
        }}
      >
        {props.monoText.toUpperCase().replace(/-/g, " ")}
      </span>
      <span css={{ fontSize: "18px", color: darkGrey }}>{props.text}</span>
    </div>
  </ShortCard>
);
