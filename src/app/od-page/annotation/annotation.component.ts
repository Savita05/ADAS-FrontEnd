import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../services/api.service";
@Component({
  selector: 'app-annotation',
  templateUrl: './annotation.component.html',
  styleUrls: ['./annotation.component.scss']
})
export class AnnotationComponent implements OnInit {
  public search:any = '';
  constructor(private api: ApiService) { }
object_Category=[{
colorbox:"pink",Category:'Ignore', count:0
},
{
  colorbox:"green",Category:'Motor Bike', count:2
  },{
    colorbox:"red",Category:'Passenger', count:1
    },{
      colorbox:"pink",Category:'Pedestrain', count:3
      },{
        colorbox:"pink",Category:'Vehicle', count:4
        }]
  ngOnInit() {
    this.Get_login_details();
    this.GetObjectLevel();
    this.GetSceneLevel();
  }
  current_user:any;
  Object_class:any;
  Scene_level: any;
  Get_login_details():void {
    this.api.Currentuser.subscribe((results) => {
      this.current_user = results;
      console.log(this.current_user,"##")
    });
  }
  GetObjectLevel():void {
    this.api.GetObjectLevels().subscribe((results) => {
      this.Object_class = results;
      console.log(this.Object_class,"##")
    });
  }
  GetSceneLevel():void {
    this.api.GetSceneLevels().subscribe((results) => {
      this.Scene_level = results;
      console.log(this.Scene_level,"##")
    });
  }

}
