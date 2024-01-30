import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { HttpOptions } from "../../../domain/model/structures/api.dto";

export class HttpApiBase {

    constructor(private http: HttpClient) { }

    protected get<T>(url: string, options?: HttpOptions): Observable<T> {
        return this.http.get<T>(url, options);
    }

    protected post<T>(
        url: string,
        body: string,
        options?: HttpOptions
    ): Observable<T> {
        return this.http.post<T>(url, JSON.parse(body), options);
    }

    protected put<T>(
        url: string,
        body?: string,
        options?: HttpOptions
    ): Observable<T> {
        return this.http.put<T>(url, body && JSON.parse(body), options);
    }

}