import { FaSquareFacebook, FaGithub } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="bg-white py-24 sm:py-5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex justify-between items-center text-lg font-semibold text-gray-900">
          <div className="order-1">
            {" "}
            © 2024 Your Company, Inc. All rights reserved.
          </div>
          <div className="flex  gap-4  order-2">
            <FaSquareFacebook size={24} />
            <FaGithub size={24} />
          </div>
        </div>
      </div>
    </div>
  );
}
