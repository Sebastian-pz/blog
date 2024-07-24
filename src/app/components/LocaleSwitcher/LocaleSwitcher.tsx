"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { ChangeEvent, useTransition } from "react";

export default function LocaleSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localeActive = useLocale();
  const actualLocation = usePathname();

  function onSelectChange(e: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = e.target.value;

    let newRoute = "";
    actualLocation[2] == "n"
      ? (newRoute = actualLocation.replace("en", "es"))
      : (newRoute = actualLocation.replace("es", "en"));

    startTransition(() => {
      router.replace(newRoute);
      // router.replace(`/${nextLocale}`);
    });
  }

  return (
    <div className="  border-2 border-black shadow-[4.0px_4.0px_rgba(0,0,0)] bg-[#c1e6f5]">
      <label htmlFor="Language-selector" className="sr-only">
        Change Language
      </label>
      <select
        defaultValue={localeActive}
        name="Language-selector"
        id="Language-selector"
        className="p-2 bg-transparent"
        onChange={onSelectChange}
        disabled={isPending}
      >
        <option value="es">Español</option>
        <option value="en">English</option>
      </select>
    </div>
  );
}
