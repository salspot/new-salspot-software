import React from 'react';

const Card = ({ heading, subheading, desc, numberbg }) => (
    <li className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
        <figure>
            <figcaption>
                <div className="fig-block">
                    <h4 className="heading">{heading}</h4>
                    <div className="subheading">{subheading}</div>
                    <div className="desc">{desc}</div>
                    <div className="numberbg">{numberbg}</div>
                </div>
            </figcaption>
        </figure>
    </li>
);

const CardWrapper = ({ cards }) => (
    <div className="card-wrapper">
        <ul className="card impact">
            {cards.map((card, index) => (
                <Card key={index} {...card} />
            ))}
        </ul>
    </div>
);

const Intro = ({ title, subtitle, cards }) => (
    <section className="module light intro">
        <article className="container">
            <div className="row">
                <div className="col-lg-9 col-md-11 col-sm-8 col-xs-12">
                    <div className="title">{title}</div>
                    <h2>{subtitle}</h2>
                </div>
            </div>
            <div className="row">
                <CardWrapper cards={cards} />
            </div>
        </article>
    </section>
);

export default Intro;
