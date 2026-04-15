import { colaboradors, type colaborador } from "../data/Data";

// retorna todos os colaboradores
export const retornarcolaboradors = (): colaborador[] => {
  return colaboradors;
};

// 🔎 busca por texto digitado (ativos + demitidos)
export const buscarcolaborador = (textoDigitado: string): colaborador[] => {
  const texto = textoDigitado.toLowerCase();

  return colaboradors.filter((colaborador) =>
    colaborador.nome.toLowerCase().includes(texto) ||
    colaborador.email.toLowerCase().includes(texto) ||
    colaborador.matricula.toString().includes(texto) ||
    colaborador.cargo.toLowerCase().includes(texto) ||
    colaborador.ativo.toLowerCase().includes(texto) ||
    colaborador.admissao.toLocaleDateString().includes(texto) ||
    (colaborador.demissao && colaborador.demissao.toLocaleDateString().includes(texto))
  );
};

// filtrar por cargo (mantido)
export const filtrarcolaboradors = (cargo: string): colaborador[] => {
  return colaboradors.filter((colaborador) => colaborador.cargo === cargo);
};

// lista pronta (mantido)
export const colaboradorsEntradas: colaborador[] = filtrarcolaboradors("Scrum Master");



/* 🟢 NOVAS FUNÇÕES (RH) */

// apenas colaboradores ATIVOS (home padrão)
export const colaboradoresAtivos = (): colaborador[] => {
  return colaboradors.filter((c) => c.ativo === "Sim");
};

// apenas DEMITIDOS (botão navbar)
export const colaboradoresDemitidos = (): colaborador[] => {
  return colaboradors.filter((c) => c.ativo === "Não");
};

// filtro genérico por status (Sim / Não)
export const filtrarPorStatus = (status: string): colaborador[] => {
  return colaboradors.filter((c) => c.ativo === status);
};