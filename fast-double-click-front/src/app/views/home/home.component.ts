import { Component, OnInit } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MenubarModule],
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
