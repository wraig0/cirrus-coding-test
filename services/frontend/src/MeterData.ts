export type MeterData = {
  guid: string;
  avatar: string;
  firstName: string;
  lastName: string;
  hasSmartMeter: boolean;
  address: {
    firstLine: string;
    postCode: string;
  };
  commsHub: {
    signal: number;
    ipv6: string;
    imei: string;
    deviceTime: string;
    icc: string;
    msisdn: string;
    manufacturer: {
      name: string;
      model: string;
      logoBase64: string;
    };
    supplier: {
      name: string;
      logoBase64: string;
    };
    events: {
      type: string;
      timestamp: string;
    }[];
  };
};
