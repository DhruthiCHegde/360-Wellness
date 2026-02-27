const modalData = {
    mental: [
        {
            id: 'safe-workspace',
            title: 'Safe Workspace',
            category: 'Respectful Env',
            sidebar: 'SAFE',
            desc: 'A Healthy Mind for a Happy Life',
            points: [
                'Committed to a safe and respectful workplace',
                'Zero tolerance for harassment',
                'Safe environment for all employees'
            ],
            color: '#3a86ff',
            image: '/images/Mental/safe_workspace.png',
            charColor: 'radial-gradient(circle at 30% 30%, #4895ef, #3a86ff)',
            shadow: '0 0 80px rgba(58, 134, 255, 0.6)'
        },
        {
            id: 'leave-program',
            title: 'Leave Program',
            category: 'Recharge',
            sidebar: 'LEAVE',
            desc: 'Time off to recharge and celebrate life\'s moments.',
            points: [
                '15 Days of Privilege Leave (45 days carry-over)',
                '12 Days of Medical Leave',
                '1 Day Birthday Leave',
                '1 Day Marriage Leave',
                '3 Days Bereavement Leave',
                '26 Weeks Maternity Leave',
                '15 Days Paternity / Adoption Leave',
                'Compensatory Off - Extra time for your hard work'
            ],
            color: '#4361ee',
            image: '/images/Mental/leave.png',
            charColor: 'radial-gradient(circle at 30% 30%, #4cc9f0, #4361ee)',
            shadow: '0 0 80px rgba(67, 97, 238, 0.6)'
        },
        {
            id: 'wellness-sessions',
            title: 'Wellness Sessions',
            category: 'Mindfulness',
            sidebar: 'ZEN',
            desc: 'Daily meditation and mindfulness webinars.',
            points: [
                'Daily guided meditation',
                'Stress-relief sessions',
                'Mindfulness webinars'
            ],
            color: '#7209b7',
            image: '/images/Mental/wellness_sessions.png',
            charColor: 'radial-gradient(circle at 30% 30%, #b5179e, #7209b7)',
            shadow: '0 0 80px rgba(114, 9, 183, 0.6)'
        },
        {
            id: 'recognition',
            title: 'Recognition',
            category: 'Excellence',
            sidebar: 'PROUD',
            desc: 'Celebrating excellence and team spirit.',
            points: [
                'FYERS Champion - Individual Excellence',
                'FYERS FORCE - Team Excellence',
                'SPOT Awards: Values Ambassador, Rising Star, Flash of Brilliance, Exceptional Team Player',
                'THANK Anyone @ FYERS - Appreciation matters'
            ],
            color: '#ffbe0b',
            image: '/images/Mental/recognition.png',
            charColor: 'radial-gradient(circle at 30% 30%, #ffca3a, #ffbe0b)',
            shadow: '0 0 80px rgba(255, 190, 11, 0.6)'
        },
        {
            id: 'family-support',
            title: 'Family Support',
            category: 'Assistance',
            sidebar: 'FAMILY',
            desc: 'Assistance for working parents and creche benefits.',
            points: [
                '₹8,000 Monthly Childcare Assistance (until child is 6)',
                'Creche support for working parents'
            ],
            color: '#fb5607',
            image: '/images/Mental/family_support.png',
            charColor: 'radial-gradient(circle at 30% 30%, #ff70a6, #fb5607)',
            shadow: '0 0 80px rgba(251, 86, 7, 0.6)'
        },
        {
            id: 'grievance-help',
            title: 'Grievance Help',
            category: 'Resolution',
            sidebar: 'HELP',
            desc: 'Swift resolutions and transparent communication.',
            points: [
                'Ensuring transparency with swift resolutions',
                'Direct access: membergrievances@fyers.in'
            ],
            color: '#ff006e',
            image: '/images/Mental/grievance.png',
            charColor: 'radial-gradient(circle at 30% 30%, #ff5c8a, #ff006e)',
            shadow: '0 0 80px rgba(255, 0, 110, 0.6)'
        }
    ],
    physical: [
        {
            id: 'fitness-centers',
            title: 'Fitness Centers',
            category: 'Active',
            sidebar: 'FIT',
            desc: 'Stay Active, Stay Energized',
            points: [
                'Access to 5000+ Cult & Fiternity centers',
                'Nationwide reach for all employees'
            ],
            color: '#fb5607',
            image: '/images/Physical/fitness.png',
            charColor: 'radial-gradient(circle at 30% 30%, #ffbe0b, #fb5607)',
            shadow: '0 0 80px rgba(251, 86, 7, 0.6)'
        },
        {
            id: 'game-on',
            title: 'Game On',
            category: 'Events',
            sidebar: 'GAME',
            desc: 'Inter-team events: Cricket, Badminton & more.',
            points: [
                'Cricket, Badminton, Snooker, Table Tennis & More',
                'Thrilling Inter-Team Events'
            ],
            color: '#ff006e',
            image: '/images/Physical/game_on.png',
            charColor: 'radial-gradient(circle at 30% 30%, #ff5c8a, #ff006e)',
            shadow: '0 0 80px rgba(255, 0, 110, 0.6)'
        },
        {
            id: 'wellness-hub',
            title: 'Wellness Hub',
            category: 'Health',
            sidebar: 'HUB',
            desc: 'Doctor on call with Practo and health screenings.',
            points: [
                'Doctor on Call With Practo',
                'Vision, Dental Check-Ups with Ethika',
                'Health screenings'
            ],
            color: '#ef233c',
            image: '/images/Physical/wellness.png',
            charColor: 'radial-gradient(circle at 30% 30%, #d90429, #ef233c)',
            shadow: '0 0 80px rgba(239, 35, 60, 0.6)'
        },
        {
            id: 'healthy-meals',
            title: 'Healthy Meals',
            category: 'Nutrition',
            sidebar: 'EAT',
            desc: 'Subsidized nutritious meals in our offices.',
            points: [
                'Highly subsidized nutritious meals',
                'Available in all Bengaluru offices'
            ],
            color: '#38b000',
            image: '/images/Physical/healthy_meals.png',
            charColor: 'radial-gradient(circle at 30% 30%, #70e000, #38b000)',
            shadow: '0 0 80px rgba(56, 176, 0, 0.6)'
        },
        {
            id: 'women-care',
            title: 'Women Care',
            category: 'Hygiene',
            sidebar: 'CARE',
            desc: 'Eco-friendly hygiene solutions in all restrooms.',
            points: [
                'Eco-friendly hygiene solutions',
                'Commitment to women\'s wellness'
            ],
            color: '#ff70a6',
            image: '/images/Physical/women.png',
            charColor: 'radial-gradient(circle at 30% 30%, #ff99c8, #ff70a6)',
            shadow: '0 0 80px rgba(255, 112, 166, 0.6)'
        }
    ],
    financial: [
        {
            id: 'insurance-cover',
            title: 'Insurance Cover',
            category: 'Protection',
            sidebar: 'COVER',
            desc: 'Medical, Accident, and Term insurance for peace of mind.',
            points: [
                'Group Medical Insurance ₹5,0,000',
                'Personal Accident Insurance ₹30,0,000',
                'Term Insurance 3 times Base Salary'
            ],
            color: '#8338ec',
            image: '/images/Financial/insurance.png',
            charColor: 'radial-gradient(circle at 30% 30%, #c19ee0, #8338ec)',
            shadow: '0 0 80px rgba(131, 56, 236, 0.6)'
        },
        {
            id: 'retirement',
            title: 'Retirement',
            category: 'Stability',
            sidebar: 'GOLD',
            desc: 'PF and Gratuity for long-term financial stability.',
            points: [
                'Provident Fund (PF)',
                'Gratuity for long-term stability'
            ],
            color: '#3f37c9',
            image: '/images/Financial/retirement.png',
            charColor: 'radial-gradient(circle at 30% 30%, #4895ef, #3f37c9)',
            shadow: '0 0 80px rgba(63, 55, 201, 0.6)'
        },
        {
            id: 'car-lease',
            title: 'Car Lease',
            category: 'Lifestyle',
            sidebar: 'DRIVE',
            desc: 'Exclusive plans to drive in style (Level 6 & above).',
            points: [
                'Exclusive Car Lease Plans',
                'Available for Level 6 & above'
            ],
            color: '#ef233c',
            image: '/images/Financial/car-lease.png',
            charColor: 'radial-gradient(circle at 30% 30%, #d90429, #ef233c)',
            shadow: '0 0 80px rgba(239, 35, 60, 0.6)'
        },
        {
            id: 'referral-bonus',
            title: 'Referral Bonus',
            category: 'Bonus',
            sidebar: 'EARN',
            desc: 'Earn up to ₹60,000 by referring talented peers.',
            points: [
                'Earn up to ₹60,000 for Tech roles',
                'Earn ₹30,000 for Non-Tech roles'
            ],
            color: '#ffbe0b',
            image: '/images/Financial/refer.png',
            charColor: 'radial-gradient(circle at 30% 30%, #ffca3a, #ffbe0b)',
            shadow: '0 0 80px rgba(255, 190, 11, 0.6)'
        },
        {
            id: 'webinars',
            title: 'Financial Webinars',
            category: 'Logic',
            sidebar: 'INFO',
            desc: 'Expert-led sessions on budgeting and investments.',
            points: [
                'Expert-led budgeting sessions',
                'Investment and wealth creation guidance'
            ],
            color: '#00b4d8',
            image: '/images/Financial/webinar.png',
            charColor: 'radial-gradient(circle at 30% 30%, #90e0ef, #00b4d8)',
            shadow: '0 0 80px rgba(0, 180, 216, 0.6)'
        }
    ]
};

export default modalData;
