import {Component, OnDestroy, OnInit} from '@angular/core';
import {TodoService} from '../../../../shared/service/todo.service';
import {TodoDto} from '../../model/modelToDoDto';
// @ts-ignore
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';
import { FormControl, FormGroup} from '@angular/forms';


@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit, OnDestroy {
    formSearchLanding: FormGroup;

    todoList: TodoDto.Video[] = [];
    typeOfSearch: TodoDto.Type = TodoDto.Type.Category;
    categoryList: TodoDto.Category[] = [];
    Type = TodoDto.Type;

    selectedTodo = new TodoDto.Video();
    loading = false;

    // paganation
    pageSize = 10;
    pageIndex = 0;
    length = null;

    subscriptions = new Subscription();

    constructor(private todoService: TodoService,
                protected router: Router) {
    }

    ngOnInit() {
        this.formSearchLanding =  new FormGroup({
            selectCategory: new FormControl(13),
            inputUserName: new FormControl('alooty'),
            inputTerm: new FormControl('')
        });
        this.getPage();
        this.getListCategory();
    }

    ngOnDestroy(): void {
        this.subscriptions.unsubscribe();
    }


    getPage() {
        this.loading = true;
        switch (this.typeOfSearch) {
            case TodoDto.Type.User: {
                this.subscriptions.add(this.todoService.getPageService(
                    this.pageSize,
                    this.formSearchLanding.value.inputUserName).subscribe((res: any) => {
                        this.loading = false;
                        if (res) {
                            this.todoList = res.videobyuser;
                        }
                    }, error => {
                        this.loading = false;
                    })
                );
                break;
            }
            case TodoDto.Type.Category: {
                this.subscriptions.add(this.todoService.getPageServiceByCategory(
                    this.pageSize,
                    this.formSearchLanding.value.selectCategory).subscribe((res: any) => {
                        this.loading = false;
                        if (res) {
                            this.todoList = res.categoryvideos;
                        }
                    }, error => {
                        this.loading = false;
                    })
                );
                break;
            }
            case TodoDto.Type.Term: {
                this.subscriptions.add(this.todoService.getPageServiceByTerm(
                    this.pageSize,
                    this.formSearchLanding.value.inputTerm).subscribe((res: any) => {
                        this.loading = false;
                        if (res) {
                            this.todoList = res.videobysearch;
                        }
                    }, error => {
                        this.loading = false;
                    })
                );
            }
        }

    }


    getListCategory() {
        this.subscriptions.add(this.todoService.getListCategory().subscribe((res: any) => {
                if (res) {
                    this.categoryList = res.categories;
                }
            }, error => {

            })
        );
    }


    navigate(event: any) {
        // this.length = event.length;
        // this.pageIndex = event.pageIndex;
        this.pageSize = event.pageSize;
        this.getPage();
    }

}
