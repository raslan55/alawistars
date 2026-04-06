import React from "react";
import { useTranslation } from "react-i18next";

export default function TermsAndConditions() {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-extrabold text-Main-color mb-10 leading-tight">
        {t("terms_title")}
      </h1>

      <div className="space-y-8 text-gray-700 leading-relaxed" dir="auto">
        {/* القسم 1 */}

        <section>
          <h2 className="text-2xl font-bold text-Main-color mb-4">
            {t("section1_title")}
          </h2>
          <p className="mb-4">{t("section1_p1")}</p>
        </section>

        {/* القسم 2 */}
        <section>
          <h2 className="text-2xl font-bold text-Main-color mb-4">
            {t("section2_title")}
          </h2>
          <p className="mb-4">{t("section2_p1")}</p>
        </section>

        {/* القسم 3 */}
        <section>
          <h2 className="text-2xl font-bold text-Main-color mb-4">
            {t("section3_title")}
          </h2>
          <p className="mb-4">{t("section3_p1")}</p>
        </section>

        {/* القسم 4 */}
        
        <section>
          <h2 className="text-2xl font-bold text-Main-color mb-4">
            {t("section4_title")}
          </h2>
          <p className="mb-4">{t("section4_p1")}</p>
        </section>

        {/* القسم 5 */}

        <section>
          <h2 className="text-2xl font-bold text-Main-color mb-4">
            {t("section5_title")}
          </h2>
          <p className="mb-4">{t("section5_p1")}</p>
        </section>
      </div>
    </div>
  );
}
