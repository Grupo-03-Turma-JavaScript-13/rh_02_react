



type cargosProps = {
    handleFiltro: (cargo: string) => void;
    handleLimparBusca: (valor: string) => void;
    botaoClicado: string;
};


const Navbar = ({
    handleFiltro,
    handleLimparBusca,
}: cargosProps) => {
    return (
        <div
            className="w-full flex justify-center py-4
            			   bg-indigo-800 text-white"
        >
            <div className="container flex justify-between text-lg mx-8">
                <h1 className="font-bold">River RH</h1>
                <nav>
                    <ul className="flex gap-4">
                        <button

                            onClick={() => handleLimparBusca("Sim")}
                        >
                            Ativos
                        </button>

                        <button

                            onClick={() => handleFiltro("Não")}
                        >
                            Demitidos
                        </button>

                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar