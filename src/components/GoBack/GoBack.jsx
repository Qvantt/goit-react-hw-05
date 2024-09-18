import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

export default function GoBack({ to, children }) {
  return (
    <Link to={to}>
      <FaArrowLeftLong size="12" />
      {children}
    </Link>
  );
}
