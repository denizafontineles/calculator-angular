import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorComponent } from './calculator';
import { CalculatorService } from './service';

@NgModule({
  declarations: [CalculatorComponent],
  imports: [
    CommonModule
  ],
  exports: [CalculatorComponent],
  providers: [CalculatorService],
})
export class CalculatorModule { }
