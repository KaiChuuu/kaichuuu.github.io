interface SectionTitleProps {
  title: string;
  color?: string; // optional, fallback if not provided
}

function SectionTitle({ title, color = "text-dark-blue" }: SectionTitleProps) {
  return (
    <div className={`flex items-center w-full py-30 ${color}`}>
      <div className={`flex-1 border-t ${color}`}></div>
      <span className="mx-4 text-base-title">{title}</span>
      <div className={`flex-1 border-t ${color}`}></div>
    </div>
  );
}

export default SectionTitle;
