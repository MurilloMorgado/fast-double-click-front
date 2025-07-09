import { Component, OnInit } from '@angular/core';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { FooterComponent } from "../../components/footer/footer.component";
import { HeaderComponent } from "../../components/header/header.component";
import { Product } from '../../provisorio/product';
import { ProductService } from '../../provisorio/productservice';


@Component({
  selector: 'app-resultado',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, TableModule, InputTextModule, IconFieldModule, InputIconModule],
  templateUrl: './resultado.component.html',
  styleUrl: './resultado.component.css'
})
export class ResultadoComponent implements OnInit {

  products!: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {

    this.productService.getProductsMini().then((data) => {
      this.products = data;
    });
  }

}
