"use client";

import Link from "next/link";
import { ELLIPSIS_LEFT, ELLIPSIS_RIGHT, generatePages } from "./generatePages";
import { usePathname, useSearchParams } from "next/navigation";
import { getURL } from "next/dist/shared/lib/utils";
import { cn } from "@/helpers/cn";

export const Pagination = ({
  currentPage,
  totalPages,
}: {
  currentPage: number;
  totalPages: number;
}) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const pages = generatePages(currentPage, totalPages);

  return (
    <ul className="inline-flex h-10 overflow-hidden rounded-md text-base border border-indigo-400/40">
      {pages.map((page, i) => {
        const isEllipsis = page === ELLIPSIS_LEFT || page === ELLIPSIS_RIGHT;
        const params = new URLSearchParams(searchParams);
        params.set("page", page.toString());
        const url = `${pathname}?${params.toString()}`;

        if (isEllipsis) {
          return (
            <li
              key={i}
              className="border-x border-indigo-400/40 first:rounded-l last:rounded-r first:border-0 last:border-0 flex h-10 items-center justify-center bg-slate-700 hover:bg-indigo-400/40 px-4 hover:text-slate-300"
            >
              ...
            </li>
          );
        }

        return (
          <li
            key={i}
            className={cn(
              "border-x border-indigo-400/40 first:rounded-l last:rounded-r first:border-0 last:border-0"
            )}
          >
            <Link
              onClick={() => {
                console.log(url);
              }}
              href={url}
              className="flex h-10 items-center justify-center bg-slate-700 hover:bg-indigo-400/40 px-4 hover:text-slate-300"
            >
              {page}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
