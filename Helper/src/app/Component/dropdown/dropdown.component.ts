import { Component, Input } from '@angular/core';
import {trigger,state,transition, animation, style, animate} from '@angular/animations';


@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
  animations:[

  trigger('arrowAnimation',[
    state('arrowUp',style({
      transform: 'rotate(180deg)',


    })),
    state('arrowDown',style({
      transform: 'rotate(0deg)'
    })),
    transition('arrowUp=>arrowDown',[
      animate('.3s')
    ]),
    transition('arrowDown => arrowUp',[
      animate('.3s')
    ])
  ])]
})
export class DropdownComponent {
  @Input({required:true}) locationType: "Building" | "Floor" | null=null;
  @Input() locationArray: any= [];

toggle:string = "block";
optionTitle:string="Select From Below";
keyString: "buildingName" | "floorName"="buildingName";

arrowstate: 'arrowDown'|'arrowUp' = 'arrowUp';

ngOnInit(): void {
  if(this.locationType == "Building") this.keyString = "buildingName";
  else if(this.locationType == "Floor") this.keyString = "floorName";
  
  console.log(this.keyString , this.locationType);

}


OptionList=[
  { label: 'Option 1', name: 'option1', value: 'value1' },
  { label: 'Option 2', name: 'option2', value: 'value2' },
  { label: 'Option 3', name: 'option3', value: 'value3' }
]

optionClick(optionValue:any, event:any){
  this.locationArray[this.locationArray.indexOf(optionValue)].isChecked = event.target.checked;
  console.log(optionValue);
  
}

toggleClick(){
  this.toggle==="block"? this.toggle="none":this.toggle="block";
  this.arrowstate === "arrowDown" ? this.arrowstate="arrowUp" : this.arrowstate ="arrowDown";
}

}


