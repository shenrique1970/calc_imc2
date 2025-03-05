import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import IMCForm from '../imcform/IMCForm';
import IMCHistory from '../imchistory/IMCHistory';


export default function Dadosimc() {
  const [peso, setPeso] = useState<number>(0);
  const [altura, setAltura] = useState<number>(0);
  const [imc, setIMC] = useState<number>(0);
  const [historico, setHistorico] = useState<any[]>([]);

  const router = useRouter();
  const { p_peso, p_altura, p_imc } = router.query;

  

  useEffect(() => {
    if (p_peso && p_altura && p_imc) {
      setPeso(Number(p_peso));
      setAltura(Number(p_altura));
      setIMC(Number(p_imc));
    }
  }, [p_peso, p_altura, p_imc]);

  useEffect(() => {
    const storedHistorico = localStorage.getItem('historicoIMC');
    if (storedHistorico) {
      setHistorico(JSON.parse(storedHistorico));
    }
  }, []);

  const gravarHistorico = (nome: any) => {
    const novaEntrada = {
      nome,
      peso,
      altura,
      imc: parseFloat(imc.toFixed(2)),
      data: new Date().toLocaleDateString(),
    };
    const novoHistorico = [...historico, novaEntrada];
    setHistorico(novoHistorico);
    localStorage.setItem('historicoIMC', JSON.stringify(novoHistorico));
  };

  return (
    <div>
      <IMCForm onSubmit={gravarHistorico} />
      <IMCHistory initialHistorico={historico} />
    </div>
  );
}