/** @jsxImportSource @emotion/react */

import { darkGrey } from "../styleConstants";
import { Card } from "./Card";

type LogoCardProps = {
  text: string;
  iconText?: React.ReactNode;
} & (
  | {
      logo: JSX.Element;
      logoBase64?: never;
    }
  | {
      logo?: never;
      logoBase64: string;
    }
);

export const LogoCard = (props: LogoCardProps) => (
  <Card>
    <div
      css={{
        display: "grid",
        gap: "16px",
        alignItems: "center",
        alignContent: "center",
        textAlign: "center",
        justifyContent: "center",
        flexDirection: "column",
        height: "100%",
        gridTemplateRows: "40px 20px",
      }}
    >
      <div
        css={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        {props.logo ? props.logo : null}
        {props.logoBase64 ? (
          <img
            src={`data:image/svg+xml;base64,${props.logoBase64}`}
            alt="logo"
            css={{ width: "100px", height: "30px" }}
          />
        ) : null}
        {props.iconText}
      </div>
      <span css={{ fontWeight: "600", fontSize: "18px", color: darkGrey }}>
        {props.text}
      </span>
    </div>
  </Card>
);
