import React, {
    ChangeEventHandler,
    FunctionComponent,
    MouseEventHandler,
    useState,
    useCallback,
    useEffect,
  } from "react";
  import Modal from "../Modal/Modal";
  import CustomInput from "../Form/CustomInput";
  import { Icon } from "@iconify/react";

  import CustomButton from "../Form/CustomButton";
  import { useDropzone } from "react-dropzone";
  
 
  import "react-datepicker/dist/react-datepicker.css";
 
  

  
  type Props = {
    state: boolean;
    toggleModal: MouseEventHandler<HTMLElement>;
    type: string;
    member?: any;
  };
  
  interface Image {
    title: string;
    thumbnail: string;
    
  }
  
  const ImageModal: FunctionComponent<Props> = ({ state, toggleModal, type }) => {
    const [imageData, setImageData] = useState<Image>({
      
      title: "",
      thumbnail: "",
    });
    const [image, setImage] = useState<File | null>(null);
    const [imageUrl, setImageUrl] = useState<string | null>(null);
    const [imageUploadMode, setImageUploadMode] = useState<boolean>(false);
  
    const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        setImageData({
        ...imageData,
        [e.target.name]: e.target.value,
      });
    };
    
    const handleSubmit = async () => {
      console.log(image)
      
      try {
        const formData = new FormData();
        formData.append('title', imageData.title);
        
        if(image){
          formData.append('image', image);
        }
        console.log("testing  ",formData.get('image'))
  
        const response = await fetch('http://localhost:5001/api/gallery/newImage', {
          
          method: 'POST',
          body: formData,
        });
  
        // const data = await response.json();
        // console.log(data);
        if (!response.ok) {
          console.log(response)
          throw new Error('Network response was not ok');
        }
        
        const data = await response.json();
        console.log('Data:', data);
        alert("Image uploaded successfully")
        window.location.reload();
        
      } catch (error) {
        console.error('Error:', error);
      }
    }

  
    
    const toggleImageUploadMode: MouseEventHandler = () => {
      setImageUploadMode(!imageUploadMode);
    };
  
    const onDrop = useCallback((acceptedFiles: Array<any>) => {
      console.log(acceptedFiles);
      if (acceptedFiles.length > 0) {
        setImage(acceptedFiles[0]);
      }
    }, []);
  
    const deleteImage = () => {
      setImage(null);
    };
  
    useEffect(() => {
      if (image == null) {
        setImageUrl(
          "https://static.thenounproject.com/png/1156518-200.png"
        );
        return;
      }
      setImageUrl(URL.createObjectURL(image));
      
    }, [image]);
  
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  
    return (
      <Modal
        open={state}
        toggleModal={toggleModal}
        modalClass="w-3/5 h-140 flex flex-col items-center"
      >
        <h1 className="text-xl font-semibold">
          {type == "add" ? "ADD Image" : "EDIT Image"}
        </h1>
        <div className="flex w-full gap-6 mt-8">
          <div className="flex flex-col items-center">
            <img
              src={imageUrl!}
              alt=""
              className="w-32 h-32 rounded-full object-cover"
            />
            <div
              className="w-10 h-10 bg-ggreen rounded-full relative -top-6 left-6 grid place-items-center cursor-pointer"
              onClick={toggleImageUploadMode}
            >
              <Icon
                icon={
                  imageUploadMode
                    ? "material-symbols:close-rounded"
                    : "ph:note-pencil-bold"
                }
                className="w-6 h-6 "
                color="white"
              />
            </div>
          </div>
          {imageUploadMode ? (
            <div className="flex-1 h-full">
              <div
                {...getRootProps()}
                className={`w-full border-2 border-dashed border-gray-300 h-full rounded-lg flex flex-row items-center justify-center ${
                  isDragActive ? "border-gred" : ""
                }}`}
              >
                <input {...getInputProps()} />
                {isDragActive ? (
                  <p>Drop the files here ...</p>
                ) : (
                  <div className="flex flex-col items-center gap-2">
                    <p>Drag 'n' drop some files here, or click to select files</p>
                    <CustomButton onClick={() => {}}>BROWSE FILES</CustomButton>
                  </div>
                )}
              </div>
              {image != null ? (
                <div className="w-full h-fit mt-3 p-1 px-3 flex justify-between items-center border-2 border-gray-300 rounded-lg">
                  <h1>{image.name}</h1>
                  <Icon
                    icon="material-symbols:delete-rounded"
                    color="black  "
                    className="w-5 h-5 cursor-pointer"
                    onClick={deleteImage}
                  />
                </div>
              ) : null}
            </div>
          ) : (
            <form className="flex-1 flex flex-col items-center gap-5">
              <div className="grid grid-cols-2 gap-6 gap-y-8 w-full">
    
                <CustomInput
                  label="title"
                  name="title"
                  value={imageData.title}
                  onChange={handleChange}
                />
                
            
              </div>
              <CustomButton
                onClick={(e) => {
                  e.preventDefault();
                  handleSubmit();
                }}
              >
                ADD Image
              </CustomButton>
              {/* <Button
                onClick={() => {
                  console.log(schedule);
                }}
              > 
                Add{" "}
              </Button>*/}
            </form>
          )}
        </div>
      </Modal>
    );
  };
  
  export default ImageModal;
  