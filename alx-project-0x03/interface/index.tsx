export interface HomeProps {
  title: string;
  description: string;
}

export interface ButtonProps {
  text: string;
  onClick: () => void;
}

export interface LayoutProps {
  children: React.ReactNode;
}
