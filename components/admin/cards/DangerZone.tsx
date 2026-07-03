type Props = {
  onDelete: () => void;
};

export default function DangerZone({ onDelete }: Props) {
  return (
    <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-6">
      <h2 className="text-lg font-semibold text-red-400">Danger Zone</h2>

      <p className="mt-2 text-sm text-muted-foreground">
        Permanently delete this lead.
      </p>

      <button
        onClick={onDelete}
        className="mt-6 rounded-md bg-red-500 px-4 py-2 text-white hover:bg-red-600 transition"
      >
        Delete Lead
      </button>
    </div>
  );
}
