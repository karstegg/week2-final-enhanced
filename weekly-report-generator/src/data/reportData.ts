export interface Availability {
  label: string;
  percentage: number;
  target?: number;
}

export interface ReportData {
  weekNumber: number;
  dateRange: string;
  cover: {
    images: {
      src: string;
      alt: string;
      className: string;
    }[];
  };
  footerSrc: string;
  heal: {
    highlights: { site: string; text: string; }[];
    lowlights: { site: string; text: string; }[];
    emergingIssues: { site: string; text: string; }[];
    priorities: { site: string; text: string; }[];
  };
  shaftsAndWinders: {
    production: {
      tonsPerHour: { value: number; target: number };
      rockWinderAvailability: { value: number; target: number };
    };
    heal: {
      highlights: string[];
      lowlights: string[];
      emergingIssues: string[];
      priorities: string[];
    };
  };
  sites: {
    [key: string]: SitePerformance;
  };
  bev: {
    name: string;
    availability: { label: string; value: number; target: number }[];
    serviceCompliance: { label: string; value: number | null }[];
    breakdowns: { equipment: string; details: string[] }[];
    batteryThemes: string[];
  };
}

export interface SitePerformance {
  name: string;
  trendChart: {
    src: string;
    comment?: string;
  };
  safety: {
    status: 'Good' | 'Incident' | 'Concern';
    details: string;
  };
  weeklyAverage: { value: number; target: number };
  serviceCompliance: {
    status: 'Good' | 'Issues';
    details: string;
  };
  availability: Availability[];
  keyBreakdowns?: { equipment: string; details: string[] }[];
}

export const reportData: ReportData = {
  weekNumber: 1,
  dateRange: '30 June - 7 July',
  
  cover: {
    images: [
      { src: '/images/AD30.png', alt: 'AD30 Dump Truck', className: 'absolute top-[35%] -translate-y-1/2 left-[5%] w-[40%] transform transition-transform hover:scale-105' },
      { src: '/images/ST14.png', alt: 'ST14', className: 'absolute top-[35%] -translate-y-1/2 right-[5%] w-[40%] transform transition-transform hover:scale-105' },
      { src: '/images/S2.png', alt: 'S2', className: 'absolute top-[70%] -translate-y-1/2 left-[5%] w-[40%] transform transition-transform hover:scale-105' },
      { src: '/images/MT42B.png', alt: 'MT42B', className: 'absolute top-[70%] -translate-y-1/2 right-[5%] w-[40%] transform transition-transform hover:scale-105' },
      { src: '/images/cover-logo.png', alt: 'Logo', className: 'absolute top-[88%] left-1/2 -translate-x-1/2 w-1/4' }
    ],
  },
  footerSrc: '/images/Footer.png',
  heal: {
    highlights: [
      { site: 'Gloria', text: '[Gloria] TMM availability improved from 74% to 81%.' },
      { site: 'Gloria', text: '[Gloria] Exceeded monthly and yearly production tons by 947t & 1,031t.' },
      { site: 'Gloria', text: '[Gloria] Month to date 584t.' },
      { site: 'N2', text: '[N2] Delivery of 2 new scissor lifts.' },
      { site: 'N2', text: '[N2] Inspection conducted of 2 new scalers at Bell premises in Kuruman.' },
    ],
    lowlights: [
      { site: 'Gloria', text: '[Gloria] Scaler availability was 61% (SR0037 - E frame).' },
      { site: 'Gloria', text: '[Gloria] FL availability was 61% (FL0083 Speed sensor).' },
      { site: 'N2', text: '[N2] Plant stoppage of 5 hours due to field fault at 2West Plant.' },
      { site: 'N2', text: '[N2] Poor work done by Broncoh which resulted in FL106 having to stand for reworking.' },
    ],
    emergingIssues: [
    ],
    priorities: [
      { site: 'Gloria', text: '[Gloria] Aard to assist SR0037- Tail wheel cracked waiting parts.' },
      { site: 'Gloria', text: '[Gloria] GET for FL0119 to torque.' },
      { site: 'Gloria', text: '[Gloria] New 9 West dam to be completed.' },
      { site: 'Gloria', text: '[Gloria] Audit leak feeder by third part.' },
      { site: 'N2', text: '[N2] Replace faulty switchgear at 06Y sub.' },
      { site: 'N2', text: '[N2] Conduct over-inspections as per the instructions and guidance for the DMRE visit.' },
    ],
  },
  shaftsAndWinders: {
    production: {
      tonsPerHour: { value: 301, target: 525 },
      rockWinderAvailability: { value: 85.2, target: 85 },
    },
    heal: {
      highlights: [
        'Solrock Shaft Repair Work Weekend No.3_Done.',
        'Nch2 RW Speed Control Programmed.',
        'Quick Response from WJ to assist with Skip No. 4 Rubbing in Tipping Arrangement.',
      ],
      lowlights: [
        'Passing of WED (Moses Sebego).',
        'Skip No. 4 Rubbing in Tipping Arrangement.',
      ],
      emergingIssues: [
        'Low compliment of Fitters and Riggers in Mechanical Section.',
      ],
      priorities: [
        'Isometrix Actions_Close Out.',
        'Nch2 Main Fan No.1 Impeller and Bearings Replacement.',
        'Projects.',
        "VC's.",
        'Completing Fitter & Rigger Positions in Winder Mechanical Section.',
        'Shaft Repair Work with Solrock Team_Weekend No.4.',
        'DMPR Audit of Tuesday_Preparation.',
      ],
    },
  },
  sites: {
    gloria: {
      name: 'Gloria',
      trendChart: {
        src: '/images/Week1/Gloria Weekly Availability Chart - Week1.png',
        comment: 'Week Summary: Overall strong performance at 90%. FL and SR fleets below target due to maintenance issues.',
      },
      safety: { status: 'Good', details: '' },
      weeklyAverage: { value: 90, target: 85 },
      serviceCompliance: { status: 'Issues', details: 'DT 50%, HD 50%, RT 67% compliance. UV Precision Units and SR at 100%. Support Equipment at 0%.' },
      availability: [
        { label: 'DT', percentage: 98, target: 85 },
        { label: 'FL', percentage: 62, target: 85 },
        { label: 'HD', percentage: 94, target: 85 },
        { label: 'RT', percentage: 100, target: 85 },
        { label: 'SR', percentage: 98, target: 85 }
      ],
      keyBreakdowns: [
        { equipment: 'HD', details: ['HD0080 - Accu/Parallel cylinder'] },
        { equipment: 'FL', details: ['FL0081 - Bucket movement', 'FL0083 - Speed sensor'] },
        { equipment: 'SR', details: ['SR0037 - Tail wheel cracked'] },
      ],
    },
    n2: {
      name: 'Nchwaning 2',
      trendChart: {
        src: '/images/Week1/N2 Weekly Availability Chart - Week1.png',
        comment: 'Week Summary: No trend data available for Week 1. Limited equipment operational - major challenges across RT and FL fleets.',
      },
      safety: { status: 'Good', details: '' },
      weeklyAverage: { value: 60, target: 85 },
      serviceCompliance: { status: 'Issues', details: 'HD fleet at 50%, RT at 33%, Support Equipment at 67%. DT, FL and SR at 100%.' },
      availability: [
        { label: 'DT', percentage: 95, target: 85 },
        { label: 'FL', percentage: 0, target: 85 },
        { label: 'HD', percentage: 0, target: 85 },
        { label: 'RT', percentage: 0, target: 85 },
        { label: 'SR', percentage: 84, target: 85 }
      ],
      keyBreakdowns: [
        { equipment: 'FL', details: ['FL106 - Line boring', 'FL102 - Bucket maintenance'] },
        { equipment: 'RT', details: ['RT38 - Engine replacement', 'RT43 - Cowlerless (OEM call out)', 'RT56 - Transmission'] },
        { equipment: 'SR', details: ['No major breakdowns reported'] },
      ],
    },
    n3: {
      name: 'Nchwaning 3',
      trendChart: {
        src: '/images/Week1/N3 Weekly Availability Chart - Week1.png',
        comment: 'Week Summary: Overall strong performance at 86%. HD and DT fleets slightly below target due to cylinder and parts issues.',
      },
      safety: { status: 'Good', details: '' },
      weeklyAverage: { value: 86, target: 85 },
      serviceCompliance: { status: 'Good', details: 'All fleets at 100% except Support Equip Utility Foreman at 67%.' },
      availability: [
        { label: 'DT', percentage: 80, target: 85 },
        { label: 'FL', percentage: 96, target: 85 },
        { label: 'HD', percentage: 79, target: 85 },
        { label: 'RT', percentage: 89, target: 85 },
        { label: 'SR', percentage: 87, target: 85 }
      ],
      keyBreakdowns: [
        { equipment: 'HD', details: ['HD0056 - Red cylinder'] },
        { equipment: 'DT', details: ['DT0103 - Struts, swelling parts, not doing break test', 'DT0147 - Spill drive'] },
      ],
    }
  },
  bev: {
    name: 'BEV Fleet',
    availability: [
      { label: 'DT BEV', value: 83, target: 85 },
      { label: 'FL BEV', value: 94, target: 85 }
    ],
    serviceCompliance: [
      { label: 'DT BEV', value: 100 },
      { label: 'FL BEV', value: 100 }
    ],
    breakdowns: [
      {
        equipment: 'DT BEV',
        details: [
          'Top causes: Electrical/Auto Electrical System faults (88.5 hrs); Battery/flat battery delays (33.1 hrs); Charging issues (13.2 hrs).',
          'Top machines: DT0147 (Red stop lamp), DT0150 (Strata faults), DT0162 (No battery to charge), DT0171 (Weld mirror arm).'
        ]
      },
      {
        equipment: 'FL BEV',
        details: [
          'Top causes: Tyre bay delays (86.5 hrs); Boilermaker delays (23.4 hrs); Oil leak at battery bay (17.3 hrs).',
          'Top machines: FL0098 (Johannesburg info, rear tyres, tyre puncher), FL0113 (Tyre change), FL0108 (Hose, oil leak), FL0099 (Bucket, rear tyres).'
        ]
      }
    ],
    batteryThemes: [
      'All chargers and battery packs operational - no major issues reported.',
      'Fleet service compliance at 100% for both DT and FL BEV.',
      'Focus on operational delays rather than battery infrastructure.',
    ],
  },
};