import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import pmLanaImage from "@/assets/PM-Lana.png";
import Script from 'next/script'
export default function SaccessPage() {

    return (
        <section className="flex-col md:flex-col md:justify-between md:gap-20 mb-10 md:mb-20 max-w-4xl m-auto items-end h-full p-2 md:p-20 bg-gradient-light">
            <div className="flex flex-col md:flex-col">
                <p className="text-2xl font-bold text-center">by LANA & BM Agency </p>
                <p className="text-2xl font-bold text-center uppercase text-default">Оплата пройшла успішно</p>
                <div className="basis-1/2">
                    <Image src={pmLanaImage} alt={"PM Lana"}/>
                </div>
                <div className="bg-labelLight rounded-md py-1 my-4 mx-4">
                    <p className="text-center text-xl uppercase font-bold text-default">LANA sapizhuk </p>
                </div>
                <div className="basis-1/2">
                    <div className="bg-white rounded-xl px-4">
                        <h2 className="text-2xl md:text-2xl text-center font-bold mb-5 pt-5 md:mb-10">Увага! <br />Зачекай поки тобі згенерується доступ та прочитай правила нижче👇</h2>
                        <p className="mb-3 md:mb-5">*Доступи до чату з навчанням тобі прийдуть на почту через декілька хвилин після оплати. </p>
                        <p className="mb-5 pb-5">**Якщо доступи не прийшли скоріш за все почта була введена з помилкою, напиши мені в інстаграм @lana.sapizhuk і ми знайдемо твою оплату та відкриємо доступ.</p>
                    </div>
                    <div className="text-center">
                        <p className="text-2xl font-bold">Я знаю як потрібна підтримка на старті! Інколи самому вкрай важко з усім розібратися</p>
                        <p className="mt-4 text-2xl mb-5">Тому я пропоную тобі свою підтримку - <span className="font-bold">зідзвон на 90 хв зі мною🔥</span><br />Де ми розберемо абсолютно всі моменти та нюанси, які потрібні для запуску саме в твоїй ніші. </p>
                        <p className="text-2xl font-bold mb-5">Лише зараз ти можеш придбати мою підтримку зі <br /><span className="text3xl text-default">ЗНИЖКОЮ 75% </span><br />всього за 50$ замісь 200$</p>
                    </div>
                    <div className="text-center font-bold">
                        <Link href="https://secure.wayforpay.com/page?vkh=66031de7-0210-4109-8281-0a3422d1dba8">
                            <Button inverted>ПРИДБАТИ ПІДТРИМКУ ЗА 50$  </Button>
                        </Link>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}