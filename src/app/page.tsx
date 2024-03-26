import Button from "@/components/Button";
import Image from "next/image";
import CountDown from "@/components/CountDown";
import Link from "next/link";
import pmLanaImage from "@/assets/PM-Lana.png";
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
import star from "@/assets/star.png"
import lessons from "@/assets/lessons.png"
import ua from "@/assets/ua.png"



export default function Home() {
  return (
      <div className={"md:w-96 mx-auto p-5"}>
        <main>
          <header>
            <div className="text-2xl dark:text-black text-center mt-5">
              <i>
                <b className="not-italic">by LANA</b>
                <small className="not-italic"> & </small>
                <b className="not-italic">BM Agency</b>
              </i>
            </div>
          </header>
          <section className={"mb-10"}>
            <div className="md:basis-3/6 grow-1 text-center">
              <div className="bg-label rounded p-1 mt-10">
                <span className="text-18 text-center normal-case font-medium rounded">
                  Починай навчання у зручний час відразу після оплати
                </span>
              </div>
              <h2 className="uppercase text-f28  mt-5 text-default font-bold">створи та продавай свій міні продукт на автопілоті 24/7</h2>
              <h2 className="text-f28 uppercase font-bold mb-5">
                всього за 14 днів
              </h2>
              <p className="mb-1 dark:text-black md:pr-30 text-f24">
                Підходить для <span className="font-bold">експертів</span> з будь якої ніші (ІТ, ШІ, Фітнес, Б'юті, Наука і т.д.), спеціалістів, продюсерів, маркетологів
              </p>

              <div className="bg-white rounded-lg p-1 mt-4">
                <p className="mb-5 text-center font-bold text-f24">
                  Створюй курси, марафони, 
                  практикуми і відразу монетизуй їх за моєю авторською методикою👇
                </p>
                <ul className="mb-5 text-left text-lg">
                  <li className="my-2">
                    🔹 без підписників
                  </li >
                  <li className="my-2">
                    🔹 без постійного ведення блогу
                  </li>
                  <li className="my-2">
                    🔹 без вебінарів
                  </li>
                  <li className="my-2">
                    🔹 без залучення команди на постійній основі
                  </li>
                  <li className="my-2">
                    🔹 без привʼязки до дати запуску, відразу продажі та видача матеріалу
                  </li>
                  <li className="my-2">✅ навіть коли ти спиш</li>
                  <li className="my-2">✅ на високі чеки, за рахунок доп. продажів інших продуктів по воронці</li>
                </ul>

                <p className="text-xl text-default md:text-2xl font-bold uppercase mb-5 max-w-lg text-center">
                  Встигни взяти участь зі знижкою 70%
                </p>
                <Link href="#pay">
                  <Button inverted className="w-full mb-2">
                    Взяти участь
                  </Button>
                </Link>
              </div>  
            </div>
          </section>
          <section>
            <div className="md:basis-7/12 flex-initial grow-0 align-bottom dark:text-black">
              <h2 className="text-f26 mb-10 font-bold uppercase text-center">
                Авторка інтенсиву
                <br />
                <b className="font-f26 text-default text-center">
                  Product ManageR & marketing
                </b>
              </h2>
              <Image src={pmLanaImage} alt="Lana Sapizhuk" />
              <div className="bg-labelLight rounded-md py-1 mt-4">
                <p className="text-center text-xl uppercase font-bold text-default">LANA sapizhuk </p>
              </div>
              <ul className="mb-5 list-inside mt-5 text-lg">

                <li className="relative flex mb-3">
                  <div className="flex items-center w-10 h-10"><Image src={star} alt={"Star"} width={10} height={10}></Image></div>  
                  <div className="w-full"><b>7 р. як PM&M, Запустила ІТ та Інфо продуктів на 1🍋$</b></div>
                </li>

                <li className="relative flex mb-3">
                  <div className="flex items-center w-10 h-10"><Image src={star} alt={"Star"} width={10} height={10}></Image></div>  
                  <div className="w-full"><b>Заснувала</b> Digital агенцію <strong className="uppercase">business maker - </strong> розробка сайтів для бізнесу та експертів & таргетована реклама</div>
                </li>

                <li className="relative flex mb-3">
                  <div className="flex items-center w-10 h-10"><Image src={star} alt={"Star"} width={10} height={10}></Image></div>  
                  <div className="w-full"><strong>Навчила</strong> більше <strong>100 людей</strong> запускам онлайн продуктів</div>
                </li>

                <li className="relative flex mb-3">
                  <div className="flex items-center w-10 h-10"><Image src={star} alt={"Star"} width={10} height={10}></Image></div>  
                  <div><strong>IT блогер:</strong> експертний блог в IG 7к+ аудиторії</div>
                </li>

                <li className="relative flex mb-3">
                  <div className="flex items-center w-10 h-10"><Image src={star} alt={"Star"} width={10} height={10}></Image></div>  
                  <div className="w-full"><strong>Працювала</strong> з відомими брендами, великими блогерами (64к, 609к) та <strong>ІТ продуктами на 200к реєстрацій!</strong></div>
                </li>
              </ul>
            </div>
          </section>
          <section className="mb-10 bg-default px-5 py-10">
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-white text-center mt-5 mb-5">
                  👩‍💻 Мій інтенсив - це покроковий шлях від ідеї створення онлайн продукту до запуску продажів  в автоматизованому режимі 24/7 на холодну аудиторію
                </h2>
                <p className="text-white text-2xl text-center">
                  ☝️а також  здобуття нових цільових підписниців безкоштовно!
                </p>
              </div>
          </section>
          <section className="mb-10">
            <div>
              <Image src={lessons} alt="Lessons" className="rounded-b-lg"></Image>
            </div>
            <h2 className="text-2xl mb-5 font-bold mt-8 w-70% text-center px-10">
              Приєднуйтесь до інтенсиву вже зараз за спеціальною, обмеженою у часі пропозицією 
            </h2>
          </section>
          <section className="mb-10" id="pay">
            <div className="text-center rounded-2xl bg-default p-5 flex flex-col items-center mb-5">
              <p className={"text-xl mb-3 w-60"}>До старту навчання залишилось</p>
              <CountDown
                  className={"text-5xl font-extrabold mb-5"}
                  startDate={new Date("02-20-2024")} format={["days", "hours", "minutes", "seconds"]}
              />
              <div className="flex flex-end items-center my-5">
                <p className={"text-white text-xl mr-3"}><s>36 $</s></p>
                <p className={"font-bold text-white text-4xl uppercase"}>9 $</p>
              </div>
              <Link href={"/buy"}>
                <Button className={"w-full px-10"}>
                  Придбати  
                </Button>
              </Link>
            </div>
            <div className={"bg-white rounded-3xl p-5 text-center"}>
              <p className={"mb-5 text-2xl font-bold"}>
              При покупці інтенсиву ти отримаєш 2 крутезних бонуса від моєї команди у подарунок 🎁
              </p>
              <ul className="text-left">
                <li>1. Детальну інструкцію по налаштуванню таргету з нашими авторськими рекоментаціями.</li>
                <li>2. Детальну інструкцію по створенню креативів, які привертають увагу та продають! </li>
              </ul>
              <p className={"mb-5 text-xl text-2xl uppercase mt-4 font-bold"}>
                все разом коштує <br/>
                <s>49 $</s>
              </p>
              <p className={"mb-5 text-2xl font-bold text-default uppercase"}>
                Але зараз:
                <span className="text-3xl"><br/></span>
                9 $
              </p>
              <Link href={"/buy"}>
                <Button className={"w-full"}>
                     Придбати   
                </Button>
              </Link>
            </div>
          </section>
          <section className="mb-10">
            <div className="flex items-center mb-10">
              <Image src={ua} alt="Flag"></Image>
              <p className="text-center text-xl uppercase italic font-bold">Освічені <span className="not-italic">значить</span> вільні </p>
            </div>
            <h2 className="text-2xl mb-8 font-extrabold uppercase text-center">
              ВІДГУКИ та КЕЙСИ СТУДЕНТІВ{" "}
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