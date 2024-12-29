import { ReactNode } from "react";
import { ThemeProvider } from "./theme-provider";
import { JotaiProvider } from "./jotai-provider";

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider
      attribute={"class"}
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <JotaiProvider>{children}</JotaiProvider>
    </ThemeProvider>
  );
};
