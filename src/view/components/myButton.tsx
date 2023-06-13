interface myButtonProps {
  children?: string;
  texto?: string;
}

export default function MyButton({ texto, ...props }: myButtonProps) {
  return (
    <button className="bg-teal-700 hover:bg-teal-600 active:bg-teal-500 text-white p-3 w-48 rounded-xl border border-solid border-slate-900 dark:border-none">
      {texto}
    </button>
  );
}
