type cargosProps = {
    handleFiltro: (cargo: string) => void;
    handleLimparBusca: (valor: string) => void;
    botaoClicado: string;
};

const Navbar = ({ handleFiltro, handleLimparBusca }: cargosProps) => {
    return (
        <div className="w-full bg-indigo-800 text-white shadow-md">
            <div className="container mx-auto px-8 py-4 flex items-center justify-between">

                {/* LOGO + TITULO */}
                <div className="flex items-center gap-3">
                    <img
                        src="/img/river_rh_logo.png"
                        alt="Logo River RH"
                        className="w-50 h-20 object-cover"
                    />
                </div>

                <h1 className="absolute left-1/2 -translate-x-1/2 text-2xl font-bold hidden md:block">
                    Painel de Colaboradores
                </h1>

                {/* BOTÕES */}
                <nav>
                    <div className="flex gap-4">
                        <button
                            onClick={() => handleLimparBusca("Sim")}
                            className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition"
                        >
                            Ativos
                        </button>

                        <button
                            onClick={() => handleFiltro("Não")}
                            className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition"
                        >
                            Desligados
                        </button>
                    </div>
                </nav>

            </div>
        </div>
    );
};

export default Navbar;