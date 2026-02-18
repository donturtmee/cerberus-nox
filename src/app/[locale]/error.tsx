"use client";

import { useTranslations } from "next-intl";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  const t = useTranslations("Error");

  return (
    <div>
      <h1>{t("title")}</h1>
      <p>{t("description")}</p>
      <button onClick={reset}>{t("retry")}</button>
    </div>
  );
}
