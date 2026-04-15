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
};

export const colaboradors: colaborador[] = [
  {
    id: 1,
    nome: "Josue",
    cargo: "Scrum Master",
    matricula: 11721,
    email: "josue@gmail.com",
    admissao: new Date("2022-05-15"),
    demissao: null,
    imagem: "/img/Josue.jpg",
    ativo: "Sim",
  },
  {
    id: 2,
    nome: "Erick",
    cargo: "Desenvolvedor",
    matricula: 50847,
    email: "erick@gmail.com",
    admissao: new Date("2023-03-1"),
    demissao: null,
    imagem: "/img/Erick_Santana.JPG",
    ativo: "Sim",
  },
  {
    id: 3,
    nome: "Livia",
    cargo: "Desenvolvedor",
    matricula: 29385,
    email: "livia@gmail.com",
    admissao: new Date("2024-01-15"),
    demissao: null,
    imagem: "/img/Livia.png",
    ativo: "Sim",
  },
  {
    id: 4,
    nome: "Renan",
    cargo: "Desenvolvedor",
    matricula: 20926,
    email: "renan@gmail.com",
    admissao: new Date("2025-01-15"),
    demissao: null,
    imagem: "/img/Renan_Soares.JPG",
    ativo: "Sim",
  },
  {
    id: 5,
    nome: "Evelyn",
    cargo: "Desenvolvedor",
    matricula: 21684,
    email: "evelyn@gmail.com",
    admissao: new Date("2026-01-15"),
    demissao: null,
    imagem: "/img/Evelyn_Lamarca.JPG",
    ativo: "Sim",
  },
  {
    id: 6,
    nome: "Matheus",
    cargo: "Desenvolvedor",
    matricula: 23907,
    email: "matheus@gmail.com",
    admissao: new Date("2021-01-15"),
    demissao: null,
    imagem: "/img/Matheus.png",
    ativo: "Sim",
  },

  {
    id: 7,
    nome: "Julia",
    cargo: "Desenvolvedor",
    matricula: 23907,
    email: "julia@gmail.com",
    admissao: new Date("2021-01-15"),
    demissao: new Date("2026-02-15"),
    imagem: "/img/Juliana_Barreto.JPG",
    ativo: "Não",
  },

];