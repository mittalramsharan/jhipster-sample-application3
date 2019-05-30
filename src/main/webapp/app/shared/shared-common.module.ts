import { NgModule } from '@angular/core';

import { JhipsterSampleApplication3SharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [JhipsterSampleApplication3SharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [JhipsterSampleApplication3SharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class JhipsterSampleApplication3SharedCommonModule {}
