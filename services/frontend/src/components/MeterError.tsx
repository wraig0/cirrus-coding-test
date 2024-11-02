import { t } from "../i18n";

export function MeterError() {
  return (
    <>
      <h1>{t("Error")}</h1>
      <p>{t("There was an error loading the meter data.")}</p>
    </>
  );
}
