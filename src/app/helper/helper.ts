import { Injectable } from "@angular/core";
import { ApiService, REQUEST_TYPE_GET, REQUEST_TYPE_PUT, REQUEST_TYPE_POST, REQUEST_TYPE_DELETE } from "../api.service";


@Injectable()
export class Helper {

    constructor(public apiService: ApiService) { }


    public getRequest() {
        return this.apiService.callApiService({
            requestType: REQUEST_TYPE_GET,
            url: `https://reqres.in/api/users`,
            shouldBlock: false,
        });
    }

    public putRequest() {
        return this.apiService.callApiService({
            requestType: REQUEST_TYPE_PUT,
            url: `https://reqres.in/api/users/2`,
            body:JSON.stringify({"name": "morpheus","job": "zion resident"}),
            shouldBlock: false,
        });
    }

    public postRequest() {
        return this.apiService.callApiService({
            requestType: REQUEST_TYPE_POST,
            url: `https://reqres.in/api/users`,
            body:JSON.stringify({"name": "morpheus","job": "leader"}),
            shouldBlock: false,
        });
    }

    public deleteRequest() {
        return this.apiService.callApiService({
            requestType: REQUEST_TYPE_DELETE,
            url: `https://reqres.in/api/users/2`,
            shouldBlock: false,
        });
    }

}