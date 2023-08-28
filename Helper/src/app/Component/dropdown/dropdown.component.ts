import { Component, Input } from '@angular/core';
import {trigger,state,transition, animation, style, animate} from '@angular/animations';
import { Building, Floor } from 'src/app/app.component';



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
  @Input() maxSelect: number=1000; 

toggle:string = "block";
optionTitle:string="Select From Below";
keyString: "buildingName" | "floorName"="buildingName";

arrowstate: 'arrowDown'|'arrowUp' = 'arrowUp';
Checkboxstatus:boolean=false;
selectedCount:number =0;

ngOnInit(): void {
  if(this.locationType == "Building") this.keyString = "buildingName";
  else if(this.locationType == "Floor") this.keyString = "floorName";
  this.setOptionTitle()

  switch (this.locationType) {
    case "Building":
      this.keyString = "buildingName"; 
      break;
    
    case "Floor":
      this.keyString = "floorName";
      break;
      
    default:
      break;
  }
}


OptionList=[
  { label: 'Option 1', name: 'option1', value: 'value1' },
  { label: 'Option 2', name: 'option2', value: 'value2' },
  { label: 'Option 3', name: 'option3', value: 'value3' }
]

optionClick(optionValue:Building | Floor, event:any){
  this.locationArray[this.locationArray.indexOf(optionValue)].isChecked = event.target.checked;

  console.log(optionValue);
  this.setOptionTitle();
  
}
setOptionTitle(){
  let selectdArray = this.locationArray.filter((x: { isChecked: boolean; })=>x.isChecked == true);
  this.optionTitle = selectdArray.length == 0 ? "Select "+ this.locationType : selectdArray.length == 1 ? selectdArray[0][this.keyString] : 'Multiple Selected';
  this.selectedCount = selectdArray.length;
}

maxlimit(item:Building | Floor):boolean{

  if(this.selectedCount >= this.maxSelect && item.isChecked==false){

    return true;
  }
    return false;
  
}

toggleClick(){
  this.toggle==="block"? this.toggle="none":this.toggle="block";
  this.arrowstate === "arrowDown" ? this.arrowstate="arrowUp" : this.arrowstate ="arrowDown";
}

}


