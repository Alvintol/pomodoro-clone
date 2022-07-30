const Control = ({ id }: any) => {

  const iconClass = () => {
    switch (id) {
      case 'START': return 'fa-solid fa-play mx-2 text-2xl hover:opacity-50';
      case 'PAUSE': return 'fa-solid fa-pause mx-2 text-2xl hover:opacity-50';
      case 'RESET': return 'fa-solid fa-rotate mx-2 text-2xl hover:opacity-50';
    }
  }

  return (
    <i
      id={id}
      className={iconClass()}
    ></i>
  );
};

export default Control;
