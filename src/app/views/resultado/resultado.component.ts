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
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { log } from 'console';


@Component({
  selector: 'app-resultado',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, TableModule, InputTextModule, IconFieldModule, InputIconModule, CalendarModule, FormsModule],
  templateUrl: './resultado.component.html',
  styleUrl: './resultado.component.css'
})
export class ResultadoComponent implements OnInit {

  registrotempo!: RegistroTempo[];
  registrotempoFiltrado: RegistroTempo[] = [];

  rangeDates: Date[] = [];
  dataInicio!: any;
  dataFim!: any;

  constructor(
    private cronometroService: CronometroService
  ) { }

  ngOnInit(): void {

    this.listarResultados();
  }

  async listarResultados() {
    this.registrotempo = await firstValueFrom(this.cronometroService.listarTempos());
    this.registrotempoFiltrado = [...this.registrotempo];
    console.log(this.registrotempo);
  }

  filtrarPorData(): void {
    const [inicio, fim] = this.rangeDates;

    if (!inicio || !fim) {
      this.registrotempoFiltrado = [...this.registrotempo];
      return;
    }

  const dataInicioStr = this.formatDate(inicio);
  const dataFimStr = this.formatDate(fim);

  console.log(dataInicioStr);
  console.log(dataFimStr);
  this.registrotempoFiltrado = this.registrotempo.filter((registro) => {
    return registro.data >= dataInicioStr && registro.data <= dataFimStr;
  });
  console.log(this.registrotempoFiltrado);

  }

  limparFiltro(): void {
  this.rangeDates = [];
  this.registrotempoFiltrado = [...this.registrotempo];
}


formatDate(date: Date): string {
  return date.toISOString().split('T')[0];
}


}
