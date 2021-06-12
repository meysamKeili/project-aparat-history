import {Component, Input, OnInit} from '@angular/core';
import {TodoDto} from "../../model/modelToDoDto";
import {TodoService} from "../../../../shared/service/todo.service";
import {Subscription} from "rxjs";

@Component({
    selector: 'app-detail-video',
    templateUrl: './detail-video.component.html',
    styleUrls: ['./detail-video.component.scss']
})
export class DetailVideoComponent implements OnInit {
    @Input() videoDetail = new TodoDto.Video();
    commentByVideoSubscription: Subscription;
    commantList: any[] = [];

    constructor(private todoService: TodoService) {
    }

    ngOnInit() {
    }


    getListCategory() {
        this.commentByVideoSubscription = this.todoService.getCommentByVideos().subscribe((res: any) => {
            if (res) {
                this.commantList = res.categories;
            }
        }, error => {

        });
    }

    routeFreamOnNewTab() {
        window.open(this.videoDetail.frame);
    }
}
