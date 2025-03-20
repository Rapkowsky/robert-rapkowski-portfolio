interface InfoCardProps {
  header: string;
  description: string;
}

export const InfoCard = ({ header, description }: InfoCardProps) => {
  return (
    <div className="flex-1 flex-col">
      <p className="text-xs uppercase text-textGray">{header}</p>
      <div className="mb-3 mt-2 h-[1px] bg-bgGrayLight" />
      <p className="lg:text-lg">{description}</p>
    </div>
  );
};
