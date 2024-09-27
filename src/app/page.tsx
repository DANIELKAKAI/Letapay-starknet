"use client";
import WalletBar from "@/components/wallet-bar.tsx";
import InfoBar from "@/components/info-bar.tsx";
import Payment from "@/components/payment.tsx";


export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-12">
      <WalletBar />
      <InfoBar />
      <Payment />
    </main>
  );
}
