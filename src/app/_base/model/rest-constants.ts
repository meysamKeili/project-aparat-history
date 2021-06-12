import {HttpHeaderResponse, HttpHeaders, HttpResponse} from '@angular/common/http';

export const TOKEN_PREFIX = 'Bearer ';
export const TOKEN_HEADER_NAME = 'Authorization';
export const TOKEN_CACHE_KEY = 'TOKEN';
export const DEFAULT_HTTP_HEADERS: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
}
);
