import { NgModule } from '@angular/core';

import { MatInputModule } from '@angular/material/input';

const material: any = {
  MatInputModule,
};

@NgModule({
  imports: [material],
  exports: [material],
})
export class MaterialModule {}
