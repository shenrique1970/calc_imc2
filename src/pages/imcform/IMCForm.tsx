import React, { useState } from 'react';

interface IMCFormProps {
  onSubmit: (nome: string) => void;
}

export default function IMCForm({ onSubmit }: IMCFormProps) {
  const [nome, setNome] = useState('');

  const handleSubmit = () => {
    onSubmit(nome);
    setNome(''); // Clear the name field after submission
  };

  return (
    <div className="flex flex-col items-center m-2 gap-2">
      <div className="flex flex-col border-black w-[300px]">
        <label>Nome</label>
        <input
          className="border border-black"
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </div>
      <div className="flex flex-col border-black w-[300px] items-center justify-center">
        <button
          className="bg-indigo-900 text-white m-2 p-1 rounded-lg cursor-pointer"
          onClick={handleSubmit}
        >
          Gravar
        </button>
      </div>
    </div>
  );
}