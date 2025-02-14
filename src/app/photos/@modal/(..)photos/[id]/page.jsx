import Modal from '@/app/components/Modal';
import PhotoCard from '@/app/components/PhotoCard';
import photos from '@/app/lib/photos';

export default async function PhotoModal({ params }) {
  const { id } = await params;
  const photo = photos.find((p) => p.id === id);

  if (!photo) return <p>Photo not found</p>;
  

  return (
    <Modal>
      <PhotoCard photo={photo} />
    </Modal>
  );
}
