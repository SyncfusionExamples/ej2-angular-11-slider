import { Component } from '@angular/core';
import { TicksDataModel, TooltipDataModel} from '@syncfusion/ej2-angular-inputs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular11Slider-app';
  tooltip: TooltipDataModel = { isVisible: true }
  ticks: TicksDataModel = {

    placement: 'Both', largeStep: 20,

    showSmallTicks: true, smallStep: 10

  }
}
