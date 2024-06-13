"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

type AdminContextValue = {
  isAdmin: boolean;
  makeAdmin: () => void;
  makeUser: () => void;
};

const defaultValues: AdminContextValue = {
  isAdmin: false,
  makeAdmin: () => {},
  makeUser: () => {},
};

const AdminContext = createContext<AdminContextValue>(defaultValues);

export const useAdminContext = () => useContext(AdminContext);

export const AdminProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAdmin, setIsAdmin] = useState<boolean>(() => {
    if (typeof window != "undefined") {
      const storedIsAdmin = localStorage.getItem("isAdmin");
      return storedIsAdmin !== null ? storedIsAdmin === "true" : false;
    } else {
      return false;
    }
  });

  const makeAdmin = () => {
    setIsAdmin(true);
  };
  const makeUser = () => {
    setIsAdmin(false);
  };

  useEffect(() => {
    localStorage.setItem("isAdmin", isAdmin.toString());
  }, [isAdmin]);

  return (
    <AdminContext.Provider value={{ isAdmin, makeAdmin, makeUser }}>
      {children}
    </AdminContext.Provider>
  );
};
