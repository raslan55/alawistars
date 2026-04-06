import React from "react";
import { useTranslation } from "react-i18next";

export default function PrivacyPolicy() {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-extrabold text-Main-color mb-10 leading-tight">
        {t("privacy.title")}
      </h1>

      <div className="space-y-8 text-gray-700 leading-relaxed">

        {/* المعلومات التي يجمعها النظام */}
        <section>
          <h2 className="text-2xl font-bold text-Main-color mb-4">
            {t("privacy.section1_title")}
          </h2>
          <p className="mb-4">{t("privacy.section1_p1")}</p>
          <p className="mb-4">{t("privacy.section1_p2")}</p>
          <p className="mb-4">{t("privacy.section1_p3")}</p>
          <p>{t("privacy.section1_p4")}</p>
        </section>

        {/* استخدام المعلومات */}
        <section>
          <h2 className="text-2xl font-bold text-Main-color mb-4">
            {t("privacy.section2_title")}
          </h2>
          <p className="mb-4">{t("privacy.section2_p1")}</p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>{t("privacy.section2_li1")}</li>
            <li>{t("privacy.section2_li2")}</li>
            <li>{t("privacy.section2_li3")}</li>
            <li>{t("privacy.section2_li4")}</li>
          </ul>
          <p>{t("privacy.section2_p2")}</p>
        </section>

        {/* حماية البيانات */}
        <section>
          <h2 className="text-2xl font-bold text-Main-color mb-4">
            {t("privacy.section3_title")}
          </h2>
          <p>{t("privacy.section3_p1")}</p>
        </section>

        {/* الكوكيز */}
        <section>
          <h2 className="text-2xl font-bold text-Main-color mb-4">
            {t("privacy.section4_title")}
          </h2>
          <p className="mb-4">{t("privacy.section4_p1")}</p>
          <p className="mb-4">{t("privacy.section4_p2")}</p>
          <p>{t("privacy.section4_p3")}</p>
        </section>

        {/* الإفصاح للطرف الثالث */}
        <section>
          <h2 className="text-2xl font-bold text-Main-color mb-4">
            {t("privacy.section5_title")}
          </h2>
          <p>{t("privacy.section5_p1")}</p>
        </section>
      </div>
    </div>
  );
}
