import React, { Component } from "react";
import {
    up_site,
    phobosys,
    cpa,
} from "@/img_video";

export default class Right_Section extends React.PureComponent {
    render() {
        return (
            <section className="right_section" >
                <h1>Junior Front End</h1>

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
                                    С другой стороны, укрепление и развитие внутренней
                                    структуры предоставляет широкие возможности для
                                    направлений прогрессивного развития.
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
                                    С другой стороны, укрепление и развитие внутренней
                                    структуры предоставляет широкие возможности для
                                    направлений прогрессивного развития.
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
                                    С другой стороны, укрепление и развитие внутренней
                                    структуры предоставляет широкие возможности для
                                    направлений прогрессивного развития.
                                </p>
                            </div>

                        </div>
                    </section>


                </div>
            </section>
        );
    }
}