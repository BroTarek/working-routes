import Link from 'next/link'
import photos, { Photo } from '@/app/lib/photos'
import PhotoCard from '@/app/components/PhotoCard'

export default async function PhotoPage({ params }) {
  const { id } = await params; // Awaiting is not needed here
  const photo = photos.find(p => p.id === id);

  if (!photo) {
    return <p>Photo not found</p>;
  }

  return (
    <section className='py-24'>
      <div className='container'>
        <div>
          <Link
            href='/photos'
            className='font-semibold italic text-sky-600 underline'
          >
            Back to photos
          </Link>
        </div>

        <div className='mt-10 w-1/3'>
          <PhotoCard photo={photo} />
        </div>
      </div>
    </section>
  );
}
