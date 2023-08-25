import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Helper';


  buildingArray:Building[] = [
    { buildingId: "id1", buildingName: "Building 1", isChecked: false },
    { buildingId: "id2", buildingName: "Building 2", isChecked: false },
    { buildingId: "id3", buildingName: "Building 3", isChecked: true },
    { buildingId: "id4", buildingName: "Building 4", isChecked: true }
  ];

  floorArray:Floor[] = [
    { floorId: "floor1", floorName: "Floor 1", isChecked: true },
    { floorId: "floor2", floorName: "Floor 2", isChecked: false },
    { floorId: "floor3", floorName: "Floor 3", isChecked: true },
    { floorId: "floor4", floorName: "Floor 4", isChecked: false }
  ];
}

export interface Building{
  buildingId:string;
  buildingName:string;
  isChecked:boolean;
}
export interface Floor{
  floorId:string;
  floorName:string;
  isChecked:boolean;
}