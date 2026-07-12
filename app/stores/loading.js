import Spinner from "@/components/ui/Spinner/Spinner";

export default function Loading() {
  return (
    <main>
      <div className="loading-page">
        <Spinner size="lg" />
        <p className="loading-message">Finding deals, saving meals...</p>
      </div>
    </main>
  );
}
