interface CardProps {
  title: string;
  description: string;
}

export default function BasicCard({ title, description }: CardProps) {
  return (
    <div className="border border-white/10 bg-white/5 p-6 rounded-lg backdrop-blur-sm">
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}
