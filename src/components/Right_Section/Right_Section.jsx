import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, EffectCreative, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-creative";

import {
    up_site,
    phobosys,
    cpa,
    react,
    javascript,
    npm,
    webpack,
    scss,
    css,
    html,
    python,
    site_1,
    site_2,
    site_3,
    site_4
} from "@/img_video";

export default class Right_Section extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {}
    }


    render() {
        return (
            <section className="right_section animate__animated animate__fadeInRight" >
                <h1 className="job_title" ><span>Верстальщик</span>/Junior Front End</h1>

                <div className="right_wrapper">
                    <section className="experience" >

                        <h1 className="title_right_section" >Work Experience</h1>

                        <div className="experience_wrapper">
                            <div className="item">
                                <div className="left_block">
                                    <span className="date" >3 месяца</span>
                                    <div className="img_info" >
                                        <img src={up_site} alt="" />
                                        <div className="info" >
                                            <span>UpSite</span>
                                            <span>Стажёр</span>
                                        </div>
                                    </div>
                                </div>
                                <p className="description" >
                                    Мои первые шаги в сфере программирования.
                                    Проходил не оплачиваемую интернатуру в веб-студии UpSite,
                                    сейчас это уже Up-Sales.
                                    Осуществлял вёрстку сайтов по макетам,
                                    исправлял ошибки в вёрстке уже существующих проектов.
                                </p>
                            </div>


                            <div className="item">
                                <div className="left_block">
                                    <span className="date" >01/2019 - 11/2019</span>
                                    <div className="img_info" >
                                        <img src={phobosys} alt="" />
                                        <div className="info" >
                                            <span>Phobosys</span>
                                            <span>Junior Front End</span>
                                        </div>
                                    </div>
                                </div>
                                <p className="description" >
                                    А в этой компании я метил на Junior React.
                                    Как только пришёл, дали работу верстать с использованием React.
                                    Кроме реакта, я верстал и добавлял темы для site builder
                                    (что-то похожее на Wix). Еще занимался немного тестами с
                                    использованием Mocha, Chai
                                </p>
                            </div>

                            <div className="item">
                                <div className="left_block">
                                    <span className="date" >03/2021 - 07/2022</span>
                                    <div className="img_info" >
                                        <img src={cpa} alt="" />
                                        <div className="info" >
                                            <span>*Affiliate Marketing</span>
                                            <span>Mediabayer</span>
                                        </div>
                                    </div>
                                </div>
                                <p className="description" >
                                    С другом основали команду по арбитражу трафика,
                                    я был тимлидом. Занимались трафиком в
                                    FaceBook. В моменте было 20 сотрудников и офис в Стамбуле.
                                    Очень редко, по возможности - я верстал простые лендинги,
                                    для товара на который мы лили трафик
                                </p>
                            </div>

                        </div>
                    </section>

                    <section className="skills" >
                        <h1 className="title_right_section" >Tools/Skills</h1>

                        <div className="wrapper_skills">

                            <Swiper
                                grabCursor={true}
                                pagination={{
                                    clickable: true,
                                }}

                                effect={"creative"}

                                creativeEffect={{
                                    prev: {
                                        shadow: false,
                                        translate: [0, 0, -400],
                                    },
                                    next: {
                                        translate: ["100%", 0, 0],
                                    },
                                }}

                                modules={[EffectCreative, Pagination]}
                                className="mySwiper"
                            >
                                <SwiperSlide className="swiper-element ">

                                    <ul className="skills_img" >
                                        <li className="skill ">
                                            <img src={react} alt="" />
                                            <span>ReactJS</span>
                                        </li>

                                        <li className="skill">
                                            <img src={javascript} alt="" />
                                            <span>JavaScript</span>
                                        </li>

                                        <li className="skill">
                                            <img src={webpack} alt="" />
                                            <span>Webpack</span>
                                        </li>

                                        <li className="skill">
                                            <img src={npm} alt="" />
                                            <span>npm</span>
                                        </li>

                                        <li className="skill">
                                            <img src={scss} alt="" />
                                            <span>SCSS</span>
                                        </li>

                                        <li className="skill">
                                            <img src={css} alt="" />
                                            <span>CSS</span>
                                        </li>

                                        <li className="skill">
                                            <img src={html} alt="" />
                                            <span>HTML</span>
                                        </li>

                                        <li className="skill">
                                            <img src={python} alt="" />
                                            <span>Python</span>
                                        </li>




                                    </ul>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-element ">

                                    <div className="wrapper_description" >
                                        <ul className="description_skills" >
                                            <li>- Есть хороший опыт работы с React/JavaScript/CSS/HTML</li>
                                            <li>- Могу собрать проект с использованием WebPack</li>
                                            <li>- Умею пользоваться пакетами npm</li>
                                            <li>- Верстаю с использованием предпроцессора SCSS</li>
                                            <li>- Python знаю на базовом уровне</li>
                                        </ul>

                                    </div>
                                </SwiperSlide>

                            </Swiper>

                        </div>
                    </section>

                    <section className="latest_projects" >
                        <h1 className="title_right_section" >Latest projects</h1>

                        <div className="wrapper_projects">
                            <Swiper
                                slidesPerView={'auto'}
                                spaceBetween={30}
                                freeMode={true}

                                modules={[FreeMode]}
                                className="mySwiper" >
                                <SwiperSlide className="swiper-element ">
                                    <a href="https://bogdaryan.github.io/borvo/#">
                                        <img src={site_1} />
                                    </a>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-element" >

                                    <a href="https://bogdaryan.github.io/clickable-test/">
                                        <img src={site_2} />
                                    </a>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-element" >

                                    <a href="https://bogdaryan.github.io/tajam/">
                                        <img src={site_3} />
                                    </a>
                                </SwiperSlide>

                                <SwiperSlide className="swiper-element" >
                                    <a href="https://bogdaryan.github.io/resume/">
                                        <img src={site_4} />
                                    </a>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </section>
                </div>
            </section>
        );
    }
}

//
// https://bogdaryan.github.io/tajam/
// https://bogdaryan.github.io/clickable-test/