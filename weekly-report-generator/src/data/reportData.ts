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
  weekNumber: 23,
  dateRange: '1 - 7 December 2025',
  
  cover: {
    images: [
      { src: '/images/AD30.png', alt: 'AD30 Dump Truck', className: 'absolute top-[35%] -translate-y-1/2 left-[5%] w-[40%] transform transition-transform hover:scale-105' },
      { src: '/images/ST14.png', alt: 'ST14', className: 'absolute top-[35%] -translate-y-1/2 right-[5%] w-[40%] transform transition-transform hover:scale-105' },
      { src: '/images/S2.png', alt: 'S2', className: 'absolute top-[70%] -translate-y-1/2 left-[5%] w-[40%] transform transition-transform hover:scale-105' },
      { src: '/images/Winder.png', alt: 'Winder - Shafts & Winders', className: 'absolute top-[70%] -translate-y-1/2 right-[5%] w-[40%] transform transition-transform hover:scale-105' },
      { src: '/images/cover-logo.png', alt: 'Logo', className: 'absolute top-[88%] left-1/2 -translate-x-1/2 w-1/4' }
    ],
  },
  footerSrc: '/images/Footer.png',
  heal: {
    highlights: [
      { site: 'Gloria', text: 'DT 96% and FL 92% availability; strong overall performance at 84%.' },
      { site: 'Gloria', text: 'Safe replacement of 54H conveyor.' },
      { site: 'N2', text: '2West plant fire suppression commissioned; HD 90%, RT 88%, SR 96% above target.' },
      { site: 'N3', text: 'DT 86%, FL 89%, SR 92% above target; FL BEV 93%; CAS L9 progressing.' },
      { site: 'N3', text: 'Best production performance for FY; HD0070 (S2) delivered.' },
    ],
    lowlights: [
      { site: 'Gloria', text: 'SR 64% critical (SR0037 brakes); Plant SCADA comms failure resulting in lost shift.' },
      { site: 'Gloria', text: 'Grizzly beam failure @ 74N Tip; CAS L9 related breakdowns; Sat tip Hammer delivery delayed.' },
      { site: 'N2', text: 'DT 69% and FL 64% below target; UV84 decline incident (Dec 7).' },
      { site: 'N3', text: 'RT 81% below target; scaler property damage incident (Dec 4).' },
    ],
    emergingIssues: [
      { site: 'Gloria', text: 'SR0037 brakes persistent 7 days; requires urgent resolution.' },
      { site: 'Gloria', text: '9 West Dam water issues; TNC maintenance labour; Crusher gap (large rocks at plant).' },
      { site: 'N2', text: 'High absenteeism; slow CAS Level 9 commissioning progress.' },
      { site: 'N3', text: 'DT BEV Strata faults recurring; battery infrastructure optimization needed.' },
    ],
    priorities: [
      { site: 'Gloria', text: 'Resolve SR0037 brakes; maintain DT/FL strong performance.' },
      { site: 'Gloria', text: '9 West Dam cleaning & new dam support/pump installation.' },
      { site: 'N2', text: 'Repair DT/FL faults; accelerate CAS L9 commissioning.' },
      { site: 'N2', text: 'Focus on FL reliability.' },
      { site: 'N3', text: 'Resolve DT BEV Strata faults; optimize battery charging; complete CAS L9.' },
      { site: 'N3', text: 'Complete 2 remaining mechanical splices on 60CV01.' },
    ],
  },
  shaftsAndWinders: {
    production: {
      tonsPerHour: { value: 559, target: 523 },
      rockWinderAvailability: { value: 95, target: 95 },
    },
    heal: {
      highlights: [
        'SolRock Weekend No. 16 completed successfully.',
        'JoJo tanks installation: EMB preparing to start Monday 08 Dec 2025.'
      ],
      lowlights: [
        'Rigger ropesman position still at recommendation stage; motivation required for over-complement.',
        'Nch3 PW horn actuator faulty after 20+ years; removed for refurbishment.'
      ],
      emergingIssues: [
        'Low complement of fitters and riggers continues straining mechanical section.',
        'Massive impact of providing full maintenance of changehouses across all 3 shafts.'
      ],
      priorities: [
        'Shaft repair work with SolRock team—Weekend No. 17.',
        'Employee engagement and resignations; IDP sessions with team.',
        'Assist with 3rd Quarter Safety Campaign.',
        'Shaft exam with Machinery Inspector; shaft dewatering pump tests; DMPR instructions.'
      ],
    },
  },
  sites: {
    gloria: {
      name: 'Gloria',
      trendChart: {
        src: '/images/Week23/Gloria Weekly Availability Chart Week 23.png',
        comment: 'Week 23: SR critical 64% (SR0037 brakes 7 days). DT 96%, FL 92% strong. Grizzlies maintenance Dec 1-2. Weekend waste removal Dec 7.',
      },
      safety: { status: 'Good', details: '' },
      weeklyAverage: { value: 84, target: 85 },
      serviceCompliance: { status: 'Issues', details: 'DT 100%, FL 100%, HD 50% (HD69 not serviced), RT 100%, SR 100%, Support 75%.' },
      availability: [
        { label: 'DT', percentage: 96, target: 85 },
        { label: 'FL', percentage: 92, target: 85 },
        { label: 'HD', percentage: 87, target: 85 },
        { label: 'RT', percentage: 90, target: 85 },
        { label: 'SR', percentage: 64, target: 85 }
      ],
      keyBreakdowns: [
        { equipment: 'SR', details: ['SR0037 brakes (7 days persistent); SR0040 fire suppression intermittent.'] },
        { equipment: 'HD', details: ['HD0060 alternator (Dec 6); UV0068 fuel pump awaiting OEM Deutz.'] },
      ],
    },
    n2: {
      name: 'Nchwaning 2',
      trendChart: {
        src: '/images/Week23/N2 Weekly Availability Chart Week 23.png',
        comment: 'Week 23: DT/FL critical 65% avg. DT128 trans, DT121 gears (KH Diesel). FL86 brakes, FL102 axle chronic. HD/RT/SR strong 92-96%.',
      },
      safety: { status: 'Incident', details: 'UV84 slipped on oily surface in decline—drove into sidewall (Dec 7).' },
      weeklyAverage: { value: 80, target: 85 },
      serviceCompliance: { status: 'Good', details: 'DT 100%, FL 100%, HD 75%, RT 100%, SR 100%, Support 100%.' },
      availability: [
        { label: 'DT', percentage: 69, target: 85 },
        { label: 'FL', percentage: 64, target: 85 },
        { label: 'HD', percentage: 90, target: 85 },
        { label: 'RT', percentage: 88, target: 85 },
        { label: 'SR', percentage: 96, target: 85 }
      ],
      keyBreakdowns: [
        { equipment: 'DT', details: ['DT128 transmission (7 days, KH Diesel); DT121 gears (5+ days); DT120 config (Barlows).'] },
        { equipment: 'FL', details: ['FL86 brakes (7 days chronic); FL102 axle (6+ days); FL106 fire suppression.'] },
      ],
    },
    n3: {
      name: 'Nchwaning 3',
      trendChart: {
        src: '/images/Week23/N3 Weekly Availability Chart Week 23.png',
        comment: 'Week 23: RT 81% (RT0048 6 days). DT 86%, FL 89%, HD 88%, SR 92% above target. DT0149 Strata 6 days. Operator shortage Dec 7.',
      },
      safety: { status: 'Incident', details: 'Scaler bumped fire suppression pipe in workshop (Dec 4).' },
      weeklyAverage: { value: 88, target: 85 },
      serviceCompliance: { status: 'Good', details: 'DT Diesel 100%, FL Diesel 100%, DT BEV 100%, HD 80%, RT 100%, SR 60%, Support 67%, daily quality 100%.' },
      availability: [
        { label: 'DT-Diesel', percentage: 86, target: 85 },
        { label: 'FL-Diesel', percentage: 89, target: 85 },
        { label: 'HD', percentage: 88, target: 85 },
        { label: 'RT', percentage: 81, target: 85 },
        { label: 'SR', percentage: 92, target: 85 }
      ],
      keyBreakdowns: [
        { equipment: 'HD', details: ['HD0069 fail to start (4 days); HD0062 navigation; HD0052 cable/hydraulic (5 days).'] },
        { equipment: 'RT', details: ['RT0048 roll over/drifter (6 days); RT0054 injection hose (5 days).'] },
        { equipment: 'DT', details: ['DT0149 Strata (6 days persistent); DT0154 aircon/park brake; DT0146 battery.'] },
      ],
    }
  },
  bev: {
    name: 'BEV Fleet',
    availability: [
      { label: 'DT BEV', value: 83, target: 85 },
      { label: 'FL BEV', value: 93, target: 85 }
    ],
    serviceCompliance: [
      { label: 'DT BEV', value: 100 },
      { label: 'FL BEV', value: 100 }
    ],
    breakdowns: [
      {
        equipment: 'DT BEV',
        details: [
          'Dominant cause: Strata system faults (3rd party supplier) - DT149 multiple extended downtimes across all days.',
          'Top machines: DT149 (1D13H57min ongoing), DT146 (8H26min), DT150 (5H29min), DT163 (19H19min).',
          'Outstanding: DT162, FL113 connector audits; auxiliary motor spline grease campaign not completed.',
        ],
      },
      {
        equipment: 'FL BEV',
        details: [
          'Top causes: Strata faults (FL107: 2H47min, FL112: 23H02min).',
          'Mechanical: FL99 brake system (55min), FL98 TCU error (1H02min) and auto phasing fault (3H41min).',
          'Connector audits: 2 machines remaining (FL113, DT162); regen knob campaign to start.',
        ],
      },
    ],
    batteryThemes: [
      'Battery ratio: 10 B4 packs (6 ST14 machines, 1.6 ratio ✓); 12 B5 packs (above 1.6 ratio ✓). 19/23 working (83%).',
      'Battery subpack lockouts: Software bug causing over-current faults; 2 batteries awaiting Scania reset (VPX00026, VPX00031).',
      'Charger infrastructure: Multiple chargers missing 2X power modules (reduced capacity); BRM 10 offline needs SW upgrade.',
      'CCS connector cables: Posts 3, 6, 7 need replacement (high pin temp); new 300A cables received, spring kits on order.',
    ],
  },
};