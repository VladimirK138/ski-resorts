import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { SkiResortsRoutingModule } from './ski-resorts-routing.module';
import { SkiResortService } from './services/ski-resort.service';
import { SkiResortsComponent } from './ski-resorts.component';
import { SkiResortPanelComponent } from './ski-resort-panel/ski-resort-panel.component';
import { TracksComponent } from './tracks/tracks.component';
import { WeatherComponent } from './weather/weather.component';
import { SkipassComponent } from './skipass/skipass.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    NgbModule.forRoot(),
    FormsModule,
    
    SkiResortsRoutingModule
  ],
  declarations: [
    SkiResortsComponent,
    SkiResortPanelComponent,
    TracksComponent,
    WeatherComponent,
    SkipassComponent
  ],
  providers: [
    SkiResortService
  ]
})
export class SkiResortsModule { }
