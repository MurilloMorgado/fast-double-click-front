# FastDoubleClickFront

Este projeto foi gerado com [Angular CLI](https://github.com/angular/angular-cli) versão 17.3.17.

## Servidor de Desenvolvimento

Execute  `ng serve` para iniciar o servidor de desenvolvimento. Acesse `http://localhost:4200/`. A aplicação será recarregada automaticamente se você alterar qualquer um dos arquivos de origem.

## Requisitos para Testes

Além de rodar o frontend, é necessário ter o back-end em funcionamento. O código do back-end está disponível neste repositório: https://github.com/MurilloMorgado/fast-double-click . Certifique-se de que o back-end esteja rodando para realizar os testes completos.

## Descrição do Projeto

O FastDoubleClickFront é uma aplicação web que permite ao usuário iniciar um cronômetro e, ao pausá-lo, enviar o tempo gerado juntamente com a data atual para o back-end. O back-end, por sua vez, salva essas informações em um arquivo .json e as disponibiliza para visualização na tela de resultados.

## Funcionalidades Implementadas

Iniciar e Pausar Cronômetro: O usuário pode iniciar e pausar o cronômetro.

Salvar Tempo: Ao pausar, o tempo é enviado para o back-end e armazenado em um arquivo .json.

Exibir Resultados: Os tempos salvos podem ser visualizados na tela de resultados.

## Back-end

O projeto inclui dois controladores no back-end:

Controller para salvar o tempo: Responsável por gravar os tempos no arquivo .json.

Controller para listar os tempos salvos: Permite que os tempos salvos sejam recuperados e exibidos na interface do usuário.

## Considerações Técnicas
Embora o projeto tenha a capacidade de utilizar um banco de dados H2, o desafio focou em salvar as informações diretamente em um arquivo .json dentro do próprio projeto. Por isso, o banco de dados H2 não foi utilizado.
