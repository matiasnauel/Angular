import { NgModule } from "@angular/core";
import {MatDatepickerModule} from "@angular/material/datepicker"
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from "@angular/material/input"
import {MatIconModule} from "@angular/material/icon"
import {MatCardModule} from "@angular/material/card"
import {MatGridListModule} from "@angular/material/grid-list"
import { MatButtonModule } from "@angular/material/button";
import { MatNativeDateModule } from "@angular/material/core";
import { ReactiveFormsModule } from "@angular/forms";
import {MatSidenavModule} from "@angular/material/sidenav"
@NgModule({
    exports:[
        MatDatepickerModule,
        MatNativeDateModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatCardModule,
        MatGridListModule,
        MatButtonModule,
        ReactiveFormsModule,
        MatSidenavModule
        
        
    ],
    providers:[
        MatDatepickerModule,
        MatNativeDateModule
    ]
})

export class MaterialToolsModule {};
