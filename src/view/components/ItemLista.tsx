interface itemListaProps {
  children?: string;
  urlImagem?: string;
  alt?: string;
  titulo?: string;
  paragrafo?: string;
  paragrafoSM?: string;
}

export default function ItemLista({ urlImagem, alt, titulo, paragrafo, paragrafoSM, ...props }: itemListaProps) {
  return (
    <li className="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 bg-white dark:bg-black py-6 px-2 rounded-3xl shadow-xl">
      <img className="w-1/2 mb-6" src={urlImagem} alt={alt} />
      <h3 className="text-3xl text-center text-slate-900 dark:text-white">{titulo}</h3>
      <p className="hidden sm:block text-3xl text-center mt-2 text-slate-500 dark:text-slate-400">{paragrafoSM}</p>
      <p className="sm:hidden text-2xl text-center mt-2 text-slate-500 dark:text-slate-400">{paragrafo}</p>
    </li>
  );
}
