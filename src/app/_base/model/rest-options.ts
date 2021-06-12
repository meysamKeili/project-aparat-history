// tslint:disable-next-line:no-namespace

export class RestOptions {
  constructor() {
  }

  /**
   * Token
   */
  needToken?: boolean;
  tokenKey?: string;
  /**
   * Params
   */
  params?: {
    [param: string]: string | ReadonlyArray<string>;
  };
  /**
   * Headers
   */
  headers?: string | {
    [name: string]: string | string[];
  };
  replaceOrAppendHeader?: boolean; // true replace, false append

  public static newInstance(): RestOptions {
    const ro = new RestOptions();
    ro.needToken = true;
    return ro;
  }
}
