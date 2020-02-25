import { Component, OnInit } from '@angular/core';
import { ChanelService } from 'src/app/service/chanel.service';

@Component({
  selector: 'app-view-chanel',
  templateUrl: './view-chanel.component.html',
  styleUrls: ['./view-chanel.component.css']
})
export class ViewChanelComponent implements OnInit {

  constructor(private chanelService:ChanelService) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll(){
    this.chanelService.getAllChanelDetails().subscribe(response=>{
      console.log("work")
      console.log(response)
    });
  }



}
