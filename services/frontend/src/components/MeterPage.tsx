/** @jsxImportSource @emotion/react */

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MeterData } from "../MeterData";
import { ProfileCard } from "./ProfileCard";
import { LogoCard } from "./LogoCard";
import { SignalStrengthIcon } from "./SignalStrengthIcon";
import { DigitalClock } from "./DigitalClock";
import { MonoTextCard } from "./MonoTextCard";
import { FlexContainer } from "./FlexContainer";
import { t } from "../i18n";
import { darkGrey } from "../styleConstants";
import { API_BASE_URL } from "../urls";

export function MeterPage() {
  const { id } = useParams();
  const [meter, setMeter] = useState<MeterData | null>(null);
  useEffect(() => {
    fetch(`${API_BASE_URL}/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMeter(data);
      })
      .catch((error) => {
        setMeter(null);
        console.error(error);
        throw error;
      });
  }, [id]);

  return (
    <div
      css={{
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
        height: "inherit",
        placeItems: "center",
        margin: "0 auto",
        maxWidth: "1200px",
        padding: "32px",
      }}
    >
      {meter ? ( // could add loading skeleton here
        <FlexContainer>
          <ProfileCard
            avatar={meter.avatar}
            firstName={meter.firstName}
            lastName={meter.lastName}
            addressFirstLine={meter.address.firstLine}
            addressPostCode={meter.address.postCode}
            eventCount={meter.commsHub.events.length}
            hasSmartMeter={meter.hasSmartMeter}
          />
          <div
            css={{
              display: "flex",
              flex: "2 2 33%",
              gap: "16px",
              flexDirection: "row",
            }}
          >
            <LogoCard
              logoBase64={meter.commsHub.manufacturer.logoBase64}
              iconText={
                <span css={{ color: darkGrey }}>
                  {meter.commsHub.manufacturer.model}
                </span>
              }
              text={t("Make / Model")}
            />
            <LogoCard
              logoBase64={meter.commsHub.supplier.logoBase64}
              text={t("Supplier")}
            />
          </div>
          <LogoCard
            logo={
              <SignalStrengthIcon strengthPercentage={meter.commsHub.signal} />
            }
            iconText={
              <span
                css={{
                  fontSize: "16px",
                  fontFamily: "Ubuntu",
                  fontWeight: 300,
                }}
              >
                {meter.commsHub.signal.toFixed(2)}
              </span>
            }
            text={t("Signal")}
          />
          <FlexContainer css={{ flexWrap: "nowrap" }}>
            <LogoCard
              logo={<DigitalClock timestamp={meter.commsHub.deviceTime} />}
              text={t("Device Time")}
            />
            <FlexContainer>
              <MonoTextCard
                monoText={meter.commsHub.ipv6}
                text={t("IPv6 Address")}
              />
              <MonoTextCard monoText={meter.commsHub.imei} text={t("IMEI")} />
              <MonoTextCard monoText={meter.commsHub.icc} text={t("ICC")} />
              <MonoTextCard
                monoText={meter.commsHub.msisdn}
                text={t("MSISDN")}
              />
            </FlexContainer>
          </FlexContainer>
        </FlexContainer>
      ) : (
        id
      )}
    </div>
  );
}
