import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

import {Observable} from 'rxjs';

import {RestOptions} from '../../../_base/model/rest-options';
import {
    DEFAULT_HTTP_HEADERS,
    TOKEN_CACHE_KEY,
    TOKEN_HEADER_NAME,
    TOKEN_PREFIX
} from '../../../_base/model/rest-constants';

export class BaseService {
    prefixPath: 'https://www.aparat.com/etc/api';
    private token: string | undefined;

    constructor(public http: HttpClient) {
    }


    get(suffixPath: string, options?: RestOptions): Observable<any> {
        return this.http.get('https://www.aparat.com/etc/api' + suffixPath, this.getOption(options));
    }

    post(suffixPath: string, body: any, options?: RestOptions): Observable<any> {
        return this.http.post(this.prefixPath + suffixPath, body, this.getOption(options));
    }

    put(suffixPath: string, body: any, options?: RestOptions): Observable<any> {
        return this.http.put(this.prefixPath + suffixPath, body, this.getOption(options));
    }

    delete(suffixPath: string, options?: RestOptions): Observable<any> {
        return this.http.delete(this.prefixPath + suffixPath, this.getOption(options));
    }


    private getOption(options?: RestOptions): any {
        // Default values
        if (options === null || options === undefined) {
            options = RestOptions.newInstance();
        }
        if (options.needToken === null || options.needToken === undefined) {
            options.needToken = true;
        }
        const httpParams: HttpParams = new HttpParams({fromObject: options.params});
        const httpHeaders: HttpHeaders = this.getHeader(options);
        return {
            headers: httpHeaders ? httpHeaders : null,
            params: httpParams ? httpParams : null
        };
    }


    private getHeader(options: RestOptions): HttpHeaders {
        this.token = localStorage.getItem(TOKEN_CACHE_KEY);
        let result = new HttpHeaders();
        if (options.headers === null || options.headers === undefined) {
            result = DEFAULT_HTTP_HEADERS;
        } else {
            if (options.replaceOrAppendHeader === null || options.replaceOrAppendHeader === undefined) {
                result = DEFAULT_HTTP_HEADERS;
            } else if (options.replaceOrAppendHeader) {
                result = new HttpHeaders(options.headers);
            } else if (!options.replaceOrAppendHeader) {
                result = DEFAULT_HTTP_HEADERS;
                for (const key of new HttpHeaders(options.headers).keys()) {
                    const h = new HttpHeaders(options.headers).getAll(key);
                    if (h !== null) {
                        result = result.append(key, h);
                    }
                }
            }
        }
        if (options.needToken !== null && options.needToken !== undefined && options.needToken) {

            if (options.tokenKey !== null && options.tokenKey !== undefined && options.tokenKey.length > 1) {
                result = result.append(TOKEN_HEADER_NAME, TOKEN_PREFIX + localStorage.getItem(options.tokenKey));
                result.set(TOKEN_HEADER_NAME, TOKEN_PREFIX + localStorage.getItem(options.tokenKey));
            } else {
                result = result.append(TOKEN_HEADER_NAME, TOKEN_PREFIX + this.token);
            }
        }
        return result;
    }
}

