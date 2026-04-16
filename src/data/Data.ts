export type colaborador = {
  id: number;
  nome: string;
  cargo: string;
  matricula: number;
  email: string;
  admissao: Date;
  demissao: null | Date;
  imagem: string;
  ativo: string;
  linkedin?: string;
  isBrand?: boolean;
  icon?:string; 
};

export const colaboradors: colaborador[] = [
  {
    id: 1,
    nome: "Josue Viegas",
    cargo: "Scrum Master",
    matricula: 11721,
    email: "josue@gmail.com",
    admissao: new Date("2022-05-15"),
    demissao: null,
    imagem: "/img/Josue.jpg",
    ativo: "Sim",
    linkedin: "https://www.linkedin.com/in/josue-viegas-desenvolvedor-web/",
    icon: "fa-server",
  },
  {
    id: 2,
    nome: "Erick Santana",
    cargo: "Desenvolvedor",
    matricula: 50847,
    email: "erick@gmail.com",
    admissao: new Date("2023-03-1"),
    demissao: null,
    imagem: "/img/Erick_Santana.JPG",
    ativo: "Sim",
    linkedin:"https://www.linkedin.com/in/erickystn/",
    icon: "fa-cloud",
  },
  {
    id: 3,
    nome: "Livia Campos",
    cargo: "Desenvolvedor",
    matricula: 29385,
    email: "livia@gmail.com",
    admissao: new Date("2024-01-15"),
    demissao: null,
    imagem: "/img/Livia.png",
    ativo: "Sim",
    linkedin:"https://www.linkedin.com/in/livmachado/",
    icon: "fa-code"
  },
  {
    id: 4,
    nome: "Renan Lima",
    cargo: "Desenvolvedor",
    matricula: 20926,
    email: "renan@gmail.com",
    admissao: new Date("2025-01-15"),
    demissao: null,
    imagem: "/img/Renan_Soares.JPG",
    ativo: "Sim",
    linkedin:"https://www.linkedin.com/in/renanferreiralima",
    icon: "fa-database",
  },
  {
    id: 5,
    nome: "Evelyn Lamarca",
    cargo: "Desenvolvedor",
    matricula: 21684,
    email: "evelyn@gmail.com",
    admissao: new Date("2026-01-15"),
    demissao: null,
    imagem: "/img/Evelyn_Lamarca.JPG",
    ativo: "Sim",
    linkedin:"https://www.linkedin.com/in/evelyn-lamarca/" ,
    icon: "fa-shield-halved",
  },
  {
    id: 6,
    nome: "Matheus Bastos",
    cargo: "Desenvolvedor",
    matricula: 23907,
    email: "matheus@gmail.com",
    admissao: new Date("2021-01-15"),
    demissao: null,
    imagem: "/img/Matheus.png",
    ativo: "Sim",
    linkedin:"https://www.linkedin.com/in/matheus-moura-bastos",
    isBrand: true,
    icon: "fa-react",
  },

  {
    id: 7,
    nome: "Julia Barreto",
    cargo: "Desenvolvedor",
    matricula: 23907,
    email: "julia@gmail.com",
    admissao: new Date("2021-01-15"),
    demissao: new Date("2026-02-15"),
    imagem: "/img/Juliana_Barreto.JPG",
    ativo: "Não",
  },

];