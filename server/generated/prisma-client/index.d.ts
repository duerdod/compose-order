// Code generated by Prisma (prisma@1.34.8). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export type Maybe<T> = T | undefined | null;

export interface Exists {
  cart: (where?: CartWhereInput) => Promise<boolean>;
  cartItem: (where?: CartItemWhereInput) => Promise<boolean>;
  product: (where?: ProductWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  cart: (where: CartWhereUniqueInput) => CartNullablePromise;
  carts: (args?: {
    where?: CartWhereInput;
    orderBy?: CartOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Cart>;
  cartsConnection: (args?: {
    where?: CartWhereInput;
    orderBy?: CartOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => CartConnectionPromise;
  cartItem: (where: CartItemWhereUniqueInput) => CartItemNullablePromise;
  cartItems: (args?: {
    where?: CartItemWhereInput;
    orderBy?: CartItemOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<CartItem>;
  cartItemsConnection: (args?: {
    where?: CartItemWhereInput;
    orderBy?: CartItemOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => CartItemConnectionPromise;
  product: (where: ProductWhereUniqueInput) => ProductNullablePromise;
  products: (args?: {
    where?: ProductWhereInput;
    orderBy?: ProductOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Product>;
  productsConnection: (args?: {
    where?: ProductWhereInput;
    orderBy?: ProductOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => ProductConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createCart: (data: CartCreateInput) => CartPromise;
  updateCart: (args: {
    data: CartUpdateInput;
    where: CartWhereUniqueInput;
  }) => CartPromise;
  upsertCart: (args: {
    where: CartWhereUniqueInput;
    create: CartCreateInput;
    update: CartUpdateInput;
  }) => CartPromise;
  deleteCart: (where: CartWhereUniqueInput) => CartPromise;
  deleteManyCarts: (where?: CartWhereInput) => BatchPayloadPromise;
  createCartItem: (data: CartItemCreateInput) => CartItemPromise;
  updateCartItem: (args: {
    data: CartItemUpdateInput;
    where: CartItemWhereUniqueInput;
  }) => CartItemPromise;
  updateManyCartItems: (args: {
    data: CartItemUpdateManyMutationInput;
    where?: CartItemWhereInput;
  }) => BatchPayloadPromise;
  upsertCartItem: (args: {
    where: CartItemWhereUniqueInput;
    create: CartItemCreateInput;
    update: CartItemUpdateInput;
  }) => CartItemPromise;
  deleteCartItem: (where: CartItemWhereUniqueInput) => CartItemPromise;
  deleteManyCartItems: (where?: CartItemWhereInput) => BatchPayloadPromise;
  createProduct: (data: ProductCreateInput) => ProductPromise;
  updateProduct: (args: {
    data: ProductUpdateInput;
    where: ProductWhereUniqueInput;
  }) => ProductPromise;
  updateManyProducts: (args: {
    data: ProductUpdateManyMutationInput;
    where?: ProductWhereInput;
  }) => BatchPayloadPromise;
  upsertProduct: (args: {
    where: ProductWhereUniqueInput;
    create: ProductCreateInput;
    update: ProductUpdateInput;
  }) => ProductPromise;
  deleteProduct: (where: ProductWhereUniqueInput) => ProductPromise;
  deleteManyProducts: (where?: ProductWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  cart: (
    where?: CartSubscriptionWhereInput
  ) => CartSubscriptionPayloadSubscription;
  cartItem: (
    where?: CartItemSubscriptionWhereInput
  ) => CartItemSubscriptionPayloadSubscription;
  product: (
    where?: ProductSubscriptionWhereInput
  ) => ProductSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type CartItemOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "quantity_ASC"
  | "quantity_DESC";

export type CartOrderByInput = "id_ASC" | "id_DESC";

export type ProductOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "productName_ASC"
  | "productName_DESC"
  | "brand_ASC"
  | "brand_DESC"
  | "productType_ASC"
  | "productType_DESC"
  | "description_ASC"
  | "description_DESC"
  | "price_ASC"
  | "price_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export interface ProductCreateOneInput {
  create?: Maybe<ProductCreateInput>;
  connect?: Maybe<ProductWhereUniqueInput>;
}

export type CartWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface CartItemWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  quantity?: Maybe<Int>;
  quantity_not?: Maybe<Int>;
  quantity_in?: Maybe<Int[] | Int>;
  quantity_not_in?: Maybe<Int[] | Int>;
  quantity_lt?: Maybe<Int>;
  quantity_lte?: Maybe<Int>;
  quantity_gt?: Maybe<Int>;
  quantity_gte?: Maybe<Int>;
  product?: Maybe<ProductWhereInput>;
  AND?: Maybe<CartItemWhereInput[] | CartItemWhereInput>;
  OR?: Maybe<CartItemWhereInput[] | CartItemWhereInput>;
  NOT?: Maybe<CartItemWhereInput[] | CartItemWhereInput>;
}

export interface CartItemUpdateDataInput {
  quantity?: Maybe<Int>;
  product?: Maybe<ProductUpdateOneInput>;
}

export interface ProductUpsertNestedInput {
  update: ProductUpdateDataInput;
  create: ProductCreateInput;
}

export interface CartUpdateInput {
  products?: Maybe<CartItemUpdateManyInput>;
}

export interface ProductUpdateimageInput {
  set?: Maybe<String[] | String>;
}

export interface CartItemSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<CartItemWhereInput>;
  AND?: Maybe<
    CartItemSubscriptionWhereInput[] | CartItemSubscriptionWhereInput
  >;
  OR?: Maybe<CartItemSubscriptionWhereInput[] | CartItemSubscriptionWhereInput>;
  NOT?: Maybe<
    CartItemSubscriptionWhereInput[] | CartItemSubscriptionWhereInput
  >;
}

export interface ProductUpdateDataInput {
  productName?: Maybe<String>;
  brand?: Maybe<String>;
  productType?: Maybe<Int>;
  description?: Maybe<String>;
  price?: Maybe<Int>;
  image?: Maybe<ProductUpdateimageInput>;
}

export interface CartSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<CartWhereInput>;
  AND?: Maybe<CartSubscriptionWhereInput[] | CartSubscriptionWhereInput>;
  OR?: Maybe<CartSubscriptionWhereInput[] | CartSubscriptionWhereInput>;
  NOT?: Maybe<CartSubscriptionWhereInput[] | CartSubscriptionWhereInput>;
}

export interface ProductUpdateInput {
  productName?: Maybe<String>;
  brand?: Maybe<String>;
  productType?: Maybe<Int>;
  description?: Maybe<String>;
  price?: Maybe<Int>;
  image?: Maybe<ProductUpdateimageInput>;
}

export interface CartItemUpdateInput {
  quantity?: Maybe<Int>;
  product?: Maybe<ProductUpdateOneInput>;
}

export interface CartCreateInput {
  id?: Maybe<ID_Input>;
  products?: Maybe<CartItemCreateManyInput>;
}

export type CartItemWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface CartItemCreateManyInput {
  create?: Maybe<CartItemCreateInput[] | CartItemCreateInput>;
  connect?: Maybe<CartItemWhereUniqueInput[] | CartItemWhereUniqueInput>;
}

export interface CartItemScalarWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  quantity?: Maybe<Int>;
  quantity_not?: Maybe<Int>;
  quantity_in?: Maybe<Int[] | Int>;
  quantity_not_in?: Maybe<Int[] | Int>;
  quantity_lt?: Maybe<Int>;
  quantity_lte?: Maybe<Int>;
  quantity_gt?: Maybe<Int>;
  quantity_gte?: Maybe<Int>;
  AND?: Maybe<CartItemScalarWhereInput[] | CartItemScalarWhereInput>;
  OR?: Maybe<CartItemScalarWhereInput[] | CartItemScalarWhereInput>;
  NOT?: Maybe<CartItemScalarWhereInput[] | CartItemScalarWhereInput>;
}

export interface CartItemCreateInput {
  id?: Maybe<ID_Input>;
  quantity: Int;
  product?: Maybe<ProductCreateOneInput>;
}

export type ProductWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface ProductUpdateOneInput {
  create?: Maybe<ProductCreateInput>;
  update?: Maybe<ProductUpdateDataInput>;
  upsert?: Maybe<ProductUpsertNestedInput>;
  delete?: Maybe<Boolean>;
  disconnect?: Maybe<Boolean>;
  connect?: Maybe<ProductWhereUniqueInput>;
}

export interface CartWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  products_every?: Maybe<CartItemWhereInput>;
  products_some?: Maybe<CartItemWhereInput>;
  products_none?: Maybe<CartItemWhereInput>;
  AND?: Maybe<CartWhereInput[] | CartWhereInput>;
  OR?: Maybe<CartWhereInput[] | CartWhereInput>;
  NOT?: Maybe<CartWhereInput[] | CartWhereInput>;
}

export interface ProductCreateInput {
  id?: Maybe<ID_Input>;
  productName: String;
  brand: String;
  productType: Int;
  description: String;
  price: Int;
  image?: Maybe<ProductCreateimageInput>;
}

export interface CartItemUpdateManyMutationInput {
  quantity?: Maybe<Int>;
}

export interface CartItemUpdateWithWhereUniqueNestedInput {
  where: CartItemWhereUniqueInput;
  data: CartItemUpdateDataInput;
}

export interface CartItemUpdateManyInput {
  create?: Maybe<CartItemCreateInput[] | CartItemCreateInput>;
  update?: Maybe<
    | CartItemUpdateWithWhereUniqueNestedInput[]
    | CartItemUpdateWithWhereUniqueNestedInput
  >;
  upsert?: Maybe<
    | CartItemUpsertWithWhereUniqueNestedInput[]
    | CartItemUpsertWithWhereUniqueNestedInput
  >;
  delete?: Maybe<CartItemWhereUniqueInput[] | CartItemWhereUniqueInput>;
  connect?: Maybe<CartItemWhereUniqueInput[] | CartItemWhereUniqueInput>;
  set?: Maybe<CartItemWhereUniqueInput[] | CartItemWhereUniqueInput>;
  disconnect?: Maybe<CartItemWhereUniqueInput[] | CartItemWhereUniqueInput>;
  deleteMany?: Maybe<CartItemScalarWhereInput[] | CartItemScalarWhereInput>;
  updateMany?: Maybe<
    | CartItemUpdateManyWithWhereNestedInput[]
    | CartItemUpdateManyWithWhereNestedInput
  >;
}

export interface ProductWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  productName?: Maybe<String>;
  productName_not?: Maybe<String>;
  productName_in?: Maybe<String[] | String>;
  productName_not_in?: Maybe<String[] | String>;
  productName_lt?: Maybe<String>;
  productName_lte?: Maybe<String>;
  productName_gt?: Maybe<String>;
  productName_gte?: Maybe<String>;
  productName_contains?: Maybe<String>;
  productName_not_contains?: Maybe<String>;
  productName_starts_with?: Maybe<String>;
  productName_not_starts_with?: Maybe<String>;
  productName_ends_with?: Maybe<String>;
  productName_not_ends_with?: Maybe<String>;
  brand?: Maybe<String>;
  brand_not?: Maybe<String>;
  brand_in?: Maybe<String[] | String>;
  brand_not_in?: Maybe<String[] | String>;
  brand_lt?: Maybe<String>;
  brand_lte?: Maybe<String>;
  brand_gt?: Maybe<String>;
  brand_gte?: Maybe<String>;
  brand_contains?: Maybe<String>;
  brand_not_contains?: Maybe<String>;
  brand_starts_with?: Maybe<String>;
  brand_not_starts_with?: Maybe<String>;
  brand_ends_with?: Maybe<String>;
  brand_not_ends_with?: Maybe<String>;
  productType?: Maybe<Int>;
  productType_not?: Maybe<Int>;
  productType_in?: Maybe<Int[] | Int>;
  productType_not_in?: Maybe<Int[] | Int>;
  productType_lt?: Maybe<Int>;
  productType_lte?: Maybe<Int>;
  productType_gt?: Maybe<Int>;
  productType_gte?: Maybe<Int>;
  description?: Maybe<String>;
  description_not?: Maybe<String>;
  description_in?: Maybe<String[] | String>;
  description_not_in?: Maybe<String[] | String>;
  description_lt?: Maybe<String>;
  description_lte?: Maybe<String>;
  description_gt?: Maybe<String>;
  description_gte?: Maybe<String>;
  description_contains?: Maybe<String>;
  description_not_contains?: Maybe<String>;
  description_starts_with?: Maybe<String>;
  description_not_starts_with?: Maybe<String>;
  description_ends_with?: Maybe<String>;
  description_not_ends_with?: Maybe<String>;
  price?: Maybe<Int>;
  price_not?: Maybe<Int>;
  price_in?: Maybe<Int[] | Int>;
  price_not_in?: Maybe<Int[] | Int>;
  price_lt?: Maybe<Int>;
  price_lte?: Maybe<Int>;
  price_gt?: Maybe<Int>;
  price_gte?: Maybe<Int>;
  AND?: Maybe<ProductWhereInput[] | ProductWhereInput>;
  OR?: Maybe<ProductWhereInput[] | ProductWhereInput>;
  NOT?: Maybe<ProductWhereInput[] | ProductWhereInput>;
}

export interface ProductCreateimageInput {
  set?: Maybe<String[] | String>;
}

export interface CartItemUpdateManyDataInput {
  quantity?: Maybe<Int>;
}

export interface ProductUpdateManyMutationInput {
  productName?: Maybe<String>;
  brand?: Maybe<String>;
  productType?: Maybe<Int>;
  description?: Maybe<String>;
  price?: Maybe<Int>;
  image?: Maybe<ProductUpdateimageInput>;
}

export interface ProductSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<ProductWhereInput>;
  AND?: Maybe<ProductSubscriptionWhereInput[] | ProductSubscriptionWhereInput>;
  OR?: Maybe<ProductSubscriptionWhereInput[] | ProductSubscriptionWhereInput>;
  NOT?: Maybe<ProductSubscriptionWhereInput[] | ProductSubscriptionWhereInput>;
}

export interface CartItemUpsertWithWhereUniqueNestedInput {
  where: CartItemWhereUniqueInput;
  update: CartItemUpdateDataInput;
  create: CartItemCreateInput;
}

export interface CartItemUpdateManyWithWhereNestedInput {
  where: CartItemScalarWhereInput;
  data: CartItemUpdateManyDataInput;
}

export interface NodeNode {
  id: ID_Output;
}

export interface ProductPreviousValues {
  id: ID_Output;
  productName: String;
  brand: String;
  productType: Int;
  description: String;
  price: Int;
  image: String[];
}

export interface ProductPreviousValuesPromise
  extends Promise<ProductPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  productName: () => Promise<String>;
  brand: () => Promise<String>;
  productType: () => Promise<Int>;
  description: () => Promise<String>;
  price: () => Promise<Int>;
  image: () => Promise<String[]>;
}

export interface ProductPreviousValuesSubscription
  extends Promise<AsyncIterator<ProductPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  productName: () => Promise<AsyncIterator<String>>;
  brand: () => Promise<AsyncIterator<String>>;
  productType: () => Promise<AsyncIterator<Int>>;
  description: () => Promise<AsyncIterator<String>>;
  price: () => Promise<AsyncIterator<Int>>;
  image: () => Promise<AsyncIterator<String[]>>;
}

export interface CartEdge {
  node: Cart;
  cursor: String;
}

export interface CartEdgePromise extends Promise<CartEdge>, Fragmentable {
  node: <T = CartPromise>() => T;
  cursor: () => Promise<String>;
}

export interface CartEdgeSubscription
  extends Promise<AsyncIterator<CartEdge>>,
    Fragmentable {
  node: <T = CartSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface CartItemSubscriptionPayload {
  mutation: MutationType;
  node: CartItem;
  updatedFields: String[];
  previousValues: CartItemPreviousValues;
}

export interface CartItemSubscriptionPayloadPromise
  extends Promise<CartItemSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = CartItemPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = CartItemPreviousValuesPromise>() => T;
}

export interface CartItemSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<CartItemSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = CartItemSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = CartItemPreviousValuesSubscription>() => T;
}

export interface CartItem {
  id: ID_Output;
  quantity: Int;
}

export interface CartItemPromise extends Promise<CartItem>, Fragmentable {
  id: () => Promise<ID_Output>;
  quantity: () => Promise<Int>;
  product: <T = ProductPromise>() => T;
}

export interface CartItemSubscription
  extends Promise<AsyncIterator<CartItem>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  quantity: () => Promise<AsyncIterator<Int>>;
  product: <T = ProductSubscription>() => T;
}

export interface CartItemNullablePromise
  extends Promise<CartItem | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  quantity: () => Promise<Int>;
  product: <T = ProductPromise>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateProduct {
  count: Int;
}

export interface AggregateProductPromise
  extends Promise<AggregateProduct>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateProductSubscription
  extends Promise<AsyncIterator<AggregateProduct>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface ProductConnection {
  pageInfo: PageInfo;
  edges: ProductEdge[];
}

export interface ProductConnectionPromise
  extends Promise<ProductConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<ProductEdge>>() => T;
  aggregate: <T = AggregateProductPromise>() => T;
}

export interface ProductConnectionSubscription
  extends Promise<AsyncIterator<ProductConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<ProductEdgeSubscription>>>() => T;
  aggregate: <T = AggregateProductSubscription>() => T;
}

export interface CartConnection {
  pageInfo: PageInfo;
  edges: CartEdge[];
}

export interface CartConnectionPromise
  extends Promise<CartConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<CartEdge>>() => T;
  aggregate: <T = AggregateCartPromise>() => T;
}

export interface CartConnectionSubscription
  extends Promise<AsyncIterator<CartConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<CartEdgeSubscription>>>() => T;
  aggregate: <T = AggregateCartSubscription>() => T;
}

export interface CartItemEdge {
  node: CartItem;
  cursor: String;
}

export interface CartItemEdgePromise
  extends Promise<CartItemEdge>,
    Fragmentable {
  node: <T = CartItemPromise>() => T;
  cursor: () => Promise<String>;
}

export interface CartItemEdgeSubscription
  extends Promise<AsyncIterator<CartItemEdge>>,
    Fragmentable {
  node: <T = CartItemSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface CartItemPreviousValues {
  id: ID_Output;
  quantity: Int;
}

export interface CartItemPreviousValuesPromise
  extends Promise<CartItemPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  quantity: () => Promise<Int>;
}

export interface CartItemPreviousValuesSubscription
  extends Promise<AsyncIterator<CartItemPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  quantity: () => Promise<AsyncIterator<Int>>;
}

export interface AggregateCart {
  count: Int;
}

export interface AggregateCartPromise
  extends Promise<AggregateCart>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateCartSubscription
  extends Promise<AsyncIterator<AggregateCart>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface ProductSubscriptionPayload {
  mutation: MutationType;
  node: Product;
  updatedFields: String[];
  previousValues: ProductPreviousValues;
}

export interface ProductSubscriptionPayloadPromise
  extends Promise<ProductSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = ProductPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = ProductPreviousValuesPromise>() => T;
}

export interface ProductSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<ProductSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = ProductSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = ProductPreviousValuesSubscription>() => T;
}

export interface Product {
  id: ID_Output;
  productName: String;
  brand: String;
  productType: Int;
  description: String;
  price: Int;
  image: String[];
}

export interface ProductPromise extends Promise<Product>, Fragmentable {
  id: () => Promise<ID_Output>;
  productName: () => Promise<String>;
  brand: () => Promise<String>;
  productType: () => Promise<Int>;
  description: () => Promise<String>;
  price: () => Promise<Int>;
  image: () => Promise<String[]>;
}

export interface ProductSubscription
  extends Promise<AsyncIterator<Product>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  productName: () => Promise<AsyncIterator<String>>;
  brand: () => Promise<AsyncIterator<String>>;
  productType: () => Promise<AsyncIterator<Int>>;
  description: () => Promise<AsyncIterator<String>>;
  price: () => Promise<AsyncIterator<Int>>;
  image: () => Promise<AsyncIterator<String[]>>;
}

export interface ProductNullablePromise
  extends Promise<Product | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  productName: () => Promise<String>;
  brand: () => Promise<String>;
  productType: () => Promise<Int>;
  description: () => Promise<String>;
  price: () => Promise<Int>;
  image: () => Promise<String[]>;
}

export interface CartPreviousValues {
  id: ID_Output;
}

export interface CartPreviousValuesPromise
  extends Promise<CartPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
}

export interface CartPreviousValuesSubscription
  extends Promise<AsyncIterator<CartPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
}

export interface CartSubscriptionPayload {
  mutation: MutationType;
  node: Cart;
  updatedFields: String[];
  previousValues: CartPreviousValues;
}

export interface CartSubscriptionPayloadPromise
  extends Promise<CartSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = CartPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = CartPreviousValuesPromise>() => T;
}

export interface CartSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<CartSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = CartSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = CartPreviousValuesSubscription>() => T;
}

export interface Cart {
  id: ID_Output;
}

export interface CartPromise extends Promise<Cart>, Fragmentable {
  id: () => Promise<ID_Output>;
  products: <T = FragmentableArray<CartItem>>(args?: {
    where?: CartItemWhereInput;
    orderBy?: CartItemOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface CartSubscription
  extends Promise<AsyncIterator<Cart>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  products: <T = Promise<AsyncIterator<CartItemSubscription>>>(args?: {
    where?: CartItemWhereInput;
    orderBy?: CartItemOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface CartNullablePromise
  extends Promise<Cart | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  products: <T = FragmentableArray<CartItem>>(args?: {
    where?: CartItemWhereInput;
    orderBy?: CartItemOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface ProductEdge {
  node: Product;
  cursor: String;
}

export interface ProductEdgePromise extends Promise<ProductEdge>, Fragmentable {
  node: <T = ProductPromise>() => T;
  cursor: () => Promise<String>;
}

export interface ProductEdgeSubscription
  extends Promise<AsyncIterator<ProductEdge>>,
    Fragmentable {
  node: <T = ProductSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface CartItemConnection {
  pageInfo: PageInfo;
  edges: CartItemEdge[];
}

export interface CartItemConnectionPromise
  extends Promise<CartItemConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<CartItemEdge>>() => T;
  aggregate: <T = AggregateCartItemPromise>() => T;
}

export interface CartItemConnectionSubscription
  extends Promise<AsyncIterator<CartItemConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<CartItemEdgeSubscription>>>() => T;
  aggregate: <T = AggregateCartItemSubscription>() => T;
}

export interface AggregateCartItem {
  count: Int;
}

export interface AggregateCartItemPromise
  extends Promise<AggregateCartItem>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateCartItemSubscription
  extends Promise<AsyncIterator<AggregateCartItem>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

export type Long = string;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type Int = number;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "Product",
    embedded: false
  },
  {
    name: "CartItem",
    embedded: false
  },
  {
    name: "Cart",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;
