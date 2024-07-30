import SortableGallery from "@/components/SortableGallery";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-16">
      <h1 className="text-3xl mb-10 font-bold">Sortable Gallery</h1>
      <SortableGallery />
    </main>
  );
}
