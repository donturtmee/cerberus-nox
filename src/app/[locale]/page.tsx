import { use } from "react";
import { setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";

type Props = {
  params: Promise<{ locale: string }>;
};

export default function HomePage({ params }: Props) {
  const { locale } = use(params);
  // Enable static rendering
  setRequestLocale(locale);
  const t = useTranslations("HomePage");

  return <h1>{t("title")}</h1>;
}
