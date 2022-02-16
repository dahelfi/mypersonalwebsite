import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-front-section',
  templateUrl: './front-section.component.html',
  styleUrls: ['./front-section.component.scss']
})
export class FrontSectionComponent implements OnInit {


  images = ['jumpingpicture.jpeg','pexels-pixabay-270366.jpg','IMG_0037.jpg'];
  speaches = ['I am Daniel Helfenstein A Front End Developer','Coding is my passion','Graduated at Ostfalia University'];
  speechesLittle = ['Challange me!','I love to create something new','already in my business informatics masters degree'];
  currentImage = 0;
  showImage = true;
  constructor() { }

  ngOnInit(): void {
    this.updateImage();
  }

  updateImage(){
    setInterval(() =>{
      this.currentImage++;
      this.currentImage = this.currentImage % this.images.length;
      this.showImage = false;

      setTimeout(() =>{
        this.showImage = true;
      },20)
    }, 5000);
  }

}
