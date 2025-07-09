import { Component, OnInit } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MenubarModule, HeaderComponent, FooterComponent,ButtonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  items: MenuItem[] | undefined;

  ngOnInit(): void {
    this.items = [
      { label: 'Home', icon: 'pi pi-home' },
      { label: 'Sobre', icon: 'pi pi-info-circle' }
    ];

  }

}
