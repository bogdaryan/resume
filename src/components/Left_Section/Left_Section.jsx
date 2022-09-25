import React, { Component } from "react";
import {
    img_resume,
    email_icon,
    github,
    inst,
    telegram,
    flag_uk,
    music,
    book
} from "@/img_video";

export default class Left_Section extends React.PureComponent {
    render() {
        return (
            <section className="left_section" >
                <div className="left_wrapper" >
                    <section className="info_section" >
                        <span id="img_resume" style={{ 'backgroundImage': `url(${img_resume})` }} ></span>
                        <span className="name">Богдан</span>
                        <p className="about_me" >
                            С другой стороны, укрепление и развитие внутренней
                            структуры предоставляет широкие возможности для направлений
                            прогрессивного развития. Являясь всего лишь частью общей
                            картины, акционеры крупнейших компаний описаны максимально
                            подробно.
                        </p>
                    </section>
                    <div className="gray_line"></div>

                    <div className="email block_decor" >
                        <div className="img_email" style={{ "content": `url(${email_icon})` }} ></div>
                        <div className="text" >
                            <span   >Email</span>
                            <span>bogdan10050@gmail.com</span>
                        </div>
                    </div>

                    <div className="gray_line"></div>

                    <section className="social_links" >
                        <div className="social_wrapper ">
                            <div className="block_decor">
                                <a href="https://www.instagram.com/bogdaryan/">
                                    <img src={inst} alt="img" />
                                    <div className="text" >
                                        <span >Instagram</span>
                                        <span>@bogdaryan</span>
                                    </div>
                                </a>
                            </div>
                            <div className="block_decor">
                                <a href="https://github.com/bogdaryan">
                                    <img src={github} alt="img" />
                                    <div className="text" >
                                        <span >GitHub</span>
                                        <span>@bogdaryan</span>
                                    </div>
                                </a>
                            </div>
                            <div className="block_decor">
                                <a href="tg://resolve?domain=wildcandy">
                                    <img src={telegram} alt="img" />
                                    <div className="text" >
                                        <span >Telegram</span>
                                        <span>@wildcandy</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </section>

                    <div className="gray_line"></div>

                    <section className="languages" >
                        <h1 className="gray_title" >Languages</h1>

                        <div className="wrapper_languages">
                            <div className="block_decor" >
                                <img src={flag_uk} alt="img" />
                                <div className="text" >
                                    <span>English</span>
                                    <span >Разговорный ~B1</span>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="hobbies" >
                        <h1 className="gray_title" >Hobbies & Interests</h1>

                        <div className="wrapper_languages">
                            <div className="item" >
                                <img src={music} alt="" />
                                <span>Music</span>
                            </div>
                            <div className="item" >
                                <img src={book} alt="" />
                                <span>Psychology</span>
                            </div>
                        </div>
                    </section >

                    <section className="details" >
                        <h1 className="gray_title" >Personal Details</h1>

                        <div className="wrapper_details">
                            <span>D.O.B.: </span>
                            <span>29-04-2000</span>
                        </div>
                    </section >

                </div>
            </section>
        );
    }
}