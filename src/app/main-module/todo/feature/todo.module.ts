import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TodoRoutingModule} from './todo-routing.module';
import {TodoListComponent} from './todo-list/todo-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PaginatorModule} from '../../../shared/tools/paginator/paginator.module';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { DetailVideoComponent } from './detail-video/detail-video.component';
import {MatCardModule} from '@angular/material/card';
import {ConvertTimePipe} from "../../../shared/helper/pipe/convert-time.pipe";




@NgModule({
    declarations: [TodoListComponent, DetailVideoComponent, ConvertTimePipe],
    imports: [
        CommonModule,
        TodoRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        PaginatorModule,
        MatIconModule,
        MatButtonModule,
        MatMenuModule,
        MatCardModule
    ]
})
export class TodoModule {
}
