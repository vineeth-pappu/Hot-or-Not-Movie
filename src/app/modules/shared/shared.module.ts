import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeaderComponent } from "./components/header/header.component";
import { ButtonComponent } from "./components/button/button.component";
import { LogoComponent } from "./components/logo/logo.component";
import { AvatarComponent } from "./components/avatar/avatar.component";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    HeaderComponent,
    ButtonComponent,
    LogoComponent,
    AvatarComponent,
  ],
  imports: [RouterModule, CommonModule, FormsModule],
  providers: [],
  exports: [
    CommonModule,
    FormsModule,
    RouterModule,
    HeaderComponent,
    ButtonComponent,
    LogoComponent,
    AvatarComponent,
  ],
})
export class SharedModule {}
