import { Component, ViewChild } from '@angular/core';
import { SlickCarouselComponent } from 'ngx-slick-carousel';
import { NgxSpinnerService } from 'ngx-spinner';
import { takeUntil } from 'rxjs/operators';
import { YoutubeService } from './services/youtube.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    constructor(
        private spinner: NgxSpinnerService,
        private youTubeService: YoutubeService
    ) { }
    @ViewChild('slickModal', { static: true }) slickModal1: SlickCarouselComponent;
    videos = []
    flag = false;
    currentSrc = ''
    currentVideo
    ngOnInit() {
        this.spinner.show()
        setTimeout(() => {
            this.spinner.hide()
        }, 3000)
        this.videos = [];
        this.youTubeService
            .getVideosForChanel('PLJG88vPgXIoRfEMTOuo_UEDphhu_oVKWG', 35)
            .subscribe(lista => {
                for (let element of lista["items"]) {
                    this.videos.push(element)
                }
                if (this.videos && this.videos[0]) {
                    this.currentSrc = `https://www.youtube.com/embed/${this.videos[0]['snippet'].resourceId.videoId}?autoplay=1&origin=http://example.com`
                    this.currentVideo = this.videos[0].snippet
                }
                this.flag = true;
            });
    }

    changeVideo(video) {
        this.currentSrc = `https://www.youtube.com/embed/${video.resourceId.videoId}?autoplay=1&origin=http://example.com`;
        this.currentVideo = video
    }
    
    slideConfig = { "slidesToShow": 4, "slidesToScroll": 4, "vertical": true, "verticalSwiping": true, "arrows": false };

    // addSlide() {
    //     this.slides.push({ img: "http://placehold.it/350x150/777777" })
    // }

    // removeSlide() {
    //     this.slides.length = this.slides.length - 1;
    // }

    // slickInit(e) {
    //     console.log('slick initialized');
    //     console.log(this.slickModal1)
    // }

    // breakpoint(e) {
    //     console.log('breakpoint');
    // }

    // afterChange(e) {
    //     console.log('afterChange');
    // }

    // beforeChange(e) {
    //     console.log('beforeChange');
    // }
}
