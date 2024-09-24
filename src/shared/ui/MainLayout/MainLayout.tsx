import { ReactNode } from 'react';

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex flex-col max-w-[1200px] w-100 mx-auto h-[100%] text-black">{children}</div>
  );
};
