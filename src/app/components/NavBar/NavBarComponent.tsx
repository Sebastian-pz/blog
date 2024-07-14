import Link from "next/link";
import React from "react";
import LINK_LIST from "./Constants";

import LocaleSwitcher from "@/components/LocaleSwitcher/LocaleSwitcher";
import { useLocale, useTranslations } from "next-intl";

export default function Navbar() {
  const localeActive = useLocale();

  const t = useTranslations("navBar");

  const tRoutes = LINK_LIST.map((route) => {
    return {
      ...route,
      label: t(route.label),
    };
  });

  return (
    <section className="fixed top-0 right-0 flex p-2 bg-primary-color-100 border border-primary-color-800 mb-4 justify-center items-center w-full md:text-xl">
      {tRoutes.map((route, index) => {
        const { label, path, styles } = route;
        return (
          <Link
            href={`/${localeActive}${path}`}
            key={index}
            className={`${styles} m-2 hover:text-primary-color-500 hover:font-semibold md:mx-6`}
          >
            {label}
          </Link>
        );
      })}
      <LocaleSwitcher />
    </section>
  );
}
