import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import pmLanaImage from "@/assets/PM-Lana.png";
import Script from 'next/script'
export default function SaccessPage() {

    return (
        <section className="flex flex-col md:flex-col md:justify-between md:w-96 mx-auto">
            <div className="flex flex-col md:flex-col">
                <p className="text-2xl font-bold text-center mt-10">by LANA & BM Agency </p>
                <div className="text-center font-bold mt-10">
                    <Link href="https://secure.wayforpay.com/button/bb123f60b127a">
                        <Button inverted>Інтенсив + бонуси за 9$</Button>
                    </Link>
                </div>
                <p className="text-2xl font-bold text-center uppercase text-default mt-10 px-5">Зачекай! <br /> Давай я збережу тобі 500$ </p>
                
                <div className="basis-1/2 text-2xl text-center mt-5 mb-5">
                   <p>Зараз не обовʼязково наймати команду, щоб зробити сайт, налашутвати та підключити автоматичні оплати та запрограмувати кабінет для видачі матеріалів - ТИ ЦЕ ВСЕ МОЖЕШ ЗРОБИТИ САМОСТІЙНО! </p>
                </div>
                
                <div className="basis-1/2">
                    <div className="bg-white rounded-xl px-4 mx-4">
                        <h2 className="text-2xl md:text-2xl text-center font-bold mb-5 pt-5 md:mb-10">ЗАБИРАЙ ДЕТАЛЬНІ ВІДЕО УРОКИ ДЕ Я РОЗПОВІМ ТОБІ</h2>
                        <p className="mb-3 md:mb-5">1. Як зробили сайт через конструктор самостійно!</p>
                        <p className="mb-3 md:mb-5">2. Як налаштувати платіжну систему Wayforpay та підключити оплати до сайту </p>
                        <p className="mb-3 md:mb-5">3. Як налаштувати бот в TG для видачі матеріалів онлайн продукту. </p>
                        <p className="text-2xl text-center uppercase mb-5">Тобто все разом коштує <br />60 $</p>
                        <p className="text-2xl text-center uppercase font-bold text-default mb-2">Але зараз:</p>
                        <p className="text-3xl text-center uppercase font-bold text-default">15 $</p>
                        <p className="text-2xl text-center font-bold my-4">Якщо додати ці 3 продукти до інтенсиву з бонусами то вийде</p>
                        <ul>
                            <li className="text-xl">✔️ 14-дений інтенсив + 2 бонуси </li>
                            <li className="text-xl">✔️ Розробка сайту</li>
                            <li className="text-xl">✔️ Підключеня оплат Wayforpay </li>
                            <li className="text-xl">✔️ Бот в TG </li>
                        </ul>
                        <p className="text-2xl text-default mt-5 font-bold">Все разом 9 $ + 15 $ = 24 $</p>
                        <div className="text-center font-bold mt-10">
                            <Link href="https://secure.wayforpay.com/button/b7d462ef190ae">
                                <Button className="bg-black1 mb-5"inverted>Придбати все за 24 $</Button>
                            </Link>
                        </div>
                    </div>
                    <p className="text-2xl font-bold text-center mt-5">Але якщо ти хочеш лише інтенсив, тоді ось кнопка </p>
                    <div className="text-center">
                        <Link href="https://secure.wayforpay.com/button/bb123f60b127a">
                            <Button className=" my-5"inverted>Інтенсив + бонуси за 9 $</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}