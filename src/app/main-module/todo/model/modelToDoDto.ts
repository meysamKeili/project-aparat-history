export namespace TodoDto {
    export class Video {
        id: string;
        title: string;
        small_poster: string;
        username: string;
        sender_name: string;
        create_date: string;
        frame: string;
        userid: string;
        visit_cnt: number;
        uid: string;	// uid یکتای ویدیو//
        process: string; // وضعیت ویدیو
        big_poster: string;	// آدرس پوستر سایز بزرگ ویدیو
        duration: number;	// مدت زمان ویدیو با ثانیه
        sdate: string;	// تاریخ ارسال ویدیو
        official: string;	// رسمی بودن یا نبودن
    }

    export class Category {
        id: string;
        name: string;
    }

    export enum Type {
        User,
        Category,
        Term
    }
}
