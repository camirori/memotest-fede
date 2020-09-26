import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {LayoutModule} from '@angular/cdk/layout';


const MaterialComponents = [
  MatButtonModule,		
  MatGridListModule,
  LayoutModule,
]
@NgModule({
imports: [ MaterialComponents ],		
exports: [ MaterialComponents ]
})

export class MaterialModule { }
