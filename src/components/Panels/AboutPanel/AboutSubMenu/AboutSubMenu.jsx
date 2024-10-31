import aboutSubMenuOptions from "../../../../constants/AboutPanel/AboutSubMenu/aboutSubMenuOptions.js";

export default function AboutSubMenu({ subPanel, changeSubPanel }) {
  
  console.log(subPanel);

  const subMenuItems = aboutSubMenuOptions.map(option =>
    <li
      key={option}
      className="flex w-full justify-end">
      <p
        key={option}
        style={{ fontSize: option === subPanel ? "1.25rem" : "1rem" }}
        className={`flex text-white font-bold box-border ${option === subPanel ? 'border-white' : 'border-transparent'} ease-in ease-out duration-300 hover:cursor-pointer hover:border-white border-b-2`}
        onClick={() => changeSubPanel(option)}>
        {option}
      </p>
    </li>
    );
  
  return (
    <nav className="flex w-1/4 min-h-full text-white justify-center">
      <ul className="flex w-full h-52 flex-col bg-black bg-opacity-55 items-end gap-4 p-2 rounded-md py-4 justify-center">
        {subMenuItems}
      </ul>
    </nav>
  );
};