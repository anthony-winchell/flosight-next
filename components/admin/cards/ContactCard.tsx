type ContactCardProps = {
  fullName: string;
  email: string;
  phone: string;
};

export default function ContactCard({
  fullName,
  email,
  phone,
}: ContactCardProps) {
  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <h2 className="text-lg font-semibold mb-5">Contact Information</h2>

      <div className="space-y-4">
        <Info label="Name" value={fullName} />
        <Info label="Email" value={email} />
        <Info label="Phone" value={phone} />
      </div>
    </div>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-wide text-muted-foreground">
        {label}
      </p>

      <p className="mt-1">{value}</p>
    </div>
  );
}
