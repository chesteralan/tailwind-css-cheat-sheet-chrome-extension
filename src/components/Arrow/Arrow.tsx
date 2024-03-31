type ArrowProps = {
  open: boolean;
};
const Arrow = ({ open = false }: ArrowProps) => {
  return (
    <svg
      className={`my-2 ml-2 h-5 w-5 transform text-gray-700 transition-all ${open ? "rotate-180" : ""}`}
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export default Arrow;
