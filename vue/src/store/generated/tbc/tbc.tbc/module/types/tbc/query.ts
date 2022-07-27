/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { Params } from "../tbc/params";
import { CreatorCoin } from "../tbc/creator_coin";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";
import { CoinAll } from "../tbc/coin_all";

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

export interface QueryCoinListRequest {
  pagination: PageRequest | undefined;
}

export interface QueryCoinListResponse {
  coinAll: CoinAll[];
}

export interface QueryPriceRequest {
  symbol: string;
}

export interface QueryPriceResponse {
  price: number;
}

export interface QueryCoinBatchRequest {
  queryList: string;
}

export interface QueryCoinBatchResponse {
  creatorCoin: CreatorCoin[];
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

const baseQueryCoinListRequest: object = {};

export const QueryCoinListRequest = {
  encode(
    message: QueryCoinListRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryCoinListRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryCoinListRequest } as QueryCoinListRequest;
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

  fromJSON(object: any): QueryCoinListRequest {
    const message = { ...baseQueryCoinListRequest } as QueryCoinListRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryCoinListRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryCoinListRequest>): QueryCoinListRequest {
    const message = { ...baseQueryCoinListRequest } as QueryCoinListRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryCoinListResponse: object = {};

export const QueryCoinListResponse = {
  encode(
    message: QueryCoinListResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.coinAll) {
      CoinAll.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryCoinListResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryCoinListResponse } as QueryCoinListResponse;
    message.coinAll = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.coinAll.push(CoinAll.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCoinListResponse {
    const message = { ...baseQueryCoinListResponse } as QueryCoinListResponse;
    message.coinAll = [];
    if (object.coinAll !== undefined && object.coinAll !== null) {
      for (const e of object.coinAll) {
        message.coinAll.push(CoinAll.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: QueryCoinListResponse): unknown {
    const obj: any = {};
    if (message.coinAll) {
      obj.coinAll = message.coinAll.map((e) =>
        e ? CoinAll.toJSON(e) : undefined
      );
    } else {
      obj.coinAll = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryCoinListResponse>
  ): QueryCoinListResponse {
    const message = { ...baseQueryCoinListResponse } as QueryCoinListResponse;
    message.coinAll = [];
    if (object.coinAll !== undefined && object.coinAll !== null) {
      for (const e of object.coinAll) {
        message.coinAll.push(CoinAll.fromPartial(e));
      }
    }
    return message;
  },
};

const baseQueryPriceRequest: object = { symbol: "" };

export const QueryPriceRequest = {
  encode(message: QueryPriceRequest, writer: Writer = Writer.create()): Writer {
    if (message.symbol !== "") {
      writer.uint32(10).string(message.symbol);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryPriceRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryPriceRequest } as QueryPriceRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.symbol = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPriceRequest {
    const message = { ...baseQueryPriceRequest } as QueryPriceRequest;
    if (object.symbol !== undefined && object.symbol !== null) {
      message.symbol = String(object.symbol);
    } else {
      message.symbol = "";
    }
    return message;
  },

  toJSON(message: QueryPriceRequest): unknown {
    const obj: any = {};
    message.symbol !== undefined && (obj.symbol = message.symbol);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryPriceRequest>): QueryPriceRequest {
    const message = { ...baseQueryPriceRequest } as QueryPriceRequest;
    if (object.symbol !== undefined && object.symbol !== null) {
      message.symbol = object.symbol;
    } else {
      message.symbol = "";
    }
    return message;
  },
};

const baseQueryPriceResponse: object = { price: 0 };

export const QueryPriceResponse = {
  encode(
    message: QueryPriceResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.price !== 0) {
      writer.uint32(8).uint64(message.price);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryPriceResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryPriceResponse } as QueryPriceResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.price = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPriceResponse {
    const message = { ...baseQueryPriceResponse } as QueryPriceResponse;
    if (object.price !== undefined && object.price !== null) {
      message.price = Number(object.price);
    } else {
      message.price = 0;
    }
    return message;
  },

  toJSON(message: QueryPriceResponse): unknown {
    const obj: any = {};
    message.price !== undefined && (obj.price = message.price);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryPriceResponse>): QueryPriceResponse {
    const message = { ...baseQueryPriceResponse } as QueryPriceResponse;
    if (object.price !== undefined && object.price !== null) {
      message.price = object.price;
    } else {
      message.price = 0;
    }
    return message;
  },
};

const baseQueryCoinBatchRequest: object = { queryList: "" };

export const QueryCoinBatchRequest = {
  encode(
    message: QueryCoinBatchRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.queryList !== "") {
      writer.uint32(10).string(message.queryList);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryCoinBatchRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryCoinBatchRequest } as QueryCoinBatchRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.queryList = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCoinBatchRequest {
    const message = { ...baseQueryCoinBatchRequest } as QueryCoinBatchRequest;
    if (object.queryList !== undefined && object.queryList !== null) {
      message.queryList = String(object.queryList);
    } else {
      message.queryList = "";
    }
    return message;
  },

  toJSON(message: QueryCoinBatchRequest): unknown {
    const obj: any = {};
    message.queryList !== undefined && (obj.queryList = message.queryList);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryCoinBatchRequest>
  ): QueryCoinBatchRequest {
    const message = { ...baseQueryCoinBatchRequest } as QueryCoinBatchRequest;
    if (object.queryList !== undefined && object.queryList !== null) {
      message.queryList = object.queryList;
    } else {
      message.queryList = "";
    }
    return message;
  },
};

const baseQueryCoinBatchResponse: object = {};

export const QueryCoinBatchResponse = {
  encode(
    message: QueryCoinBatchResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.creatorCoin) {
      CreatorCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryCoinBatchResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryCoinBatchResponse } as QueryCoinBatchResponse;
    message.creatorCoin = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creatorCoin.push(CreatorCoin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCoinBatchResponse {
    const message = { ...baseQueryCoinBatchResponse } as QueryCoinBatchResponse;
    message.creatorCoin = [];
    if (object.creatorCoin !== undefined && object.creatorCoin !== null) {
      for (const e of object.creatorCoin) {
        message.creatorCoin.push(CreatorCoin.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: QueryCoinBatchResponse): unknown {
    const obj: any = {};
    if (message.creatorCoin) {
      obj.creatorCoin = message.creatorCoin.map((e) =>
        e ? CreatorCoin.toJSON(e) : undefined
      );
    } else {
      obj.creatorCoin = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryCoinBatchResponse>
  ): QueryCoinBatchResponse {
    const message = { ...baseQueryCoinBatchResponse } as QueryCoinBatchResponse;
    message.creatorCoin = [];
    if (object.creatorCoin !== undefined && object.creatorCoin !== null) {
      for (const e of object.creatorCoin) {
        message.creatorCoin.push(CreatorCoin.fromPartial(e));
      }
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
  /** Queries a list of CoinList items. */
  CoinList(request: QueryCoinListRequest): Promise<QueryCoinListResponse>;
  /** Queries a list of Price items. */
  Price(request: QueryPriceRequest): Promise<QueryPriceResponse>;
  /** Queries a list of CoinBatch items. */
  CoinBatch(request: QueryCoinBatchRequest): Promise<QueryCoinBatchResponse>;
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

  CoinList(request: QueryCoinListRequest): Promise<QueryCoinListResponse> {
    const data = QueryCoinListRequest.encode(request).finish();
    const promise = this.rpc.request("tbc.tbc.Query", "CoinList", data);
    return promise.then((data) =>
      QueryCoinListResponse.decode(new Reader(data))
    );
  }

  Price(request: QueryPriceRequest): Promise<QueryPriceResponse> {
    const data = QueryPriceRequest.encode(request).finish();
    const promise = this.rpc.request("tbc.tbc.Query", "Price", data);
    return promise.then((data) => QueryPriceResponse.decode(new Reader(data)));
  }

  CoinBatch(request: QueryCoinBatchRequest): Promise<QueryCoinBatchResponse> {
    const data = QueryCoinBatchRequest.encode(request).finish();
    const promise = this.rpc.request("tbc.tbc.Query", "CoinBatch", data);
    return promise.then((data) =>
      QueryCoinBatchResponse.decode(new Reader(data))
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

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

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

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
