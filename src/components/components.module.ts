import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { PlCardComponent } from './pl-card/pl-card.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
    declarations: [
        PlCardComponent,
        TopBarComponent,
        SpinnerComponent
    ],
    imports: [
        BrowserModule,
        RouterModule,
    ],
    exports: [
        PlCardComponent,
        TopBarComponent,
        SpinnerComponent
    ],
    providers: [],
bootstrap: []
})
export class ComponentsModule { }
