import { Component, OnInit } from '@angular/core';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { FooterComponent } from "../../components/footer/footer.component";
import { HeaderComponent } from "../../components/header/header.component";
import { Product } from '../../provisorio/product';
import { ProductService } from '../../provisorio/productservice';
import { CronometroService } from '../../service/cronometroService.service';
import { firstValueFrom } from 'rxjs';
import { RegistroTempo } from '../../model/registroTempo';


@Component({
  selector: 'app-resultado',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, TableModule, InputTextModule, IconFieldModule, InputIconModule],
  templateUrl: './resultado.component.html',
  styleUrl: './resultado.component.css'
})
export class ResultadoComponent implements OnInit {

  products!: Product[];
  registrotempo!: RegistroTempo[];

  constructor(
    private productService: ProductService,
    private cronometroService: CronometroService
  ) { }

  ngOnInit(): void {

    this.productService.getProductsMini().then((data) => {
      this.products = data;
    });
    this.listarResultados();
  }

  async listarResultados() {
    this.registrotempo = await firstValueFrom(this.cronometroService.listarTempos());
    console.log(this.registrotempo);
  }

}
