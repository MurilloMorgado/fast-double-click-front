import { Component, OnInit } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { ButtonModule } from 'primeng/button';
import { RegistroTempo } from '../../model/registroTempo';
import { CronometroService } from '../../service/cronometroService.service';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MenubarModule, HeaderComponent, FooterComponent, ButtonModule, ToastModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [MessageService]
})
export class HomeComponent implements OnInit {

  isRunning: boolean = false;
  pausedTime: number | null = null;
  timer: any;
  elapsedTime: number = 0;
  items: MenuItem[] | undefined;

  constructor(
    private cronometroService: CronometroService,
    private messageService: MessageService
  ) {}


  ngOnInit(): void {
    this.items = [
      { label: 'Home', icon: 'pi pi-home' },
      { label: 'Sobre', icon: 'pi pi-info-circle' }
    ];

  }

  toggleTimer(): void {
    this.isRunning = !this.isRunning;

    if (this.isRunning) {
      this.timer = setInterval(() => {
        this.elapsedTime++;
        console.log('Tempo atual:', this.formatTime(this.elapsedTime));
      }, 1000);
    } else {
      clearInterval(this.timer);
      this.pausedTime = this.elapsedTime;
      let tempoPausado = this.formatTime(this.pausedTime);
      console.log('Cronômetro pausado em:', tempoPausado);
      this.salvarTempo(tempoPausado);
      this.ngOnDestroy();


    }
  }

  formatTime(totalSeconds: number): string {
    const minutes = Math.floor(totalSeconds / 60).toString().padStart(2, '0');
    const seconds = (totalSeconds % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  }

  ngOnDestroy(): void {
    this.elapsedTime = 0;
  }

  salvarTempo(tempoPausado: string): void {
    const registro: RegistroTempo = {
      tempo: tempoPausado,
      data: new Date().toISOString().split('T')[0]
    };
    console.log(registro);
    this.cronometroService.salvarTempo(registro).subscribe({
      next: () => {
        console.log('Tempo enviado com sucesso ao backend!');
        this.messageService.add({severity: 'success', summary: 'Sucesso', detail: 'Tempo salvo com sucesso!'});
      },
      error: err => {
        console.error('Erro ao salvar tempo:', err);
        this.messageService.add({severity: 'error', summary: 'Erro', detail: 'Falha ao salvar tempo!'});
      }
    });
  }

}
