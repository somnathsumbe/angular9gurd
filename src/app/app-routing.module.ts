import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AdminComponent } from "./admin/admin.component";
import { MarchentComponent } from "./marchent/marchent.component";
import { CustomerComponent } from "./customer/customer.component";
import { AddcustomerComponent } from "./addcustomer/addcustomer.component";
import { EditcustomerComponent } from "./editcustomer/editcustomer.component";
import { AuthGuard } from "./auth.guard";
import { ChildGuard } from './child.guard';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "admin", component: AdminComponent, canActivate: [AuthGuard] },
  { path: "marchent", component: MarchentComponent },

  {
    path: "customer",
    children: [
      { path: '', component: CustomerComponent, pathMatch: "full" },
      {
        path: '', canActivateChild: [ChildGuard],
        children: [
          { path: "add", component: AddcustomerComponent },
          { path: "edit", component: EditcustomerComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
