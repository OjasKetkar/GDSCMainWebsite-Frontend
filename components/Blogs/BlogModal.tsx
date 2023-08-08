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
  import Select from "react-select";
  import CustomButton from "../Form/CustomButton";
  import { useDropzone } from "react-dropzone";
  
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  
  type Props = {
    state: boolean;
    toggleModal: MouseEventHandler<HTMLElement>;
    type: string;
    member?: any;
  };
  
  interface Member {
    fullname: string;
    email: string;
    githubProfile: string;
    linkedinProfile: string;
    mobileNumber: string;
    role: string;
    position: string;
    team: string;
    year: number;
    image: string;
  }
  
  const BlogModal: FunctionComponent<Props> = ({
    state,
    toggleModal,
    type,
  }) => {
    const [memberData, setMemberData] = useState<Member>({
      fullname: "",
      email: "",
      githubProfile: "",
      linkedinProfile: "",
      mobileNumber: "",
      role: "",
      position: "",
      team: "",
      year: 0,
      image: "",
    });
    const [image, setImage] = useState<File | null>(null);
    const [imageUrl, setImageUrl] = useState<string | null>(null);
    const [imageUploadMode, setImageUploadMode] = useState<boolean>(false);
  
    const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
      setMemberData({
        ...memberData,
        [e.target.name]: e.target.value,
      });
    };
  
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
          "https://t3.ftcdn.net/jpg/01/09/00/64/360_F_109006426_388PagqielgjFTAMgW59jRaDmPJvSBUL.jpg"
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
        modalClass="w-3/5 h-96 flex flex-col items-center"
      >
        <h1 className="text-xl font-semibold">
          {type == "add" ? "ADD BLOG" : "EDIT MEMBER"}
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
            <form action="" className="flex-1 flex flex-col items-center gap-5">
              <div className="grid grid-cols-2 gap-6 gap-y-8 w-full">
                <CustomInput
                  label="Full Name"
                  name="fullname"
                  value={memberData.fullname}
                  onChange={handleChange}
                />
                <CustomInput
                  label="Email"
                  name="email"
                  value={memberData.email}
                  onChange={handleChange}
                />
                <CustomInput
                  label="Github"
                  name="githubProfile"
                  value={memberData.githubProfile}
                  onChange={handleChange}
                />
                <CustomInput
                  label="Linkedin"
                  name="linkedinProfile"
                  value={memberData.linkedinProfile}
                  onChange={handleChange}
                />
                <CustomInput
                  label="Contact"
                  name="mobileNumber"
                  value={memberData.mobileNumber}
                  onChange={handleChange}
                />{" "}
                <CustomInput
                  label="Position"
                  name="position"
                  value={memberData.position}
                  onChange={handleChange}
                />
                <Select options={options} />
                <Select options={options} />
              </div>
              <CustomButton onClick={() => {}}>ADD</CustomButton>
            </form>
          )}
        </div>
      </Modal>
    );
  };
  
  export default BlogModal;
  