/** @jsxImportSource @emotion/react */

import {
  digitalClockBackground,
  digitalClockShadow,
  textBlack,
} from "../styleConstants";
import { getLocales } from "../i18n";

interface DigitalClockProps {
  timestamp: string;
}
export function DigitalClock(props: DigitalClockProps) {
  let date: Date | null = new Date(props.timestamp);
  if (date.toString() === "Invalid Date") {
    date = null;
  }

  return (
    <div
      css={{
        fontSize: "24px",
        fontWeight: "200",
        color: textBlack,
        background: digitalClockBackground,
        padding: "16px",
        whiteSpace: "nowrap",
        height: "20px",
        width: "100px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: `inset ${digitalClockShadow} 0 4px 1px`,
      }}
    >
      {date === null
        ? "--:--:--"
        : date.toLocaleTimeString(getLocales(), {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hourCycle: "h24",
          })}
    </div>
  );
}
