import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useState } from "react";
import "./App.css";

import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";

import {
  buscarcolaborador,
  colaboradoresAtivos,

  filtrarPorStatus,
} from "./services/Services";

import type { colaborador } from "./data/Data";

function App() {

  // 🟢 HOME INICIA SOMENTE COM ATIVOS
  const [dadosFiltrados, setDadosFiltrados] = useState<colaborador[]>(colaboradoresAtivos);
  const [listaDecolaboradors, setListaDecolaboradors] = useState<colaborador[]>([]);
  const [tituloInicio, setTituloInicio] = useState("Colaboradores Ativos");
  const [tituloGeral, setTituloGeral] = useState("");
  const [textoBuscaDigitado, setTextoBuscaDigitado] = useState("");

  // 🔎 BUSCA (MOSTRA TODOS)
  const handleBusca = (texto: string) => {
    setTextoBuscaDigitado(texto);

    if (texto.length >= 3) {
      setDadosFiltrados(buscarcolaborador(texto));
      setListaDecolaboradors([]);
      setTituloInicio("Resultado da busca");
      setTituloGeral("");
    }

    if (texto === "") {
      setDadosFiltrados(colaboradoresAtivos);
      setTituloInicio("Colaboradores Ativos");
    }
  };

  // 🔴 BOTÃO DEMITIDOS
  const handleFiltro = (status: string) => {
    setTextoBuscaDigitado("");
    setDadosFiltrados(filtrarPorStatus(status));
    setListaDecolaboradors([]);
    setTituloInicio(status === "Sim" ? "Colaboradores Ativos" : "Colaboradores Demitidos");
  };

  // 🟢 BOTÃO ATIVOS (RESET HOME)
  const handleLimparBusca = (status: string) => {
    setTextoBuscaDigitado("");
    setDadosFiltrados(filtrarPorStatus(status));
    setListaDecolaboradors([]);
    setTituloInicio("Colaboradores Ativos");
  };

  return (
    <BrowserRouter>
      <Navbar
        handleFiltro={handleFiltro}
        handleLimparBusca={handleLimparBusca}
        botaoClicado=""
      />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              dadosFiltrados={dadosFiltrados}
              listaDecolaboradors={listaDecolaboradors}
              tituloInicio={tituloInicio}
              tituloGeral={tituloGeral}
              textoBuscaDigitado={textoBuscaDigitado}
              handleBusca={handleBusca}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;