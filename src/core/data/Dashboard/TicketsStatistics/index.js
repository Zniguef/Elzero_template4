import { BsCheckCircle } from "react-icons/bs";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { RiLoader4Line } from "react-icons/ri";
import { FaRegListAlt } from "react-icons/fa";

export const TicketsStatistics = [
  {
    id: "1",
    icon: FaRegListAlt,
    color: "orange",
    totalNumber: 2500,
    description: "total",
  },
  {
    id: "2",
    icon: RiLoader4Line,
    color: "blue",
    totalNumber: 500,
    description: "Pending",
  },
  {
    id: "3",
    icon: BsCheckCircle,
    color: "green",
    totalNumber: 1900,
    description: "Closed",
  },
  {
    id: "4",
    icon: AiOutlineCloseSquare,
    color: "red",
    totalNumber: 100,
    description: "Deleted",
  },
];
