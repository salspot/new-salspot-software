import React from 'react';
import WhiteTechStackImage from '../../assets/images/white-tech-stack.png'
import WhiteTechStackImage2Lines from '../../assets/images/white-tech-stack-2-lines.png'

const ClientLogos = () => (
    <div className="row message-row">
        <span className="block-left">Technology experts</span>
        <span className="block-right">
        <img className="onerow img-responsive" src={WhiteTechStackImage} alt="Salspot Technology Stack"/>
        <img className="tworow img-responsive" src={WhiteTechStackImage2Lines} alt="Salspot Technology Stack"/>
        </span>
    </div>
)
export default ClientLogos
