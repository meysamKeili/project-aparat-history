import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PaginatorComponent} from './paginator.component';
import {MatPaginatorIntl, MatPaginatorModule} from '@angular/material/paginator';
import {MatPaginatorIntlGerman} from './matPaginatorIntlGerman';

@NgModule({
  declarations: [PaginatorComponent],
  imports: [
    CommonModule,
    MatPaginatorModule
  ],
  exports: [
    PaginatorComponent
  ],
  providers: [
    {
      provide: MatPaginatorIntl,
      useClass: MatPaginatorIntlGerman
    }
  ]
})
export class PaginatorModule {
}
