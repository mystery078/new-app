import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
    providedIn: 'root'
})
export class YoutubeService {

    apiKey: string = 'AIzaSyBcZf3RPnvYNiftz6uitoEFVBZuY2OHhcI';

    constructor(public http: HttpClient) { }
    getVideosForChanel(channel, maxResults): Observable<Object> {
        let url = 'https://www.googleapis.com/youtube/v3/playlistItems?key=' + this.apiKey + '&playlistId=' + channel + '&order=date&part=snippet&type=video,id&maxResults=' + maxResults
        return this.http.get(url).pipe(map(res => res))
    }
}
