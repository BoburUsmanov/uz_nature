import React, { Component } from "react";
import Sidebar from "../components/common/sidebar";
import { Link } from "react-router-dom";
import Title from "../components/common/title";

export default class Symbols extends Component {
  render() {
    return (
      <div className="symbols general__container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-8">
              <div className="symbols__box h-100">
                <div className="row">
                  <div className="col-12 mb-2">
                    <ul className="news__links d-flex">
                      <li>
                        <Link to="/">Главная</Link>
                      </li>
                      <li>
                        <Link to="/symbols">Государственные символы</Link>
                      </li>
                    </ul>
                  </div>

                  <div className="col-12">
                    <Title title="Государственные символы" />
                  </div>
                  <div className="symbols__content mt-3">
                    <div className="row">
                      <div className="col-12">
                        <h2 className="symbols__title">
                          Государственный флаг Республики Узбекистан
                        </h2>
                      </div>
                      <div className="col-12 symbols__text mb-5">
                        <img
                          src="/img/symbols/flag.svg"
                          className="float-left mr-4 mb-2"
                          style={{ width: "200px" }}
                          alt=""
                        />{" "}
                        Государственный флаг Республики Узбекистан утвержден
                        законом Республики Узбекистан «О государственном флаге
                        Республики Узбекистан» от 18 ноября 1991 г. № 407-XII.
                        Государственный флаг Республики Узбекистан является
                        символом государственного суверенитета Республики
                        Узбекистан. Государственный флаг Республики Узбекистан
                        представляет Республику Узбекистан в международных
                        отношениях. Государственный флаг Республики Узбекистан
                        представляет собой прямоугольное полотнище из трех
                        горизонтальных полос насыщенного голубого, белого и
                        насыщенного зеленого цветов во всю длину флага.
                      </div>
                      <div className="col-12">
                        <h2 className="symbols__title">
                          Государственный герб Республики Узбекистан
                        </h2>
                      </div>
                      <div className="col-12 symbols__text mb-5">
                        <img
                          src="/img/symbols/gerb.png"
                          className="float-left mr-4 mb-2"
                          alt=""
                        />{" "}
                        Государственный герб утвержден законом Республики
                        Узбекистан «О Государственном гербе Республики
                        Узбекистан» от 2 июля 1992 г. № 616-XII. Государственный
                        герб Республики Узбекистан представляет собой
                        изображение восходящего солнца над горами, реками и
                        цветущей долиной, окруженными венком, состоящим справа
                        из колосьев пшеницы и слева — из веток хлопчатника с
                        раскрытыми коробочками хлопка. В верхней части герба
                        находится восьмигранник, символизирующий знак
                        утверждения республики, внутри которого полумесяц со
                        звездой. В центре герба изображена птица Хумо с
                        раскрытыми крыльями — символ счастья и свободолюбия.
                        Внизу на банте ленты венка, символизирующей
                        Государственный флаг Республики Узбекистан, надпись
                        «O'zbekiston». В цветном изображении Государственного
                        герба Республики Узбекистан птица Хумо и реки —
                        серебристые; солнце, колосья, раскрытые коробочки хлопка
                        и надпись «O'zbekiston» — золотистые; ветки, листья
                        хлопчатника, горы и долины — зеленые, хлопок в раскрытых
                        коробочках — белый; лента трехцветная, воспроизводящая
                        цвета Государственного флага Республики Узбекистан;
                        восьмигранник голубой, обрамленный золотистой каймой;
                        полумесяц и звезда — белые.
                      </div>
                      <div className="col-12">
                        <h2 className="symbols__title">
                          Государственный гимн Республики Узбекистан
                        </h2>
                      </div>
                      <div className="col-12 symbols__text mb-3">
                        <img
                          src="/img/symbols/madhiya.png"
                          className="float-left mr-3 "
                          style={{ width: "200px" }}
                          alt=""
                        />{" "}
                        Текст и музыкальная редакция Государственного гимна
                        Республики Узбекистан утверждены законом Республики
                        Узбекистан «О Государственном гимне Республики
                        Узбекистан» от 10 декабря 1992 г. № 768-ХII.
                        Государственный гимн Республики Узбекистан является
                        символом государственного суверенитета Республики
                        Узбекистан. Глубокое уважение к Государственному гимну
                        Республики Узбекистан — патриотический долг каждого
                        гражданина Республики Узбекистан.
                      </div>
                      <div className="col-8 offset-2 symbols__text">
                      Музыка - Мутала Бурхонова

Слова - Абдуллы Орипова  <br/> <br/>

Серқуёш, ҳур ўлкам, элга бахт, нажот, <br/>

Сен ўзинг дўстларга йўлдош, меҳрибон! <br/>

Яшнагай то абад илму фан, ижод, <br/>

Шуҳратинг порласин токи бор жаҳон! <br/> <br/>

Припев: <br/> <br/>

Олтин бу водийлар — жон Ўзбекистон, <br/>

Аждодлар мардона руҳи сенга ёр! <br/>

Улуғ халқ қудрати жўш урган замон, <br/>

Оламни маҳлиё айлаган диёр! <br/>

Бағри кенг ўзбекнинг ўчмас иймони, <br/>

Эркин, ёш авлодлар сенга зўр қанот! <br/>

Истиқлол машъали, тинчлик посбони, <br/>

Ҳақсевар, она юрт, мангу бўл обод! <br/> <br/>

Припев: <br/> <br/>

Олтин бу водийлар — жон Ўзбекистон, <br/>

Аждодлар мардона руҳи сенга ёр!
 <br/>
Улуғ халқ қудрати жўш урган замон, <br/>

Оламни маҳлиё айлаган диёр!
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    );
  }
}