/**
 * Copy from Shelley's previous site (guidinglivesmentoringsupport.co.uk),
 * recovered from its database backup, Oct 2026. Kept as written; Shelley
 * has said she'll send wording tweaks. The old site speaks in the first
 * person ("I"), the new infographic copy in src/data/model.ts uses "we".
 */
import type { IconName } from '../components/Icon.astro';

export const welcome = {
	eyebrow: 'Welcome to Guiding Lives Youth Mentoring',
	title: 'Every young person deserves the chance to feel seen, supported, and valued.',
	body: [
		'Through Guiding Lives Youth Mentoring, I offer one-to-one mentoring for young people aged 11 to 18 who may be experiencing anxiety, trauma, emotionally based school avoidance (EBSA), or difficulties with self-esteem and confidence.',
		'My mentoring approach blends practical support with holistic tools to nurture emotional well-being and personal development. Every session is flexible and tailored to the young person’s needs — whether that’s outdoors, in the community, at home, or online.',
	],
	stat: '15 years of experience',
};

export const about = {
	greeting: 'Hi, I’m Shelley',
	role: 'Therapeutic Support Practitioner, Residential Childcare Professional and Mentor',
	body: [
		'As a Therapeutic Support Practitioner, Residential Childcare Professional, and Mentor with over fifteen years of experience, I’ve dedicated my career to helping young people who face emotional and behavioural challenges feel safe, understood, and empowered to grow.',
		'My own teenage daughter has been in alternative education for the past year. From first-hand experience, I understand the worries surrounding rising anxiety, volatile friendship groups, exposure to concerning online influences, and the everyday struggle to keep a young person engaged in learning and motivated to try new things.',
		'I combine traditional behaviour management techniques with holistic, trauma-informed care to support the whole person. Every young person is unique, so each mentoring session is carefully tailored to their needs and comfort level. Sessions can take place outdoors, in the community, or at home — wherever they feel most comfortable and open to connection.',
	],
	approach: [
		{ title: 'Trauma-informed Mentoring', icon: 'heart', body: 'Understanding behaviour through empathy rather than judgment' },
		{ title: 'Holistic Support', icon: 'lotus', body: 'Incorporating mindfulness, breathwork, and creative expression to promote calm and self-awareness' },
		{ title: 'Individualised Education Pathways', icon: 'book', body: 'Supporting home learning, flexi-schooling, and alternative education options that best suit each young person’s situation and learning style' },
		{ title: 'Family Collaboration', icon: 'family', body: 'Working closely with parents and carers to strengthen communication and stability within the home' },
	] as { title: string; icon: IconName; body: string }[],
	approachOutro:
		'This blend of practical guidance and emotional support encourages confidence, resilience, and self-belief — essential foundations that help young people thrive both personally and educationally.',
	highlights: [
		{ icon: 'cap', text: 'Over fifteen years supporting young people' },
		{ icon: 'people', text: 'Therapeutic support and residential childcare background' },
		{ icon: 'shield', text: 'Enhanced DBS and annual safeguarding training' },
	] as { icon: IconName; text: string }[],
};

export const approach = {
	intro:
		'I use a mix of practical mentoring strategies and holistic tools to support emotional well-being and self-development. These sessions are always one-to-one and tailored to each young person’s needs and comfort level.',
	sessionsTitle: 'Depending on the individual, sessions may include:',
	sessions: [
		'Mindfulness and breath work to support calm, focus, and emotional regulation.',
		'Creative activities such as art, journaling, or crafts to encourage self-expression and reflection.',
		'Outdoor mentoring in natural settings that help build trust, grounding, and connection.',
		'Child-centred support built on empathy, patience, and genuine care.',
		'Adaptive mentoring that evolves as the young person grows and their needs change.',
	],
	sessionsOutro: 'Each mentoring session is personalised to meet the young person where they are — not where they’re expected to be.',
	flexibleTitle: 'A Flexible, Relationship-Based Model',
	flexible:
		'Many of the young people I work with find traditional education or therapeutic environments overwhelming. That’s why my mentoring approach is intentionally flexible and relational. Sessions can take place outdoors, at home or online, in the community, or in alternative education settings — wherever the young person feels safe and open to connection.',
	principles: [
		{ title: 'Child Centred', icon: 'heart', body: 'Building trust through empathy and genuine understanding.' },
		{ title: 'Holistic', icon: 'leaf', body: 'Considering each young person’s background, family life, and existing support plans.' },
		{ title: 'Collaborative', icon: 'handshake', body: 'Working alongside parents, carers, schools, and local authorities to create consistent, joined-up care.' },
		{ title: 'Adaptive', icon: 'cycle', body: 'Adjusting methods and goals as each young person’s needs evolve.' },
	] as { title: string; icon: IconName; body: string }[],
	whyTitle: 'Why Mentoring Matters',
	why: [
		'Today, more young people than ever are experiencing anxiety, trauma, and emotionally based school avoidance. Long waiting times for services such as CAMHS often leave families feeling helpless, with limited access to immediate support. Mentoring offers an alternative — not as a replacement for therapy, but as a complementary and approachable form of support that bridges the gap between home, school, and emotional well-being.',
		'Sessions often take place in relaxed, everyday settings, reducing pressure and allowing trust to develop naturally. This creates space for young people to feel authentic and at ease, which is often where the most meaningful progress begins.',
		'Mentoring acts as an early intervention that strengthens existing systems of care and helps young people remain engaged in learning — in whichever form best supports their well-being. It also eases the pressures faced by parents and carers, providing consistent, relational support that promotes stability and resilience.',
		'Through this work, I aim to create opportunities for young people to reconnect, rebuild confidence, and find their own path forward — one step at a time.',
	],
};

export const contactCopy = {
	title: 'Every journey starts with a conversation',
	body: [
		'If you’re a parent, carer, professional, or young person seeking support, I’m here to listen and help. I believe that meaningful change begins in a safe, understanding space where people feel valued and heard. Reaching out is the first step, and I aim to make that step as welcoming and reassuring as possible.',
		'Please use the form or get in touch directly by phone or email. I aim to respond within the same working day.',
	],
	cta: 'If you’re a parent, school, or local authority looking for youth mentoring services near you, I’d love to help. Reach out to Guiding Lives Youth Mentoring today, and together we can create the right environment for growth, confidence, and connection.',
};

/** Testimonials from the old site. Full text; `short` is the excerpt used on the home page. */
export const testimonials = [
	{
		who: 'A parent',
		short:
			'Shelley instantly made my daughter feel very at ease. After only a couple of visits from Shelley, my daughter was feeling brave enough to venture out… the difference Shelley has made to my daughter has been remarkable and we can’t thank her enough!',
		full: [
			'My daughter is autistic and suffers with extreme anxiety and panic disorder. I was hesitant at first when a mentor was recommended to get my daughter to start leaving the house and take steps to integrate into the big outside world.',
			'For several years she has been too anxious to leave the house and other professionals had been to the house to try and coax her out but had failed, so I was dubious about trying again with someone new.',
			'I needn’t have worried, Shelley instantly made my daughter feel very at ease. After only a couple of visits from Shelley, my daughter was feeling brave enough to venture out. They now go out weekly together and my daughter looks forwards to these visits. She has even started talking to new people whilst being out with Shelley, something she has struggled with for so long as well as even leaving the house. Her confidence is growing and has started to even come on walks etc.. with the family. It’s still a working progress but the difference Shelley has made to my daughter has been remarkable and we can’t thank her enough!',
		],
	},
	{
		who: 'Former line manager, Priory Education Services (later Aspris Children’s Services)',
		short:
			'Shelley is a true asset to any children’s service. Her therapeutic approach, combined with firm but fair boundaries, enables young people to grow in confidence and achieve their full potential.',
		full: [
			'I had the privilege of working as Shelley’s line manager for over seven years at Priory Education Services (later Aspris Children’s Services), from January 2016 through to August 2023. Shelley first joined the organisation in 2009 and, during that time, proved herself to be an invaluable and respected member of the team.',
			'Throughout her employment, Shelley consistently demonstrated dedication, professionalism, and compassion in her work with children and young people. She managed behavioural and pastoral challenges with calm confidence and always ensured that the correct policies and procedures were followed. Her leadership, guidance, and ability to act as a positive role model made her a pillar of strength within the team.',
			'Shelley’s interpersonal skills are exceptional. She supports and coaches less experienced staff with empathy and understanding while maintaining high standards of care and professionalism. Her communication and teamwork ensure that both staff and young people feel valued, heard, and supported.',
			'Shelley is a true asset to any children’s service. Her therapeutic approach, combined with firm but fair boundaries, enables young people to grow in confidence and achieve their full potential. She is caring, nurturing, and deeply committed to making a difference in the lives of those she supports.',
			'It was a pleasure to work alongside Shelley, and I can wholeheartedly recommend her to any organisation seeking a compassionate, skilled, and highly capable professional.',
		],
	},
];

export const safeguardingSummary =
	'All mentoring is carried out in line with UK safeguarding legislation. Enhanced DBS checked, with safeguarding training every year.';
