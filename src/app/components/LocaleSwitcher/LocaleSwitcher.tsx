"use client";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { ChangeEvent, useTransition } from "react";

export default function LocaleSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localeActive = useLocale();

  function onSelectChange(e: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = e.target.value;
    startTransition(() => {
      router.replace(`/${nextLocale}`);
    });
  }

  return (
    <label className="border-2 rounded-lg" htmlFor="">
      <p className="sr-only">Change Language</p>
      <select
        defaultValue={localeActive}
        name=""
        id=""
        className="py-2 rounded-lg"
        onChange={onSelectChange}
        disabled={isPending}
      >
        <option value="es">Español</option>
        <option value="en">English</option>
      </select>
    </label>
  );
}
