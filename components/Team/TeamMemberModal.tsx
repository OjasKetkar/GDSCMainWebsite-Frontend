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
import axiosInstance from "../../utils/axiosInstance";

const roleOptions = [
  { value: "Lead", label: "Lead" },
  { value: "Manager", label: "Manager" },
  { value: "Head", label: "Head" },
  { value: "Junior Developer", label: "Junior Developer" },
  { value: "Senior Developer", label: "Senior Developer" },
];

const positionOptions = [
  { value: "DSC LEAD", label: "DSC LEAD" },
  { value: "Web Manager", label: "Web Manager" },
  { value: "DSC Manager", label: "DSC Manager" },
  { value: "Web Head", label: "Web Head" },
  { value: "Web Developer", label: "Web Developer" },
  { value: "Senior Web Developer", label: "Senior Web Developer" },
];

const teamOptions = [
  { value: "Core", label: "Core" },
  { value: "Web", label: "Web" },
  { value: "Android", label: "Android" },
  { value: "Flutter", label: "Flutter" },
  { value: "Management", label: "Management" },
  { value: "Multimedia", label: "Multimedia" },

];

const yearOptions = [
  { value: "2020", label: "2020" },
  { value: "2021", label: "2021" },
  { value: "2022", label: "2022" },
  { value: "2023", label: "2023" },
];

function findOptionIndex(optionsArray : any, inputString : string) {
  return optionsArray.findIndex((option : {value:string, label:string})=> option.value === inputString);
}

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
  year: any;
  image: any;
}

const TeamMemberModal: FunctionComponent<Props> = ({
  state,
  toggleModal,
  type,
  member
}) => {
  console.log(member);
  const [memberData, setMemberData] = useState<Member>({
    fullname: type=="add" ? "" : member.fullname,
    email: type == "add" ? "" : member.email,
    githubProfile: type == "add" ? "" : member.githubProfile,
    linkedinProfile: type == "add" ? "" : member.linkedInProfile,
    mobileNumber: type == "add" ? "" : member.mobileNumber,
    role: type == "add" ? "" : member.role,
    position: type == "add" ? "" : member.position,
    team: type == "add" ? "" : member.team,
    year: type == "add" ? "" : member.year,
    // year: 0,
    // image: "",
    image: type == "add" ? "" : member.image,
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
    // console.log(acceptedFiles);
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

  const addMemberHandle = async () => {
    console.log(image)
    try {
      const formData = new FormData();
      formData.append('fullname', memberData.fullname);
      formData.append('email', memberData.email);
      formData.append('linkedInProfile', memberData.linkedinProfile);
      formData.append('githubProfile', memberData.githubProfile);
      formData.append('role', memberData.role);
      formData.append('position', memberData.position);
      formData.append('mobileNumber', memberData.mobileNumber);
      formData.append('year', memberData.year);
      formData.append('team', memberData.team);
      if(image){
        formData.append('image', image);
      }
      const response = await axiosInstance.post("/team/addMember", formData);
      window.location.reload()
    } catch (error) {
      console.error('Error:', error);
    }
  }

  const editMemberHandle = async () => {
    console.log(image);
    try {
      const formData = new FormData();
      formData.append('fullname', memberData.fullname);
      formData.append('email', memberData.email);
      formData.append('linkedInProfile', memberData.linkedinProfile);
      formData.append('githubProfile', memberData.githubProfile);
      formData.append('role', memberData.role);
      formData.append('position', memberData.position);
      formData.append('mobileNumber', memberData.mobileNumber);
      formData.append('year', memberData.year);
      formData.append('team', memberData.team);
      formData.append('id', member._id);

      if (image) {
        formData.append('image', image);
        formData.append('imageIsUpdated', "true");
      }
      const response = await axiosInstance.put("/team/editMember", formData);
      window.location.reload();
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  return (
    <Modal
      open={state}
      toggleModal={toggleModal}
      modalClass="w-3/5 h-96 flex flex-col items-center"
    >
      <h1 className="text-xl font-semibold">
        {type == "add" ? "ADD TEAM MEMBER" : "EDIT MEMBER"}
      </h1>
      <div className="flex w-full gap-6 mt-8">
        <div className="flex flex-col items-center">
          <img
            src={type == "add" ? imageUrl! : image ? imageUrl:memberData.image}
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
              
              <Select placeholder="Role" defaultValue={roleOptions[findOptionIndex(roleOptions, memberData.role)]} options={roleOptions} onChange={(op)=>{setMemberData({...memberData, role : op?.value || ""})}}/>
              {/* <Select placeholder="Position" options={positionOptions} onChange={(op)=>{setMemberData({...memberData, position : op?.value || ""})}} /> */}
              <CustomInput
                label="Position"
                name="position"
                value={memberData.position}
                onChange={handleChange}
              />{" "}
              <Select placeholder="Team" defaultValue={teamOptions[findOptionIndex(teamOptions, memberData.team)]} options={teamOptions} onChange={(op)=>{setMemberData({...memberData, team : op?.value || ""})}}/>
              <Select placeholder="Year" defaultValue={yearOptions[findOptionIndex(yearOptions, memberData.year.toString())]} options={yearOptions} onChange={(op)=>{setMemberData({...memberData, year : (op?.value && parseInt(op.value)) || 0 })}}/>
        
            </div>
            <CustomButton onClick={(e) => {
              e.preventDefault()
              type=="add"?addMemberHandle() : editMemberHandle();
            }}>{type == "add" ? "ADD" : "EDIT"}</CustomButton>
          </form>
        )}
      </div>
    </Modal>
  );
};

export default TeamMemberModal;
