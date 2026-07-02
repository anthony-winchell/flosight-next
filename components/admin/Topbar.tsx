export default function Topbar() {
  return (
    <header className="h-20 border-b border-border bg-background/80 backdrop-blur">
      <div className="h-full px-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <p className="text-sm text-muted-foreground">Welcome back, Doc</p>
        </div>

        <div className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
          TDK
        </div>
      </div>
    </header>
  );
}
