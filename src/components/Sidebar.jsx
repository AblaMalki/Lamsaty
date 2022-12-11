import React, { Fragment, useState } from "react";
import classNames from "classnames";
import { Dialog, Menu, Transition } from "@headlessui/react";
import { sidebarNavigation, user } from "../constants/constants";
import Profile from "./Profile";

const Sidebar = () => {
  return (
    <>
      <div className="h-screen flex">
        {/* Sidebar */}
        <div className="hidden w-28 bg-emerald-700 overflow-y-auto md:block">
          <div className="w-full py-6 flex flex-col items-center">
            <div className="flex-shrink-0 flex items-center">
              <img src="#" alt="" />
            </div>
            <div className="flex-1 mt-6 w-full px-2 space-y-1">
              {sidebarNavigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-emerald-800 text-white"
                      : "text-emerald-100 hover:bg-emerald-800 hover:text-white",
                    "group w-full p-3 rounded-md flex flex-col items-center text-xs font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  <item.icon
                    className={classNames(
                      item.current
                        ? "text-white"
                        : "text-emerald-100 group-hover:text-white",
                      "h-6 w-6"
                    )}
                    aria-hidden="true"
                  />
                  <span className="mt-2">{item.name}</span>
                </a>
              ))}
            </div>
          </div>
          <div className="pt-10">
            <Profile />
          </div>
        </div>
        {/* Mobile menu */}

       
      </div>
    </>
  );
};

export default Sidebar;
