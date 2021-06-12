import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TodoListComponent} from './todo-list/todo-list.component';
import {DetailVideoComponent} from './detail-video/detail-video.component';



const routes: Routes = [
    {path: '', component: TodoListComponent },
    {path: 'detailVideo', component: DetailVideoComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TodoRoutingModule {
}
