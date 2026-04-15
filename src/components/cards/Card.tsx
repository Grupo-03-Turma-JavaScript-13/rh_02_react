type colaborador = {
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

type CardsProps = {
  colaborador: colaborador;
};

const Cards = ({ colaborador }: CardsProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">

      {/* FOTO */}
      <div className="bg-indigo-700 flex justify-center p-6">
        <img
          src={colaborador.imagem}
          alt={colaborador.nome}
          className="w-28 h-28 object-cover rounded-full border-4 border-white shadow-lg"
        />
      </div>

      {/* INFORMAÇÕES */}
      <div className="p-6 text-center space-y-1">
        <h3 className="text-xl font-bold text-gray-800">
          {colaborador.nome}
        </h3>

        <p className="text-indigo-700 font-semibold">
          {colaborador.cargo}
        </p>

        <div className="text-sm text-gray-600 mt-3 space-y-1">
          <p><strong>Matrícula:</strong> {colaborador.matricula}</p>
          <p><strong>E-mail:</strong> {colaborador.email}</p>
          <p>
            <strong>Admissão:</strong>{" "}
            {colaborador.admissao
              ? colaborador.admissao.toLocaleDateString()
              : ""}
          </p>
          <p>
            <strong>Demissão:</strong>{" "}
            {colaborador.demissao
              ? colaborador.demissao.toLocaleDateString()
              : "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;