import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  singUp = ""
  singIn = ""
  title = ""
  img = ""
  constructor() {
    this.singUp = "/auth/register"
    this.singIn = "/auth/login"
    this.title = "Medicinal Record"
    this.img ="https://www.nps.org.au/assets/_750x468_crop_center-center_75_none/GettyImages-869862228.jpg"
  }

  ngOnInit(): void {

    console.log(this.title)
  }

}
