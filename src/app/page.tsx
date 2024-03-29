import Button from "@/components/Button";
import Image from "next/image";
import CountDown from "@/components/CountDown";
import Link from "next/link";
import pmLanaImage from "@/assets/PM-Lana.png";
import Danone from "@/assets/Danone.png";
import ActiveChat from "@/assets/activechat.png";
import MSO from "@/assets/mso.png";
import Kristina from "@/assets/Kristina.png";
import Elina from "@/assets/elina.png";
import Wispence from "@/assets/wispence.png";
import Abinbel from "@/assets/abinbel.png";
import IrynkaKhalus from "@/assets/IrynkaKhalus.png";
import AnastasiyaMelnik from "@/assets/AnastasiyaMelnik.png";
import Mariya from "@/assets/Mariya.png";
import MariyaPolonskaya from "@/assets/MariyaPolonskaya.png";
import OlgaLazebnikova from "@/assets/OlgaLazebnikova.png";
import OlhovskayaDarya from "@/assets/OlhovskayaDarya.png";
import LinaKondratiuk from "@/assets/LinaKondratiuk.png";
import Pavel from "@/assets/P.png";
import Sergij from "@/assets/Sergij.png";
import YraGlebov from "@/assets/YraGlebov.png";
import Yuliya from "@/assets/Yuliya.png";
import YuliyaLisenko from "@/assets/YuliyaLisenko.png";
import hart from "@/assets/hart.png";


export default function Home() {
  return (
      <div className={"md:w-96 mx-auto p-5"}>
        <main>
          <header>
            <div className="text-2xl dark:text-black text-center">
              <i>
                <b>B</b>
                <small>&</small>
                <b>M</b>
              </i>
            </div>
          </header>
          <section className={"mb-10"}>
            <div className="md:basis-3/6 grow-1 text-center">
            <span className="text-sm px-5 py-2 text-center normal-case font-light rounded bg-label ">
              Старт 14 березня
              </span>
              <h2 className="text-3xl mt-5 uppercase font-bold mb-10">
                практикум по запуску міні продуктів на автопілоті 24/7
              </h2>
              <p className="mb-5 dark:text-black md:pr-30">
                Опануй найпопулярніший та дієвий метод у 2024 р.  залучення клієнтів та продажів 💸
              </p>
              <p className="mb-5 text-center font-bold">
                Створюй інфо продукти, марафони і відразу монетизуй їх 👇
              </p>
              <ul className="mb-5 text-left">
                <li>
                  🔹 без підписників
                </li>
                <li>
                  🔹 без постійного ведення блогу
                </li>
                <li>
                  🔹 без вебінарів
                </li>
                <li>
                  🔹 без залучення команди на постійній основі
                </li>
                <li>
                  🔹 без привʼязки до дати запуску, відразу продажі та видача матеріалу
                </li>
              </ul>
              <p className="text-xl text-default md:text-2xl font-bold uppercase mb-5 max-w-lg text-center">
                Встигни взяти участь зі знижкою 70%
              </p>
              <Link href="#pay">
                <Button inverted className="w-full">
                  Взяти участь
                </Button>
              </Link>
            </div>
          </section>
          <section>
            <div className="md:basis-7/12 flex-initial grow-0 align-bottom dark:text-black">
              <h2 className="text-3xl mb-10 font-bold uppercase">
                Авторка інтенсиву
                <br />
                <b className="font-bold text-default">
                  Product marketing ManageR
                </b>
              </h2>
              <Image src={pmLanaImage} alt="Lana Sapizhuk" />
              <ul className="mb-5 list-disc list-inside mt-5">
                <li><b>7 років</b> роботи <b>в ІТ та Digital</b></li>
                <li><b>Заснувала</b> діджитал агенство повного циклу <strong className="uppercase">business maker</strong> яка спеціалізується на створенні та монетизації онлайн продуктів  </li>
                <li><strong>Навчила</strong> більше <strong>60 людей</strong> продукт менеджменту</li>
                <li><strong>IT блогер:</strong> експертний блог в IG 8к+ аудиторії</li>
                <li><strong>Працювала</strong> з відомими брендами та <strong>ІТ продуктами:</strong></li>
              </ul>
              <div className="grid gap-4 grid-flow-row auto-rows-max mb-10">
                <Image src={Danone} alt={"Danone"} />
                <Image src={Kristina} alt={"Kristina"} />
                <Image src={Elina} alt={"Elina"} />
                <Image src={Abinbel} alt={"Abinbel"} />
                <Image src={Wispence} alt={"Wispence"} />
                <Image src={ActiveChat} alt={"ActiveChat"} />
                <Image src={MSO} alt={"MSO"} />
              </div>
            </div>
          </section>
          <section className="mb-10 bg-default px-5 py-10">
              <div className="mb-10">
                <h2 className="text-2xl font-bold uppercase text-white text-center mt-5 mb-5">
                  Для кого підійде інстенсив?
                </h2>
                <p className="text-white text-center text-xl">
                  Опануйте навички найпопулярнішого методу онлайн продажів у 2024 році для збільшення заробітку та монетизації своїх знань уже через місяць!
                </p>
              </div>
              <div className="flex flex-col gap-5">
                <div className="grow-1 bg-white rounded-3xl p-5">
                  <h3 className="font-bold">Для новачків/студентів</h3>
                  <p>
                    Хочеш працювати онлайн та допомагати експертам монетизувати їх знання через low продажі, продавати без постійного ведення блогу та прогрівів
                  </p>
                </div>
                <div className="grow-1 bg-white rounded-3xl p-5">
                  <h3 className="font-bold">Для власників онлайн бізнесу</h3>
                  <p>
                    Хочеш освоїти популярний метод монетизації та адаптувати його для свого бізнесу, щоб розвинути свій бізнес та збільшити кількість клієнтів
                  </p>
                </div>
                <div className="grow-1 bg-white rounded-3xl p-5">
                  <h3 className="font-bold">Для експертів, які  хочуть монетизувати свої знання блогу</h3>
                  <p>
                    Втомився від постійного ведення блогу, прогрівів хочеш робити запуски своїх курсів без постійних сторіс, а через систему продажів, яка принесе результат та дозволить його маштабувати
                  </p>
                </div>
                <div className="grow-1 bg-white rounded-3xl p-5">
                  <h3 className="font-bold">Для тих, хто хоче створити свій онлайн продукт</h3>
                  <p>
                    Вже всі продають онлайн продукти, а ти досі не знаєш з чого почати? Моя система допоможе тобі створити свій перший продукт та монетизувати його.
                  </p>
                </div>
              </div>
          </section>
          <section className="mb-10">
            <h2 className="text-2xl mb-5 font-bold uppercase text-default text-center">
              Що Ти отримаєш під час навчання
            </h2>
            <p className="text-xl font-bold mb-3 text-center">Найпопулярніша робоча схема продажів в 2024! Опануй уже сьогодні</p>
            <ul className="list-disc list-inside font-bold mb-5">
              <li>
                Інструмент, який допоможе тобі генерувати дохід на продажі міні продуктів уже через місяць.
              </li>
              <li>
                А  також лідів, яким в подальшому можна робити допродажі допродажі дорогих продуктів - тим самим ще більше збільшувати свій заробіток.
              </li>
            </ul>
          </section>
          <section className="mb-10 bg-default px-5 py-10">
            <div className="mb-10">
              <h2 className="text-2xl font-bold uppercase text-white text-center mt-5 mb-5">
                По цій схемі можна продавати різіні міні продукти, лови декілька ІДЕЙ
              </h2>
            </div>
            <div className="flex flex-col gap-5">
              <div className="grow-1 bg-white rounded-3xl p-5">
                <strong>
                  ТОП навички ефективного управління бізнесом
                </strong>
              </div>
              <div className="grow-1 bg-white rounded-3xl p-5">
                <strong>
                  Штучний інтелект для ведення блогу
                </strong>
              </div>
              <div className="grow-1 bg-white rounded-3xl p-5">
                <strong>
                  Як створювати дизайни за допомогою ШІ
                </strong>
              </div>
              <div className="grow-1 bg-white rounded-3xl p-5">
                <strong>
                  Як створювати сайти з допомогою конструкторів
                </strong>
              </div>
              <div className="grow-1 bg-white rounded-3xl p-5">
                <strong>
                  Майстер класи по приготуванню продуктів харчування. Наприклад -  Як пекти хліб, макарони, паску та інші
                </strong>
              </div>
              <div className="grow-1 bg-white rounded-3xl p-5">
                <strong>
                  Навчальні предмети. Наприклад - Історія України - визначні події
                </strong>
              </div>
              <div className="grow-1 bg-white rounded-3xl p-5">
                <strong>
                  Спортивні марафони. Наприклад - Для сідниць, пресу, всього тіла та інші
                </strong>
              </div>
              <div className="grow-1 bg-white rounded-3xl p-5">
                <strong>
                  Психологічні курси. Наприклад - Як вийти з токсичних стосунків, як наладити комунікацію з підлітком та інші
                </strong>
              </div>
            </div>
          </section>
          <section className="mb-10">
            <h2 className="text-2xl mb-5 font-bold text-center uppercase text-default">
              Програма
            </h2>
            <div>
              <ol className="list-decimal list-inside leading-10">
                <li>
                  Вступ в low продажі
                </li>
                <li>
                  Що дозволяє low продажам працюювати?
                </li>
                <li>
                  Як виглядають low продажі зсередини?
                </li>
                <li>
                  Як обрати тематику курсу та два варіанта створення міні продукта: від експерта і для експерта
                </li>
                <li>
                  Як зробити структуру  міні продукта
                </li>
                <li>
                  Як створити програму курсу, марафону для міні продукта
                </li>
                <li>
                  Розбір структури лендінгу для міні продукта
                </li>
                <li>
                  Ідеї для  допродажів інших продуктів, після покупки міні продукта
                </li>
                <li>
                  Майстер клас - Як зробили лендінг через конструктор для продажі міні продукта - огляд популярних конструкторів
                </li>
                <li>
                  Майстер клас - Як налаштувати платіжну систему Wayforpay та підключити оплати до лендінгу
                </li>
                <li>
                  Майстер клас - Як налаштувати бот в TG для видачі матеріалів міні продукта
                </li>
                <li>
                  Супровід куратора протягом всього інтенсиву
                </li>
              </ol>
            </div>
          </section>
          <section className="mb-10" id="pay">
            <div className="text-center rounded-2xl bg-default p-5 flex flex-col items-center mb-5">
              <p className={"text-xl mb-3 w-60"}>До старту навчання залишилось</p>
              <CountDown
                  className={"text-5xl font-extrabold mb-5"}
                  startDate={new Date("02-20-2024")} format={["days", "hours", "minutes", "seconds"]}
              />
              <p className={"text-white text-xl"}><s>$200</s></p>
              <p className={"font-bold text-white text-3xl uppercase mb-10"}>$49</p>
              <Link href={"https://secure.wayforpay.com/button/bc87e6fda40c2"}>
                <Button className={"w-full"}>
                  Приєднатися
                </Button>
              </Link>
            </div>
            <div className={"bg-white rounded-3xl p-5 text-center"}>
              <p className={"mb-5"}>
                🎁 При покупці інтенсиву сьогодні ти отримаєш файл з рекомендаціями щодо створення креативів, а також детальну інструкцію по налаштуванню таргету (підійте новачкам) у подарунок 🎁
              </p>
              <p className={"mb-5 text-xl font-bold"}>
                Тобто все разом коштує <br/>
                <s>$300</s>
              </p>
              <p className={"mb-5 text-xl font-bold"}>
                Але зараз:
                <br/>
                $49
              </p>
              <Link href={"https://secure.wayforpay.com/button/bc87e6fda40c2"}>
                <Button className={"w-full"}>
                  Приєднатися
                </Button>
              </Link>
            </div>
          </section>
          <section className="mb-10">
            <h2 className="text-2xl mb-10 font-extrabold uppercase">
              Відгуки<br />
              студентів{" "}
              <span style={{ color: "#A699FF" }} className="pr-3">
              Лани
            </span>
            </h2>
            <div className="grid gap-4 grid-flow-row auto-rows-max">
              <article className="bg-white p-3 rounded-3xl auto-rows-min text-xs flex flex-col">
                <div className="flex gap-5 items-center mb-2">
                  <Image src={YraGlebov} alt={""} />
                  <h3 className="text-lg font-bold">Yra Glebov</h3>
                </div>
                <p>Лана, сьогодні ми завершили навчання з написання UserStory.</p>
                <p>
                  Як на мене. то це були одні з найкращих майстер-класів які ми
                  проходили за вже проведений час навчання (але я впевнений, що
                  попереду буде ще багато справді корисних вправ).
                </p>
                <p>
                  В будь-якому навчанні я ціную: професійність викладача,
                  можливість практичного застосування отриманих знань, можливість
                  отримати відповіді на питання в режимі «тут і зараз».
                </p>
                <p>
                  І кожну з цих властивостей я відчув продовж проведення лекції: я
                  насправді відчував твоє експертне знання, кожен зі студентів мав
                  нагоду відпрацювати на практиці прийоми формування UserStory, а
                  якщо у когось виникало будь-яке питання - то ти надавала
                  вичерпну відповідь на нього.
                </p>
                <p>Як результат - ми спільними зусиллями склали</p>
                <p>
                  UserStory, яке завтра відправиться до розробників додатка
                  Wispence, і через короткий проміжок часу нова фіча &quot;здобуде
                  життя&quot; в фітнес додатку. Чекаю нових тем! Чекаю нових
                  практичних задач!
                </p>
                <p>Чекаю змістовних зустрічей!</p>
                <Image src={hart} alt={""} className=" mt-auto" />
              </article>
              <article className="bg-white p-3 rounded-3xl auto-rows-min text-xs flex flex-col">
                <div className="flex gap-5 items-center mb-2">
                  <Image src={YuliyaLisenko} alt={"Юлія Лисенко"} />
                  <h3 className="text-lg font-bold">Юлія Лисенко</h3>
                </div>
                <p>Практична Лекція по UserStory з тобою, Лана - це щось!!</p>
                <p>
                  Покроково, у реальному часі, на реальному завданні. Враховуючи
                  яке значення має для продукта вміння писати UserStory, саме
                  такий підхід допоможе розібратися, навчитися і почати
                  практикувати!
                </p>
                <p>Дякую за знання та натхнення</p>
                <Image src={hart} alt={""} className=" mt-auto" />
              </article>
              <article className="bg-white p-3 rounded-3xl auto-rows-min text-xs flex flex-col">
                <div className="flex gap-5 items-center mb-2">
                  <Image src={IrynkaKhalus} alt={"Irynka Khalus"} />
                  <h3 className="text-lg font-bold">Irynka Khalus</h3>
                </div>
                <p>
                  Лана, хочу сказати велике дякую за мега цікаву консультацію, де
                  Ви надали більш ніж вичерпні відповіді на кожне запитання.
                </p>
                <p>
                  Особлива вдячність за Вашу чесність і обʼєктивність, що Ви
                  розповідаєте реалії роботи в ІТ та того скільки потрібно
                  докласти зусиль, щоб туди ввійти.
                </p>
                <p>
                  Також, спасибі за мотивуючі історії Ваших колег, які і справді
                  надихають і показують, що все можливо, якщо докласти трохи
                  більше зусиль.
                </p>
                <p>
                  Також, хочу побажати Вам ще більшого розвитку, цікавих проєктів
                  та багато студентів, з якими Ви зможете ділитись своїми
                  навичками.
                </p>
                <p>
                  Слідкую за Вашим блогом і часто вражена, як мама двох маленьких
                  дітей знаходить час на те, щоб працювати і навчати інших.
                </p>
                <Image src={hart} alt={""} className=" mt-auto" />
              </article>
              <article className="bg-white p-3 rounded-3xl auto-rows-min text-xs flex flex-col">
                <div className="flex gap-5 items-center mb-2">
                  <Image src={AnastasiyaMelnik} alt={"Анастасія Мельник"} />
                  <h3 className="text-lg font-bold">Анастасія Мельник</h3>
                </div>
                <p>
                  Хочу дуже подякувати за такий крутий курс, фішка якого
                  досвідчений продукт менеджер з реальним проектом! Матеріал, який
                  був представлений на курсі, був добре структурований і чіткий.
                  Він дозволяв зрозуміти ключові концепції та методики,
                  пов&lsquo;язані з проджект та продукт менеджментом. Кожен урок
                  мав чітку мету і побудований логічно, що допомагало легше
                  засвоювати інформацію. Практичні завдання та проект, які ми
                  виконували під час курсу, були дуже цінними і корисними. Вони
                  давали нам можливість застосовувати отримані знання на практиці.
                  І мені настільки сподобалося аналізувати різні проекти та
                  придумувати гіпотези, що придумала маленький start-up)
                </p>
                <Image src={hart} alt={""} className=" mt-auto" />
              </article>
              <article className="bg-white p-3 rounded-3xl auto-rows-min text-xs flex flex-col">
                <div className="flex gap-5 items-center mb-2">
                  <Image src={Mariya} alt={"Анастасія Мельник"} />
                  <h3 className="text-lg font-bold">Марія</h3>
                </div>
                <p>
                  Навчання сподобалось тим що було достатньо часу на виконання
                  завдань, була можливість особисто задати питання, також у нашій
                  групі чудові колеги в яких можна було також запитати усе що було
                  незрозуміло. Закріпила усі необхідні знання одразу на практиці
                  це дуже великий плюс. Єдине чого не вистачало це як я написала
                  вище це фідбеку по виконаних завданнях та дуже шкода що мій
                  проект ще не реалізовано. Усім іншим задоволена: навчання було
                  цікавим, доступним та зрозумілим, дуже дякую Лані за такий курс
                  надіюсь зможу отримати свій перший офер в цій сфері☺️
                </p>
                <Image src={hart} alt={""} className=" mt-auto" />
              </article>
              <article className="bg-white p-3 rounded-3xl auto-rows-min text-xs flex flex-col">
                <div className="flex gap-5 items-center mb-2 ">
                  <Image
                      src={Pavel}
                      alt={"Pavel"}
                      style={{ width: 60, height: 60 }}
                  />
                  <h3 className="text-lg font-bold">Pavel</h3>
                </div>
                <p>
                  Фічі фічами, а без івентів буде складно створити справді
                  функціональний продукт, який задовільнить вибагливих
                  користувачів.
                </p>
                <p>
                  Тож сьогодні, ми пройшли одну з , важливіших тем для справжнього
                  product manager. Після майстер-класу кожен студент розуміє як
                  підготувати завдання для розробника на створення івентів, як
                  структуровано скласти список існуючих авентів і яким чином
                  відслідковувати зміни кожного з івентів!
                </p>
                <p>
                  Найближчим часом, при виконанні домашнього завдання студенти
                  закріплять ці знання на практиці.
                </p>
                <p>
                  А коли почнуть використовувати ці навички в роботі РМ, то
                  збережуть час і затрати на розробку, підвисять вдоволенність
                  користувачів та зроблять кожний свій проект максимально
                  ефективним!
                </p>
                <p>Дякую за черговий урок! Як завжди:</p>
                <ul>
                  <li> доступно доводиш інформацію</li>
                  <li>розказуєш тільки про головне</li>
                  <li>
                    аргументуєш необхідність цих знань з точки зору практичного
                    досвіду використання!
                  </li>
                </ul>
                <p>Ще одна сходинка до знань, яку ми подолали разом!</p>
                <Image src={hart} alt={""} className="mt-auto" />
              </article>
              <article className="bg-white p-3 rounded-3xl auto-rows-min text-xs flex flex-col">
                <div className="flex gap-5 items-center mb-2">
                  <Image src={Yuliya} alt={"Юлія"} />
                  <h3 className="text-lg font-bold">Юлія</h3>
                </div>
                <p>
                  Хочу тебе привітати із всіма класними змінами в твоєму житті!
                  Повернення додому, студія, а ще - з суперовим залученням
                  зацікавлених людей до твого завтрашнього вебінару!! Я теж хочу
                  приєднатись) розумію, що для мене,як вже для твоєї учениці буде
                  багато чого відомого, але твоя менторська програма мене так
                  надихає!! Від всього серця кажу!
                </p>
                <p>
                  Я вже по-іншому дивлюсь на всі додатки, стала стабільно
                  передивлятись все нові й нові, щоб бачити як хто придумав, якісь
                  цікаві рішення вже просто бачу!
                </p>
                <p>Тож, вітаю тебе і дякую)</p>
                <Image src={hart} alt={""} className=" mt-auto" />
              </article>
              <article className="bg-white p-3 rounded-3xl auto-rows-min text-xs flex flex-col">
                <div className="flex gap-5 items-center mb-2">
                  <Image
                      src={LinaKondratiuk}
                      alt={"Lina Kondratiuk"}
                      style={{ width: 60, height: 60 }}
                  />
                  <h3 className="text-lg font-bold">Lina Kondratiuk</h3>
                </div>
                <p>
                  Я дуже радію, що вирішила долучитися до цього курсу та стати
                  студенткою Лани! Багато факторів співпало: я достатньо часу
                  замислювалась стати світчером та почати шукати роботу у ІТ, і
                  тут побачила сторінку Лани, де мене &ldquo;запросили&ldquo;
                  спробувати і я вирішила спробувати! Для мене важливим було те,
                  що викладач - практикуючий РМ та обіцяний досвід роботи на
                  реальних реалізаціях діючого проекту, як стажування. Все вийшло
                  якнайкраще! Лекції невеликі, але розкривають теми повністю.
                  Немає води та зайвої інформації: все по суті. Q&A сесії, на яких
                  Лана ще більше розкривала теми та показувала багато реальних
                  прикладів з реальної роботи РМ менеджера. Записи лекцій та сесій
                  завжди під рукою і ти можеш повернутися до них, щоб щось згадати
                  чи розкрити для себе. Це допомагає, як у виконанні ДЗ, так і в
                  роботі над проєктом. Практичні майстер класи - це взагалі,
                  круть! Покроково, у реальному часі, на реальному завданні. А вже
                  зовсім згодом, я бачу цю фічу у додатку!) Лана завжди на
                  зв&lsquo;язку, готова допомогти та відповісти на питання,
                  надихає своїм прикладом, ставленням до роботи та до студентів!
                  Дякую за цей досвід! Далі буде..
                </p>
                <Image src={hart} alt={""} className=" mt-auto" />
              </article>
              <article className="bg-white p-3 rounded-3xl auto-rows-min text-xs flex flex-col">
                <div className="flex gap-5 items-center mb-2">
                  <Image src={OlgaLazebnikova} alt={"Ольга Лазебникова"} />
                  <h3 className="text-lg font-bold">Ольга Лазебникова</h3>
                </div>
                <p>
                  После курса у меня остались только положительные впечатления и
                  эмоции. Я очень рада что решилась пойти к Лане на курс. Ведь за
                  4 месяца я не только освоила 2 профессии, а ещё и имела
                  возможность отработать свои знания на практике. В том числе на
                  проект по реализации нового функционала в приложении. Эта задача
                  для меня была самой увлекательной из всех и я очень рада что
                  наши с Ланой представления о реализации нового функционала
                  совпали. Я очень благодарна за возможность поработать в таком
                  проекте и за то, что теперь этот проект я могу использовать в
                  своём портфолио. Я желаю Лане успехов, как на работе, так и в
                  дальнейшем обучении студентов новых потоков &ldquo;Продукт и
                  Проджект менеджер&ldquo;
                </p>
                <Image src={hart} alt={""} className=" mt-auto" />
              </article>
              <article className="bg-white p-3 rounded-3xl auto-rows-min text-xs flex flex-col">
                <div className="flex gap-5 items-center mb-2">
                  <Image src={Sergij} alt={"Сергій"} />
                  <h3 className="text-lg font-bold">Сергій</h3>
                </div>
                <p>
                  Привіт, дякую тобі за можливість пройти стажування в вашій
                  компанії та практичні навички, які я придбав! Ти подаєш дуже
                  цікаво і живо інформацію. Успіхів тобі і твоїй компанії, щастя
                  та безпеки близьким та рідним!)
                </p>
              </article>
              <article className="bg-white p-3 rounded-3xl auto-rows-min text-xs flex flex-col">
                <div className="flex gap-5 items-center mb-2">
                  <Image src={OlhovskayaDarya} alt={"Ольховская Дарья"} />
                  <h3 className="text-lg font-bold">Ольховская Дарья</h3>
                </div>
                <p>
                  Я в восторге от знаний которые я приобрела и такого человека как
                  Лана! Она успевает все! и я брала с нее пример)) мы с ней
                  немного схожи) Спасибо ей за немного отодвинутую ширму IT!
                  Теперь я знаю чего хочу и что мне нужно) а самое главное - как
                  нужно делать и как ненужно)))Я полностью довольна курсом и буду
                  продолжать следить за твоей страничкой в инстаграмме)))
                </p>
                <Image src={hart} alt={""} className=" mt-auto" />
              </article>
              <article className="bg-white p-3 rounded-3xl auto-rows-min text-xs flex flex-col">
                <div className="flex gap-5 items-center mb-2">
                  <Image src={MariyaPolonskaya} alt={"Mariya Polonskaya"} />
                  <h3 className="text-lg font-bold">Mariya Polonskaya</h3>
                </div>
                <p>
                  Ось наприклад, один із нас отримав офер, тому що гарно навчався
                </p>
                <p>
                  О! Вітаю!!! Це дійсно круто! І дякую Лані особисто за навчання і
                  менторство!
                </p>
                <Image src={hart} alt={""} className=" mt-auto" />
              </article>
            </div>
          </section>
        </main>
      </div>
  );
}