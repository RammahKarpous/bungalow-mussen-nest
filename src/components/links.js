import home from '../assets/icons/home.svg';
import afbeelding from '../assets/icons/afbeelding.svg';
import map from '../assets/icons/map.svg';
import kalender from '../assets/icons/kalender.svg';
import fiets from '../assets/icons/fiets.svg';
import envelop from '../assets/icons/envelop.svg';

export const links = [
	{ to: '/', name: 'Home', icon: home },
	{ to: '/gallerij/tuin', name: 'Gallerij', icon: afbeelding },
	{ to: '/over-de-bungalow', name: 'Over de bungalow', icon: map },
	{ to: '/reserveren', name: 'Reserveren', icon: kalender },
	{ to: '/activiteiten/winkels', name: 'Activiteiten', icon: fiets },
	{ to: '/contact-ons', name: 'Contact ons', icon: envelop }
];

export const gallerijLinks = [
	{ to: '/gallerij/tuin', name: 'Tuin' },
	{ to: '/gallerij/woonkamer', name: 'Woonkamer' },
	{ to: '/gallerij/keuken', name: 'Keuken' },
	{ to: '/gallerij/slaapkamer', name: 'Slaapkamer' },
	{ to: '/gallerij/badkamer', name: 'Badkamer' },
	{ to: '/gallerij/hal', name: 'Hal' }
];

export const activiteitenLinks = [
	{ to: '/activiteiten/winkels', name: 'Winkels' },
	{ to: '/activiteiten/toeristisch', name: 'Toeristisch' },
	{ to: '/activiteiten/horeca', name: 'Horeca' }
];
