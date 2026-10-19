import React from 'react';
import {profile} from '../content';

export default function ReactionsBlock() {
    return <section className="section reactions-block" aria-labelledby="reactions-title">
        <div>
            <p className="eyebrow">Reacties</p>
            <h2 id="reactions-title">Wat is jouw ervaring?</h2>
            <p>Heb je een vraag over dit verhaal, een aanvulling of een ervaring die je wilt delen? Ik hoor graag van je.</p>
        </div>
        <div className="reaction-form">
            <iframe src={profile.contactFormUrl}
                    title="Reactieformulier World of CIAM"
                    loading="lazy"/>
            <p>Laadt het formulier niet? <a className="text-link" href={profile.contactFormUrl}
                                          target="_blank" rel="noopener noreferrer">Open het reactieformulier in een nieuw tabblad ↗</a></p>
        </div>
    </section>;
}
