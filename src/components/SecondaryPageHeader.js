import React from 'react'

const SecondaryPageHeader = ({smallTitle, title, subtext, textButton, backgroundImage}) => {
  return (
    <header className="header">
      <div className="container-fluid">
        <div className="row headline">
          <div className="col-7 row">
            <div className="title">{smallTitle}</div>
            <h1 className="page-type">{title}</h1>
            <div className="skayline"></div>
            <div className="page-blurb">{subtext}
            </div>
          </div>
        </div>
      </div>
      {backgroundImage && <div>
        <div className="bg-overlay"></div>
        <div className="hero-image"></div>
      </div>}
    </header>
  )
}


export default SecondaryPageHeader
