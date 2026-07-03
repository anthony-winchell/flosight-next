type Props = {
  projectType: string;
  projectDate: string;
  projectLocation: string;
  projectBudget: string;
};

export default function ProjectCard(props: Props) {

  const projectTypes: Record<string, string> = {
    AERIAL_PHOTOGRAPHY_VIDEOGRAPHY: "Aerial Photography & Videography",
    INSPECTION_AND_SURVEY: "Inspection & Survey",
    THREE_DIMENSIONAL_RENDERING: "3D Rendering",
    FPV_SCOUTING: "FPV Scouting",
    OTHER: "Other",
  };
  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <h2 className="text-lg font-semibold mb-5">Project Details</h2>

      <div className="grid sm:grid-cols-2 gap-6">
        <Info label="Service" value={projectTypes[props.projectType]} />

        <Info
          label="Requested Date"
          value={new Date(props.projectDate).toLocaleDateString()}
        />

        <Info label="Location" value={props.projectLocation} />

        <Info label="Budget" value={props.projectBudget} />
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
