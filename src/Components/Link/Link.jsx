const Link = ({route}) => {
  return (
    <li className="font-semibold text-lg mr-10 hover:bg-rose-500 p-2 rounded-lg hover:text-white">
      <a href={route.path}>{route.name}</a>
    </li>
  );
};

export default Link;
