export const plans = [
    {
        chip: 'Starter',
        title: 'Free',
        listItems: [
            'Free Profile',
            'Free CV And Resume Templates',
            'Professional tailored document ',
            'AI CV Writer',
            'AI Resume Writer',
            'One Document Collection',
            'Export and Download as .docx',
            '10 AI credits',
        ],
        price: 0,
        priceDescription: 'euro',
        buttonText: 'Try now',
        buttonLink: '/signup',
    },
    {
        chip: 'Basic',
        title: 'One Shot',
        listItems: [
            'Profile Data From Document',
            'Professional Templates',
            'AI CV Writer',
            'AI Resume Writer',
            'AI Key-Words Match',
            'One Document Collection',
            'Export and Download as .docx',
            '20 AI Credit',
        ],
        price: 9,
        priceDescription: 'euro per set',
        buttonText: 'Buy a plan',
        buttonLink: '/signup',
    },
    {
        chip: 'Advanced',
        title: 'Pro Active',
        listItems: [
            'Profile Data From Document',
            'AI CV Writer',
            'AI Resume Writer',
            'AI Key-Words Match',
            'AI Company Culture Analysis',
            'AI check & refine on uploaded doc',
            '30 complete document sets',
            '500 AI credits',
        ],
        price: 25,
        priceDescription: 'euro per bundle',
        buttonText: 'Buy a plan',
        buttonLink: '/signup',
    },
];

export const plansTableChecks = [
    {
        title: 'Free profile',
        free: true,
        oneShot: true,
        proActive: true,
    },
    {
        title: 'AI Profile builder from docs',
        free: false,
        oneShot: true,
        proActive: true,
    },
    {
        title: 'Free CV and resume templates',
        free: true,
        oneShot: true,
        proActive: true,
    },
    {
        title: 'Pro CV and resume templates',
        free: false,
        oneShot: true,
        proActive: true,
    },
    {
        title: 'AI CV writer',
        free: true,
        oneShot: true,
        proActive: true,
    },
    {
        title: 'AI Resume writer',
        free: true,
        oneShot: true,
        proActive: true,
    },
    {
        title: 'AI finetune with job position from link',
        free: true,
        oneShot: true,
        proActive: true,
    },
    {
        title: 'AI finetune with company culture from link',
        free: true,
        oneShot: true,
        proActive: true,
    },
    {
        title: 'AI key-words documents match',
        free: false,
        oneShot: true,
        proActive: true,
    },
    {
        title: 'Export and download as .docx',
        free: true,
        oneShot: true,
        proActive: true,
    },
    {
        title: 'Maximal AI tailored document sets',
        free: '1',
        oneShot: '1',
        proActive: '30',
    },
    {
        title: 'Validity period',
        free: 'once',
        oneShot: '14 days',
        proActive: '30 days',
    },
];
