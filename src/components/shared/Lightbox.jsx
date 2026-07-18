export default function Lightbox({
  image,
  images = [],
  currentIndex = 0,
  onClose,
  onNext,
  onPrev,
}) {
  if (!image) return null;

  return (
    <div className="lightbox">

      <button
        className="lightbox-close"
        onClick={onClose}
      >
        ✕
      </button>

      {images.length > 1 && (
        <>
          <button
            className="lightbox-prev"
            onClick={onPrev}
          >
            ←
          </button>

          <button
            className="lightbox-next"
            onClick={onNext}
          >
            →
          </button>
        </>
      )}

      <img
        src={image}
        alt="Portfolio Preview"
        className="lightbox-image"
      />

    </div>
  );
}