interface SectionTitleProps {
  title: string;
}

function SectionTitle({ title }: SectionTitleProps) {
  return (
    <div className="flex items-center w-full py-30 text-dark-blue">
      <div className="flex-1 border-t border-dark-blue"></div>
      <span className="mx-4 text-base-title">{title}</span>
      <div className="flex-1 border-t border-dark-blue"></div>
    </div>
  );
}

export default SectionTitle;
