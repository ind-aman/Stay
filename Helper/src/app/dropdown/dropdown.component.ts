import { Component } from '@angular/core';
import { FormControl} from '@angular/forms';


@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {

toggle:string = "block";
selectdList:myOption[]=[];
optionTitle:string="Select From Below";

OptionList=[
  { label: 'Option 1', name: 'option1', value: 'value1' },
  { label: 'Option 2', name: 'option2', value: 'value2' },
  { label: 'Option 3', name: 'option3', value: 'value3' }
]

optionClick(optionValue:myOption){
  const indexToRemove = this.selectdList.findIndex(option => option.value === optionValue.value);
  
  if (indexToRemove !== -1) {
    this.selectdList.splice(indexToRemove, 1);
  }
  else{
    this.selectdList.push(optionValue);
  }

  if(this.selectdList.length>1) this.optionTitle="Multiple Selected";
  else if(this.selectdList.length==1) this.optionTitle=this.selectdList[0].name;
  else this.optionTitle = "Select From below";
}

toggleClick(){
  this.toggle==="block"? this.toggle="none":this.toggle="block";
}

}

interface myOption{
  label:string;
  name:string;
  value:string;
  
}