import { Component, OnInit } from '@angular/core';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { firstValueFrom } from 'rxjs';
import { FooterComponent } from "../../components/footer/footer.component";
import { HeaderComponent } from "../../components/header/header.component";
import { RegistroTempo } from '../../model/registroTempo';
import { CronometroService } from '../../service/cronometroService.service';


@Component({
  selector: 'app-resultado',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, TableModule, InputTextModule, IconFieldModule, InputIconModule],
  templateUrl: './resultado.component.html',
  styleUrl: './resultado.component.css'
})
export class ResultadoComponent implements OnInit {

  registrotempo!: RegistroTempo[];

  constructor(
    private cronometroService: CronometroService
  ) { }

  ngOnInit(): void {

    this.listarResultados();
  }

  async listarResultados() {
    this.registrotempo = await firstValueFrom(this.cronometroService.listarTempos());
    console.log(this.registrotempo);
  }

}
