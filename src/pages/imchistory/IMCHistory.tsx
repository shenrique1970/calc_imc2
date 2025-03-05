import React from 'react';

interface HistoricoEntry {
  nome: string;
  peso: string | number;
  altura: string | number;
  imc: number;
  data: string;
}

interface IMCHistoryProps {
  initialHistorico: HistoricoEntry[];
  onDelete: (index: number) => void; // Nova propriedade para a função de apagar
}

const IMCHistory: React.FC<IMCHistoryProps> = ({ initialHistorico, onDelete }) => {
  return (
    <div className="flex flex-col items-center border-black">
      <table className="table border-collapse border border-black w-1/2">
        <thead>
          <tr>
            <th className="table-cell border border-black p-3 w-96">Nome</th>
            <th className="table-cell border border-black p-3 w-24">Peso</th>
            <th className="table-cell border border-black p-3 w-24">Altura</th>
            <th className="table-cell border border-black p-3 w-24">IMC</th>
            <th className="table-cell border border-black p-3 w-24">Data</th>
            <th className="table-cell border border-black p-3 w-24">Ações</th>
          </tr>
        </thead>
        <tbody>
          {initialHistorico.map((entrada, index) => (
            <tr key={index}>
              <td className="table-cell border border-black">{entrada.nome}</td>
              <td className="table-cell border text-center border-black">{entrada.peso}</td>
              <td className="table-cell border text-center border-black">{entrada.altura}</td>
              <td className="table-cell border text-center border-black">{entrada.imc.toFixed(2)}</td>
              <td className="table-cell border text-center border-black">{entrada.data}</td>
              <td className="table-cell border text-center border-black">
                <button onClick={() => onDelete(index)}>Apagar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IMCHistory;