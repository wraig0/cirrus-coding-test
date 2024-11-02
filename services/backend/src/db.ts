import data from "./data.json";

const dataMap = new Map(data.map((d) => [d.guid, d]));

export async function getMeterData(guid: string) {
  return dataMap.get(guid);
}
