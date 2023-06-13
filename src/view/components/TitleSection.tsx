interface titleSectionProps {
  children?: string;
  titulo?: string;
}

export default function TitleSection({ titulo, ...props }: titleSectionProps) {
  return <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">{titulo}</h2>;
}
