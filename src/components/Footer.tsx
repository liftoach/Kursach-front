import SocialMediaFooter from "./SocialMediaFooter";
import { HiChevronDown } from "react-icons/hi2";

const Footer = () => {
  return (
    <>
      <SocialMediaFooter />
      <footer className="max-w-screen-2xl mx-auto border-b-8 border-secondaryBrown px-5 max-[400px]:px-3">
        <div className="flex justify-center gap-24 text-center mt-12 max-[800px]:flex-col max-[800px]:gap-10">
          <div className="flex flex-col gap-1">
            <h3 className="text-2xl font-bold max-sm:text-xl">Обслуживание клиентов</h3>
            <p className="text-lg max-sm:text-base">Послепродажное обслуживание</p>
            <p className="text-lg max-sm:text-base">Бесплатное страхование</p>
          </div>

          <div className="flex flex-col gap-1">
            <h3 className="text-2xl font-bold max-sm:text-xl">О компании</h3>
            <p className="text-lg max-sm:text-base">Компания</p>
            <p className="text-lg max-sm:text-base">Наши достижения</p>
            <p className="text-lg max-sm:text-base">Международные награды</p>
            <p className="text-lg max-sm:text-base">Наша история</p>
          </div>

          <div className="flex flex-col gap-1">
            <h3 className="text-2xl font-bold max-sm:text-xl">Наша техника</h3>
            <p className="text-lg max-sm:text-base">Специальные модели</p>
            <p className="text-lg max-sm:text-base">Летняя коллекция</p>
            <p className="text-lg max-sm:text-base">Эксклюзивная коллекция</p>
          </div>
        </div>
        <div className="flex flex-col gap-8 my-20">
          <p className="flex justify-center items-center text-2xl gap-2 max-sm:text-xl">Мировой рынок / Русский <HiChevronDown /></p>
          <h2 className="text-6xl font-light text-center max-sm:text-5xl">АРЕНДА ТЕХНИКИ</h2>
          <p className="text-base text-center max-sm:text-sm">Все права защищены ©2025</p>
          <ul className="flex justify-center items-center gap-7 text-base max-sm:text-sm max-[350px]:flex-col max-[350px]:gap-5">
            <li>Политика использования cookies</li>
            <li>Политика конфиденциальности</li>
            <li>Юридические замечания</li>
          </ul>
        </div>
      </footer>
    </>
  );
};
export default Footer;
