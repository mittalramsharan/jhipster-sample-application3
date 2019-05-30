import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  JhipsterSampleApplication3SharedLibsModule,
  JhipsterSampleApplication3SharedCommonModule,
  JhiLoginModalComponent,
  HasAnyAuthorityDirective
} from './';

@NgModule({
  imports: [JhipsterSampleApplication3SharedLibsModule, JhipsterSampleApplication3SharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [JhipsterSampleApplication3SharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterSampleApplication3SharedModule {
  static forRoot() {
    return {
      ngModule: JhipsterSampleApplication3SharedModule
    };
  }
}
