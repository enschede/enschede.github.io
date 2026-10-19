import React from 'react';
import {profile} from '../content';

export default function ReactionsBlock() {
    return <section className="section reactions-block" aria-labelledby="reactions-title">
        <div>
            <p className="eyebrow">Reacties</p>
            <h2 id="reactions-title">Wat is jouw ervaring?</h2>
            <p>Heb je een vraag over dit verhaal, een aanvulling of een ervaring die je wilt delen? Ik hoor graag van je.</p>
        </div>
        <a className="button" href={profile.contactFormUrl || '#contact'}
           target={profile.contactFormUrl ? '_blank' : undefined}
           rel={profile.contactFormUrl ? 'noopener noreferrer' : undefined}>
            {profile.contactFormUrl ? 'Stuur een reactie' : 'Neem contact op'} <span aria-hidden="true">↗</span>
        </a>
    </section>;
}
