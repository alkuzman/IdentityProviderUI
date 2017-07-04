import {NgModule} from "@angular/core";
import { UserImagePipesModule } from './user-image-pipes/user-image-pipes.module';
import { StringPipesModule } from './string-pipes/string-pipes.module';

@NgModule({
  imports: [StringPipesModule],
  declarations: [],
  exports: [UserImagePipesModule]
})
export class CustomPipesModule {
}
