
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model SecretSantaSession
 * 
 */
export type SecretSantaSession = $Result.DefaultSelection<Prisma.$SecretSantaSessionPayload>
/**
 * Model Pair
 * 
 */
export type Pair = $Result.DefaultSelection<Prisma.$PairPayload>
/**
 * Model UnmatchedUser
 * 
 */
export type UnmatchedUser = $Result.DefaultSelection<Prisma.$UnmatchedUserPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  EMPLOYEE: 'EMPLOYEE'
};

export type Role = (typeof Role)[keyof typeof Role]


export const SessionMode: {
  OPTIMAL: 'OPTIMAL',
  NAIVE: 'NAIVE'
};

export type SessionMode = (typeof SessionMode)[keyof typeof SessionMode]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type SessionMode = $Enums.SessionMode

export const SessionMode: typeof $Enums.SessionMode

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.secretSantaSession`: Exposes CRUD operations for the **SecretSantaSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SecretSantaSessions
    * const secretSantaSessions = await prisma.secretSantaSession.findMany()
    * ```
    */
  get secretSantaSession(): Prisma.SecretSantaSessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pair`: Exposes CRUD operations for the **Pair** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pairs
    * const pairs = await prisma.pair.findMany()
    * ```
    */
  get pair(): Prisma.PairDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.unmatchedUser`: Exposes CRUD operations for the **UnmatchedUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UnmatchedUsers
    * const unmatchedUsers = await prisma.unmatchedUser.findMany()
    * ```
    */
  get unmatchedUser(): Prisma.UnmatchedUserDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.1.0
   * Query Engine version: ab635e6b9d606fa5c8fb8b1a7f909c3c3c1c98ba
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    SecretSantaSession: 'SecretSantaSession',
    Pair: 'Pair',
    UnmatchedUser: 'UnmatchedUser'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "secretSantaSession" | "pair" | "unmatchedUser"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      SecretSantaSession: {
        payload: Prisma.$SecretSantaSessionPayload<ExtArgs>
        fields: Prisma.SecretSantaSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SecretSantaSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecretSantaSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SecretSantaSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecretSantaSessionPayload>
          }
          findFirst: {
            args: Prisma.SecretSantaSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecretSantaSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SecretSantaSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecretSantaSessionPayload>
          }
          findMany: {
            args: Prisma.SecretSantaSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecretSantaSessionPayload>[]
          }
          create: {
            args: Prisma.SecretSantaSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecretSantaSessionPayload>
          }
          createMany: {
            args: Prisma.SecretSantaSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SecretSantaSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecretSantaSessionPayload>[]
          }
          delete: {
            args: Prisma.SecretSantaSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecretSantaSessionPayload>
          }
          update: {
            args: Prisma.SecretSantaSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecretSantaSessionPayload>
          }
          deleteMany: {
            args: Prisma.SecretSantaSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SecretSantaSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SecretSantaSessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecretSantaSessionPayload>[]
          }
          upsert: {
            args: Prisma.SecretSantaSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecretSantaSessionPayload>
          }
          aggregate: {
            args: Prisma.SecretSantaSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSecretSantaSession>
          }
          groupBy: {
            args: Prisma.SecretSantaSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SecretSantaSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SecretSantaSessionCountArgs<ExtArgs>
            result: $Utils.Optional<SecretSantaSessionCountAggregateOutputType> | number
          }
        }
      }
      Pair: {
        payload: Prisma.$PairPayload<ExtArgs>
        fields: Prisma.PairFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PairFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PairPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PairFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PairPayload>
          }
          findFirst: {
            args: Prisma.PairFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PairPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PairFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PairPayload>
          }
          findMany: {
            args: Prisma.PairFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PairPayload>[]
          }
          create: {
            args: Prisma.PairCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PairPayload>
          }
          createMany: {
            args: Prisma.PairCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PairCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PairPayload>[]
          }
          delete: {
            args: Prisma.PairDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PairPayload>
          }
          update: {
            args: Prisma.PairUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PairPayload>
          }
          deleteMany: {
            args: Prisma.PairDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PairUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PairUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PairPayload>[]
          }
          upsert: {
            args: Prisma.PairUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PairPayload>
          }
          aggregate: {
            args: Prisma.PairAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePair>
          }
          groupBy: {
            args: Prisma.PairGroupByArgs<ExtArgs>
            result: $Utils.Optional<PairGroupByOutputType>[]
          }
          count: {
            args: Prisma.PairCountArgs<ExtArgs>
            result: $Utils.Optional<PairCountAggregateOutputType> | number
          }
        }
      }
      UnmatchedUser: {
        payload: Prisma.$UnmatchedUserPayload<ExtArgs>
        fields: Prisma.UnmatchedUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UnmatchedUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnmatchedUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UnmatchedUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnmatchedUserPayload>
          }
          findFirst: {
            args: Prisma.UnmatchedUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnmatchedUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UnmatchedUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnmatchedUserPayload>
          }
          findMany: {
            args: Prisma.UnmatchedUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnmatchedUserPayload>[]
          }
          create: {
            args: Prisma.UnmatchedUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnmatchedUserPayload>
          }
          createMany: {
            args: Prisma.UnmatchedUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UnmatchedUserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnmatchedUserPayload>[]
          }
          delete: {
            args: Prisma.UnmatchedUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnmatchedUserPayload>
          }
          update: {
            args: Prisma.UnmatchedUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnmatchedUserPayload>
          }
          deleteMany: {
            args: Prisma.UnmatchedUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UnmatchedUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UnmatchedUserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnmatchedUserPayload>[]
          }
          upsert: {
            args: Prisma.UnmatchedUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnmatchedUserPayload>
          }
          aggregate: {
            args: Prisma.UnmatchedUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUnmatchedUser>
          }
          groupBy: {
            args: Prisma.UnmatchedUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UnmatchedUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UnmatchedUserCountArgs<ExtArgs>
            result: $Utils.Optional<UnmatchedUserCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    secretSantaSession?: SecretSantaSessionOmit
    pair?: PairOmit
    unmatchedUser?: UnmatchedUserOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    sessionsCreated: number
    givenPairs: number
    receivedPairs: number
    unmatchedSessions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessionsCreated?: boolean | UserCountOutputTypeCountSessionsCreatedArgs
    givenPairs?: boolean | UserCountOutputTypeCountGivenPairsArgs
    receivedPairs?: boolean | UserCountOutputTypeCountReceivedPairsArgs
    unmatchedSessions?: boolean | UserCountOutputTypeCountUnmatchedSessionsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsCreatedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SecretSantaSessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGivenPairsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PairWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReceivedPairsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PairWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUnmatchedSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UnmatchedUserWhereInput
  }


  /**
   * Count Type SecretSantaSessionCountOutputType
   */

  export type SecretSantaSessionCountOutputType = {
    pairs: number
    unmatchedUsers: number
  }

  export type SecretSantaSessionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pairs?: boolean | SecretSantaSessionCountOutputTypeCountPairsArgs
    unmatchedUsers?: boolean | SecretSantaSessionCountOutputTypeCountUnmatchedUsersArgs
  }

  // Custom InputTypes
  /**
   * SecretSantaSessionCountOutputType without action
   */
  export type SecretSantaSessionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecretSantaSessionCountOutputType
     */
    select?: SecretSantaSessionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SecretSantaSessionCountOutputType without action
   */
  export type SecretSantaSessionCountOutputTypeCountPairsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PairWhereInput
  }

  /**
   * SecretSantaSessionCountOutputType without action
   */
  export type SecretSantaSessionCountOutputTypeCountUnmatchedUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UnmatchedUserWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    passwordHash: string | null
    firstName: string | null
    lastName: string | null
    role: $Enums.Role | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    passwordHash: string | null
    firstName: string | null
    lastName: string | null
    role: $Enums.Role | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    passwordHash: number
    firstName: number
    lastName: number
    role: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    firstName?: true
    lastName?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    firstName?: true
    lastName?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    firstName?: true
    lastName?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    passwordHash: string
    firstName: string
    lastName: string
    role: $Enums.Role
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    firstName?: boolean
    lastName?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sessionsCreated?: boolean | User$sessionsCreatedArgs<ExtArgs>
    givenPairs?: boolean | User$givenPairsArgs<ExtArgs>
    receivedPairs?: boolean | User$receivedPairsArgs<ExtArgs>
    unmatchedSessions?: boolean | User$unmatchedSessionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    firstName?: boolean
    lastName?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    firstName?: boolean
    lastName?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    firstName?: boolean
    lastName?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "passwordHash" | "firstName" | "lastName" | "role" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessionsCreated?: boolean | User$sessionsCreatedArgs<ExtArgs>
    givenPairs?: boolean | User$givenPairsArgs<ExtArgs>
    receivedPairs?: boolean | User$receivedPairsArgs<ExtArgs>
    unmatchedSessions?: boolean | User$unmatchedSessionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      sessionsCreated: Prisma.$SecretSantaSessionPayload<ExtArgs>[]
      givenPairs: Prisma.$PairPayload<ExtArgs>[]
      receivedPairs: Prisma.$PairPayload<ExtArgs>[]
      unmatchedSessions: Prisma.$UnmatchedUserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      passwordHash: string
      firstName: string
      lastName: string
      role: $Enums.Role
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sessionsCreated<T extends User$sessionsCreatedArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsCreatedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SecretSantaSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    givenPairs<T extends User$givenPairsArgs<ExtArgs> = {}>(args?: Subset<T, User$givenPairsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PairPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    receivedPairs<T extends User$receivedPairsArgs<ExtArgs> = {}>(args?: Subset<T, User$receivedPairsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PairPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    unmatchedSessions<T extends User$unmatchedSessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$unmatchedSessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnmatchedUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.sessionsCreated
   */
  export type User$sessionsCreatedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecretSantaSession
     */
    select?: SecretSantaSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecretSantaSession
     */
    omit?: SecretSantaSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecretSantaSessionInclude<ExtArgs> | null
    where?: SecretSantaSessionWhereInput
    orderBy?: SecretSantaSessionOrderByWithRelationInput | SecretSantaSessionOrderByWithRelationInput[]
    cursor?: SecretSantaSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SecretSantaSessionScalarFieldEnum | SecretSantaSessionScalarFieldEnum[]
  }

  /**
   * User.givenPairs
   */
  export type User$givenPairsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pair
     */
    select?: PairSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pair
     */
    omit?: PairOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PairInclude<ExtArgs> | null
    where?: PairWhereInput
    orderBy?: PairOrderByWithRelationInput | PairOrderByWithRelationInput[]
    cursor?: PairWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PairScalarFieldEnum | PairScalarFieldEnum[]
  }

  /**
   * User.receivedPairs
   */
  export type User$receivedPairsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pair
     */
    select?: PairSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pair
     */
    omit?: PairOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PairInclude<ExtArgs> | null
    where?: PairWhereInput
    orderBy?: PairOrderByWithRelationInput | PairOrderByWithRelationInput[]
    cursor?: PairWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PairScalarFieldEnum | PairScalarFieldEnum[]
  }

  /**
   * User.unmatchedSessions
   */
  export type User$unmatchedSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnmatchedUser
     */
    select?: UnmatchedUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnmatchedUser
     */
    omit?: UnmatchedUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnmatchedUserInclude<ExtArgs> | null
    where?: UnmatchedUserWhereInput
    orderBy?: UnmatchedUserOrderByWithRelationInput | UnmatchedUserOrderByWithRelationInput[]
    cursor?: UnmatchedUserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UnmatchedUserScalarFieldEnum | UnmatchedUserScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model SecretSantaSession
   */

  export type AggregateSecretSantaSession = {
    _count: SecretSantaSessionCountAggregateOutputType | null
    _avg: SecretSantaSessionAvgAggregateOutputType | null
    _sum: SecretSantaSessionSumAggregateOutputType | null
    _min: SecretSantaSessionMinAggregateOutputType | null
    _max: SecretSantaSessionMaxAggregateOutputType | null
  }

  export type SecretSantaSessionAvgAggregateOutputType = {
    id: number | null
    createdByUserId: number | null
  }

  export type SecretSantaSessionSumAggregateOutputType = {
    id: number | null
    createdByUserId: number | null
  }

  export type SecretSantaSessionMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    createdByUserId: number | null
    mode: $Enums.SessionMode | null
  }

  export type SecretSantaSessionMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    createdByUserId: number | null
    mode: $Enums.SessionMode | null
  }

  export type SecretSantaSessionCountAggregateOutputType = {
    id: number
    createdAt: number
    createdByUserId: number
    mode: number
    _all: number
  }


  export type SecretSantaSessionAvgAggregateInputType = {
    id?: true
    createdByUserId?: true
  }

  export type SecretSantaSessionSumAggregateInputType = {
    id?: true
    createdByUserId?: true
  }

  export type SecretSantaSessionMinAggregateInputType = {
    id?: true
    createdAt?: true
    createdByUserId?: true
    mode?: true
  }

  export type SecretSantaSessionMaxAggregateInputType = {
    id?: true
    createdAt?: true
    createdByUserId?: true
    mode?: true
  }

  export type SecretSantaSessionCountAggregateInputType = {
    id?: true
    createdAt?: true
    createdByUserId?: true
    mode?: true
    _all?: true
  }

  export type SecretSantaSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SecretSantaSession to aggregate.
     */
    where?: SecretSantaSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SecretSantaSessions to fetch.
     */
    orderBy?: SecretSantaSessionOrderByWithRelationInput | SecretSantaSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SecretSantaSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SecretSantaSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SecretSantaSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SecretSantaSessions
    **/
    _count?: true | SecretSantaSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SecretSantaSessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SecretSantaSessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SecretSantaSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SecretSantaSessionMaxAggregateInputType
  }

  export type GetSecretSantaSessionAggregateType<T extends SecretSantaSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSecretSantaSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSecretSantaSession[P]>
      : GetScalarType<T[P], AggregateSecretSantaSession[P]>
  }




  export type SecretSantaSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SecretSantaSessionWhereInput
    orderBy?: SecretSantaSessionOrderByWithAggregationInput | SecretSantaSessionOrderByWithAggregationInput[]
    by: SecretSantaSessionScalarFieldEnum[] | SecretSantaSessionScalarFieldEnum
    having?: SecretSantaSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SecretSantaSessionCountAggregateInputType | true
    _avg?: SecretSantaSessionAvgAggregateInputType
    _sum?: SecretSantaSessionSumAggregateInputType
    _min?: SecretSantaSessionMinAggregateInputType
    _max?: SecretSantaSessionMaxAggregateInputType
  }

  export type SecretSantaSessionGroupByOutputType = {
    id: number
    createdAt: Date
    createdByUserId: number
    mode: $Enums.SessionMode
    _count: SecretSantaSessionCountAggregateOutputType | null
    _avg: SecretSantaSessionAvgAggregateOutputType | null
    _sum: SecretSantaSessionSumAggregateOutputType | null
    _min: SecretSantaSessionMinAggregateOutputType | null
    _max: SecretSantaSessionMaxAggregateOutputType | null
  }

  type GetSecretSantaSessionGroupByPayload<T extends SecretSantaSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SecretSantaSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SecretSantaSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SecretSantaSessionGroupByOutputType[P]>
            : GetScalarType<T[P], SecretSantaSessionGroupByOutputType[P]>
        }
      >
    >


  export type SecretSantaSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    createdByUserId?: boolean
    mode?: boolean
    createdByUser?: boolean | UserDefaultArgs<ExtArgs>
    pairs?: boolean | SecretSantaSession$pairsArgs<ExtArgs>
    unmatchedUsers?: boolean | SecretSantaSession$unmatchedUsersArgs<ExtArgs>
    _count?: boolean | SecretSantaSessionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["secretSantaSession"]>

  export type SecretSantaSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    createdByUserId?: boolean
    mode?: boolean
    createdByUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["secretSantaSession"]>

  export type SecretSantaSessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    createdByUserId?: boolean
    mode?: boolean
    createdByUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["secretSantaSession"]>

  export type SecretSantaSessionSelectScalar = {
    id?: boolean
    createdAt?: boolean
    createdByUserId?: boolean
    mode?: boolean
  }

  export type SecretSantaSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "createdByUserId" | "mode", ExtArgs["result"]["secretSantaSession"]>
  export type SecretSantaSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdByUser?: boolean | UserDefaultArgs<ExtArgs>
    pairs?: boolean | SecretSantaSession$pairsArgs<ExtArgs>
    unmatchedUsers?: boolean | SecretSantaSession$unmatchedUsersArgs<ExtArgs>
    _count?: boolean | SecretSantaSessionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SecretSantaSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdByUser?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SecretSantaSessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdByUser?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SecretSantaSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SecretSantaSession"
    objects: {
      createdByUser: Prisma.$UserPayload<ExtArgs>
      pairs: Prisma.$PairPayload<ExtArgs>[]
      unmatchedUsers: Prisma.$UnmatchedUserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      createdByUserId: number
      mode: $Enums.SessionMode
    }, ExtArgs["result"]["secretSantaSession"]>
    composites: {}
  }

  type SecretSantaSessionGetPayload<S extends boolean | null | undefined | SecretSantaSessionDefaultArgs> = $Result.GetResult<Prisma.$SecretSantaSessionPayload, S>

  type SecretSantaSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SecretSantaSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SecretSantaSessionCountAggregateInputType | true
    }

  export interface SecretSantaSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SecretSantaSession'], meta: { name: 'SecretSantaSession' } }
    /**
     * Find zero or one SecretSantaSession that matches the filter.
     * @param {SecretSantaSessionFindUniqueArgs} args - Arguments to find a SecretSantaSession
     * @example
     * // Get one SecretSantaSession
     * const secretSantaSession = await prisma.secretSantaSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SecretSantaSessionFindUniqueArgs>(args: SelectSubset<T, SecretSantaSessionFindUniqueArgs<ExtArgs>>): Prisma__SecretSantaSessionClient<$Result.GetResult<Prisma.$SecretSantaSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SecretSantaSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SecretSantaSessionFindUniqueOrThrowArgs} args - Arguments to find a SecretSantaSession
     * @example
     * // Get one SecretSantaSession
     * const secretSantaSession = await prisma.secretSantaSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SecretSantaSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SecretSantaSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SecretSantaSessionClient<$Result.GetResult<Prisma.$SecretSantaSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SecretSantaSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecretSantaSessionFindFirstArgs} args - Arguments to find a SecretSantaSession
     * @example
     * // Get one SecretSantaSession
     * const secretSantaSession = await prisma.secretSantaSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SecretSantaSessionFindFirstArgs>(args?: SelectSubset<T, SecretSantaSessionFindFirstArgs<ExtArgs>>): Prisma__SecretSantaSessionClient<$Result.GetResult<Prisma.$SecretSantaSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SecretSantaSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecretSantaSessionFindFirstOrThrowArgs} args - Arguments to find a SecretSantaSession
     * @example
     * // Get one SecretSantaSession
     * const secretSantaSession = await prisma.secretSantaSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SecretSantaSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SecretSantaSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SecretSantaSessionClient<$Result.GetResult<Prisma.$SecretSantaSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SecretSantaSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecretSantaSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SecretSantaSessions
     * const secretSantaSessions = await prisma.secretSantaSession.findMany()
     * 
     * // Get first 10 SecretSantaSessions
     * const secretSantaSessions = await prisma.secretSantaSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const secretSantaSessionWithIdOnly = await prisma.secretSantaSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SecretSantaSessionFindManyArgs>(args?: SelectSubset<T, SecretSantaSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SecretSantaSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SecretSantaSession.
     * @param {SecretSantaSessionCreateArgs} args - Arguments to create a SecretSantaSession.
     * @example
     * // Create one SecretSantaSession
     * const SecretSantaSession = await prisma.secretSantaSession.create({
     *   data: {
     *     // ... data to create a SecretSantaSession
     *   }
     * })
     * 
     */
    create<T extends SecretSantaSessionCreateArgs>(args: SelectSubset<T, SecretSantaSessionCreateArgs<ExtArgs>>): Prisma__SecretSantaSessionClient<$Result.GetResult<Prisma.$SecretSantaSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SecretSantaSessions.
     * @param {SecretSantaSessionCreateManyArgs} args - Arguments to create many SecretSantaSessions.
     * @example
     * // Create many SecretSantaSessions
     * const secretSantaSession = await prisma.secretSantaSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SecretSantaSessionCreateManyArgs>(args?: SelectSubset<T, SecretSantaSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SecretSantaSessions and returns the data saved in the database.
     * @param {SecretSantaSessionCreateManyAndReturnArgs} args - Arguments to create many SecretSantaSessions.
     * @example
     * // Create many SecretSantaSessions
     * const secretSantaSession = await prisma.secretSantaSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SecretSantaSessions and only return the `id`
     * const secretSantaSessionWithIdOnly = await prisma.secretSantaSession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SecretSantaSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SecretSantaSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SecretSantaSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SecretSantaSession.
     * @param {SecretSantaSessionDeleteArgs} args - Arguments to delete one SecretSantaSession.
     * @example
     * // Delete one SecretSantaSession
     * const SecretSantaSession = await prisma.secretSantaSession.delete({
     *   where: {
     *     // ... filter to delete one SecretSantaSession
     *   }
     * })
     * 
     */
    delete<T extends SecretSantaSessionDeleteArgs>(args: SelectSubset<T, SecretSantaSessionDeleteArgs<ExtArgs>>): Prisma__SecretSantaSessionClient<$Result.GetResult<Prisma.$SecretSantaSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SecretSantaSession.
     * @param {SecretSantaSessionUpdateArgs} args - Arguments to update one SecretSantaSession.
     * @example
     * // Update one SecretSantaSession
     * const secretSantaSession = await prisma.secretSantaSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SecretSantaSessionUpdateArgs>(args: SelectSubset<T, SecretSantaSessionUpdateArgs<ExtArgs>>): Prisma__SecretSantaSessionClient<$Result.GetResult<Prisma.$SecretSantaSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SecretSantaSessions.
     * @param {SecretSantaSessionDeleteManyArgs} args - Arguments to filter SecretSantaSessions to delete.
     * @example
     * // Delete a few SecretSantaSessions
     * const { count } = await prisma.secretSantaSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SecretSantaSessionDeleteManyArgs>(args?: SelectSubset<T, SecretSantaSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SecretSantaSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecretSantaSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SecretSantaSessions
     * const secretSantaSession = await prisma.secretSantaSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SecretSantaSessionUpdateManyArgs>(args: SelectSubset<T, SecretSantaSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SecretSantaSessions and returns the data updated in the database.
     * @param {SecretSantaSessionUpdateManyAndReturnArgs} args - Arguments to update many SecretSantaSessions.
     * @example
     * // Update many SecretSantaSessions
     * const secretSantaSession = await prisma.secretSantaSession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SecretSantaSessions and only return the `id`
     * const secretSantaSessionWithIdOnly = await prisma.secretSantaSession.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SecretSantaSessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SecretSantaSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SecretSantaSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SecretSantaSession.
     * @param {SecretSantaSessionUpsertArgs} args - Arguments to update or create a SecretSantaSession.
     * @example
     * // Update or create a SecretSantaSession
     * const secretSantaSession = await prisma.secretSantaSession.upsert({
     *   create: {
     *     // ... data to create a SecretSantaSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SecretSantaSession we want to update
     *   }
     * })
     */
    upsert<T extends SecretSantaSessionUpsertArgs>(args: SelectSubset<T, SecretSantaSessionUpsertArgs<ExtArgs>>): Prisma__SecretSantaSessionClient<$Result.GetResult<Prisma.$SecretSantaSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SecretSantaSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecretSantaSessionCountArgs} args - Arguments to filter SecretSantaSessions to count.
     * @example
     * // Count the number of SecretSantaSessions
     * const count = await prisma.secretSantaSession.count({
     *   where: {
     *     // ... the filter for the SecretSantaSessions we want to count
     *   }
     * })
    **/
    count<T extends SecretSantaSessionCountArgs>(
      args?: Subset<T, SecretSantaSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SecretSantaSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SecretSantaSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecretSantaSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SecretSantaSessionAggregateArgs>(args: Subset<T, SecretSantaSessionAggregateArgs>): Prisma.PrismaPromise<GetSecretSantaSessionAggregateType<T>>

    /**
     * Group by SecretSantaSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecretSantaSessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SecretSantaSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SecretSantaSessionGroupByArgs['orderBy'] }
        : { orderBy?: SecretSantaSessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SecretSantaSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSecretSantaSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SecretSantaSession model
   */
  readonly fields: SecretSantaSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SecretSantaSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SecretSantaSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdByUser<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    pairs<T extends SecretSantaSession$pairsArgs<ExtArgs> = {}>(args?: Subset<T, SecretSantaSession$pairsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PairPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    unmatchedUsers<T extends SecretSantaSession$unmatchedUsersArgs<ExtArgs> = {}>(args?: Subset<T, SecretSantaSession$unmatchedUsersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnmatchedUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SecretSantaSession model
   */
  interface SecretSantaSessionFieldRefs {
    readonly id: FieldRef<"SecretSantaSession", 'Int'>
    readonly createdAt: FieldRef<"SecretSantaSession", 'DateTime'>
    readonly createdByUserId: FieldRef<"SecretSantaSession", 'Int'>
    readonly mode: FieldRef<"SecretSantaSession", 'SessionMode'>
  }
    

  // Custom InputTypes
  /**
   * SecretSantaSession findUnique
   */
  export type SecretSantaSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecretSantaSession
     */
    select?: SecretSantaSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecretSantaSession
     */
    omit?: SecretSantaSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecretSantaSessionInclude<ExtArgs> | null
    /**
     * Filter, which SecretSantaSession to fetch.
     */
    where: SecretSantaSessionWhereUniqueInput
  }

  /**
   * SecretSantaSession findUniqueOrThrow
   */
  export type SecretSantaSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecretSantaSession
     */
    select?: SecretSantaSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecretSantaSession
     */
    omit?: SecretSantaSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecretSantaSessionInclude<ExtArgs> | null
    /**
     * Filter, which SecretSantaSession to fetch.
     */
    where: SecretSantaSessionWhereUniqueInput
  }

  /**
   * SecretSantaSession findFirst
   */
  export type SecretSantaSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecretSantaSession
     */
    select?: SecretSantaSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecretSantaSession
     */
    omit?: SecretSantaSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecretSantaSessionInclude<ExtArgs> | null
    /**
     * Filter, which SecretSantaSession to fetch.
     */
    where?: SecretSantaSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SecretSantaSessions to fetch.
     */
    orderBy?: SecretSantaSessionOrderByWithRelationInput | SecretSantaSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SecretSantaSessions.
     */
    cursor?: SecretSantaSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SecretSantaSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SecretSantaSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SecretSantaSessions.
     */
    distinct?: SecretSantaSessionScalarFieldEnum | SecretSantaSessionScalarFieldEnum[]
  }

  /**
   * SecretSantaSession findFirstOrThrow
   */
  export type SecretSantaSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecretSantaSession
     */
    select?: SecretSantaSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecretSantaSession
     */
    omit?: SecretSantaSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecretSantaSessionInclude<ExtArgs> | null
    /**
     * Filter, which SecretSantaSession to fetch.
     */
    where?: SecretSantaSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SecretSantaSessions to fetch.
     */
    orderBy?: SecretSantaSessionOrderByWithRelationInput | SecretSantaSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SecretSantaSessions.
     */
    cursor?: SecretSantaSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SecretSantaSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SecretSantaSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SecretSantaSessions.
     */
    distinct?: SecretSantaSessionScalarFieldEnum | SecretSantaSessionScalarFieldEnum[]
  }

  /**
   * SecretSantaSession findMany
   */
  export type SecretSantaSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecretSantaSession
     */
    select?: SecretSantaSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecretSantaSession
     */
    omit?: SecretSantaSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecretSantaSessionInclude<ExtArgs> | null
    /**
     * Filter, which SecretSantaSessions to fetch.
     */
    where?: SecretSantaSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SecretSantaSessions to fetch.
     */
    orderBy?: SecretSantaSessionOrderByWithRelationInput | SecretSantaSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SecretSantaSessions.
     */
    cursor?: SecretSantaSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SecretSantaSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SecretSantaSessions.
     */
    skip?: number
    distinct?: SecretSantaSessionScalarFieldEnum | SecretSantaSessionScalarFieldEnum[]
  }

  /**
   * SecretSantaSession create
   */
  export type SecretSantaSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecretSantaSession
     */
    select?: SecretSantaSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecretSantaSession
     */
    omit?: SecretSantaSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecretSantaSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a SecretSantaSession.
     */
    data: XOR<SecretSantaSessionCreateInput, SecretSantaSessionUncheckedCreateInput>
  }

  /**
   * SecretSantaSession createMany
   */
  export type SecretSantaSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SecretSantaSessions.
     */
    data: SecretSantaSessionCreateManyInput | SecretSantaSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SecretSantaSession createManyAndReturn
   */
  export type SecretSantaSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecretSantaSession
     */
    select?: SecretSantaSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SecretSantaSession
     */
    omit?: SecretSantaSessionOmit<ExtArgs> | null
    /**
     * The data used to create many SecretSantaSessions.
     */
    data: SecretSantaSessionCreateManyInput | SecretSantaSessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecretSantaSessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SecretSantaSession update
   */
  export type SecretSantaSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecretSantaSession
     */
    select?: SecretSantaSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecretSantaSession
     */
    omit?: SecretSantaSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecretSantaSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a SecretSantaSession.
     */
    data: XOR<SecretSantaSessionUpdateInput, SecretSantaSessionUncheckedUpdateInput>
    /**
     * Choose, which SecretSantaSession to update.
     */
    where: SecretSantaSessionWhereUniqueInput
  }

  /**
   * SecretSantaSession updateMany
   */
  export type SecretSantaSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SecretSantaSessions.
     */
    data: XOR<SecretSantaSessionUpdateManyMutationInput, SecretSantaSessionUncheckedUpdateManyInput>
    /**
     * Filter which SecretSantaSessions to update
     */
    where?: SecretSantaSessionWhereInput
    /**
     * Limit how many SecretSantaSessions to update.
     */
    limit?: number
  }

  /**
   * SecretSantaSession updateManyAndReturn
   */
  export type SecretSantaSessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecretSantaSession
     */
    select?: SecretSantaSessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SecretSantaSession
     */
    omit?: SecretSantaSessionOmit<ExtArgs> | null
    /**
     * The data used to update SecretSantaSessions.
     */
    data: XOR<SecretSantaSessionUpdateManyMutationInput, SecretSantaSessionUncheckedUpdateManyInput>
    /**
     * Filter which SecretSantaSessions to update
     */
    where?: SecretSantaSessionWhereInput
    /**
     * Limit how many SecretSantaSessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecretSantaSessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SecretSantaSession upsert
   */
  export type SecretSantaSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecretSantaSession
     */
    select?: SecretSantaSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecretSantaSession
     */
    omit?: SecretSantaSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecretSantaSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the SecretSantaSession to update in case it exists.
     */
    where: SecretSantaSessionWhereUniqueInput
    /**
     * In case the SecretSantaSession found by the `where` argument doesn't exist, create a new SecretSantaSession with this data.
     */
    create: XOR<SecretSantaSessionCreateInput, SecretSantaSessionUncheckedCreateInput>
    /**
     * In case the SecretSantaSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SecretSantaSessionUpdateInput, SecretSantaSessionUncheckedUpdateInput>
  }

  /**
   * SecretSantaSession delete
   */
  export type SecretSantaSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecretSantaSession
     */
    select?: SecretSantaSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecretSantaSession
     */
    omit?: SecretSantaSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecretSantaSessionInclude<ExtArgs> | null
    /**
     * Filter which SecretSantaSession to delete.
     */
    where: SecretSantaSessionWhereUniqueInput
  }

  /**
   * SecretSantaSession deleteMany
   */
  export type SecretSantaSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SecretSantaSessions to delete
     */
    where?: SecretSantaSessionWhereInput
    /**
     * Limit how many SecretSantaSessions to delete.
     */
    limit?: number
  }

  /**
   * SecretSantaSession.pairs
   */
  export type SecretSantaSession$pairsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pair
     */
    select?: PairSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pair
     */
    omit?: PairOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PairInclude<ExtArgs> | null
    where?: PairWhereInput
    orderBy?: PairOrderByWithRelationInput | PairOrderByWithRelationInput[]
    cursor?: PairWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PairScalarFieldEnum | PairScalarFieldEnum[]
  }

  /**
   * SecretSantaSession.unmatchedUsers
   */
  export type SecretSantaSession$unmatchedUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnmatchedUser
     */
    select?: UnmatchedUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnmatchedUser
     */
    omit?: UnmatchedUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnmatchedUserInclude<ExtArgs> | null
    where?: UnmatchedUserWhereInput
    orderBy?: UnmatchedUserOrderByWithRelationInput | UnmatchedUserOrderByWithRelationInput[]
    cursor?: UnmatchedUserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UnmatchedUserScalarFieldEnum | UnmatchedUserScalarFieldEnum[]
  }

  /**
   * SecretSantaSession without action
   */
  export type SecretSantaSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecretSantaSession
     */
    select?: SecretSantaSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecretSantaSession
     */
    omit?: SecretSantaSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecretSantaSessionInclude<ExtArgs> | null
  }


  /**
   * Model Pair
   */

  export type AggregatePair = {
    _count: PairCountAggregateOutputType | null
    _avg: PairAvgAggregateOutputType | null
    _sum: PairSumAggregateOutputType | null
    _min: PairMinAggregateOutputType | null
    _max: PairMaxAggregateOutputType | null
  }

  export type PairAvgAggregateOutputType = {
    id: number | null
    sessionId: number | null
    giverId: number | null
    receiverId: number | null
  }

  export type PairSumAggregateOutputType = {
    id: number | null
    sessionId: number | null
    giverId: number | null
    receiverId: number | null
  }

  export type PairMinAggregateOutputType = {
    id: number | null
    sessionId: number | null
    giverId: number | null
    receiverId: number | null
  }

  export type PairMaxAggregateOutputType = {
    id: number | null
    sessionId: number | null
    giverId: number | null
    receiverId: number | null
  }

  export type PairCountAggregateOutputType = {
    id: number
    sessionId: number
    giverId: number
    receiverId: number
    _all: number
  }


  export type PairAvgAggregateInputType = {
    id?: true
    sessionId?: true
    giverId?: true
    receiverId?: true
  }

  export type PairSumAggregateInputType = {
    id?: true
    sessionId?: true
    giverId?: true
    receiverId?: true
  }

  export type PairMinAggregateInputType = {
    id?: true
    sessionId?: true
    giverId?: true
    receiverId?: true
  }

  export type PairMaxAggregateInputType = {
    id?: true
    sessionId?: true
    giverId?: true
    receiverId?: true
  }

  export type PairCountAggregateInputType = {
    id?: true
    sessionId?: true
    giverId?: true
    receiverId?: true
    _all?: true
  }

  export type PairAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pair to aggregate.
     */
    where?: PairWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pairs to fetch.
     */
    orderBy?: PairOrderByWithRelationInput | PairOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PairWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pairs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pairs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pairs
    **/
    _count?: true | PairCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PairAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PairSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PairMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PairMaxAggregateInputType
  }

  export type GetPairAggregateType<T extends PairAggregateArgs> = {
        [P in keyof T & keyof AggregatePair]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePair[P]>
      : GetScalarType<T[P], AggregatePair[P]>
  }




  export type PairGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PairWhereInput
    orderBy?: PairOrderByWithAggregationInput | PairOrderByWithAggregationInput[]
    by: PairScalarFieldEnum[] | PairScalarFieldEnum
    having?: PairScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PairCountAggregateInputType | true
    _avg?: PairAvgAggregateInputType
    _sum?: PairSumAggregateInputType
    _min?: PairMinAggregateInputType
    _max?: PairMaxAggregateInputType
  }

  export type PairGroupByOutputType = {
    id: number
    sessionId: number
    giverId: number
    receiverId: number
    _count: PairCountAggregateOutputType | null
    _avg: PairAvgAggregateOutputType | null
    _sum: PairSumAggregateOutputType | null
    _min: PairMinAggregateOutputType | null
    _max: PairMaxAggregateOutputType | null
  }

  type GetPairGroupByPayload<T extends PairGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PairGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PairGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PairGroupByOutputType[P]>
            : GetScalarType<T[P], PairGroupByOutputType[P]>
        }
      >
    >


  export type PairSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    giverId?: boolean
    receiverId?: boolean
    session?: boolean | SecretSantaSessionDefaultArgs<ExtArgs>
    giver?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pair"]>

  export type PairSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    giverId?: boolean
    receiverId?: boolean
    session?: boolean | SecretSantaSessionDefaultArgs<ExtArgs>
    giver?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pair"]>

  export type PairSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    giverId?: boolean
    receiverId?: boolean
    session?: boolean | SecretSantaSessionDefaultArgs<ExtArgs>
    giver?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pair"]>

  export type PairSelectScalar = {
    id?: boolean
    sessionId?: boolean
    giverId?: boolean
    receiverId?: boolean
  }

  export type PairOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionId" | "giverId" | "receiverId", ExtArgs["result"]["pair"]>
  export type PairInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | SecretSantaSessionDefaultArgs<ExtArgs>
    giver?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PairIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | SecretSantaSessionDefaultArgs<ExtArgs>
    giver?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PairIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | SecretSantaSessionDefaultArgs<ExtArgs>
    giver?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PairPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pair"
    objects: {
      session: Prisma.$SecretSantaSessionPayload<ExtArgs>
      giver: Prisma.$UserPayload<ExtArgs>
      receiver: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      sessionId: number
      giverId: number
      receiverId: number
    }, ExtArgs["result"]["pair"]>
    composites: {}
  }

  type PairGetPayload<S extends boolean | null | undefined | PairDefaultArgs> = $Result.GetResult<Prisma.$PairPayload, S>

  type PairCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PairFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PairCountAggregateInputType | true
    }

  export interface PairDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pair'], meta: { name: 'Pair' } }
    /**
     * Find zero or one Pair that matches the filter.
     * @param {PairFindUniqueArgs} args - Arguments to find a Pair
     * @example
     * // Get one Pair
     * const pair = await prisma.pair.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PairFindUniqueArgs>(args: SelectSubset<T, PairFindUniqueArgs<ExtArgs>>): Prisma__PairClient<$Result.GetResult<Prisma.$PairPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pair that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PairFindUniqueOrThrowArgs} args - Arguments to find a Pair
     * @example
     * // Get one Pair
     * const pair = await prisma.pair.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PairFindUniqueOrThrowArgs>(args: SelectSubset<T, PairFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PairClient<$Result.GetResult<Prisma.$PairPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pair that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PairFindFirstArgs} args - Arguments to find a Pair
     * @example
     * // Get one Pair
     * const pair = await prisma.pair.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PairFindFirstArgs>(args?: SelectSubset<T, PairFindFirstArgs<ExtArgs>>): Prisma__PairClient<$Result.GetResult<Prisma.$PairPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pair that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PairFindFirstOrThrowArgs} args - Arguments to find a Pair
     * @example
     * // Get one Pair
     * const pair = await prisma.pair.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PairFindFirstOrThrowArgs>(args?: SelectSubset<T, PairFindFirstOrThrowArgs<ExtArgs>>): Prisma__PairClient<$Result.GetResult<Prisma.$PairPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pairs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PairFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pairs
     * const pairs = await prisma.pair.findMany()
     * 
     * // Get first 10 Pairs
     * const pairs = await prisma.pair.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pairWithIdOnly = await prisma.pair.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PairFindManyArgs>(args?: SelectSubset<T, PairFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PairPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pair.
     * @param {PairCreateArgs} args - Arguments to create a Pair.
     * @example
     * // Create one Pair
     * const Pair = await prisma.pair.create({
     *   data: {
     *     // ... data to create a Pair
     *   }
     * })
     * 
     */
    create<T extends PairCreateArgs>(args: SelectSubset<T, PairCreateArgs<ExtArgs>>): Prisma__PairClient<$Result.GetResult<Prisma.$PairPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pairs.
     * @param {PairCreateManyArgs} args - Arguments to create many Pairs.
     * @example
     * // Create many Pairs
     * const pair = await prisma.pair.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PairCreateManyArgs>(args?: SelectSubset<T, PairCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pairs and returns the data saved in the database.
     * @param {PairCreateManyAndReturnArgs} args - Arguments to create many Pairs.
     * @example
     * // Create many Pairs
     * const pair = await prisma.pair.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pairs and only return the `id`
     * const pairWithIdOnly = await prisma.pair.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PairCreateManyAndReturnArgs>(args?: SelectSubset<T, PairCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PairPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pair.
     * @param {PairDeleteArgs} args - Arguments to delete one Pair.
     * @example
     * // Delete one Pair
     * const Pair = await prisma.pair.delete({
     *   where: {
     *     // ... filter to delete one Pair
     *   }
     * })
     * 
     */
    delete<T extends PairDeleteArgs>(args: SelectSubset<T, PairDeleteArgs<ExtArgs>>): Prisma__PairClient<$Result.GetResult<Prisma.$PairPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pair.
     * @param {PairUpdateArgs} args - Arguments to update one Pair.
     * @example
     * // Update one Pair
     * const pair = await prisma.pair.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PairUpdateArgs>(args: SelectSubset<T, PairUpdateArgs<ExtArgs>>): Prisma__PairClient<$Result.GetResult<Prisma.$PairPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pairs.
     * @param {PairDeleteManyArgs} args - Arguments to filter Pairs to delete.
     * @example
     * // Delete a few Pairs
     * const { count } = await prisma.pair.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PairDeleteManyArgs>(args?: SelectSubset<T, PairDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pairs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PairUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pairs
     * const pair = await prisma.pair.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PairUpdateManyArgs>(args: SelectSubset<T, PairUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pairs and returns the data updated in the database.
     * @param {PairUpdateManyAndReturnArgs} args - Arguments to update many Pairs.
     * @example
     * // Update many Pairs
     * const pair = await prisma.pair.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pairs and only return the `id`
     * const pairWithIdOnly = await prisma.pair.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PairUpdateManyAndReturnArgs>(args: SelectSubset<T, PairUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PairPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pair.
     * @param {PairUpsertArgs} args - Arguments to update or create a Pair.
     * @example
     * // Update or create a Pair
     * const pair = await prisma.pair.upsert({
     *   create: {
     *     // ... data to create a Pair
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pair we want to update
     *   }
     * })
     */
    upsert<T extends PairUpsertArgs>(args: SelectSubset<T, PairUpsertArgs<ExtArgs>>): Prisma__PairClient<$Result.GetResult<Prisma.$PairPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pairs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PairCountArgs} args - Arguments to filter Pairs to count.
     * @example
     * // Count the number of Pairs
     * const count = await prisma.pair.count({
     *   where: {
     *     // ... the filter for the Pairs we want to count
     *   }
     * })
    **/
    count<T extends PairCountArgs>(
      args?: Subset<T, PairCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PairCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pair.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PairAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PairAggregateArgs>(args: Subset<T, PairAggregateArgs>): Prisma.PrismaPromise<GetPairAggregateType<T>>

    /**
     * Group by Pair.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PairGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PairGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PairGroupByArgs['orderBy'] }
        : { orderBy?: PairGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PairGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPairGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pair model
   */
  readonly fields: PairFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pair.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PairClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    session<T extends SecretSantaSessionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SecretSantaSessionDefaultArgs<ExtArgs>>): Prisma__SecretSantaSessionClient<$Result.GetResult<Prisma.$SecretSantaSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    giver<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    receiver<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Pair model
   */
  interface PairFieldRefs {
    readonly id: FieldRef<"Pair", 'Int'>
    readonly sessionId: FieldRef<"Pair", 'Int'>
    readonly giverId: FieldRef<"Pair", 'Int'>
    readonly receiverId: FieldRef<"Pair", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Pair findUnique
   */
  export type PairFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pair
     */
    select?: PairSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pair
     */
    omit?: PairOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PairInclude<ExtArgs> | null
    /**
     * Filter, which Pair to fetch.
     */
    where: PairWhereUniqueInput
  }

  /**
   * Pair findUniqueOrThrow
   */
  export type PairFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pair
     */
    select?: PairSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pair
     */
    omit?: PairOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PairInclude<ExtArgs> | null
    /**
     * Filter, which Pair to fetch.
     */
    where: PairWhereUniqueInput
  }

  /**
   * Pair findFirst
   */
  export type PairFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pair
     */
    select?: PairSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pair
     */
    omit?: PairOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PairInclude<ExtArgs> | null
    /**
     * Filter, which Pair to fetch.
     */
    where?: PairWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pairs to fetch.
     */
    orderBy?: PairOrderByWithRelationInput | PairOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pairs.
     */
    cursor?: PairWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pairs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pairs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pairs.
     */
    distinct?: PairScalarFieldEnum | PairScalarFieldEnum[]
  }

  /**
   * Pair findFirstOrThrow
   */
  export type PairFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pair
     */
    select?: PairSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pair
     */
    omit?: PairOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PairInclude<ExtArgs> | null
    /**
     * Filter, which Pair to fetch.
     */
    where?: PairWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pairs to fetch.
     */
    orderBy?: PairOrderByWithRelationInput | PairOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pairs.
     */
    cursor?: PairWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pairs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pairs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pairs.
     */
    distinct?: PairScalarFieldEnum | PairScalarFieldEnum[]
  }

  /**
   * Pair findMany
   */
  export type PairFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pair
     */
    select?: PairSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pair
     */
    omit?: PairOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PairInclude<ExtArgs> | null
    /**
     * Filter, which Pairs to fetch.
     */
    where?: PairWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pairs to fetch.
     */
    orderBy?: PairOrderByWithRelationInput | PairOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pairs.
     */
    cursor?: PairWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pairs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pairs.
     */
    skip?: number
    distinct?: PairScalarFieldEnum | PairScalarFieldEnum[]
  }

  /**
   * Pair create
   */
  export type PairCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pair
     */
    select?: PairSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pair
     */
    omit?: PairOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PairInclude<ExtArgs> | null
    /**
     * The data needed to create a Pair.
     */
    data: XOR<PairCreateInput, PairUncheckedCreateInput>
  }

  /**
   * Pair createMany
   */
  export type PairCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pairs.
     */
    data: PairCreateManyInput | PairCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pair createManyAndReturn
   */
  export type PairCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pair
     */
    select?: PairSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pair
     */
    omit?: PairOmit<ExtArgs> | null
    /**
     * The data used to create many Pairs.
     */
    data: PairCreateManyInput | PairCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PairIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pair update
   */
  export type PairUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pair
     */
    select?: PairSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pair
     */
    omit?: PairOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PairInclude<ExtArgs> | null
    /**
     * The data needed to update a Pair.
     */
    data: XOR<PairUpdateInput, PairUncheckedUpdateInput>
    /**
     * Choose, which Pair to update.
     */
    where: PairWhereUniqueInput
  }

  /**
   * Pair updateMany
   */
  export type PairUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pairs.
     */
    data: XOR<PairUpdateManyMutationInput, PairUncheckedUpdateManyInput>
    /**
     * Filter which Pairs to update
     */
    where?: PairWhereInput
    /**
     * Limit how many Pairs to update.
     */
    limit?: number
  }

  /**
   * Pair updateManyAndReturn
   */
  export type PairUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pair
     */
    select?: PairSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pair
     */
    omit?: PairOmit<ExtArgs> | null
    /**
     * The data used to update Pairs.
     */
    data: XOR<PairUpdateManyMutationInput, PairUncheckedUpdateManyInput>
    /**
     * Filter which Pairs to update
     */
    where?: PairWhereInput
    /**
     * Limit how many Pairs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PairIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pair upsert
   */
  export type PairUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pair
     */
    select?: PairSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pair
     */
    omit?: PairOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PairInclude<ExtArgs> | null
    /**
     * The filter to search for the Pair to update in case it exists.
     */
    where: PairWhereUniqueInput
    /**
     * In case the Pair found by the `where` argument doesn't exist, create a new Pair with this data.
     */
    create: XOR<PairCreateInput, PairUncheckedCreateInput>
    /**
     * In case the Pair was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PairUpdateInput, PairUncheckedUpdateInput>
  }

  /**
   * Pair delete
   */
  export type PairDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pair
     */
    select?: PairSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pair
     */
    omit?: PairOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PairInclude<ExtArgs> | null
    /**
     * Filter which Pair to delete.
     */
    where: PairWhereUniqueInput
  }

  /**
   * Pair deleteMany
   */
  export type PairDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pairs to delete
     */
    where?: PairWhereInput
    /**
     * Limit how many Pairs to delete.
     */
    limit?: number
  }

  /**
   * Pair without action
   */
  export type PairDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pair
     */
    select?: PairSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pair
     */
    omit?: PairOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PairInclude<ExtArgs> | null
  }


  /**
   * Model UnmatchedUser
   */

  export type AggregateUnmatchedUser = {
    _count: UnmatchedUserCountAggregateOutputType | null
    _avg: UnmatchedUserAvgAggregateOutputType | null
    _sum: UnmatchedUserSumAggregateOutputType | null
    _min: UnmatchedUserMinAggregateOutputType | null
    _max: UnmatchedUserMaxAggregateOutputType | null
  }

  export type UnmatchedUserAvgAggregateOutputType = {
    id: number | null
    sessionId: number | null
    userId: number | null
  }

  export type UnmatchedUserSumAggregateOutputType = {
    id: number | null
    sessionId: number | null
    userId: number | null
  }

  export type UnmatchedUserMinAggregateOutputType = {
    id: number | null
    sessionId: number | null
    userId: number | null
  }

  export type UnmatchedUserMaxAggregateOutputType = {
    id: number | null
    sessionId: number | null
    userId: number | null
  }

  export type UnmatchedUserCountAggregateOutputType = {
    id: number
    sessionId: number
    userId: number
    _all: number
  }


  export type UnmatchedUserAvgAggregateInputType = {
    id?: true
    sessionId?: true
    userId?: true
  }

  export type UnmatchedUserSumAggregateInputType = {
    id?: true
    sessionId?: true
    userId?: true
  }

  export type UnmatchedUserMinAggregateInputType = {
    id?: true
    sessionId?: true
    userId?: true
  }

  export type UnmatchedUserMaxAggregateInputType = {
    id?: true
    sessionId?: true
    userId?: true
  }

  export type UnmatchedUserCountAggregateInputType = {
    id?: true
    sessionId?: true
    userId?: true
    _all?: true
  }

  export type UnmatchedUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UnmatchedUser to aggregate.
     */
    where?: UnmatchedUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UnmatchedUsers to fetch.
     */
    orderBy?: UnmatchedUserOrderByWithRelationInput | UnmatchedUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UnmatchedUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UnmatchedUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UnmatchedUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UnmatchedUsers
    **/
    _count?: true | UnmatchedUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UnmatchedUserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UnmatchedUserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UnmatchedUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UnmatchedUserMaxAggregateInputType
  }

  export type GetUnmatchedUserAggregateType<T extends UnmatchedUserAggregateArgs> = {
        [P in keyof T & keyof AggregateUnmatchedUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUnmatchedUser[P]>
      : GetScalarType<T[P], AggregateUnmatchedUser[P]>
  }




  export type UnmatchedUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UnmatchedUserWhereInput
    orderBy?: UnmatchedUserOrderByWithAggregationInput | UnmatchedUserOrderByWithAggregationInput[]
    by: UnmatchedUserScalarFieldEnum[] | UnmatchedUserScalarFieldEnum
    having?: UnmatchedUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UnmatchedUserCountAggregateInputType | true
    _avg?: UnmatchedUserAvgAggregateInputType
    _sum?: UnmatchedUserSumAggregateInputType
    _min?: UnmatchedUserMinAggregateInputType
    _max?: UnmatchedUserMaxAggregateInputType
  }

  export type UnmatchedUserGroupByOutputType = {
    id: number
    sessionId: number
    userId: number
    _count: UnmatchedUserCountAggregateOutputType | null
    _avg: UnmatchedUserAvgAggregateOutputType | null
    _sum: UnmatchedUserSumAggregateOutputType | null
    _min: UnmatchedUserMinAggregateOutputType | null
    _max: UnmatchedUserMaxAggregateOutputType | null
  }

  type GetUnmatchedUserGroupByPayload<T extends UnmatchedUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UnmatchedUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UnmatchedUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UnmatchedUserGroupByOutputType[P]>
            : GetScalarType<T[P], UnmatchedUserGroupByOutputType[P]>
        }
      >
    >


  export type UnmatchedUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    userId?: boolean
    session?: boolean | SecretSantaSessionDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["unmatchedUser"]>

  export type UnmatchedUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    userId?: boolean
    session?: boolean | SecretSantaSessionDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["unmatchedUser"]>

  export type UnmatchedUserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    userId?: boolean
    session?: boolean | SecretSantaSessionDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["unmatchedUser"]>

  export type UnmatchedUserSelectScalar = {
    id?: boolean
    sessionId?: boolean
    userId?: boolean
  }

  export type UnmatchedUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionId" | "userId", ExtArgs["result"]["unmatchedUser"]>
  export type UnmatchedUserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | SecretSantaSessionDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UnmatchedUserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | SecretSantaSessionDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UnmatchedUserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | SecretSantaSessionDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UnmatchedUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UnmatchedUser"
    objects: {
      session: Prisma.$SecretSantaSessionPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      sessionId: number
      userId: number
    }, ExtArgs["result"]["unmatchedUser"]>
    composites: {}
  }

  type UnmatchedUserGetPayload<S extends boolean | null | undefined | UnmatchedUserDefaultArgs> = $Result.GetResult<Prisma.$UnmatchedUserPayload, S>

  type UnmatchedUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UnmatchedUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UnmatchedUserCountAggregateInputType | true
    }

  export interface UnmatchedUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UnmatchedUser'], meta: { name: 'UnmatchedUser' } }
    /**
     * Find zero or one UnmatchedUser that matches the filter.
     * @param {UnmatchedUserFindUniqueArgs} args - Arguments to find a UnmatchedUser
     * @example
     * // Get one UnmatchedUser
     * const unmatchedUser = await prisma.unmatchedUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UnmatchedUserFindUniqueArgs>(args: SelectSubset<T, UnmatchedUserFindUniqueArgs<ExtArgs>>): Prisma__UnmatchedUserClient<$Result.GetResult<Prisma.$UnmatchedUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UnmatchedUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UnmatchedUserFindUniqueOrThrowArgs} args - Arguments to find a UnmatchedUser
     * @example
     * // Get one UnmatchedUser
     * const unmatchedUser = await prisma.unmatchedUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UnmatchedUserFindUniqueOrThrowArgs>(args: SelectSubset<T, UnmatchedUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UnmatchedUserClient<$Result.GetResult<Prisma.$UnmatchedUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UnmatchedUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnmatchedUserFindFirstArgs} args - Arguments to find a UnmatchedUser
     * @example
     * // Get one UnmatchedUser
     * const unmatchedUser = await prisma.unmatchedUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UnmatchedUserFindFirstArgs>(args?: SelectSubset<T, UnmatchedUserFindFirstArgs<ExtArgs>>): Prisma__UnmatchedUserClient<$Result.GetResult<Prisma.$UnmatchedUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UnmatchedUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnmatchedUserFindFirstOrThrowArgs} args - Arguments to find a UnmatchedUser
     * @example
     * // Get one UnmatchedUser
     * const unmatchedUser = await prisma.unmatchedUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UnmatchedUserFindFirstOrThrowArgs>(args?: SelectSubset<T, UnmatchedUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UnmatchedUserClient<$Result.GetResult<Prisma.$UnmatchedUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UnmatchedUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnmatchedUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UnmatchedUsers
     * const unmatchedUsers = await prisma.unmatchedUser.findMany()
     * 
     * // Get first 10 UnmatchedUsers
     * const unmatchedUsers = await prisma.unmatchedUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const unmatchedUserWithIdOnly = await prisma.unmatchedUser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UnmatchedUserFindManyArgs>(args?: SelectSubset<T, UnmatchedUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnmatchedUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UnmatchedUser.
     * @param {UnmatchedUserCreateArgs} args - Arguments to create a UnmatchedUser.
     * @example
     * // Create one UnmatchedUser
     * const UnmatchedUser = await prisma.unmatchedUser.create({
     *   data: {
     *     // ... data to create a UnmatchedUser
     *   }
     * })
     * 
     */
    create<T extends UnmatchedUserCreateArgs>(args: SelectSubset<T, UnmatchedUserCreateArgs<ExtArgs>>): Prisma__UnmatchedUserClient<$Result.GetResult<Prisma.$UnmatchedUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UnmatchedUsers.
     * @param {UnmatchedUserCreateManyArgs} args - Arguments to create many UnmatchedUsers.
     * @example
     * // Create many UnmatchedUsers
     * const unmatchedUser = await prisma.unmatchedUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UnmatchedUserCreateManyArgs>(args?: SelectSubset<T, UnmatchedUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UnmatchedUsers and returns the data saved in the database.
     * @param {UnmatchedUserCreateManyAndReturnArgs} args - Arguments to create many UnmatchedUsers.
     * @example
     * // Create many UnmatchedUsers
     * const unmatchedUser = await prisma.unmatchedUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UnmatchedUsers and only return the `id`
     * const unmatchedUserWithIdOnly = await prisma.unmatchedUser.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UnmatchedUserCreateManyAndReturnArgs>(args?: SelectSubset<T, UnmatchedUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnmatchedUserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UnmatchedUser.
     * @param {UnmatchedUserDeleteArgs} args - Arguments to delete one UnmatchedUser.
     * @example
     * // Delete one UnmatchedUser
     * const UnmatchedUser = await prisma.unmatchedUser.delete({
     *   where: {
     *     // ... filter to delete one UnmatchedUser
     *   }
     * })
     * 
     */
    delete<T extends UnmatchedUserDeleteArgs>(args: SelectSubset<T, UnmatchedUserDeleteArgs<ExtArgs>>): Prisma__UnmatchedUserClient<$Result.GetResult<Prisma.$UnmatchedUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UnmatchedUser.
     * @param {UnmatchedUserUpdateArgs} args - Arguments to update one UnmatchedUser.
     * @example
     * // Update one UnmatchedUser
     * const unmatchedUser = await prisma.unmatchedUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UnmatchedUserUpdateArgs>(args: SelectSubset<T, UnmatchedUserUpdateArgs<ExtArgs>>): Prisma__UnmatchedUserClient<$Result.GetResult<Prisma.$UnmatchedUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UnmatchedUsers.
     * @param {UnmatchedUserDeleteManyArgs} args - Arguments to filter UnmatchedUsers to delete.
     * @example
     * // Delete a few UnmatchedUsers
     * const { count } = await prisma.unmatchedUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UnmatchedUserDeleteManyArgs>(args?: SelectSubset<T, UnmatchedUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UnmatchedUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnmatchedUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UnmatchedUsers
     * const unmatchedUser = await prisma.unmatchedUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UnmatchedUserUpdateManyArgs>(args: SelectSubset<T, UnmatchedUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UnmatchedUsers and returns the data updated in the database.
     * @param {UnmatchedUserUpdateManyAndReturnArgs} args - Arguments to update many UnmatchedUsers.
     * @example
     * // Update many UnmatchedUsers
     * const unmatchedUser = await prisma.unmatchedUser.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UnmatchedUsers and only return the `id`
     * const unmatchedUserWithIdOnly = await prisma.unmatchedUser.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UnmatchedUserUpdateManyAndReturnArgs>(args: SelectSubset<T, UnmatchedUserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnmatchedUserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UnmatchedUser.
     * @param {UnmatchedUserUpsertArgs} args - Arguments to update or create a UnmatchedUser.
     * @example
     * // Update or create a UnmatchedUser
     * const unmatchedUser = await prisma.unmatchedUser.upsert({
     *   create: {
     *     // ... data to create a UnmatchedUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UnmatchedUser we want to update
     *   }
     * })
     */
    upsert<T extends UnmatchedUserUpsertArgs>(args: SelectSubset<T, UnmatchedUserUpsertArgs<ExtArgs>>): Prisma__UnmatchedUserClient<$Result.GetResult<Prisma.$UnmatchedUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UnmatchedUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnmatchedUserCountArgs} args - Arguments to filter UnmatchedUsers to count.
     * @example
     * // Count the number of UnmatchedUsers
     * const count = await prisma.unmatchedUser.count({
     *   where: {
     *     // ... the filter for the UnmatchedUsers we want to count
     *   }
     * })
    **/
    count<T extends UnmatchedUserCountArgs>(
      args?: Subset<T, UnmatchedUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UnmatchedUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UnmatchedUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnmatchedUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UnmatchedUserAggregateArgs>(args: Subset<T, UnmatchedUserAggregateArgs>): Prisma.PrismaPromise<GetUnmatchedUserAggregateType<T>>

    /**
     * Group by UnmatchedUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnmatchedUserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UnmatchedUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UnmatchedUserGroupByArgs['orderBy'] }
        : { orderBy?: UnmatchedUserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UnmatchedUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUnmatchedUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UnmatchedUser model
   */
  readonly fields: UnmatchedUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UnmatchedUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UnmatchedUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    session<T extends SecretSantaSessionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SecretSantaSessionDefaultArgs<ExtArgs>>): Prisma__SecretSantaSessionClient<$Result.GetResult<Prisma.$SecretSantaSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UnmatchedUser model
   */
  interface UnmatchedUserFieldRefs {
    readonly id: FieldRef<"UnmatchedUser", 'Int'>
    readonly sessionId: FieldRef<"UnmatchedUser", 'Int'>
    readonly userId: FieldRef<"UnmatchedUser", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * UnmatchedUser findUnique
   */
  export type UnmatchedUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnmatchedUser
     */
    select?: UnmatchedUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnmatchedUser
     */
    omit?: UnmatchedUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnmatchedUserInclude<ExtArgs> | null
    /**
     * Filter, which UnmatchedUser to fetch.
     */
    where: UnmatchedUserWhereUniqueInput
  }

  /**
   * UnmatchedUser findUniqueOrThrow
   */
  export type UnmatchedUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnmatchedUser
     */
    select?: UnmatchedUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnmatchedUser
     */
    omit?: UnmatchedUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnmatchedUserInclude<ExtArgs> | null
    /**
     * Filter, which UnmatchedUser to fetch.
     */
    where: UnmatchedUserWhereUniqueInput
  }

  /**
   * UnmatchedUser findFirst
   */
  export type UnmatchedUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnmatchedUser
     */
    select?: UnmatchedUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnmatchedUser
     */
    omit?: UnmatchedUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnmatchedUserInclude<ExtArgs> | null
    /**
     * Filter, which UnmatchedUser to fetch.
     */
    where?: UnmatchedUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UnmatchedUsers to fetch.
     */
    orderBy?: UnmatchedUserOrderByWithRelationInput | UnmatchedUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UnmatchedUsers.
     */
    cursor?: UnmatchedUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UnmatchedUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UnmatchedUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UnmatchedUsers.
     */
    distinct?: UnmatchedUserScalarFieldEnum | UnmatchedUserScalarFieldEnum[]
  }

  /**
   * UnmatchedUser findFirstOrThrow
   */
  export type UnmatchedUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnmatchedUser
     */
    select?: UnmatchedUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnmatchedUser
     */
    omit?: UnmatchedUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnmatchedUserInclude<ExtArgs> | null
    /**
     * Filter, which UnmatchedUser to fetch.
     */
    where?: UnmatchedUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UnmatchedUsers to fetch.
     */
    orderBy?: UnmatchedUserOrderByWithRelationInput | UnmatchedUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UnmatchedUsers.
     */
    cursor?: UnmatchedUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UnmatchedUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UnmatchedUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UnmatchedUsers.
     */
    distinct?: UnmatchedUserScalarFieldEnum | UnmatchedUserScalarFieldEnum[]
  }

  /**
   * UnmatchedUser findMany
   */
  export type UnmatchedUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnmatchedUser
     */
    select?: UnmatchedUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnmatchedUser
     */
    omit?: UnmatchedUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnmatchedUserInclude<ExtArgs> | null
    /**
     * Filter, which UnmatchedUsers to fetch.
     */
    where?: UnmatchedUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UnmatchedUsers to fetch.
     */
    orderBy?: UnmatchedUserOrderByWithRelationInput | UnmatchedUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UnmatchedUsers.
     */
    cursor?: UnmatchedUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UnmatchedUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UnmatchedUsers.
     */
    skip?: number
    distinct?: UnmatchedUserScalarFieldEnum | UnmatchedUserScalarFieldEnum[]
  }

  /**
   * UnmatchedUser create
   */
  export type UnmatchedUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnmatchedUser
     */
    select?: UnmatchedUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnmatchedUser
     */
    omit?: UnmatchedUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnmatchedUserInclude<ExtArgs> | null
    /**
     * The data needed to create a UnmatchedUser.
     */
    data: XOR<UnmatchedUserCreateInput, UnmatchedUserUncheckedCreateInput>
  }

  /**
   * UnmatchedUser createMany
   */
  export type UnmatchedUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UnmatchedUsers.
     */
    data: UnmatchedUserCreateManyInput | UnmatchedUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UnmatchedUser createManyAndReturn
   */
  export type UnmatchedUserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnmatchedUser
     */
    select?: UnmatchedUserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UnmatchedUser
     */
    omit?: UnmatchedUserOmit<ExtArgs> | null
    /**
     * The data used to create many UnmatchedUsers.
     */
    data: UnmatchedUserCreateManyInput | UnmatchedUserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnmatchedUserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UnmatchedUser update
   */
  export type UnmatchedUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnmatchedUser
     */
    select?: UnmatchedUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnmatchedUser
     */
    omit?: UnmatchedUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnmatchedUserInclude<ExtArgs> | null
    /**
     * The data needed to update a UnmatchedUser.
     */
    data: XOR<UnmatchedUserUpdateInput, UnmatchedUserUncheckedUpdateInput>
    /**
     * Choose, which UnmatchedUser to update.
     */
    where: UnmatchedUserWhereUniqueInput
  }

  /**
   * UnmatchedUser updateMany
   */
  export type UnmatchedUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UnmatchedUsers.
     */
    data: XOR<UnmatchedUserUpdateManyMutationInput, UnmatchedUserUncheckedUpdateManyInput>
    /**
     * Filter which UnmatchedUsers to update
     */
    where?: UnmatchedUserWhereInput
    /**
     * Limit how many UnmatchedUsers to update.
     */
    limit?: number
  }

  /**
   * UnmatchedUser updateManyAndReturn
   */
  export type UnmatchedUserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnmatchedUser
     */
    select?: UnmatchedUserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UnmatchedUser
     */
    omit?: UnmatchedUserOmit<ExtArgs> | null
    /**
     * The data used to update UnmatchedUsers.
     */
    data: XOR<UnmatchedUserUpdateManyMutationInput, UnmatchedUserUncheckedUpdateManyInput>
    /**
     * Filter which UnmatchedUsers to update
     */
    where?: UnmatchedUserWhereInput
    /**
     * Limit how many UnmatchedUsers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnmatchedUserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UnmatchedUser upsert
   */
  export type UnmatchedUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnmatchedUser
     */
    select?: UnmatchedUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnmatchedUser
     */
    omit?: UnmatchedUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnmatchedUserInclude<ExtArgs> | null
    /**
     * The filter to search for the UnmatchedUser to update in case it exists.
     */
    where: UnmatchedUserWhereUniqueInput
    /**
     * In case the UnmatchedUser found by the `where` argument doesn't exist, create a new UnmatchedUser with this data.
     */
    create: XOR<UnmatchedUserCreateInput, UnmatchedUserUncheckedCreateInput>
    /**
     * In case the UnmatchedUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UnmatchedUserUpdateInput, UnmatchedUserUncheckedUpdateInput>
  }

  /**
   * UnmatchedUser delete
   */
  export type UnmatchedUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnmatchedUser
     */
    select?: UnmatchedUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnmatchedUser
     */
    omit?: UnmatchedUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnmatchedUserInclude<ExtArgs> | null
    /**
     * Filter which UnmatchedUser to delete.
     */
    where: UnmatchedUserWhereUniqueInput
  }

  /**
   * UnmatchedUser deleteMany
   */
  export type UnmatchedUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UnmatchedUsers to delete
     */
    where?: UnmatchedUserWhereInput
    /**
     * Limit how many UnmatchedUsers to delete.
     */
    limit?: number
  }

  /**
   * UnmatchedUser without action
   */
  export type UnmatchedUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnmatchedUser
     */
    select?: UnmatchedUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnmatchedUser
     */
    omit?: UnmatchedUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnmatchedUserInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    passwordHash: 'passwordHash',
    firstName: 'firstName',
    lastName: 'lastName',
    role: 'role',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SecretSantaSessionScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    createdByUserId: 'createdByUserId',
    mode: 'mode'
  };

  export type SecretSantaSessionScalarFieldEnum = (typeof SecretSantaSessionScalarFieldEnum)[keyof typeof SecretSantaSessionScalarFieldEnum]


  export const PairScalarFieldEnum: {
    id: 'id',
    sessionId: 'sessionId',
    giverId: 'giverId',
    receiverId: 'receiverId'
  };

  export type PairScalarFieldEnum = (typeof PairScalarFieldEnum)[keyof typeof PairScalarFieldEnum]


  export const UnmatchedUserScalarFieldEnum: {
    id: 'id',
    sessionId: 'sessionId',
    userId: 'userId'
  };

  export type UnmatchedUserScalarFieldEnum = (typeof UnmatchedUserScalarFieldEnum)[keyof typeof UnmatchedUserScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'SessionMode'
   */
  export type EnumSessionModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SessionMode'>
    


  /**
   * Reference to a field of type 'SessionMode[]'
   */
  export type ListEnumSessionModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SessionMode[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    sessionsCreated?: SecretSantaSessionListRelationFilter
    givenPairs?: PairListRelationFilter
    receivedPairs?: PairListRelationFilter
    unmatchedSessions?: UnmatchedUserListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sessionsCreated?: SecretSantaSessionOrderByRelationAggregateInput
    givenPairs?: PairOrderByRelationAggregateInput
    receivedPairs?: PairOrderByRelationAggregateInput
    unmatchedSessions?: UnmatchedUserOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    passwordHash?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    sessionsCreated?: SecretSantaSessionListRelationFilter
    givenPairs?: PairListRelationFilter
    receivedPairs?: PairListRelationFilter
    unmatchedSessions?: UnmatchedUserListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type SecretSantaSessionWhereInput = {
    AND?: SecretSantaSessionWhereInput | SecretSantaSessionWhereInput[]
    OR?: SecretSantaSessionWhereInput[]
    NOT?: SecretSantaSessionWhereInput | SecretSantaSessionWhereInput[]
    id?: IntFilter<"SecretSantaSession"> | number
    createdAt?: DateTimeFilter<"SecretSantaSession"> | Date | string
    createdByUserId?: IntFilter<"SecretSantaSession"> | number
    mode?: EnumSessionModeFilter<"SecretSantaSession"> | $Enums.SessionMode
    createdByUser?: XOR<UserScalarRelationFilter, UserWhereInput>
    pairs?: PairListRelationFilter
    unmatchedUsers?: UnmatchedUserListRelationFilter
  }

  export type SecretSantaSessionOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    createdByUserId?: SortOrder
    mode?: SortOrder
    createdByUser?: UserOrderByWithRelationInput
    pairs?: PairOrderByRelationAggregateInput
    unmatchedUsers?: UnmatchedUserOrderByRelationAggregateInput
  }

  export type SecretSantaSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SecretSantaSessionWhereInput | SecretSantaSessionWhereInput[]
    OR?: SecretSantaSessionWhereInput[]
    NOT?: SecretSantaSessionWhereInput | SecretSantaSessionWhereInput[]
    createdAt?: DateTimeFilter<"SecretSantaSession"> | Date | string
    createdByUserId?: IntFilter<"SecretSantaSession"> | number
    mode?: EnumSessionModeFilter<"SecretSantaSession"> | $Enums.SessionMode
    createdByUser?: XOR<UserScalarRelationFilter, UserWhereInput>
    pairs?: PairListRelationFilter
    unmatchedUsers?: UnmatchedUserListRelationFilter
  }, "id">

  export type SecretSantaSessionOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    createdByUserId?: SortOrder
    mode?: SortOrder
    _count?: SecretSantaSessionCountOrderByAggregateInput
    _avg?: SecretSantaSessionAvgOrderByAggregateInput
    _max?: SecretSantaSessionMaxOrderByAggregateInput
    _min?: SecretSantaSessionMinOrderByAggregateInput
    _sum?: SecretSantaSessionSumOrderByAggregateInput
  }

  export type SecretSantaSessionScalarWhereWithAggregatesInput = {
    AND?: SecretSantaSessionScalarWhereWithAggregatesInput | SecretSantaSessionScalarWhereWithAggregatesInput[]
    OR?: SecretSantaSessionScalarWhereWithAggregatesInput[]
    NOT?: SecretSantaSessionScalarWhereWithAggregatesInput | SecretSantaSessionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SecretSantaSession"> | number
    createdAt?: DateTimeWithAggregatesFilter<"SecretSantaSession"> | Date | string
    createdByUserId?: IntWithAggregatesFilter<"SecretSantaSession"> | number
    mode?: EnumSessionModeWithAggregatesFilter<"SecretSantaSession"> | $Enums.SessionMode
  }

  export type PairWhereInput = {
    AND?: PairWhereInput | PairWhereInput[]
    OR?: PairWhereInput[]
    NOT?: PairWhereInput | PairWhereInput[]
    id?: IntFilter<"Pair"> | number
    sessionId?: IntFilter<"Pair"> | number
    giverId?: IntFilter<"Pair"> | number
    receiverId?: IntFilter<"Pair"> | number
    session?: XOR<SecretSantaSessionScalarRelationFilter, SecretSantaSessionWhereInput>
    giver?: XOR<UserScalarRelationFilter, UserWhereInput>
    receiver?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PairOrderByWithRelationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    giverId?: SortOrder
    receiverId?: SortOrder
    session?: SecretSantaSessionOrderByWithRelationInput
    giver?: UserOrderByWithRelationInput
    receiver?: UserOrderByWithRelationInput
  }

  export type PairWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PairWhereInput | PairWhereInput[]
    OR?: PairWhereInput[]
    NOT?: PairWhereInput | PairWhereInput[]
    sessionId?: IntFilter<"Pair"> | number
    giverId?: IntFilter<"Pair"> | number
    receiverId?: IntFilter<"Pair"> | number
    session?: XOR<SecretSantaSessionScalarRelationFilter, SecretSantaSessionWhereInput>
    giver?: XOR<UserScalarRelationFilter, UserWhereInput>
    receiver?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type PairOrderByWithAggregationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    giverId?: SortOrder
    receiverId?: SortOrder
    _count?: PairCountOrderByAggregateInput
    _avg?: PairAvgOrderByAggregateInput
    _max?: PairMaxOrderByAggregateInput
    _min?: PairMinOrderByAggregateInput
    _sum?: PairSumOrderByAggregateInput
  }

  export type PairScalarWhereWithAggregatesInput = {
    AND?: PairScalarWhereWithAggregatesInput | PairScalarWhereWithAggregatesInput[]
    OR?: PairScalarWhereWithAggregatesInput[]
    NOT?: PairScalarWhereWithAggregatesInput | PairScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Pair"> | number
    sessionId?: IntWithAggregatesFilter<"Pair"> | number
    giverId?: IntWithAggregatesFilter<"Pair"> | number
    receiverId?: IntWithAggregatesFilter<"Pair"> | number
  }

  export type UnmatchedUserWhereInput = {
    AND?: UnmatchedUserWhereInput | UnmatchedUserWhereInput[]
    OR?: UnmatchedUserWhereInput[]
    NOT?: UnmatchedUserWhereInput | UnmatchedUserWhereInput[]
    id?: IntFilter<"UnmatchedUser"> | number
    sessionId?: IntFilter<"UnmatchedUser"> | number
    userId?: IntFilter<"UnmatchedUser"> | number
    session?: XOR<SecretSantaSessionScalarRelationFilter, SecretSantaSessionWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UnmatchedUserOrderByWithRelationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    userId?: SortOrder
    session?: SecretSantaSessionOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type UnmatchedUserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    sessionId_userId?: UnmatchedUserSessionIdUserIdCompoundUniqueInput
    AND?: UnmatchedUserWhereInput | UnmatchedUserWhereInput[]
    OR?: UnmatchedUserWhereInput[]
    NOT?: UnmatchedUserWhereInput | UnmatchedUserWhereInput[]
    sessionId?: IntFilter<"UnmatchedUser"> | number
    userId?: IntFilter<"UnmatchedUser"> | number
    session?: XOR<SecretSantaSessionScalarRelationFilter, SecretSantaSessionWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "sessionId_userId">

  export type UnmatchedUserOrderByWithAggregationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    userId?: SortOrder
    _count?: UnmatchedUserCountOrderByAggregateInput
    _avg?: UnmatchedUserAvgOrderByAggregateInput
    _max?: UnmatchedUserMaxOrderByAggregateInput
    _min?: UnmatchedUserMinOrderByAggregateInput
    _sum?: UnmatchedUserSumOrderByAggregateInput
  }

  export type UnmatchedUserScalarWhereWithAggregatesInput = {
    AND?: UnmatchedUserScalarWhereWithAggregatesInput | UnmatchedUserScalarWhereWithAggregatesInput[]
    OR?: UnmatchedUserScalarWhereWithAggregatesInput[]
    NOT?: UnmatchedUserScalarWhereWithAggregatesInput | UnmatchedUserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UnmatchedUser"> | number
    sessionId?: IntWithAggregatesFilter<"UnmatchedUser"> | number
    userId?: IntWithAggregatesFilter<"UnmatchedUser"> | number
  }

  export type UserCreateInput = {
    email: string
    passwordHash: string
    firstName: string
    lastName: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    sessionsCreated?: SecretSantaSessionCreateNestedManyWithoutCreatedByUserInput
    givenPairs?: PairCreateNestedManyWithoutGiverInput
    receivedPairs?: PairCreateNestedManyWithoutReceiverInput
    unmatchedSessions?: UnmatchedUserCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    passwordHash: string
    firstName: string
    lastName: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    sessionsCreated?: SecretSantaSessionUncheckedCreateNestedManyWithoutCreatedByUserInput
    givenPairs?: PairUncheckedCreateNestedManyWithoutGiverInput
    receivedPairs?: PairUncheckedCreateNestedManyWithoutReceiverInput
    unmatchedSessions?: UnmatchedUserUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessionsCreated?: SecretSantaSessionUpdateManyWithoutCreatedByUserNestedInput
    givenPairs?: PairUpdateManyWithoutGiverNestedInput
    receivedPairs?: PairUpdateManyWithoutReceiverNestedInput
    unmatchedSessions?: UnmatchedUserUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessionsCreated?: SecretSantaSessionUncheckedUpdateManyWithoutCreatedByUserNestedInput
    givenPairs?: PairUncheckedUpdateManyWithoutGiverNestedInput
    receivedPairs?: PairUncheckedUpdateManyWithoutReceiverNestedInput
    unmatchedSessions?: UnmatchedUserUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    passwordHash: string
    firstName: string
    lastName: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SecretSantaSessionCreateInput = {
    createdAt?: Date | string
    mode: $Enums.SessionMode
    createdByUser: UserCreateNestedOneWithoutSessionsCreatedInput
    pairs?: PairCreateNestedManyWithoutSessionInput
    unmatchedUsers?: UnmatchedUserCreateNestedManyWithoutSessionInput
  }

  export type SecretSantaSessionUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    createdByUserId: number
    mode: $Enums.SessionMode
    pairs?: PairUncheckedCreateNestedManyWithoutSessionInput
    unmatchedUsers?: UnmatchedUserUncheckedCreateNestedManyWithoutSessionInput
  }

  export type SecretSantaSessionUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mode?: EnumSessionModeFieldUpdateOperationsInput | $Enums.SessionMode
    createdByUser?: UserUpdateOneRequiredWithoutSessionsCreatedNestedInput
    pairs?: PairUpdateManyWithoutSessionNestedInput
    unmatchedUsers?: UnmatchedUserUpdateManyWithoutSessionNestedInput
  }

  export type SecretSantaSessionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdByUserId?: IntFieldUpdateOperationsInput | number
    mode?: EnumSessionModeFieldUpdateOperationsInput | $Enums.SessionMode
    pairs?: PairUncheckedUpdateManyWithoutSessionNestedInput
    unmatchedUsers?: UnmatchedUserUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type SecretSantaSessionCreateManyInput = {
    id?: number
    createdAt?: Date | string
    createdByUserId: number
    mode: $Enums.SessionMode
  }

  export type SecretSantaSessionUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mode?: EnumSessionModeFieldUpdateOperationsInput | $Enums.SessionMode
  }

  export type SecretSantaSessionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdByUserId?: IntFieldUpdateOperationsInput | number
    mode?: EnumSessionModeFieldUpdateOperationsInput | $Enums.SessionMode
  }

  export type PairCreateInput = {
    session: SecretSantaSessionCreateNestedOneWithoutPairsInput
    giver: UserCreateNestedOneWithoutGivenPairsInput
    receiver: UserCreateNestedOneWithoutReceivedPairsInput
  }

  export type PairUncheckedCreateInput = {
    id?: number
    sessionId: number
    giverId: number
    receiverId: number
  }

  export type PairUpdateInput = {
    session?: SecretSantaSessionUpdateOneRequiredWithoutPairsNestedInput
    giver?: UserUpdateOneRequiredWithoutGivenPairsNestedInput
    receiver?: UserUpdateOneRequiredWithoutReceivedPairsNestedInput
  }

  export type PairUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    sessionId?: IntFieldUpdateOperationsInput | number
    giverId?: IntFieldUpdateOperationsInput | number
    receiverId?: IntFieldUpdateOperationsInput | number
  }

  export type PairCreateManyInput = {
    id?: number
    sessionId: number
    giverId: number
    receiverId: number
  }

  export type PairUpdateManyMutationInput = {

  }

  export type PairUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    sessionId?: IntFieldUpdateOperationsInput | number
    giverId?: IntFieldUpdateOperationsInput | number
    receiverId?: IntFieldUpdateOperationsInput | number
  }

  export type UnmatchedUserCreateInput = {
    session: SecretSantaSessionCreateNestedOneWithoutUnmatchedUsersInput
    user: UserCreateNestedOneWithoutUnmatchedSessionsInput
  }

  export type UnmatchedUserUncheckedCreateInput = {
    id?: number
    sessionId: number
    userId: number
  }

  export type UnmatchedUserUpdateInput = {
    session?: SecretSantaSessionUpdateOneRequiredWithoutUnmatchedUsersNestedInput
    user?: UserUpdateOneRequiredWithoutUnmatchedSessionsNestedInput
  }

  export type UnmatchedUserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    sessionId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type UnmatchedUserCreateManyInput = {
    id?: number
    sessionId: number
    userId: number
  }

  export type UnmatchedUserUpdateManyMutationInput = {

  }

  export type UnmatchedUserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    sessionId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SecretSantaSessionListRelationFilter = {
    every?: SecretSantaSessionWhereInput
    some?: SecretSantaSessionWhereInput
    none?: SecretSantaSessionWhereInput
  }

  export type PairListRelationFilter = {
    every?: PairWhereInput
    some?: PairWhereInput
    none?: PairWhereInput
  }

  export type UnmatchedUserListRelationFilter = {
    every?: UnmatchedUserWhereInput
    some?: UnmatchedUserWhereInput
    none?: UnmatchedUserWhereInput
  }

  export type SecretSantaSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PairOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UnmatchedUserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumSessionModeFilter<$PrismaModel = never> = {
    equals?: $Enums.SessionMode | EnumSessionModeFieldRefInput<$PrismaModel>
    in?: $Enums.SessionMode[] | ListEnumSessionModeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SessionMode[] | ListEnumSessionModeFieldRefInput<$PrismaModel>
    not?: NestedEnumSessionModeFilter<$PrismaModel> | $Enums.SessionMode
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SecretSantaSessionCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    createdByUserId?: SortOrder
    mode?: SortOrder
  }

  export type SecretSantaSessionAvgOrderByAggregateInput = {
    id?: SortOrder
    createdByUserId?: SortOrder
  }

  export type SecretSantaSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    createdByUserId?: SortOrder
    mode?: SortOrder
  }

  export type SecretSantaSessionMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    createdByUserId?: SortOrder
    mode?: SortOrder
  }

  export type SecretSantaSessionSumOrderByAggregateInput = {
    id?: SortOrder
    createdByUserId?: SortOrder
  }

  export type EnumSessionModeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SessionMode | EnumSessionModeFieldRefInput<$PrismaModel>
    in?: $Enums.SessionMode[] | ListEnumSessionModeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SessionMode[] | ListEnumSessionModeFieldRefInput<$PrismaModel>
    not?: NestedEnumSessionModeWithAggregatesFilter<$PrismaModel> | $Enums.SessionMode
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSessionModeFilter<$PrismaModel>
    _max?: NestedEnumSessionModeFilter<$PrismaModel>
  }

  export type SecretSantaSessionScalarRelationFilter = {
    is?: SecretSantaSessionWhereInput
    isNot?: SecretSantaSessionWhereInput
  }

  export type PairCountOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    giverId?: SortOrder
    receiverId?: SortOrder
  }

  export type PairAvgOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    giverId?: SortOrder
    receiverId?: SortOrder
  }

  export type PairMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    giverId?: SortOrder
    receiverId?: SortOrder
  }

  export type PairMinOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    giverId?: SortOrder
    receiverId?: SortOrder
  }

  export type PairSumOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    giverId?: SortOrder
    receiverId?: SortOrder
  }

  export type UnmatchedUserSessionIdUserIdCompoundUniqueInput = {
    sessionId: number
    userId: number
  }

  export type UnmatchedUserCountOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    userId?: SortOrder
  }

  export type UnmatchedUserAvgOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    userId?: SortOrder
  }

  export type UnmatchedUserMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    userId?: SortOrder
  }

  export type UnmatchedUserMinOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    userId?: SortOrder
  }

  export type UnmatchedUserSumOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    userId?: SortOrder
  }

  export type SecretSantaSessionCreateNestedManyWithoutCreatedByUserInput = {
    create?: XOR<SecretSantaSessionCreateWithoutCreatedByUserInput, SecretSantaSessionUncheckedCreateWithoutCreatedByUserInput> | SecretSantaSessionCreateWithoutCreatedByUserInput[] | SecretSantaSessionUncheckedCreateWithoutCreatedByUserInput[]
    connectOrCreate?: SecretSantaSessionCreateOrConnectWithoutCreatedByUserInput | SecretSantaSessionCreateOrConnectWithoutCreatedByUserInput[]
    createMany?: SecretSantaSessionCreateManyCreatedByUserInputEnvelope
    connect?: SecretSantaSessionWhereUniqueInput | SecretSantaSessionWhereUniqueInput[]
  }

  export type PairCreateNestedManyWithoutGiverInput = {
    create?: XOR<PairCreateWithoutGiverInput, PairUncheckedCreateWithoutGiverInput> | PairCreateWithoutGiverInput[] | PairUncheckedCreateWithoutGiverInput[]
    connectOrCreate?: PairCreateOrConnectWithoutGiverInput | PairCreateOrConnectWithoutGiverInput[]
    createMany?: PairCreateManyGiverInputEnvelope
    connect?: PairWhereUniqueInput | PairWhereUniqueInput[]
  }

  export type PairCreateNestedManyWithoutReceiverInput = {
    create?: XOR<PairCreateWithoutReceiverInput, PairUncheckedCreateWithoutReceiverInput> | PairCreateWithoutReceiverInput[] | PairUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: PairCreateOrConnectWithoutReceiverInput | PairCreateOrConnectWithoutReceiverInput[]
    createMany?: PairCreateManyReceiverInputEnvelope
    connect?: PairWhereUniqueInput | PairWhereUniqueInput[]
  }

  export type UnmatchedUserCreateNestedManyWithoutUserInput = {
    create?: XOR<UnmatchedUserCreateWithoutUserInput, UnmatchedUserUncheckedCreateWithoutUserInput> | UnmatchedUserCreateWithoutUserInput[] | UnmatchedUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UnmatchedUserCreateOrConnectWithoutUserInput | UnmatchedUserCreateOrConnectWithoutUserInput[]
    createMany?: UnmatchedUserCreateManyUserInputEnvelope
    connect?: UnmatchedUserWhereUniqueInput | UnmatchedUserWhereUniqueInput[]
  }

  export type SecretSantaSessionUncheckedCreateNestedManyWithoutCreatedByUserInput = {
    create?: XOR<SecretSantaSessionCreateWithoutCreatedByUserInput, SecretSantaSessionUncheckedCreateWithoutCreatedByUserInput> | SecretSantaSessionCreateWithoutCreatedByUserInput[] | SecretSantaSessionUncheckedCreateWithoutCreatedByUserInput[]
    connectOrCreate?: SecretSantaSessionCreateOrConnectWithoutCreatedByUserInput | SecretSantaSessionCreateOrConnectWithoutCreatedByUserInput[]
    createMany?: SecretSantaSessionCreateManyCreatedByUserInputEnvelope
    connect?: SecretSantaSessionWhereUniqueInput | SecretSantaSessionWhereUniqueInput[]
  }

  export type PairUncheckedCreateNestedManyWithoutGiverInput = {
    create?: XOR<PairCreateWithoutGiverInput, PairUncheckedCreateWithoutGiverInput> | PairCreateWithoutGiverInput[] | PairUncheckedCreateWithoutGiverInput[]
    connectOrCreate?: PairCreateOrConnectWithoutGiverInput | PairCreateOrConnectWithoutGiverInput[]
    createMany?: PairCreateManyGiverInputEnvelope
    connect?: PairWhereUniqueInput | PairWhereUniqueInput[]
  }

  export type PairUncheckedCreateNestedManyWithoutReceiverInput = {
    create?: XOR<PairCreateWithoutReceiverInput, PairUncheckedCreateWithoutReceiverInput> | PairCreateWithoutReceiverInput[] | PairUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: PairCreateOrConnectWithoutReceiverInput | PairCreateOrConnectWithoutReceiverInput[]
    createMany?: PairCreateManyReceiverInputEnvelope
    connect?: PairWhereUniqueInput | PairWhereUniqueInput[]
  }

  export type UnmatchedUserUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UnmatchedUserCreateWithoutUserInput, UnmatchedUserUncheckedCreateWithoutUserInput> | UnmatchedUserCreateWithoutUserInput[] | UnmatchedUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UnmatchedUserCreateOrConnectWithoutUserInput | UnmatchedUserCreateOrConnectWithoutUserInput[]
    createMany?: UnmatchedUserCreateManyUserInputEnvelope
    connect?: UnmatchedUserWhereUniqueInput | UnmatchedUserWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SecretSantaSessionUpdateManyWithoutCreatedByUserNestedInput = {
    create?: XOR<SecretSantaSessionCreateWithoutCreatedByUserInput, SecretSantaSessionUncheckedCreateWithoutCreatedByUserInput> | SecretSantaSessionCreateWithoutCreatedByUserInput[] | SecretSantaSessionUncheckedCreateWithoutCreatedByUserInput[]
    connectOrCreate?: SecretSantaSessionCreateOrConnectWithoutCreatedByUserInput | SecretSantaSessionCreateOrConnectWithoutCreatedByUserInput[]
    upsert?: SecretSantaSessionUpsertWithWhereUniqueWithoutCreatedByUserInput | SecretSantaSessionUpsertWithWhereUniqueWithoutCreatedByUserInput[]
    createMany?: SecretSantaSessionCreateManyCreatedByUserInputEnvelope
    set?: SecretSantaSessionWhereUniqueInput | SecretSantaSessionWhereUniqueInput[]
    disconnect?: SecretSantaSessionWhereUniqueInput | SecretSantaSessionWhereUniqueInput[]
    delete?: SecretSantaSessionWhereUniqueInput | SecretSantaSessionWhereUniqueInput[]
    connect?: SecretSantaSessionWhereUniqueInput | SecretSantaSessionWhereUniqueInput[]
    update?: SecretSantaSessionUpdateWithWhereUniqueWithoutCreatedByUserInput | SecretSantaSessionUpdateWithWhereUniqueWithoutCreatedByUserInput[]
    updateMany?: SecretSantaSessionUpdateManyWithWhereWithoutCreatedByUserInput | SecretSantaSessionUpdateManyWithWhereWithoutCreatedByUserInput[]
    deleteMany?: SecretSantaSessionScalarWhereInput | SecretSantaSessionScalarWhereInput[]
  }

  export type PairUpdateManyWithoutGiverNestedInput = {
    create?: XOR<PairCreateWithoutGiverInput, PairUncheckedCreateWithoutGiverInput> | PairCreateWithoutGiverInput[] | PairUncheckedCreateWithoutGiverInput[]
    connectOrCreate?: PairCreateOrConnectWithoutGiverInput | PairCreateOrConnectWithoutGiverInput[]
    upsert?: PairUpsertWithWhereUniqueWithoutGiverInput | PairUpsertWithWhereUniqueWithoutGiverInput[]
    createMany?: PairCreateManyGiverInputEnvelope
    set?: PairWhereUniqueInput | PairWhereUniqueInput[]
    disconnect?: PairWhereUniqueInput | PairWhereUniqueInput[]
    delete?: PairWhereUniqueInput | PairWhereUniqueInput[]
    connect?: PairWhereUniqueInput | PairWhereUniqueInput[]
    update?: PairUpdateWithWhereUniqueWithoutGiverInput | PairUpdateWithWhereUniqueWithoutGiverInput[]
    updateMany?: PairUpdateManyWithWhereWithoutGiverInput | PairUpdateManyWithWhereWithoutGiverInput[]
    deleteMany?: PairScalarWhereInput | PairScalarWhereInput[]
  }

  export type PairUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<PairCreateWithoutReceiverInput, PairUncheckedCreateWithoutReceiverInput> | PairCreateWithoutReceiverInput[] | PairUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: PairCreateOrConnectWithoutReceiverInput | PairCreateOrConnectWithoutReceiverInput[]
    upsert?: PairUpsertWithWhereUniqueWithoutReceiverInput | PairUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: PairCreateManyReceiverInputEnvelope
    set?: PairWhereUniqueInput | PairWhereUniqueInput[]
    disconnect?: PairWhereUniqueInput | PairWhereUniqueInput[]
    delete?: PairWhereUniqueInput | PairWhereUniqueInput[]
    connect?: PairWhereUniqueInput | PairWhereUniqueInput[]
    update?: PairUpdateWithWhereUniqueWithoutReceiverInput | PairUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: PairUpdateManyWithWhereWithoutReceiverInput | PairUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: PairScalarWhereInput | PairScalarWhereInput[]
  }

  export type UnmatchedUserUpdateManyWithoutUserNestedInput = {
    create?: XOR<UnmatchedUserCreateWithoutUserInput, UnmatchedUserUncheckedCreateWithoutUserInput> | UnmatchedUserCreateWithoutUserInput[] | UnmatchedUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UnmatchedUserCreateOrConnectWithoutUserInput | UnmatchedUserCreateOrConnectWithoutUserInput[]
    upsert?: UnmatchedUserUpsertWithWhereUniqueWithoutUserInput | UnmatchedUserUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UnmatchedUserCreateManyUserInputEnvelope
    set?: UnmatchedUserWhereUniqueInput | UnmatchedUserWhereUniqueInput[]
    disconnect?: UnmatchedUserWhereUniqueInput | UnmatchedUserWhereUniqueInput[]
    delete?: UnmatchedUserWhereUniqueInput | UnmatchedUserWhereUniqueInput[]
    connect?: UnmatchedUserWhereUniqueInput | UnmatchedUserWhereUniqueInput[]
    update?: UnmatchedUserUpdateWithWhereUniqueWithoutUserInput | UnmatchedUserUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UnmatchedUserUpdateManyWithWhereWithoutUserInput | UnmatchedUserUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UnmatchedUserScalarWhereInput | UnmatchedUserScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SecretSantaSessionUncheckedUpdateManyWithoutCreatedByUserNestedInput = {
    create?: XOR<SecretSantaSessionCreateWithoutCreatedByUserInput, SecretSantaSessionUncheckedCreateWithoutCreatedByUserInput> | SecretSantaSessionCreateWithoutCreatedByUserInput[] | SecretSantaSessionUncheckedCreateWithoutCreatedByUserInput[]
    connectOrCreate?: SecretSantaSessionCreateOrConnectWithoutCreatedByUserInput | SecretSantaSessionCreateOrConnectWithoutCreatedByUserInput[]
    upsert?: SecretSantaSessionUpsertWithWhereUniqueWithoutCreatedByUserInput | SecretSantaSessionUpsertWithWhereUniqueWithoutCreatedByUserInput[]
    createMany?: SecretSantaSessionCreateManyCreatedByUserInputEnvelope
    set?: SecretSantaSessionWhereUniqueInput | SecretSantaSessionWhereUniqueInput[]
    disconnect?: SecretSantaSessionWhereUniqueInput | SecretSantaSessionWhereUniqueInput[]
    delete?: SecretSantaSessionWhereUniqueInput | SecretSantaSessionWhereUniqueInput[]
    connect?: SecretSantaSessionWhereUniqueInput | SecretSantaSessionWhereUniqueInput[]
    update?: SecretSantaSessionUpdateWithWhereUniqueWithoutCreatedByUserInput | SecretSantaSessionUpdateWithWhereUniqueWithoutCreatedByUserInput[]
    updateMany?: SecretSantaSessionUpdateManyWithWhereWithoutCreatedByUserInput | SecretSantaSessionUpdateManyWithWhereWithoutCreatedByUserInput[]
    deleteMany?: SecretSantaSessionScalarWhereInput | SecretSantaSessionScalarWhereInput[]
  }

  export type PairUncheckedUpdateManyWithoutGiverNestedInput = {
    create?: XOR<PairCreateWithoutGiverInput, PairUncheckedCreateWithoutGiverInput> | PairCreateWithoutGiverInput[] | PairUncheckedCreateWithoutGiverInput[]
    connectOrCreate?: PairCreateOrConnectWithoutGiverInput | PairCreateOrConnectWithoutGiverInput[]
    upsert?: PairUpsertWithWhereUniqueWithoutGiverInput | PairUpsertWithWhereUniqueWithoutGiverInput[]
    createMany?: PairCreateManyGiverInputEnvelope
    set?: PairWhereUniqueInput | PairWhereUniqueInput[]
    disconnect?: PairWhereUniqueInput | PairWhereUniqueInput[]
    delete?: PairWhereUniqueInput | PairWhereUniqueInput[]
    connect?: PairWhereUniqueInput | PairWhereUniqueInput[]
    update?: PairUpdateWithWhereUniqueWithoutGiverInput | PairUpdateWithWhereUniqueWithoutGiverInput[]
    updateMany?: PairUpdateManyWithWhereWithoutGiverInput | PairUpdateManyWithWhereWithoutGiverInput[]
    deleteMany?: PairScalarWhereInput | PairScalarWhereInput[]
  }

  export type PairUncheckedUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<PairCreateWithoutReceiverInput, PairUncheckedCreateWithoutReceiverInput> | PairCreateWithoutReceiverInput[] | PairUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: PairCreateOrConnectWithoutReceiverInput | PairCreateOrConnectWithoutReceiverInput[]
    upsert?: PairUpsertWithWhereUniqueWithoutReceiverInput | PairUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: PairCreateManyReceiverInputEnvelope
    set?: PairWhereUniqueInput | PairWhereUniqueInput[]
    disconnect?: PairWhereUniqueInput | PairWhereUniqueInput[]
    delete?: PairWhereUniqueInput | PairWhereUniqueInput[]
    connect?: PairWhereUniqueInput | PairWhereUniqueInput[]
    update?: PairUpdateWithWhereUniqueWithoutReceiverInput | PairUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: PairUpdateManyWithWhereWithoutReceiverInput | PairUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: PairScalarWhereInput | PairScalarWhereInput[]
  }

  export type UnmatchedUserUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UnmatchedUserCreateWithoutUserInput, UnmatchedUserUncheckedCreateWithoutUserInput> | UnmatchedUserCreateWithoutUserInput[] | UnmatchedUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UnmatchedUserCreateOrConnectWithoutUserInput | UnmatchedUserCreateOrConnectWithoutUserInput[]
    upsert?: UnmatchedUserUpsertWithWhereUniqueWithoutUserInput | UnmatchedUserUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UnmatchedUserCreateManyUserInputEnvelope
    set?: UnmatchedUserWhereUniqueInput | UnmatchedUserWhereUniqueInput[]
    disconnect?: UnmatchedUserWhereUniqueInput | UnmatchedUserWhereUniqueInput[]
    delete?: UnmatchedUserWhereUniqueInput | UnmatchedUserWhereUniqueInput[]
    connect?: UnmatchedUserWhereUniqueInput | UnmatchedUserWhereUniqueInput[]
    update?: UnmatchedUserUpdateWithWhereUniqueWithoutUserInput | UnmatchedUserUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UnmatchedUserUpdateManyWithWhereWithoutUserInput | UnmatchedUserUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UnmatchedUserScalarWhereInput | UnmatchedUserScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSessionsCreatedInput = {
    create?: XOR<UserCreateWithoutSessionsCreatedInput, UserUncheckedCreateWithoutSessionsCreatedInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsCreatedInput
    connect?: UserWhereUniqueInput
  }

  export type PairCreateNestedManyWithoutSessionInput = {
    create?: XOR<PairCreateWithoutSessionInput, PairUncheckedCreateWithoutSessionInput> | PairCreateWithoutSessionInput[] | PairUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: PairCreateOrConnectWithoutSessionInput | PairCreateOrConnectWithoutSessionInput[]
    createMany?: PairCreateManySessionInputEnvelope
    connect?: PairWhereUniqueInput | PairWhereUniqueInput[]
  }

  export type UnmatchedUserCreateNestedManyWithoutSessionInput = {
    create?: XOR<UnmatchedUserCreateWithoutSessionInput, UnmatchedUserUncheckedCreateWithoutSessionInput> | UnmatchedUserCreateWithoutSessionInput[] | UnmatchedUserUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: UnmatchedUserCreateOrConnectWithoutSessionInput | UnmatchedUserCreateOrConnectWithoutSessionInput[]
    createMany?: UnmatchedUserCreateManySessionInputEnvelope
    connect?: UnmatchedUserWhereUniqueInput | UnmatchedUserWhereUniqueInput[]
  }

  export type PairUncheckedCreateNestedManyWithoutSessionInput = {
    create?: XOR<PairCreateWithoutSessionInput, PairUncheckedCreateWithoutSessionInput> | PairCreateWithoutSessionInput[] | PairUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: PairCreateOrConnectWithoutSessionInput | PairCreateOrConnectWithoutSessionInput[]
    createMany?: PairCreateManySessionInputEnvelope
    connect?: PairWhereUniqueInput | PairWhereUniqueInput[]
  }

  export type UnmatchedUserUncheckedCreateNestedManyWithoutSessionInput = {
    create?: XOR<UnmatchedUserCreateWithoutSessionInput, UnmatchedUserUncheckedCreateWithoutSessionInput> | UnmatchedUserCreateWithoutSessionInput[] | UnmatchedUserUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: UnmatchedUserCreateOrConnectWithoutSessionInput | UnmatchedUserCreateOrConnectWithoutSessionInput[]
    createMany?: UnmatchedUserCreateManySessionInputEnvelope
    connect?: UnmatchedUserWhereUniqueInput | UnmatchedUserWhereUniqueInput[]
  }

  export type EnumSessionModeFieldUpdateOperationsInput = {
    set?: $Enums.SessionMode
  }

  export type UserUpdateOneRequiredWithoutSessionsCreatedNestedInput = {
    create?: XOR<UserCreateWithoutSessionsCreatedInput, UserUncheckedCreateWithoutSessionsCreatedInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsCreatedInput
    upsert?: UserUpsertWithoutSessionsCreatedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsCreatedInput, UserUpdateWithoutSessionsCreatedInput>, UserUncheckedUpdateWithoutSessionsCreatedInput>
  }

  export type PairUpdateManyWithoutSessionNestedInput = {
    create?: XOR<PairCreateWithoutSessionInput, PairUncheckedCreateWithoutSessionInput> | PairCreateWithoutSessionInput[] | PairUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: PairCreateOrConnectWithoutSessionInput | PairCreateOrConnectWithoutSessionInput[]
    upsert?: PairUpsertWithWhereUniqueWithoutSessionInput | PairUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: PairCreateManySessionInputEnvelope
    set?: PairWhereUniqueInput | PairWhereUniqueInput[]
    disconnect?: PairWhereUniqueInput | PairWhereUniqueInput[]
    delete?: PairWhereUniqueInput | PairWhereUniqueInput[]
    connect?: PairWhereUniqueInput | PairWhereUniqueInput[]
    update?: PairUpdateWithWhereUniqueWithoutSessionInput | PairUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: PairUpdateManyWithWhereWithoutSessionInput | PairUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: PairScalarWhereInput | PairScalarWhereInput[]
  }

  export type UnmatchedUserUpdateManyWithoutSessionNestedInput = {
    create?: XOR<UnmatchedUserCreateWithoutSessionInput, UnmatchedUserUncheckedCreateWithoutSessionInput> | UnmatchedUserCreateWithoutSessionInput[] | UnmatchedUserUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: UnmatchedUserCreateOrConnectWithoutSessionInput | UnmatchedUserCreateOrConnectWithoutSessionInput[]
    upsert?: UnmatchedUserUpsertWithWhereUniqueWithoutSessionInput | UnmatchedUserUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: UnmatchedUserCreateManySessionInputEnvelope
    set?: UnmatchedUserWhereUniqueInput | UnmatchedUserWhereUniqueInput[]
    disconnect?: UnmatchedUserWhereUniqueInput | UnmatchedUserWhereUniqueInput[]
    delete?: UnmatchedUserWhereUniqueInput | UnmatchedUserWhereUniqueInput[]
    connect?: UnmatchedUserWhereUniqueInput | UnmatchedUserWhereUniqueInput[]
    update?: UnmatchedUserUpdateWithWhereUniqueWithoutSessionInput | UnmatchedUserUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: UnmatchedUserUpdateManyWithWhereWithoutSessionInput | UnmatchedUserUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: UnmatchedUserScalarWhereInput | UnmatchedUserScalarWhereInput[]
  }

  export type PairUncheckedUpdateManyWithoutSessionNestedInput = {
    create?: XOR<PairCreateWithoutSessionInput, PairUncheckedCreateWithoutSessionInput> | PairCreateWithoutSessionInput[] | PairUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: PairCreateOrConnectWithoutSessionInput | PairCreateOrConnectWithoutSessionInput[]
    upsert?: PairUpsertWithWhereUniqueWithoutSessionInput | PairUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: PairCreateManySessionInputEnvelope
    set?: PairWhereUniqueInput | PairWhereUniqueInput[]
    disconnect?: PairWhereUniqueInput | PairWhereUniqueInput[]
    delete?: PairWhereUniqueInput | PairWhereUniqueInput[]
    connect?: PairWhereUniqueInput | PairWhereUniqueInput[]
    update?: PairUpdateWithWhereUniqueWithoutSessionInput | PairUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: PairUpdateManyWithWhereWithoutSessionInput | PairUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: PairScalarWhereInput | PairScalarWhereInput[]
  }

  export type UnmatchedUserUncheckedUpdateManyWithoutSessionNestedInput = {
    create?: XOR<UnmatchedUserCreateWithoutSessionInput, UnmatchedUserUncheckedCreateWithoutSessionInput> | UnmatchedUserCreateWithoutSessionInput[] | UnmatchedUserUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: UnmatchedUserCreateOrConnectWithoutSessionInput | UnmatchedUserCreateOrConnectWithoutSessionInput[]
    upsert?: UnmatchedUserUpsertWithWhereUniqueWithoutSessionInput | UnmatchedUserUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: UnmatchedUserCreateManySessionInputEnvelope
    set?: UnmatchedUserWhereUniqueInput | UnmatchedUserWhereUniqueInput[]
    disconnect?: UnmatchedUserWhereUniqueInput | UnmatchedUserWhereUniqueInput[]
    delete?: UnmatchedUserWhereUniqueInput | UnmatchedUserWhereUniqueInput[]
    connect?: UnmatchedUserWhereUniqueInput | UnmatchedUserWhereUniqueInput[]
    update?: UnmatchedUserUpdateWithWhereUniqueWithoutSessionInput | UnmatchedUserUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: UnmatchedUserUpdateManyWithWhereWithoutSessionInput | UnmatchedUserUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: UnmatchedUserScalarWhereInput | UnmatchedUserScalarWhereInput[]
  }

  export type SecretSantaSessionCreateNestedOneWithoutPairsInput = {
    create?: XOR<SecretSantaSessionCreateWithoutPairsInput, SecretSantaSessionUncheckedCreateWithoutPairsInput>
    connectOrCreate?: SecretSantaSessionCreateOrConnectWithoutPairsInput
    connect?: SecretSantaSessionWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutGivenPairsInput = {
    create?: XOR<UserCreateWithoutGivenPairsInput, UserUncheckedCreateWithoutGivenPairsInput>
    connectOrCreate?: UserCreateOrConnectWithoutGivenPairsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReceivedPairsInput = {
    create?: XOR<UserCreateWithoutReceivedPairsInput, UserUncheckedCreateWithoutReceivedPairsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedPairsInput
    connect?: UserWhereUniqueInput
  }

  export type SecretSantaSessionUpdateOneRequiredWithoutPairsNestedInput = {
    create?: XOR<SecretSantaSessionCreateWithoutPairsInput, SecretSantaSessionUncheckedCreateWithoutPairsInput>
    connectOrCreate?: SecretSantaSessionCreateOrConnectWithoutPairsInput
    upsert?: SecretSantaSessionUpsertWithoutPairsInput
    connect?: SecretSantaSessionWhereUniqueInput
    update?: XOR<XOR<SecretSantaSessionUpdateToOneWithWhereWithoutPairsInput, SecretSantaSessionUpdateWithoutPairsInput>, SecretSantaSessionUncheckedUpdateWithoutPairsInput>
  }

  export type UserUpdateOneRequiredWithoutGivenPairsNestedInput = {
    create?: XOR<UserCreateWithoutGivenPairsInput, UserUncheckedCreateWithoutGivenPairsInput>
    connectOrCreate?: UserCreateOrConnectWithoutGivenPairsInput
    upsert?: UserUpsertWithoutGivenPairsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGivenPairsInput, UserUpdateWithoutGivenPairsInput>, UserUncheckedUpdateWithoutGivenPairsInput>
  }

  export type UserUpdateOneRequiredWithoutReceivedPairsNestedInput = {
    create?: XOR<UserCreateWithoutReceivedPairsInput, UserUncheckedCreateWithoutReceivedPairsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedPairsInput
    upsert?: UserUpsertWithoutReceivedPairsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReceivedPairsInput, UserUpdateWithoutReceivedPairsInput>, UserUncheckedUpdateWithoutReceivedPairsInput>
  }

  export type SecretSantaSessionCreateNestedOneWithoutUnmatchedUsersInput = {
    create?: XOR<SecretSantaSessionCreateWithoutUnmatchedUsersInput, SecretSantaSessionUncheckedCreateWithoutUnmatchedUsersInput>
    connectOrCreate?: SecretSantaSessionCreateOrConnectWithoutUnmatchedUsersInput
    connect?: SecretSantaSessionWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutUnmatchedSessionsInput = {
    create?: XOR<UserCreateWithoutUnmatchedSessionsInput, UserUncheckedCreateWithoutUnmatchedSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUnmatchedSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type SecretSantaSessionUpdateOneRequiredWithoutUnmatchedUsersNestedInput = {
    create?: XOR<SecretSantaSessionCreateWithoutUnmatchedUsersInput, SecretSantaSessionUncheckedCreateWithoutUnmatchedUsersInput>
    connectOrCreate?: SecretSantaSessionCreateOrConnectWithoutUnmatchedUsersInput
    upsert?: SecretSantaSessionUpsertWithoutUnmatchedUsersInput
    connect?: SecretSantaSessionWhereUniqueInput
    update?: XOR<XOR<SecretSantaSessionUpdateToOneWithWhereWithoutUnmatchedUsersInput, SecretSantaSessionUpdateWithoutUnmatchedUsersInput>, SecretSantaSessionUncheckedUpdateWithoutUnmatchedUsersInput>
  }

  export type UserUpdateOneRequiredWithoutUnmatchedSessionsNestedInput = {
    create?: XOR<UserCreateWithoutUnmatchedSessionsInput, UserUncheckedCreateWithoutUnmatchedSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUnmatchedSessionsInput
    upsert?: UserUpsertWithoutUnmatchedSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUnmatchedSessionsInput, UserUpdateWithoutUnmatchedSessionsInput>, UserUncheckedUpdateWithoutUnmatchedSessionsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumSessionModeFilter<$PrismaModel = never> = {
    equals?: $Enums.SessionMode | EnumSessionModeFieldRefInput<$PrismaModel>
    in?: $Enums.SessionMode[] | ListEnumSessionModeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SessionMode[] | ListEnumSessionModeFieldRefInput<$PrismaModel>
    not?: NestedEnumSessionModeFilter<$PrismaModel> | $Enums.SessionMode
  }

  export type NestedEnumSessionModeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SessionMode | EnumSessionModeFieldRefInput<$PrismaModel>
    in?: $Enums.SessionMode[] | ListEnumSessionModeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SessionMode[] | ListEnumSessionModeFieldRefInput<$PrismaModel>
    not?: NestedEnumSessionModeWithAggregatesFilter<$PrismaModel> | $Enums.SessionMode
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSessionModeFilter<$PrismaModel>
    _max?: NestedEnumSessionModeFilter<$PrismaModel>
  }

  export type SecretSantaSessionCreateWithoutCreatedByUserInput = {
    createdAt?: Date | string
    mode: $Enums.SessionMode
    pairs?: PairCreateNestedManyWithoutSessionInput
    unmatchedUsers?: UnmatchedUserCreateNestedManyWithoutSessionInput
  }

  export type SecretSantaSessionUncheckedCreateWithoutCreatedByUserInput = {
    id?: number
    createdAt?: Date | string
    mode: $Enums.SessionMode
    pairs?: PairUncheckedCreateNestedManyWithoutSessionInput
    unmatchedUsers?: UnmatchedUserUncheckedCreateNestedManyWithoutSessionInput
  }

  export type SecretSantaSessionCreateOrConnectWithoutCreatedByUserInput = {
    where: SecretSantaSessionWhereUniqueInput
    create: XOR<SecretSantaSessionCreateWithoutCreatedByUserInput, SecretSantaSessionUncheckedCreateWithoutCreatedByUserInput>
  }

  export type SecretSantaSessionCreateManyCreatedByUserInputEnvelope = {
    data: SecretSantaSessionCreateManyCreatedByUserInput | SecretSantaSessionCreateManyCreatedByUserInput[]
    skipDuplicates?: boolean
  }

  export type PairCreateWithoutGiverInput = {
    session: SecretSantaSessionCreateNestedOneWithoutPairsInput
    receiver: UserCreateNestedOneWithoutReceivedPairsInput
  }

  export type PairUncheckedCreateWithoutGiverInput = {
    id?: number
    sessionId: number
    receiverId: number
  }

  export type PairCreateOrConnectWithoutGiverInput = {
    where: PairWhereUniqueInput
    create: XOR<PairCreateWithoutGiverInput, PairUncheckedCreateWithoutGiverInput>
  }

  export type PairCreateManyGiverInputEnvelope = {
    data: PairCreateManyGiverInput | PairCreateManyGiverInput[]
    skipDuplicates?: boolean
  }

  export type PairCreateWithoutReceiverInput = {
    session: SecretSantaSessionCreateNestedOneWithoutPairsInput
    giver: UserCreateNestedOneWithoutGivenPairsInput
  }

  export type PairUncheckedCreateWithoutReceiverInput = {
    id?: number
    sessionId: number
    giverId: number
  }

  export type PairCreateOrConnectWithoutReceiverInput = {
    where: PairWhereUniqueInput
    create: XOR<PairCreateWithoutReceiverInput, PairUncheckedCreateWithoutReceiverInput>
  }

  export type PairCreateManyReceiverInputEnvelope = {
    data: PairCreateManyReceiverInput | PairCreateManyReceiverInput[]
    skipDuplicates?: boolean
  }

  export type UnmatchedUserCreateWithoutUserInput = {
    session: SecretSantaSessionCreateNestedOneWithoutUnmatchedUsersInput
  }

  export type UnmatchedUserUncheckedCreateWithoutUserInput = {
    id?: number
    sessionId: number
  }

  export type UnmatchedUserCreateOrConnectWithoutUserInput = {
    where: UnmatchedUserWhereUniqueInput
    create: XOR<UnmatchedUserCreateWithoutUserInput, UnmatchedUserUncheckedCreateWithoutUserInput>
  }

  export type UnmatchedUserCreateManyUserInputEnvelope = {
    data: UnmatchedUserCreateManyUserInput | UnmatchedUserCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SecretSantaSessionUpsertWithWhereUniqueWithoutCreatedByUserInput = {
    where: SecretSantaSessionWhereUniqueInput
    update: XOR<SecretSantaSessionUpdateWithoutCreatedByUserInput, SecretSantaSessionUncheckedUpdateWithoutCreatedByUserInput>
    create: XOR<SecretSantaSessionCreateWithoutCreatedByUserInput, SecretSantaSessionUncheckedCreateWithoutCreatedByUserInput>
  }

  export type SecretSantaSessionUpdateWithWhereUniqueWithoutCreatedByUserInput = {
    where: SecretSantaSessionWhereUniqueInput
    data: XOR<SecretSantaSessionUpdateWithoutCreatedByUserInput, SecretSantaSessionUncheckedUpdateWithoutCreatedByUserInput>
  }

  export type SecretSantaSessionUpdateManyWithWhereWithoutCreatedByUserInput = {
    where: SecretSantaSessionScalarWhereInput
    data: XOR<SecretSantaSessionUpdateManyMutationInput, SecretSantaSessionUncheckedUpdateManyWithoutCreatedByUserInput>
  }

  export type SecretSantaSessionScalarWhereInput = {
    AND?: SecretSantaSessionScalarWhereInput | SecretSantaSessionScalarWhereInput[]
    OR?: SecretSantaSessionScalarWhereInput[]
    NOT?: SecretSantaSessionScalarWhereInput | SecretSantaSessionScalarWhereInput[]
    id?: IntFilter<"SecretSantaSession"> | number
    createdAt?: DateTimeFilter<"SecretSantaSession"> | Date | string
    createdByUserId?: IntFilter<"SecretSantaSession"> | number
    mode?: EnumSessionModeFilter<"SecretSantaSession"> | $Enums.SessionMode
  }

  export type PairUpsertWithWhereUniqueWithoutGiverInput = {
    where: PairWhereUniqueInput
    update: XOR<PairUpdateWithoutGiverInput, PairUncheckedUpdateWithoutGiverInput>
    create: XOR<PairCreateWithoutGiverInput, PairUncheckedCreateWithoutGiverInput>
  }

  export type PairUpdateWithWhereUniqueWithoutGiverInput = {
    where: PairWhereUniqueInput
    data: XOR<PairUpdateWithoutGiverInput, PairUncheckedUpdateWithoutGiverInput>
  }

  export type PairUpdateManyWithWhereWithoutGiverInput = {
    where: PairScalarWhereInput
    data: XOR<PairUpdateManyMutationInput, PairUncheckedUpdateManyWithoutGiverInput>
  }

  export type PairScalarWhereInput = {
    AND?: PairScalarWhereInput | PairScalarWhereInput[]
    OR?: PairScalarWhereInput[]
    NOT?: PairScalarWhereInput | PairScalarWhereInput[]
    id?: IntFilter<"Pair"> | number
    sessionId?: IntFilter<"Pair"> | number
    giverId?: IntFilter<"Pair"> | number
    receiverId?: IntFilter<"Pair"> | number
  }

  export type PairUpsertWithWhereUniqueWithoutReceiverInput = {
    where: PairWhereUniqueInput
    update: XOR<PairUpdateWithoutReceiverInput, PairUncheckedUpdateWithoutReceiverInput>
    create: XOR<PairCreateWithoutReceiverInput, PairUncheckedCreateWithoutReceiverInput>
  }

  export type PairUpdateWithWhereUniqueWithoutReceiverInput = {
    where: PairWhereUniqueInput
    data: XOR<PairUpdateWithoutReceiverInput, PairUncheckedUpdateWithoutReceiverInput>
  }

  export type PairUpdateManyWithWhereWithoutReceiverInput = {
    where: PairScalarWhereInput
    data: XOR<PairUpdateManyMutationInput, PairUncheckedUpdateManyWithoutReceiverInput>
  }

  export type UnmatchedUserUpsertWithWhereUniqueWithoutUserInput = {
    where: UnmatchedUserWhereUniqueInput
    update: XOR<UnmatchedUserUpdateWithoutUserInput, UnmatchedUserUncheckedUpdateWithoutUserInput>
    create: XOR<UnmatchedUserCreateWithoutUserInput, UnmatchedUserUncheckedCreateWithoutUserInput>
  }

  export type UnmatchedUserUpdateWithWhereUniqueWithoutUserInput = {
    where: UnmatchedUserWhereUniqueInput
    data: XOR<UnmatchedUserUpdateWithoutUserInput, UnmatchedUserUncheckedUpdateWithoutUserInput>
  }

  export type UnmatchedUserUpdateManyWithWhereWithoutUserInput = {
    where: UnmatchedUserScalarWhereInput
    data: XOR<UnmatchedUserUpdateManyMutationInput, UnmatchedUserUncheckedUpdateManyWithoutUserInput>
  }

  export type UnmatchedUserScalarWhereInput = {
    AND?: UnmatchedUserScalarWhereInput | UnmatchedUserScalarWhereInput[]
    OR?: UnmatchedUserScalarWhereInput[]
    NOT?: UnmatchedUserScalarWhereInput | UnmatchedUserScalarWhereInput[]
    id?: IntFilter<"UnmatchedUser"> | number
    sessionId?: IntFilter<"UnmatchedUser"> | number
    userId?: IntFilter<"UnmatchedUser"> | number
  }

  export type UserCreateWithoutSessionsCreatedInput = {
    email: string
    passwordHash: string
    firstName: string
    lastName: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    givenPairs?: PairCreateNestedManyWithoutGiverInput
    receivedPairs?: PairCreateNestedManyWithoutReceiverInput
    unmatchedSessions?: UnmatchedUserCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsCreatedInput = {
    id?: number
    email: string
    passwordHash: string
    firstName: string
    lastName: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    givenPairs?: PairUncheckedCreateNestedManyWithoutGiverInput
    receivedPairs?: PairUncheckedCreateNestedManyWithoutReceiverInput
    unmatchedSessions?: UnmatchedUserUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsCreatedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsCreatedInput, UserUncheckedCreateWithoutSessionsCreatedInput>
  }

  export type PairCreateWithoutSessionInput = {
    giver: UserCreateNestedOneWithoutGivenPairsInput
    receiver: UserCreateNestedOneWithoutReceivedPairsInput
  }

  export type PairUncheckedCreateWithoutSessionInput = {
    id?: number
    giverId: number
    receiverId: number
  }

  export type PairCreateOrConnectWithoutSessionInput = {
    where: PairWhereUniqueInput
    create: XOR<PairCreateWithoutSessionInput, PairUncheckedCreateWithoutSessionInput>
  }

  export type PairCreateManySessionInputEnvelope = {
    data: PairCreateManySessionInput | PairCreateManySessionInput[]
    skipDuplicates?: boolean
  }

  export type UnmatchedUserCreateWithoutSessionInput = {
    user: UserCreateNestedOneWithoutUnmatchedSessionsInput
  }

  export type UnmatchedUserUncheckedCreateWithoutSessionInput = {
    id?: number
    userId: number
  }

  export type UnmatchedUserCreateOrConnectWithoutSessionInput = {
    where: UnmatchedUserWhereUniqueInput
    create: XOR<UnmatchedUserCreateWithoutSessionInput, UnmatchedUserUncheckedCreateWithoutSessionInput>
  }

  export type UnmatchedUserCreateManySessionInputEnvelope = {
    data: UnmatchedUserCreateManySessionInput | UnmatchedUserCreateManySessionInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutSessionsCreatedInput = {
    update: XOR<UserUpdateWithoutSessionsCreatedInput, UserUncheckedUpdateWithoutSessionsCreatedInput>
    create: XOR<UserCreateWithoutSessionsCreatedInput, UserUncheckedCreateWithoutSessionsCreatedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsCreatedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsCreatedInput, UserUncheckedUpdateWithoutSessionsCreatedInput>
  }

  export type UserUpdateWithoutSessionsCreatedInput = {
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    givenPairs?: PairUpdateManyWithoutGiverNestedInput
    receivedPairs?: PairUpdateManyWithoutReceiverNestedInput
    unmatchedSessions?: UnmatchedUserUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsCreatedInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    givenPairs?: PairUncheckedUpdateManyWithoutGiverNestedInput
    receivedPairs?: PairUncheckedUpdateManyWithoutReceiverNestedInput
    unmatchedSessions?: UnmatchedUserUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PairUpsertWithWhereUniqueWithoutSessionInput = {
    where: PairWhereUniqueInput
    update: XOR<PairUpdateWithoutSessionInput, PairUncheckedUpdateWithoutSessionInput>
    create: XOR<PairCreateWithoutSessionInput, PairUncheckedCreateWithoutSessionInput>
  }

  export type PairUpdateWithWhereUniqueWithoutSessionInput = {
    where: PairWhereUniqueInput
    data: XOR<PairUpdateWithoutSessionInput, PairUncheckedUpdateWithoutSessionInput>
  }

  export type PairUpdateManyWithWhereWithoutSessionInput = {
    where: PairScalarWhereInput
    data: XOR<PairUpdateManyMutationInput, PairUncheckedUpdateManyWithoutSessionInput>
  }

  export type UnmatchedUserUpsertWithWhereUniqueWithoutSessionInput = {
    where: UnmatchedUserWhereUniqueInput
    update: XOR<UnmatchedUserUpdateWithoutSessionInput, UnmatchedUserUncheckedUpdateWithoutSessionInput>
    create: XOR<UnmatchedUserCreateWithoutSessionInput, UnmatchedUserUncheckedCreateWithoutSessionInput>
  }

  export type UnmatchedUserUpdateWithWhereUniqueWithoutSessionInput = {
    where: UnmatchedUserWhereUniqueInput
    data: XOR<UnmatchedUserUpdateWithoutSessionInput, UnmatchedUserUncheckedUpdateWithoutSessionInput>
  }

  export type UnmatchedUserUpdateManyWithWhereWithoutSessionInput = {
    where: UnmatchedUserScalarWhereInput
    data: XOR<UnmatchedUserUpdateManyMutationInput, UnmatchedUserUncheckedUpdateManyWithoutSessionInput>
  }

  export type SecretSantaSessionCreateWithoutPairsInput = {
    createdAt?: Date | string
    mode: $Enums.SessionMode
    createdByUser: UserCreateNestedOneWithoutSessionsCreatedInput
    unmatchedUsers?: UnmatchedUserCreateNestedManyWithoutSessionInput
  }

  export type SecretSantaSessionUncheckedCreateWithoutPairsInput = {
    id?: number
    createdAt?: Date | string
    createdByUserId: number
    mode: $Enums.SessionMode
    unmatchedUsers?: UnmatchedUserUncheckedCreateNestedManyWithoutSessionInput
  }

  export type SecretSantaSessionCreateOrConnectWithoutPairsInput = {
    where: SecretSantaSessionWhereUniqueInput
    create: XOR<SecretSantaSessionCreateWithoutPairsInput, SecretSantaSessionUncheckedCreateWithoutPairsInput>
  }

  export type UserCreateWithoutGivenPairsInput = {
    email: string
    passwordHash: string
    firstName: string
    lastName: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    sessionsCreated?: SecretSantaSessionCreateNestedManyWithoutCreatedByUserInput
    receivedPairs?: PairCreateNestedManyWithoutReceiverInput
    unmatchedSessions?: UnmatchedUserCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutGivenPairsInput = {
    id?: number
    email: string
    passwordHash: string
    firstName: string
    lastName: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    sessionsCreated?: SecretSantaSessionUncheckedCreateNestedManyWithoutCreatedByUserInput
    receivedPairs?: PairUncheckedCreateNestedManyWithoutReceiverInput
    unmatchedSessions?: UnmatchedUserUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutGivenPairsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGivenPairsInput, UserUncheckedCreateWithoutGivenPairsInput>
  }

  export type UserCreateWithoutReceivedPairsInput = {
    email: string
    passwordHash: string
    firstName: string
    lastName: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    sessionsCreated?: SecretSantaSessionCreateNestedManyWithoutCreatedByUserInput
    givenPairs?: PairCreateNestedManyWithoutGiverInput
    unmatchedSessions?: UnmatchedUserCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReceivedPairsInput = {
    id?: number
    email: string
    passwordHash: string
    firstName: string
    lastName: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    sessionsCreated?: SecretSantaSessionUncheckedCreateNestedManyWithoutCreatedByUserInput
    givenPairs?: PairUncheckedCreateNestedManyWithoutGiverInput
    unmatchedSessions?: UnmatchedUserUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReceivedPairsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReceivedPairsInput, UserUncheckedCreateWithoutReceivedPairsInput>
  }

  export type SecretSantaSessionUpsertWithoutPairsInput = {
    update: XOR<SecretSantaSessionUpdateWithoutPairsInput, SecretSantaSessionUncheckedUpdateWithoutPairsInput>
    create: XOR<SecretSantaSessionCreateWithoutPairsInput, SecretSantaSessionUncheckedCreateWithoutPairsInput>
    where?: SecretSantaSessionWhereInput
  }

  export type SecretSantaSessionUpdateToOneWithWhereWithoutPairsInput = {
    where?: SecretSantaSessionWhereInput
    data: XOR<SecretSantaSessionUpdateWithoutPairsInput, SecretSantaSessionUncheckedUpdateWithoutPairsInput>
  }

  export type SecretSantaSessionUpdateWithoutPairsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mode?: EnumSessionModeFieldUpdateOperationsInput | $Enums.SessionMode
    createdByUser?: UserUpdateOneRequiredWithoutSessionsCreatedNestedInput
    unmatchedUsers?: UnmatchedUserUpdateManyWithoutSessionNestedInput
  }

  export type SecretSantaSessionUncheckedUpdateWithoutPairsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdByUserId?: IntFieldUpdateOperationsInput | number
    mode?: EnumSessionModeFieldUpdateOperationsInput | $Enums.SessionMode
    unmatchedUsers?: UnmatchedUserUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type UserUpsertWithoutGivenPairsInput = {
    update: XOR<UserUpdateWithoutGivenPairsInput, UserUncheckedUpdateWithoutGivenPairsInput>
    create: XOR<UserCreateWithoutGivenPairsInput, UserUncheckedCreateWithoutGivenPairsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGivenPairsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGivenPairsInput, UserUncheckedUpdateWithoutGivenPairsInput>
  }

  export type UserUpdateWithoutGivenPairsInput = {
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessionsCreated?: SecretSantaSessionUpdateManyWithoutCreatedByUserNestedInput
    receivedPairs?: PairUpdateManyWithoutReceiverNestedInput
    unmatchedSessions?: UnmatchedUserUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutGivenPairsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessionsCreated?: SecretSantaSessionUncheckedUpdateManyWithoutCreatedByUserNestedInput
    receivedPairs?: PairUncheckedUpdateManyWithoutReceiverNestedInput
    unmatchedSessions?: UnmatchedUserUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutReceivedPairsInput = {
    update: XOR<UserUpdateWithoutReceivedPairsInput, UserUncheckedUpdateWithoutReceivedPairsInput>
    create: XOR<UserCreateWithoutReceivedPairsInput, UserUncheckedCreateWithoutReceivedPairsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReceivedPairsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReceivedPairsInput, UserUncheckedUpdateWithoutReceivedPairsInput>
  }

  export type UserUpdateWithoutReceivedPairsInput = {
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessionsCreated?: SecretSantaSessionUpdateManyWithoutCreatedByUserNestedInput
    givenPairs?: PairUpdateManyWithoutGiverNestedInput
    unmatchedSessions?: UnmatchedUserUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReceivedPairsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessionsCreated?: SecretSantaSessionUncheckedUpdateManyWithoutCreatedByUserNestedInput
    givenPairs?: PairUncheckedUpdateManyWithoutGiverNestedInput
    unmatchedSessions?: UnmatchedUserUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SecretSantaSessionCreateWithoutUnmatchedUsersInput = {
    createdAt?: Date | string
    mode: $Enums.SessionMode
    createdByUser: UserCreateNestedOneWithoutSessionsCreatedInput
    pairs?: PairCreateNestedManyWithoutSessionInput
  }

  export type SecretSantaSessionUncheckedCreateWithoutUnmatchedUsersInput = {
    id?: number
    createdAt?: Date | string
    createdByUserId: number
    mode: $Enums.SessionMode
    pairs?: PairUncheckedCreateNestedManyWithoutSessionInput
  }

  export type SecretSantaSessionCreateOrConnectWithoutUnmatchedUsersInput = {
    where: SecretSantaSessionWhereUniqueInput
    create: XOR<SecretSantaSessionCreateWithoutUnmatchedUsersInput, SecretSantaSessionUncheckedCreateWithoutUnmatchedUsersInput>
  }

  export type UserCreateWithoutUnmatchedSessionsInput = {
    email: string
    passwordHash: string
    firstName: string
    lastName: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    sessionsCreated?: SecretSantaSessionCreateNestedManyWithoutCreatedByUserInput
    givenPairs?: PairCreateNestedManyWithoutGiverInput
    receivedPairs?: PairCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutUnmatchedSessionsInput = {
    id?: number
    email: string
    passwordHash: string
    firstName: string
    lastName: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    sessionsCreated?: SecretSantaSessionUncheckedCreateNestedManyWithoutCreatedByUserInput
    givenPairs?: PairUncheckedCreateNestedManyWithoutGiverInput
    receivedPairs?: PairUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutUnmatchedSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUnmatchedSessionsInput, UserUncheckedCreateWithoutUnmatchedSessionsInput>
  }

  export type SecretSantaSessionUpsertWithoutUnmatchedUsersInput = {
    update: XOR<SecretSantaSessionUpdateWithoutUnmatchedUsersInput, SecretSantaSessionUncheckedUpdateWithoutUnmatchedUsersInput>
    create: XOR<SecretSantaSessionCreateWithoutUnmatchedUsersInput, SecretSantaSessionUncheckedCreateWithoutUnmatchedUsersInput>
    where?: SecretSantaSessionWhereInput
  }

  export type SecretSantaSessionUpdateToOneWithWhereWithoutUnmatchedUsersInput = {
    where?: SecretSantaSessionWhereInput
    data: XOR<SecretSantaSessionUpdateWithoutUnmatchedUsersInput, SecretSantaSessionUncheckedUpdateWithoutUnmatchedUsersInput>
  }

  export type SecretSantaSessionUpdateWithoutUnmatchedUsersInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mode?: EnumSessionModeFieldUpdateOperationsInput | $Enums.SessionMode
    createdByUser?: UserUpdateOneRequiredWithoutSessionsCreatedNestedInput
    pairs?: PairUpdateManyWithoutSessionNestedInput
  }

  export type SecretSantaSessionUncheckedUpdateWithoutUnmatchedUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdByUserId?: IntFieldUpdateOperationsInput | number
    mode?: EnumSessionModeFieldUpdateOperationsInput | $Enums.SessionMode
    pairs?: PairUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type UserUpsertWithoutUnmatchedSessionsInput = {
    update: XOR<UserUpdateWithoutUnmatchedSessionsInput, UserUncheckedUpdateWithoutUnmatchedSessionsInput>
    create: XOR<UserCreateWithoutUnmatchedSessionsInput, UserUncheckedCreateWithoutUnmatchedSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUnmatchedSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUnmatchedSessionsInput, UserUncheckedUpdateWithoutUnmatchedSessionsInput>
  }

  export type UserUpdateWithoutUnmatchedSessionsInput = {
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessionsCreated?: SecretSantaSessionUpdateManyWithoutCreatedByUserNestedInput
    givenPairs?: PairUpdateManyWithoutGiverNestedInput
    receivedPairs?: PairUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutUnmatchedSessionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessionsCreated?: SecretSantaSessionUncheckedUpdateManyWithoutCreatedByUserNestedInput
    givenPairs?: PairUncheckedUpdateManyWithoutGiverNestedInput
    receivedPairs?: PairUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type SecretSantaSessionCreateManyCreatedByUserInput = {
    id?: number
    createdAt?: Date | string
    mode: $Enums.SessionMode
  }

  export type PairCreateManyGiverInput = {
    id?: number
    sessionId: number
    receiverId: number
  }

  export type PairCreateManyReceiverInput = {
    id?: number
    sessionId: number
    giverId: number
  }

  export type UnmatchedUserCreateManyUserInput = {
    id?: number
    sessionId: number
  }

  export type SecretSantaSessionUpdateWithoutCreatedByUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mode?: EnumSessionModeFieldUpdateOperationsInput | $Enums.SessionMode
    pairs?: PairUpdateManyWithoutSessionNestedInput
    unmatchedUsers?: UnmatchedUserUpdateManyWithoutSessionNestedInput
  }

  export type SecretSantaSessionUncheckedUpdateWithoutCreatedByUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mode?: EnumSessionModeFieldUpdateOperationsInput | $Enums.SessionMode
    pairs?: PairUncheckedUpdateManyWithoutSessionNestedInput
    unmatchedUsers?: UnmatchedUserUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type SecretSantaSessionUncheckedUpdateManyWithoutCreatedByUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mode?: EnumSessionModeFieldUpdateOperationsInput | $Enums.SessionMode
  }

  export type PairUpdateWithoutGiverInput = {
    session?: SecretSantaSessionUpdateOneRequiredWithoutPairsNestedInput
    receiver?: UserUpdateOneRequiredWithoutReceivedPairsNestedInput
  }

  export type PairUncheckedUpdateWithoutGiverInput = {
    id?: IntFieldUpdateOperationsInput | number
    sessionId?: IntFieldUpdateOperationsInput | number
    receiverId?: IntFieldUpdateOperationsInput | number
  }

  export type PairUncheckedUpdateManyWithoutGiverInput = {
    id?: IntFieldUpdateOperationsInput | number
    sessionId?: IntFieldUpdateOperationsInput | number
    receiverId?: IntFieldUpdateOperationsInput | number
  }

  export type PairUpdateWithoutReceiverInput = {
    session?: SecretSantaSessionUpdateOneRequiredWithoutPairsNestedInput
    giver?: UserUpdateOneRequiredWithoutGivenPairsNestedInput
  }

  export type PairUncheckedUpdateWithoutReceiverInput = {
    id?: IntFieldUpdateOperationsInput | number
    sessionId?: IntFieldUpdateOperationsInput | number
    giverId?: IntFieldUpdateOperationsInput | number
  }

  export type PairUncheckedUpdateManyWithoutReceiverInput = {
    id?: IntFieldUpdateOperationsInput | number
    sessionId?: IntFieldUpdateOperationsInput | number
    giverId?: IntFieldUpdateOperationsInput | number
  }

  export type UnmatchedUserUpdateWithoutUserInput = {
    session?: SecretSantaSessionUpdateOneRequiredWithoutUnmatchedUsersNestedInput
  }

  export type UnmatchedUserUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    sessionId?: IntFieldUpdateOperationsInput | number
  }

  export type UnmatchedUserUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    sessionId?: IntFieldUpdateOperationsInput | number
  }

  export type PairCreateManySessionInput = {
    id?: number
    giverId: number
    receiverId: number
  }

  export type UnmatchedUserCreateManySessionInput = {
    id?: number
    userId: number
  }

  export type PairUpdateWithoutSessionInput = {
    giver?: UserUpdateOneRequiredWithoutGivenPairsNestedInput
    receiver?: UserUpdateOneRequiredWithoutReceivedPairsNestedInput
  }

  export type PairUncheckedUpdateWithoutSessionInput = {
    id?: IntFieldUpdateOperationsInput | number
    giverId?: IntFieldUpdateOperationsInput | number
    receiverId?: IntFieldUpdateOperationsInput | number
  }

  export type PairUncheckedUpdateManyWithoutSessionInput = {
    id?: IntFieldUpdateOperationsInput | number
    giverId?: IntFieldUpdateOperationsInput | number
    receiverId?: IntFieldUpdateOperationsInput | number
  }

  export type UnmatchedUserUpdateWithoutSessionInput = {
    user?: UserUpdateOneRequiredWithoutUnmatchedSessionsNestedInput
  }

  export type UnmatchedUserUncheckedUpdateWithoutSessionInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type UnmatchedUserUncheckedUpdateManyWithoutSessionInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}