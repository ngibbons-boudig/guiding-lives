/**
 * Copy from the client's "Our Model" infographic, verbatim.
 * See docs/handoff/DESIGN-BRIEF.md — do not reword without Shelley's say-so.
 */
import type { IconName } from '../components/Icon.astro';

export const strapline = 'Connection first. Learning follows.';
export const positioning = 'Supporting young people and families to build safer, brighter futures';

export const modelTitle = 'A holistic, trauma-informed approach to mentoring and support';
export const modelIntro =
	'At Guiding Lives, we believe lasting change happens when young people feel safe, connected and understood. Our model places the young person at the centre, with a network of support around them — and strong foundations beneath them.';

export const centre = { title: 'The Young Person', tagline: 'Seen, heard, valued' };

export interface SupportArea {
	title: string;
	icon: IconName;
	points: string[];
}

/** In the order the desktop tree lays them out: row 1, then either side of the centre, then below. */
export const supportAreas: SupportArea[] = [
	{
		title: 'Emotional Wellbeing',
		icon: 'lotus',
		points: ['Regulation', 'Confidence', 'Emotional awareness', 'Coping strategies'],
	},
	{
		title: 'Family & Carers',
		icon: 'family',
		points: ['Understanding', 'Communication', 'Shared strategies', 'Reduced pressure'],
	},
	{
		title: 'Education & Learning',
		icon: 'book',
		points: ['Re-engagement', 'Alternative pathways', 'Learning readiness', 'Meaningful goals'],
	},
	{
		title: 'Community & Nature',
		icon: 'leaf',
		points: ['Safe spaces', 'Interests', 'Independence', 'Real-world experiences'],
	},
	{
		title: 'Professional Network',
		icon: 'network',
		points: ['Schools / AP', 'Local Authority', 'Social care', 'Health professionals'],
	},
	{
		title: 'Relationships & Trust',
		icon: 'handshake',
		points: ['Consistency', 'Positive connection', 'Safe adults'],
	},
];

export const foundations: { title: string; icon: IconName }[] = [
	{ title: 'Safeguarding', icon: 'shield' },
	{ title: 'Trauma-informed practice', icon: 'heart' },
	{ title: 'Professional boundaries', icon: 'people' },
	{ title: 'Training & supervision', icon: 'cap' },
	{ title: 'Consistency', icon: 'cycle' },
	{ title: 'Collaboration', icon: 'handshake' },
	{ title: 'Accountability', icon: 'document' },
];

export const moreThanMentoring = {
	title: 'More than mentoring…',
	body: 'We work with the whole system — supporting not just the young person, but their family and the wider network around them.',
	items: [
		{ title: 'Individualised support', icon: 'heart' },
		{ title: 'Nature-based experiences', icon: 'leaf' },
		{ title: 'Flexible, home-based sessions', icon: 'house' },
		{ title: 'Trauma-informed mentor matching', icon: 'people' },
		{ title: 'Professional standards and safeguarding at every step', icon: 'shield' },
	] as { title: string; icon: IconName }[],
};

export const closingLine = 'Because every young person deserves to feel connected, capable and hopeful.';
