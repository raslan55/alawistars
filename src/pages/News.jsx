import React from 'react';
import { useTranslation } from "react-i18next";
export default function News() {
const { t } = useTranslation();

  return (
    <div>
     {t("news")}

    </div>
  )
}
