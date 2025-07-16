import React from 'react';
import { AlertTriangle, BarChart2, Bolt, CheckCircle } from 'lucide-react';
import { SitePerformance } from '../../data/reportData';
import AvailabilityBar from '../shared/AvailabilityBar';
import Footer from '../shared/Footer';

interface SitePerformanceSlideProps {
  data: SitePerformance;
  footerSrc: string;
}

const slideStyle: React.CSSProperties = {
    width: '960px',
    height: '720px',
    margin: '0 auto 32px auto',
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white'
};

const SitePerformanceSlide: React.FC<SitePerformanceSlideProps> = ({ data, footerSrc }) => {
  const getWeeklyAverageStyles = () => {
    const value = data.weeklyAverage.value;
    const target = data.weeklyAverage.target;
    if (value >= target) {
      return { card: 'bg-green-50 border-green-200', text: 'text-green-700', targetText: 'text-green-500' };
    }
    if (value >= target - 2) {
      return { card: 'bg-yellow-50 border-yellow-200', text: 'text-yellow-700', targetText: 'text-yellow-500' };
    }
    return { card: 'bg-red-50 border-red-200', text: 'text-red-700', targetText: 'text-red-500' };
  };

  const getComplianceStyles = () => {
    if (data.serviceCompliance.status === 'Good') {
      return { card: 'bg-green-50 border-green-200', text: 'text-green-700', detailsText: 'text-green-600' };
    }
    return { card: 'bg-yellow-50 border-yellow-200', text: 'text-yellow-700', detailsText: 'text-yellow-600' };
  };

  const getSafetyStyles = () => {
    if (data.safety.status === 'Good') {
      return { card: 'bg-green-50 border-green-200', text: 'text-green-800', detailsText: 'text-green-700' };
    }
    return { card: 'bg-orange-100 border-orange-200', text: 'text-orange-800', detailsText: 'text-orange-700' };
  };

  const weeklyAverageStyles = getWeeklyAverageStyles();
  const complianceStyles = getComplianceStyles();
  const safetyStyles = getSafetyStyles();

  return (
    <div className="bg-white shadow-md rounded-lg" style={slideStyle}>
      <main className="flex-grow p-6 pb-32">
        <h2 className="text-4xl font-bold text-blue-800 mb-6 text-center">{data.name} Performance Overview</h2>
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className={`${safetyStyles.card} rounded-lg p-4`}>
            <div className={`flex items-center mb-1 ${safetyStyles.text}`}>
              {data.safety.status === 'Good' ? <CheckCircle className="mr-2 flex-shrink-0" size={24} /> : <AlertTriangle className="mr-2 flex-shrink-0" size={24} />}
              <h3 className="text-xl font-semibold">Safety</h3>
            </div>
            <p className={`text-lg pl-8 ${safetyStyles.detailsText}`}>{data.safety.details}</p>
          </div>
          <div className={`${weeklyAverageStyles.card} rounded-lg p-4 text-center`}>
            <div className={`flex items-center justify-center mb-1 ${weeklyAverageStyles.text}`}>
              <BarChart2 className="mr-2 flex-shrink-0" size={24} />
              <h3 className="text-xl font-semibold">Weekly Avg.</h3>
            </div>
            <p className={`font-bold text-4xl ${weeklyAverageStyles.text}`}>{data.weeklyAverage.value}%</p>
            <p className={`text-lg ${weeklyAverageStyles.targetText}`}>(Target: {data.weeklyAverage.target}%)</p>
          </div>
          <div className={`${complianceStyles.card} rounded-lg p-4`}>
            <div className={`flex items-center mb-1 ${complianceStyles.text}`}>
              <Bolt className="mr-2 flex-shrink-0" size={24} />
              <h3 className="text-xl font-semibold">Compliance</h3>
            </div>
            <p className={`text-lg ${complianceStyles.detailsText} pl-8`}>{data.serviceCompliance.details}</p>
          </div>
        </div>
        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-4 text-center">Equipment Availability</h3>
          <div className="grid grid-cols-5 gap-4">
            {data.availability.map((item, i) => <AvailabilityBar key={i} {...item} />)}
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-2 text-center">Key Breakdowns</h3>
          <div className="grid grid-cols-2 gap-x-4 text-lg">
            {data.keyBreakdowns && Array.isArray(data.keyBreakdowns) && data.keyBreakdowns.map((item, i) => (
              <div key={i} className="mb-1">
                <h4 className="font-semibold text-red-700">{item.equipment}</h4>
                {Array.isArray(item.details) ? (
                  <ul className="list-disc pl-5">
                    {item.details.map((detail, j) => <li key={j}>{detail}</li>)}
                  </ul>
                ) : (
                  <p>{item.details}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer src={footerSrc} />
    </div>
  );
};

export default SitePerformanceSlide;