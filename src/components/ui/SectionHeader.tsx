interface SectionHeaderProps {
  title: string;
  subtitle: string;
  icon?: React.ReactNode;
}

const SectionHeader = ({ title, subtitle, icon }: SectionHeaderProps) => {
  return (
    <div className="text-center">
      {icon && <div className="flex justify-center mb-4">{icon}</div>}
      <h2 className="text-3xl font-bold text-slate-950 sm:text-4xl">{title}</h2>
      <p className="mt-4 text-lg text-purple-600 max-w-2xl mx-auto">{subtitle}</p>
    </div>
  );
};

export default SectionHeader;