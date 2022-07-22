/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Params } from "../tbc/params";
import { CreatorCoin } from "../tbc/creator_coin";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";

export const protobufPackage = "tbc.tbc";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetCreatorCoinRequest {
  index: string;
}

export interface QueryGetCreatorCoinResponse {
  creatorCoin: CreatorCoin | undefined;
}

export interface QueryAllCreatorCoinRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllCreatorCoinResponse {
  creatorCoin: CreatorCoin[];
  pagination: PageResponse | undefined;
}

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
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

  fromJSON(_: any): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },
};

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },
};

const baseQueryGetCreatorCoinRequest: object = { index: "" };

export const QueryGetCreatorCoinRequest = {
  encode(
    message: QueryGetCreatorCoinRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetCreatorCoinRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetCreatorCoinRequest,
    } as QueryGetCreatorCoinRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetCreatorCoinRequest {
    const message = {
      ...baseQueryGetCreatorCoinRequest,
    } as QueryGetCreatorCoinRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    return message;
  },

  toJSON(message: QueryGetCreatorCoinRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetCreatorCoinRequest>
  ): QueryGetCreatorCoinRequest {
    const message = {
      ...baseQueryGetCreatorCoinRequest,
    } as QueryGetCreatorCoinRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    return message;
  },
};

const baseQueryGetCreatorCoinResponse: object = {};

export const QueryGetCreatorCoinResponse = {
  encode(
    message: QueryGetCreatorCoinResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creatorCoin !== undefined) {
      CreatorCoin.encode(
        message.creatorCoin,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetCreatorCoinResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetCreatorCoinResponse,
    } as QueryGetCreatorCoinResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creatorCoin = CreatorCoin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetCreatorCoinResponse {
    const message = {
      ...baseQueryGetCreatorCoinResponse,
    } as QueryGetCreatorCoinResponse;
    if (object.creatorCoin !== undefined && object.creatorCoin !== null) {
      message.creatorCoin = CreatorCoin.fromJSON(object.creatorCoin);
    } else {
      message.creatorCoin = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetCreatorCoinResponse): unknown {
    const obj: any = {};
    message.creatorCoin !== undefined &&
      (obj.creatorCoin = message.creatorCoin
        ? CreatorCoin.toJSON(message.creatorCoin)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetCreatorCoinResponse>
  ): QueryGetCreatorCoinResponse {
    const message = {
      ...baseQueryGetCreatorCoinResponse,
    } as QueryGetCreatorCoinResponse;
    if (object.creatorCoin !== undefined && object.creatorCoin !== null) {
      message.creatorCoin = CreatorCoin.fromPartial(object.creatorCoin);
    } else {
      message.creatorCoin = undefined;
    }
    return message;
  },
};

const baseQueryAllCreatorCoinRequest: object = {};

export const QueryAllCreatorCoinRequest = {
  encode(
    message: QueryAllCreatorCoinRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllCreatorCoinRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllCreatorCoinRequest,
    } as QueryAllCreatorCoinRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllCreatorCoinRequest {
    const message = {
      ...baseQueryAllCreatorCoinRequest,
    } as QueryAllCreatorCoinRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllCreatorCoinRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllCreatorCoinRequest>
  ): QueryAllCreatorCoinRequest {
    const message = {
      ...baseQueryAllCreatorCoinRequest,
    } as QueryAllCreatorCoinRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllCreatorCoinResponse: object = {};

export const QueryAllCreatorCoinResponse = {
  encode(
    message: QueryAllCreatorCoinResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.creatorCoin) {
      CreatorCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllCreatorCoinResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllCreatorCoinResponse,
    } as QueryAllCreatorCoinResponse;
    message.creatorCoin = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creatorCoin.push(CreatorCoin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllCreatorCoinResponse {
    const message = {
      ...baseQueryAllCreatorCoinResponse,
    } as QueryAllCreatorCoinResponse;
    message.creatorCoin = [];
    if (object.creatorCoin !== undefined && object.creatorCoin !== null) {
      for (const e of object.creatorCoin) {
        message.creatorCoin.push(CreatorCoin.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllCreatorCoinResponse): unknown {
    const obj: any = {};
    if (message.creatorCoin) {
      obj.creatorCoin = message.creatorCoin.map((e) =>
        e ? CreatorCoin.toJSON(e) : undefined
      );
    } else {
      obj.creatorCoin = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllCreatorCoinResponse>
  ): QueryAllCreatorCoinResponse {
    const message = {
      ...baseQueryAllCreatorCoinResponse,
    } as QueryAllCreatorCoinResponse;
    message.creatorCoin = [];
    if (object.creatorCoin !== undefined && object.creatorCoin !== null) {
      for (const e of object.creatorCoin) {
        message.creatorCoin.push(CreatorCoin.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a CreatorCoin by index. */
  CreatorCoin(
    request: QueryGetCreatorCoinRequest
  ): Promise<QueryGetCreatorCoinResponse>;
  /** Queries a list of CreatorCoin items. */
  CreatorCoinAll(
    request: QueryAllCreatorCoinRequest
  ): Promise<QueryAllCreatorCoinResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("tbc.tbc.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }

  CreatorCoin(
    request: QueryGetCreatorCoinRequest
  ): Promise<QueryGetCreatorCoinResponse> {
    const data = QueryGetCreatorCoinRequest.encode(request).finish();
    const promise = this.rpc.request("tbc.tbc.Query", "CreatorCoin", data);
    return promise.then((data) =>
      QueryGetCreatorCoinResponse.decode(new Reader(data))
    );
  }

  CreatorCoinAll(
    request: QueryAllCreatorCoinRequest
  ): Promise<QueryAllCreatorCoinResponse> {
    const data = QueryAllCreatorCoinRequest.encode(request).finish();
    const promise = this.rpc.request("tbc.tbc.Query", "CreatorCoinAll", data);
    return promise.then((data) =>
      QueryAllCreatorCoinResponse.decode(new Reader(data))
    );
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