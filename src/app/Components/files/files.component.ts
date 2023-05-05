import { Component } from '@angular/core';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.scss'],
})
export class FilesComponent {
  files: File[] = [];

  handleInput(target: HTMLInputElement): void {
    const fl = target.files;
    if (!fl?.length) {
      return;
    }
    let arr: File[] = [];
    for (let a = 0; a < fl.length; a++) {
      arr.push(fl[a]);
    }
    this.addFiles(arr);
  }

  addFiles(fl: File[]): void {
    this.files.push(...fl);
  }

  removeFile(index: number): void {
    const fl = this.files.filter((file: File, i: number) => i !== index);
    this.files = fl;
  }

  handleDrop(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    if (!event.dataTransfer) return;
    const fl = event.dataTransfer.files;
    if (!fl?.length) {
      return;
    }
    let arr: File[] = [];
    for (let a = 0; a < fl.length; a++) {
      arr.push(fl[a]);
    }
    this.addFiles(arr);
  }
}
