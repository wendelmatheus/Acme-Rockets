interface ParagrafoProps {
  children?: string;
  texto?: string;
}

export default function Paragrafo({ texto, ...props }: ParagrafoProps) {
  return <p className="max-w-md text-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400">{texto}</p>;
}
