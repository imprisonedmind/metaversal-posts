"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import useLocalStorageState from "use-local-storage-state";

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
  const [localIsAdmin, setLocalIsAdmin] =
    useLocalStorageState<boolean>("isAdmin");

  const [isAdmin, setIsAdmin] = useState<boolean>(localIsAdmin == true);

  const makeAdmin = () => {
    setLocalIsAdmin(true);
  };
  const makeUser = () => {
    setLocalIsAdmin(false);
  };

  useEffect(() => {
    setIsAdmin(localIsAdmin == true);
  }, [localIsAdmin]);

  return (
    <AdminContext.Provider value={{ isAdmin, makeAdmin, makeUser }}>
      {children}
    </AdminContext.Provider>
  );
};
