import { useForm } from "react-hook-form";
import useUploadModal from "../../hooks/useUploadModal"
import Modal from "../global/Modal"
import Input from "../global/FormInput";
import { useState } from "react";
import Button from '../global/Button';
import toast from "react-hot-toast";
import useUserContext from "../../hooks/useUserContext";
import uploadFile from "../../services/addFile";
import { addSong } from "../../services/addSong";

const UploadModal = () => {
    
    const [isLoading, setIsLoading] = useState(false); 
    const uploadModal = useUploadModal();
    const { user } = useUserContext();
    const {register, handleSubmit, reset} = useForm({
        defaultValues: {
            author: '',
            title: '',
            song: null,
            image: null
        }
    });

    const handleChange = (curOpen) => {
        if(!curOpen) {
            reset();
            uploadModal.close();
        }
    }

    const onSubmit = async (data) => {
        try {
            setIsLoading(true);
            const imageFile = data.image?.[0];
            const songFile = data.song?.[0];
            if (!imageFile || !songFile || !user) {
                toast.error('Please upload both an image and a song', {
                    duration: 4000,
                    position: 'bottom-right',
                    className: 'bg-gray-500 text-white font-sans font-semibold border border-gray-600 rounded-md p-2 shadow-lg'
                });
                return;
            }
            try {
                const imageUrl = await uploadFile(imageFile, 'images');
                const songUrl = await uploadFile(songFile, 'songs');
                const song = {
                    title: data.title,
                    author: data.author,
                    song: songUrl,
                    image: imageUrl,
                    user: user.uid,
                }
                await addSong(song.title, song.author, song.song, song.image, song.user);
                setIsLoading(false);
                toast.success('Song uploaded successfully', {
                    duration: 4000,
                    position: 'bottom-right',
                    className: 'bg-gray-500 text-white font-sans font-semibold border border-gray-600 rounded-md p-2 shadow-lg'
                });
                reset();
                uploadModal.close();
                setTimeout(() => {
                    window.location.reload();
                }, 1000);

            } catch (error) {
                setIsLoading(false);
                return;
            }

        } catch (error) {
            toast.error('An error occurred. Please try again', {
                duration: 4000,
                position: 'bottom-right',
                className: 'bg-gray-500 text-white font-sans font-semibold border border-gray-600 rounded-md p-2 shadow-lg'
            });
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <Modal 
            title="Add a song" 
            description='Upload your song file' 
            isOpen={uploadModal.isOpen} 
            onChange={handleChange}
        >
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                    <Input
                        label='title'
                        text='Title'
                        type='text'
                        placeholder='Song Title'
                        disabled={isLoading}
                        {...register('title', {required: true})}
                    />
                </div>
                <div className="mb-4">
                    <Input
                        label='author'
                        text='Author'
                        type='text'
                        placeholder='Song Author'
                        disabled={isLoading}
                        {...register('author', {required: true})}
                    />
                </div>
                <div className="mb-4">
                    <Input
                        label='song'
                        text='Song'
                        type='file'
                        accept='.mp3'
                        disabled={isLoading}
                        {...register('song', {required: true})}
                        styles='text-nuetral-700 file:hidden cursor-pointer'
                    />
                </div>
                <div className="mb-8">
                    <Input
                        label='image'
                        text='Image'
                        type='file'
                        accept='image/*'
                        disabled={isLoading}
                        {...register('image', {required: true})}
                        styles='text-nuetral-700 file:hidden cursor-pointer'
                    />
                </div>
                <Button disabled={isLoading} type='submit' styles="text-white">
                    Upload
                </Button>
            </form>
        </Modal>
    )
}

export default UploadModal