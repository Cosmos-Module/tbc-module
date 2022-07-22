/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "tbc.tbc";

export interface CreatorCoin {
  index: string;
  creator: string;
  maxSupply: string;
  initialSupply: string;
  presalePrice: string;
  maxPrice: string;
}

const baseCreatorCoin: object = {
  index: "",
  creator: "",
  maxSupply: "",
  initialSupply: "",
  presalePrice: "",
  maxPrice: "",
};

export const CreatorCoin = {
  encode(message: CreatorCoin, writer: Writer = Writer.create()): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    if (message.maxSupply !== "") {
      writer.uint32(26).string(message.maxSupply);
    }
    if (message.initialSupply !== "") {
      writer.uint32(34).string(message.initialSupply);
    }
    if (message.presalePrice !== "") {
      writer.uint32(42).string(message.presalePrice);
    }
    if (message.maxPrice !== "") {
      writer.uint32(50).string(message.maxPrice);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CreatorCoin {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreatorCoin } as CreatorCoin;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        case 2:
          message.creator = reader.string();
          break;
        case 3:
          message.maxSupply = reader.string();
          break;
        case 4:
          message.initialSupply = reader.string();
          break;
        case 5:
          message.presalePrice = reader.string();
          break;
        case 6:
          message.maxPrice = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreatorCoin {
    const message = { ...baseCreatorCoin } as CreatorCoin;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.maxSupply !== undefined && object.maxSupply !== null) {
      message.maxSupply = String(object.maxSupply);
    } else {
      message.maxSupply = "";
    }
    if (object.initialSupply !== undefined && object.initialSupply !== null) {
      message.initialSupply = String(object.initialSupply);
    } else {
      message.initialSupply = "";
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

  toJSON(message: CreatorCoin): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    message.creator !== undefined && (obj.creator = message.creator);
    message.maxSupply !== undefined && (obj.maxSupply = message.maxSupply);
    message.initialSupply !== undefined &&
      (obj.initialSupply = message.initialSupply);
    message.presalePrice !== undefined &&
      (obj.presalePrice = message.presalePrice);
    message.maxPrice !== undefined && (obj.maxPrice = message.maxPrice);
    return obj;
  },

  fromPartial(object: DeepPartial<CreatorCoin>): CreatorCoin {
    const message = { ...baseCreatorCoin } as CreatorCoin;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.maxSupply !== undefined && object.maxSupply !== null) {
      message.maxSupply = object.maxSupply;
    } else {
      message.maxSupply = "";
    }
    if (object.initialSupply !== undefined && object.initialSupply !== null) {
      message.initialSupply = object.initialSupply;
    } else {
      message.initialSupply = "";
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
