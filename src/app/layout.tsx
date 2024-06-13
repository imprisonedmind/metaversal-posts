import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import { MainWrapper } from "@/components/mainWrapper";
import { ModalProvider } from "@/lib/modalContext";
import React from "react";
import { AdminProvider } from "@/lib/adminContext";
import Modal from "@/components/modals/modal";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Metaversal Take Home",
  description: "Take home coding challenge by Luke Stephens",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-neutral-50`}>
        <AdminProvider>
          <ModalProvider>
            <MainWrapper>
              <div id={"modal"} />
              <Modal />
              <Navbar />
              {children}
            </MainWrapper>
          </ModalProvider>
        </AdminProvider>
      </body>
    </html>
  );
}
