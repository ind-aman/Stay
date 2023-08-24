import { Component } from '@angular/core';

@Component({
  selector: 'app-angular-material-dropdown',
  templateUrl: './angular-material-dropdown.component.html',
  styleUrls: ['./angular-material-dropdown.component.css']
})
export class AngularMaterialDropdownComponent {

  optionHead:string="";

  selectedItem:myOption[]=[];
  OptionList=[
    { label: 'Option 1', name: 'option1', value: 'value1' },
    { label: 'Option 2', name: 'option2', value: 'value2' },
    { label: 'Option 3', name: 'option3', value: 'value3' }
  ]

  optionClick(optionValue:myOption){
      let removeIndex = this.selectedItem.indexOf(optionValue);
      if(removeIndex==-1){
        this.selectedItem.push(optionValue);
      }
      else{
        this.selectedItem.splice(removeIndex,1);
      }

      if(this.selectedItem.length==1) this.optionHead=this.selectedItem[0].name;
      else if(this.selectedItem.length==0) this.optionHead="Select From Below";
      else this.optionHead="Multiple Selected";
  }
}
interface myOption{
  label:string;
  name:string;
  value:string;
  
}
