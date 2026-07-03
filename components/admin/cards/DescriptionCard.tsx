type Props = {
  description: string;
};

export default function DescriptionCard({ description }: Props) {
  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <h2 className="text-lg font-semibold mb-5">Project Description</h2>

      <p className="text-muted-foreground whitespace-pre-wrap leading-7">
        {description}
      </p>
    </div>
  );
}
