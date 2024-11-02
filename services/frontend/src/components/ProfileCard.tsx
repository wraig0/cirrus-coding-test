/** @jsxImportSource @emotion/react */

import {
  smartMeterPill,
  textAddress,
  textEvents,
  textWhite,
  mediaQuery1200,
} from "../styleConstants";
import { t } from "../i18n";
import { Card } from "./Card";

interface ProfileCardProps {
  avatar: string;
  firstName: string;
  lastName: string;
  addressFirstLine: string;
  addressPostCode: string;
  eventCount: number;
  hasSmartMeter: boolean;
}

export function ProfileCard(props: ProfileCardProps) {
  return (
    <div>
      <div
        css={{
          height: "40px",
          [mediaQuery1200]: {
            height: "0px",
          },
        }}
      />
      <Card
        css={{
          position: "relative",
          height: "220px",
          [mediaQuery1200]: {
            height: "auto",
            top: "auto",
          },
        }}
      >
        <div
          css={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "16px",
            textWrap: "nowrap",
            top: "-50px",
            position: "relative",
            [mediaQuery1200]: {
              top: "0px",
              flexDirection: "row",
            },
          }}
        >
          <img
            src={props.avatar}
            height={"140px"}
            alt="avatar"
            css={{
              borderRadius: "50%",
              [mediaQuery1200]: {},
            }}
          />
          <div
            css={{
              display: "flex",
              flexDirection: "column",
              gap: "4px",
              alignItems: "center",
              [mediaQuery1200]: {
                alignItems: "flex-start",
              },
            }}
          >
            <div
              css={{ fontSize: "28px", fontWeight: "600", fontFamily: "Lato" }}
            >
              {props.firstName} {props.lastName}
            </div>
            <div
              css={{
                fontSize: "20px",
                fontWeight: "400",
                fontFamily: "Lato",
                color: textAddress,
                maxWidth: "280px",
                textAlign: "center",
                whiteSpace: "normal",
                [mediaQuery1200]: {
                  textAlign: "left",
                  maxWidth: "400px",
                },
              }}
            >
              {props.addressFirstLine}, {props.addressPostCode}
            </div>
            <div
              css={{
                fontSize: "16px",
                fontWeight: "400",
                fontFamily: "Lato",
                color: textEvents,
              }}
            >
              {props.eventCount} {t("events")}
            </div>
            {props.hasSmartMeter ?? 1 ? (
              <div
                css={{
                  marginTop: "8px",
                  background: smartMeterPill,
                  display: "flex",
                  borderRadius: "16px",
                  paddingLeft: "24px",
                  paddingRight: "24px",
                  paddingTop: "4px",
                  paddingBottom: "4px",
                  color: textWhite,
                  alignItems: "center",
                  justifyContent: "center",
                  width: "fit-content",
                }}
              >
                {t("Smart Meter")}
              </div>
            ) : null}
          </div>
        </div>
      </Card>
    </div>
  );
}
