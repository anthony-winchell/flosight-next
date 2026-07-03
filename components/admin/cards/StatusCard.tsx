type Props = {
  status: string;
  createdAt: string;
  children?: React.ReactNode;
};

export default function StatusCard({ status, createdAt, children }: Props) {
  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <h2 className="text-lg font-semibold mb-5">Lead Status</h2>

      <div className="space-y-5">
        <div>
          <p className="text-xs uppercase text-muted-foreground">Submitted</p>

          <p className="mt-1">{new Date(createdAt).toLocaleString()}</p>
        </div>

        <div>
          <p className="text-xs uppercase text-muted-foreground">
            Current Status
          </p>

          <div className="mt-2">{children}</div>
        </div>
      </div>
    </div>
  );
}
