export interface PayloadFields {
    Hum: number;
    Level: number;
    Temp: number;
}

export interface Payload {
    _id: string;
    dev_id: string;
    payload_fields: PayloadFields;
    payload_date: Date;
    __v: number;
}

