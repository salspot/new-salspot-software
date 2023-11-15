import React from 'react'
import {GatsbyImage} from "gatsby-plugin-image";

const SecondaryPageHeader = ({
                               classNames,
                               headlineClassNames,
                               smallTitle,
                               title,
                               subtext,
                               textButton,
                               backgroundImageFlag,
                               imageFromContent
                             }) => {
  return (
    <header className={'header ' + `${classNames ? classNames : ''}`}>
      <div className="container-fluid">
        <div className="row headline">
          <div className={`${headlineClassNames ? headlineClassNames : "col-7 row"}`}>
            <div className="title">{smallTitle}</div>
            <h1 className="page-type">{title}</h1>
            <div className="skayline"></div>
            {subtext && <div className="page-blurb">{subtext}</div>}
          </div>
        </div>
      </div>
      {backgroundImageFlag && <>
        <div className="bg-overlay"></div>
        {imageFromContent ? <GatsbyImage className="hero-image" image={imageFromContent}/> :
          <img className="hero-image"></img>}
      </>}
    </header>
  )
}


export default SecondaryPageHeader
