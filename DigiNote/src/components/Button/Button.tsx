interface IButton {
  type: 'button' | 'submit' | 'reset';
  name?: string;
  value?: any;
  content?: string,
  state: boolean,
  onClick?: () => void; // Propiedad opcional para manejar el evento click
}

export default function Button(
    { type, name, value, content='Button', state }: IButton){

  return (
    <button
      type={type}
      name={name}
      value={value}
      className={ `font-semibold text-sky-900 hover:bg-white/60 hover:text-gray-800 px-4 py-2 border border-sky-600 rounded-lg transition duration-500 ${state ? '' : 'block w-full text-left'}` }
    >
      {content}
    </button>
  );
}
