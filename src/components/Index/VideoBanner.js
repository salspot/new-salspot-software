import React from 'react'
import { TextScramble } from './TextScramble';

const VideoBanner = () => {
    const phrasesToDecode = [
        'the world\'s leading companies.',
        'machine learning & augmented reality.',
        'crypto & nft marketplaces.',
        'fractional investing platforms.',
        'auction marketplaces & bidding platforms.',
        'healthcare & biotech.',
        'online hypermarkets & online stores'.,
        'smart devices & connected vehicles.',
        'think tanks, nonprofits, and NGOs.',
        'the media & entertainment industry.',
        'researchers and scientists.',
        'real-time collaboration platforms.'
    ];

    return (
        <div className="banner video-wrapper">
            <div className="container-fluid">
                <div className="video-blurb">
                    <div className="row">
                        <h1>Tech forward. Human focused.</h1>

                        <div className="tagline show-on-desktop ng-isolate-scope">We're a digital product agency <span className="highlight">advancing technology</span> for
                            <br></br>
                            <span className="textdecode">
                                <TextScramble phrasesToDecode={phrasesToDecode} />
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="video-block">
                <div className="video-block-container">
                    <div className="bg-overlay"></div>
                    <video loop autoPlay playsInline muted
                           src="https://scalio-assets.scaliolabs.com/assets/video/scalio-home-hero3-d5d2718c42.mp4"
                           type="video/mp4"
                           reveal="fadeIn"
                           data-sr-id="6"></video>
                </div>
            </div>
        </div>
    )
}

export default VideoBanner
