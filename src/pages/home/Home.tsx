import type { colaborador } from "../../data/Data";
import Cards from "../../components/cards/Card";
import CampoDeBusca from "../../components/campoDeBusca/CampoDeBusca";

type HomeProps = {
  dadosFiltrados: colaborador[];
  listaDecolaboradors: colaborador[];
  tituloInicio: string;
  tituloGeral: string;
  textoBuscaDigitado: string;
  handleBusca: (texto: string) => void;
};

export default function Home({
  dadosFiltrados,
  listaDecolaboradors,
  tituloInicio,
  tituloGeral,
  textoBuscaDigitado,
  handleBusca,
}: HomeProps) {
  return (
    <>
      <main className="bg-gray-100 min-h-screen p-6">

        {/* 🔎 CAMPO DE BUSCA */}
        <CampoDeBusca
          textoBuscaDigitado={textoBuscaDigitado}
          handleBusca={handleBusca}
        />

        {/* 🟢 RESULTADO DA BUSCA / FILTRO */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">{tituloInicio}</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {dadosFiltrados.map((colaborador) => (
              <Cards key={colaborador.id} colaborador={colaborador} />
            ))}
          </div>
        </section>

        {/* 🔵 LISTA GERAL */}
        <section>
          <h2 className="text-2xl font-bold mb-4">{tituloGeral}</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {listaDecolaboradors.map((colaborador) => (
              <Cards key={colaborador.id} colaborador={colaborador} />
            ))}
          </div>
        </section>

      </main>
    </>
  );
}