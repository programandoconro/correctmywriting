import { FileAddOutlined } from "@ant-design/icons";
import Link from "next/link";
import Header from "./header";

const Dashboard = () => {
  return (
    <div className="">
      <Header />
      <div className="mx-4 select-none">
        <div className="flex justify-end my-4">
          <Link href={"/student"}>
            <button
              className="bg-blue-600 h-16 w-16
           text-white font-bold rounded-full p-4
           justify-center flex flex-col items-center
           shadow-xl  border-2 border-gray-400
           hover:bg-blue-800 transition delay-75 hover:shadow-red-500
           select-none
           "
            >
              <FileAddOutlined />
              New
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
