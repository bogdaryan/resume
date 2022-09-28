import React from "react";
import '@styles/index.scss'
import 'animate.css';

import Left_Section from "@/components/Left_Section/Left_Section.jsx";
import Right_Section from "@/components/Right_Section/Right_Section.jsx";

export default class Master extends React.PureComponent {
    render() {
        return (
            <>  
                <Left_Section />
                <Right_Section />
            </>
        );
    }
}

