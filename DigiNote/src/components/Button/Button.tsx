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
      className={ `text-white bg-sky-500 hover:bg-white/30 hover:text-gray-800  border border-sky-500 rounded-lg transition duration-500 ${state ? 'px-4 py-2' : 'block w-full text-left'}` }
    >
      {content}
    </button>
  );
}
