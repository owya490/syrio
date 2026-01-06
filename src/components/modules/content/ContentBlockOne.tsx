export default function ContentBlockOne() {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-white">Content Module 1</h2>
          <p className="text-lg text-gray-300">
            This is the first style of content layout. Great for introductions.
          </p>
        </div>
        <div className="bg-white/10 aspect-video rounded-xl flex items-center justify-center">
          <span className="text-white/50">Placeholder Visual</span>
        </div>
      </div>
    </section>
  );
}
