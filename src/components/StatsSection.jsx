import React from 'react';
import StatCard from './StatCard';
import { useTranslation } from "react-i18next";

const StatsSection = () => {
    const {t  } = useTranslation();
  
  return (
  
    <div className="max-w-4xl mx-auto flex  gap-8 mt-4">
    <StatCard value={15} suffix="K" label={t("SUBSCRIBERS")} />
    <StatCard value={857} suffix="+" label={t("PROJECTS")} />
    <StatCard value={205} suffix="" label={t("AWARDS")}   />
  </div>
   
  );
};

export default StatsSection;
