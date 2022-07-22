/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";

export const protobufPackage = "tbc.tbc";

export interface MsgInitSale {
  creator: string;
  initialSupply: string;
  maxSupply: string;
  presalePrice: string;
  maxPrice: string;
}

export interface MsgInitSaleResponse {}

export interface MsgBuyCoin {
  creator: string;
  amount: string;
}

export interface MsgBuyCoinResponse {}

const baseMsgInitSale: object = {
  creator: "",
  initialSupply: "",
  maxSupply: "",
  presalePrice: "",
  maxPrice: "",
};

export const MsgInitSale = {
  encode(message: MsgInitSale, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.initialSupply !== "") {
      writer.uint32(18).string(message.initialSupply);
    }
    if (message.maxSupply !== "") {
      writer.uint32(26).string(message.maxSupply);
    }
    if (message.presalePrice !== "") {
      writer.uint32(34).string(message.presalePrice);
    }
    if (message.maxPrice !== "") {
      writer.uint32(42).string(message.maxPrice);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgInitSale {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgInitSale } as MsgInitSale;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.initialSupply = reader.string();
          break;
        case 3:
          message.maxSupply = reader.string();
          break;
        case 4:
          message.presalePrice = reader.string();
          break;
        case 5:
          message.maxPrice = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgInitSale {
    const message = { ...baseMsgInitSale } as MsgInitSale;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.initialSupply !== undefined && object.initialSupply !== null) {
      message.initialSupply = String(object.initialSupply);
    } else {
      message.initialSupply = "";
    }
    if (object.maxSupply !== undefined && object.maxSupply !== null) {
      message.maxSupply = String(object.maxSupply);
    } else {
      message.maxSupply = "";
    }
    if (object.presalePrice !== undefined && object.presalePrice !== null) {
      message.presalePrice = String(object.presalePrice);
    } else {
      message.presalePrice = "";
    }
    if (object.maxPrice !== undefined && object.maxPrice !== null) {
      message.maxPrice = String(object.maxPrice);
    } else {
      message.maxPrice = "";
    }
    return message;
  },

  toJSON(message: MsgInitSale): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.initialSupply !== undefined &&
      (obj.initialSupply = message.initialSupply);
    message.maxSupply !== undefined && (obj.maxSupply = message.maxSupply);
    message.presalePrice !== undefined &&
      (obj.presalePrice = message.presalePrice);
    message.maxPrice !== undefined && (obj.maxPrice = message.maxPrice);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgInitSale>): MsgInitSale {
    const message = { ...baseMsgInitSale } as MsgInitSale;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.initialSupply !== undefined && object.initialSupply !== null) {
      message.initialSupply = object.initialSupply;
    } else {
      message.initialSupply = "";
    }
    if (object.maxSupply !== undefined && object.maxSupply !== null) {
      message.maxSupply = object.maxSupply;
    } else {
      message.maxSupply = "";
    }
    if (object.presalePrice !== undefined && object.presalePrice !== null) {
      message.presalePrice = object.presalePrice;
    } else {
      message.presalePrice = "";
    }
    if (object.maxPrice !== undefined && object.maxPrice !== null) {
      message.maxPrice = object.maxPrice;
    } else {
      message.maxPrice = "";
    }
    return message;
  },
};

const baseMsgInitSaleResponse: object = {};

export const MsgInitSaleResponse = {
  encode(_: MsgInitSaleResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgInitSaleResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgInitSaleResponse } as MsgInitSaleResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgInitSaleResponse {
    const message = { ...baseMsgInitSaleResponse } as MsgInitSaleResponse;
    return message;
  },

  toJSON(_: MsgInitSaleResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgInitSaleResponse>): MsgInitSaleResponse {
    const message = { ...baseMsgInitSaleResponse } as MsgInitSaleResponse;
    return message;
  },
};

const baseMsgBuyCoin: object = { creator: "", amount: "" };

export const MsgBuyCoin = {
  encode(message: MsgBuyCoin, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgBuyCoin {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgBuyCoin } as MsgBuyCoin;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgBuyCoin {
    const message = { ...baseMsgBuyCoin } as MsgBuyCoin;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = String(object.amount);
    } else {
      message.amount = "";
    }
    return message;
  },

  toJSON(message: MsgBuyCoin): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgBuyCoin>): MsgBuyCoin {
    const message = { ...baseMsgBuyCoin } as MsgBuyCoin;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    } else {
      message.amount = "";
    }
    return message;
  },
};

const baseMsgBuyCoinResponse: object = {};

export const MsgBuyCoinResponse = {
  encode(_: MsgBuyCoinResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgBuyCoinResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgBuyCoinResponse } as MsgBuyCoinResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgBuyCoinResponse {
    const message = { ...baseMsgBuyCoinResponse } as MsgBuyCoinResponse;
    return message;
  },

  toJSON(_: MsgBuyCoinResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgBuyCoinResponse>): MsgBuyCoinResponse {
    const message = { ...baseMsgBuyCoinResponse } as MsgBuyCoinResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  InitSale(request: MsgInitSale): Promise<MsgInitSaleResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  BuyCoin(request: MsgBuyCoin): Promise<MsgBuyCoinResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  InitSale(request: MsgInitSale): Promise<MsgInitSaleResponse> {
    const data = MsgInitSale.encode(request).finish();
    const promise = this.rpc.request("tbc.tbc.Msg", "InitSale", data);
    return promise.then((data) => MsgInitSaleResponse.decode(new Reader(data)));
  }

  BuyCoin(request: MsgBuyCoin): Promise<MsgBuyCoinResponse> {
    const data = MsgBuyCoin.encode(request).finish();
    const promise = this.rpc.request("tbc.tbc.Msg", "BuyCoin", data);
    return promise.then((data) => MsgBuyCoinResponse.decode(new Reader(data)));
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
