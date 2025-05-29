import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";

const SocialMediaFooter = () => {
  return (
    <div className="mx-auto max-w-screen-2xl">
      <div className="bg-secondaryBrown flex justify-center items-center flex-col py-9 gap-3 mt-24 mx-5 max-[400px]:mx-3 rounded-lg shadow-lg">
        <p className="text-base text-white font-light">Подпишитесь на нас на</p>
        <div className="flex gap-4 text-white">
          <FaTiktok className="w-6 hover:text-gray-300 transition duration-200" />
          <FaLinkedinIn className="w-6 hover:text-gray-300 transition duration-200" />
          <FaPinterestP className="w-6 hover:text-gray-300 transition duration-200" />
          <FaYoutube className="w-6 hover:text-gray-300 transition duration-200" />
        </div>
      </div>
    </div>
  );
};

export default SocialMediaFooter;
