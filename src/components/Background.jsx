export default function Background() {
  return (
    <div className="bg-fx" aria-hidden="true">
      <div className="bg-fx__aurora transform-gpu animate-aurora-spin motion-reduce:animate-none" />
      <div className="bg-fx__grid" />
    </div>
  );
}
