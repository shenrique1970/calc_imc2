import { useRouter } from 'next/router';    // Importa o hook useRouter do Next.js para manipulação de rotas
import { useState, useEffect } from 'react';      // Importa hooks do React para gerenciamento de estado e efeitos colaterais
import IMCForm from '../imcform/IMCForm';    // Importa o componente IMCForm que será usado para entrada de dados
import IMCHistory from '../imchistory/IMCHistory';    // Importa o componente IMCHistory que exibirá o histórico de IMC

// Define o componente principal Dadosimc
export default function Dadosimc() {
  // Declara estados para peso, altura, IMC e histórico
  const [peso, setPeso] = useState<number>(0); // Estado para armazenar o peso
  const [altura, setAltura] = useState<number>(0); // Estado para armazenar a altura
  const [imc, setIMC] = useState<number>(0); // Estado para armazenar o IMC
  const [historico, setHistorico] = useState<any[]>([]); // Estado para armazenar o histórico de entradas

  const router = useRouter();    // Inicializa o router para acessar parâmetros da URL
    const { p_peso, p_altura, p_imc } = router.query;    // Desestrutura os parâmetros da query da URL

  // Efeito colateral que roda quando os parâmetros da query mudam
  useEffect(() => {
    // Verifica se os parâmetros estão disponíveis
    if (p_peso && p_altura && p_imc) {
      // Converte os parâmetros para números e atualiza os estados correspondentes
      setPeso(Number(p_peso));
      setAltura(Number(p_altura));
      setIMC(Number(p_imc));
    }
  }, [p_peso, p_altura, p_imc]); // Dependências do efeito

  // Efeito colateral que roda uma vez ao montar o componente
  useEffect(() => {
    // Tenta recuperar o histórico armazenado no localStorage
    const storedHistorico = localStorage.getItem('historicoIMC');
    // Se houver histórico armazenado, atualiza o estado com os dados
    if (storedHistorico) {
      setHistorico(JSON.parse(storedHistorico));
    }
  }, []); // Efeito que roda apenas uma vez

  // Função para gravar um novo registro no histórico
  const gravarHistorico = (nome: any) => {
    // Cria um novo objeto de entrada com os dados atuais
    const novaEntrada = {
      nome, // Nome do usuário
      peso, // Peso atual
      altura, // Altura atual
      imc: parseFloat(imc.toFixed(2)), // IMC formatado com duas casas decimais
      data: new Date().toLocaleDateString(), // Data atual formatada
    };
    // Cria um novo histórico adicionando a nova entrada
    const novoHistorico = [...historico, novaEntrada];
    // Atualiza o estado do histórico
    setHistorico(novoHistorico);
    // Armazena o novo histórico no localStorage
    localStorage.setItem('historicoIMC', JSON.stringify(novoHistorico));
  };

  // Função para apagar um registro específico do histórico
  const apagarRegistro = (index: number) => {
    // Filtra o histórico para remover a entrada no índice fornecido
    const novoHistorico = historico.filter((_, i) => i !== index);
    // Atualiza o estado do histórico
    setHistorico(novoHistorico);
    // Atualiza o localStorage com o novo histórico
    localStorage.setItem('historicoIMC', JSON.stringify(novoHistorico));
  };

  // Renderiza o componente
  return (
    <div>
      {/* Renderiza o formulário de IMC e passa a função de gravar como prop */}
      <IMCForm onSubmit={gravarHistorico} />
      {/* Renderiza o histórico de IMC e passa o histórico e a função de apagar como props */}
      <IMCHistory initialHistorico={historico} onDelete={apagarRegistro} />
    </div>
  );
}