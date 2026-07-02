export function LumaEmbed({ id }: { id: string }) {
  return (
    <div className="relative aspect-video overflow-hidden rounded-2xl border border-border">
      <iframe
        src={`https://lumalabs.ai/embed/${id}?mode=sparkles&showMenu=false`}
        className="absolute inset-0 h-full w-full"
        allowFullScreen
      />
    </div>
  );
}