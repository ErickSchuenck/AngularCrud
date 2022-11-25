import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { ModalComponent } from 'src/app/shared/modal/modal.component';

export interface Clinica {
  id: number;
  nome: string;
  cnpj: string;
  especialidade: string;
  telefone: string;
  cep: string;
  endereco: string;
  numero: any;
  bairro: string;
  cidade: string;
  estado: string;
  status: string;
  preco: number;
  atendimento: object;
}

const ELEMENT_DATA: Clinica[] = [
  {
    id: 1,
    nome: 'Clinica Abc',
    cnpj: '56.591.338/0001-10',
    especialidade: 'Exames Laboratoriais',
    telefone: '(22) 1234-4567',
    cep: '15430-970',
    endereco: 'Avenida Quatro',
    numero: '290',
    bairro: 'Centro',
    cidade: 'Altair',
    estado: 'SP',
    status: 'Ativo',
    preco: 100.0,
    atendimento: {
      inicio: '09:00',
      fim: '17:00',
    },
  },
  {
    id: 2,
    nome: 'Ortomed',
    cnpj: '67718416000110',
    especialidade: 'Ortopedia',
    telefone: '3315863258',
    cep: '13525970',
    endereco: 'Rua Vereador Luiz Antonio Mitry Neto',
    numero: 360,
    bairro: 'Centro',
    cidade: 'Águas de São Pedro',
    estado: 'SP',
    status: 'Ativo',
    preco: 150,
    atendimento: {
      inicio: '06:00',
      fim: '20:00',
    },
  },
  {
    id: 3,
    nome: 'Medi Clinicas',
    cnpj: '22.415.807/0001-28',
    especialidade: 'Clinica Geral',
    telefone: '(25)15748596',
    cep: '13775970',
    endereco: 'Praca Santo Antônio',
    numero: 95,
    bairro: 'Barrânia',
    cidade: 'Barrânia',
    estado: 'SP',
    status: 'Inativo',
    preco: 77.5,
    atendimento: {
      inicio: '09:00',
      fim: '20:00',
    },
  },
  {
    id: 4,
    nome: 'Fisiocare',
    cnpj: '14945970',
    especialidade: 'Fisioterapia',
    telefone: '42 1587-4396',
    cep: '14945970',
    endereco: 'Rua Ademar de Barros',
    numero: 394,
    bairro: 'Cambaratiba',
    cidade: 'Cambaratiba',
    estado: 'SP',
    status: 'Ativo',
    preco: 147.85,
    atendimento: {
      inicio: '08:00',
      fim: '17:00',
    },
  },
  {
    id: 5,
    nome: 'FISIOMED',
    cnpj: '36.480.001/0001-28',
    especialidade: 'Fisioterapia',
    telefone: '(11) 1827-6456',
    cep: '08430-860',
    endereco: 'Rua Balandia',
    numero: 12,
    bairro: 'Jardim Moreno',
    cidade: 'São Paulo',
    estado: 'São Paulo',
    status: 'Inativo',
    preco: 175,
    atendimento: {
      inicio: '06:00',
      fim: '20:00',
    },
  },
  {
    id: 6,
    nome: 'fisio center',
    cnpj: '19.256.606/0001-10',
    especialidade: 'fisioterapia',
    telefone: '115854-8596',
    cep: '04928210',
    endereco: 'Rua Rampur',
    numero: 25,
    bairro: 'Praia Azul',
    cidade: 'São Paulo',
    estado: 'SP',
    status: 'Ativo',
    preco: 200,
    atendimento: {
      inicio: '06:00',
      fim: '20:00',
    },
  },
  {
    id: 7,
    nome: 'Laborial',
    cnpj: '95.261.818/0001-74',
    especialidade: 'Exames Laboratóriais',
    telefone: '3585214793',
    cep: '65578971',
    endereco: 'Rua Manoel Pereira',
    numero: 179,
    bairro: 'Centro',
    cidade: 'Água Doce do Maranhão',
    estado: 'MA',
    status: 'Ativo',
    preco: 144.9,
    atendimento: {
      inicio: '09:00',
      fim: '17:00',
    },
  },
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  @ViewChild(MatTable)
  table!: MatTable<any>;

  displayedColumns: string[] = [
    'nome',
    'cnpj',
    'especialidade',
    'telefone',
    'cep',
    'endereco',
    'cidade',
    'status',
    'preco',
    'actions',
  ];

  dataSource = ELEMENT_DATA;

  constructor(public dialog: MatDialog) {}
  ngOnInit(): void {}
  openDialog(element: Clinica | null): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '260px',
      data:
        element === null
          ? {
              id: null,
              name: '',
            }
          : element,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result !== undefined) {
        this.dataSource.push(result);
        this.table.renderRows();
      }
    });
  }

  deleteElement(id: number): void {
    this.dataSource = this.dataSource.filter((element) => element.id !== id);
  }
}
