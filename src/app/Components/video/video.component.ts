import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { User } from 'src/store/user.reducer';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
})
export class VideoComponent implements AfterViewInit {
  @ViewChild('video') vidRef!: ElementRef;
  video!: HTMLVideoElement;

  constructor() {}

  ngAfterViewInit(): void {
    this.video = this.vidRef.nativeElement;
    const user = localStorage.getItem('user');
    if (user) {      
      this.video.currentTime = (JSON.parse(user) as User).videoTime;
    }

    setInterval(() => {
      if (!user || !this.video || this.video.paused) return;
      localStorage.setItem(
        'user',
        JSON.stringify({
          ...JSON.parse(user),
          videoTime: this.video.currentTime,
        })
      );
    }, 2000);
  }

  play(): void {
    if (!this.video) return;
    this.video.play();
  }
  pause(): void {
    if (!this.video) return;
    this.video.pause();
  }
  stop(): void {
    if (!this.video) return;
    this.video.pause();
    this.video.currentTime = 0;
  }
  seek(time: number): void {
    if (!this.video) return;
    this.video.currentTime = time;
  }

  log(d: any) {
    console.log((d as HTMLVideoElement).currentTime);
  }

  togglePlay(): void {
    if (this.video.paused) {
      this.video.play();
    } else {
      this.video.pause();
    }
  }
}
