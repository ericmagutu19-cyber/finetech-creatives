export default function CaseStudyModal({
  project,
  onClose,
}) {
  if (!project) return null;

  return (
    <div
      className="case-study-overlay"
      onClick={onClose}
    >
      <div
        className="case-study-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="case-study-close"
          onClick={onClose}
        >
          ✕
        </button>

        <h2>{project.title}</h2>

        <p>
          <strong>Industry:</strong>{" "}
          {project.industry}
        </p>

        <p>
          <strong>Challenge:</strong>{" "}
          {project.challenge}
        </p>

        <p>
          <strong>Solution:</strong>{" "}
          {project.solution}
        </p>

        <p>
          <strong>Outcome:</strong>{" "}
          {project.outcome}
        </p>
      </div>
    </div>
  );
}