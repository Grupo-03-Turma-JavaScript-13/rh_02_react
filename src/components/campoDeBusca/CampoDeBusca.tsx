type CampoDeBuscaProps = {
  textoBuscaDigitado: string;
  handleBusca: (valor: string) => void;
};

const CampoDeBusca = ({ textoBuscaDigitado, handleBusca }: CampoDeBuscaProps) => {
  return (
    <div className="w-full flex justify-center my-8">
      <div className="relative w-full max-w-3xl">

        <img
          src="/img/lupa.png"
          alt="icone de busca"
          className="absolute left-4 top-1/2 -translate-y-1/2 w-5 opacity-60"
        />

        <input
          type="text"
          value={textoBuscaDigitado}
          onChange={(event) => handleBusca(event.target.value)}
          placeholder="Pesquise por nome, email, matrícula, cargo ou data de admissão/demissão..."
          className="
            w-full
            pl-12 pr-4 py-3
            rounded-xl
            border border-gray-300
            shadow-sm
            outline-none
            focus:ring-2 focus:ring-indigo-700
            focus:border-indigo-770
            transition
          "
        />
      </div>
    </div>
  );
};

export default CampoDeBusca;