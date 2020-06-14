export interface Gateway {
    gtw_id: string;
    timestamp: number;
    time: string;
    channel: number;
    rssi: number;
    snr: number;
    rf_chain: number;
    latitude: number;
    longitude: number;
    altitude: number;
}

export interface Metadata {
    time: string;
    frequency: number;
    modulation: string;
    data_rate: string;
    airtime: number;
    coding_rate: string;
    gateways: Gateway[];
}

export interface Sensor {
    _id: string;
    app_id: string;
    dev_id: string;
    hardware_serial: string;
    metadata: Metadata;
    __v: number;
}

