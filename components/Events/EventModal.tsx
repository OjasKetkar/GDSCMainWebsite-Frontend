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
import axios, { Axios } from "axios";
import useSnack from "../../hooks/useSnack";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button } from "react-bootstrap";
import { secureHeapUsed } from "crypto";
import { json } from "stream/consumers";
import axiosInstance from "../../utils/axiosInstance";
import Event from "../../pages/events";

const eventOptions = [
  { value: "UPCOMING", label: "UPCOMING"},
  { value: "ONGOING", label: "ONGOING" },
  { value: "PAST", label: "PAST" },
];
type Props = {
  state: boolean;
  toggleModal: MouseEventHandler<HTMLElement>;
  type: string;
  oneEvent: any;
};

interface Event {
  id: string;
  title: string;
  venue: string;
  description: string;
  registrationLink: string;
  date: string;
  endDate: string;
  status: string;
  isFeatured: string;
  image: any;
  schedule: any;
}

const EventModal: FunctionComponent<Props> = ({
  state,
  toggleModal,
  type,
  oneEvent,
}) => {
  let tempArr: any;
  if (type != "add") {
    tempArr = oneEvent.schedule;
  }

  const [schedule, setSchedule] = useState([
    {
      date: "",
      slots: [
        {
          start: "",
          end: "",
        },
      ],
    },
  ]);

  const [image, setImage] = useState<File | null>(null);

  const [eventData, setEventData] = useState<Event>({
    id: oneEvent._id,
    title: type == "add" ? "" : oneEvent.title,
    venue: type == "add" ? "" : oneEvent.venue,
    description: type == "add" ? "" : oneEvent.description,
    registrationLink: type == "add" ? "" : oneEvent.registrationLink,
    date: type == "add" ? "" : oneEvent.date.slice(0, 10),
    endDate: type == "add" ? "" : oneEvent.endDate.slice(0, 10),
    status: type=="add"?"":oneEvent.status,
    image: type == "add" ? image : oneEvent.thumbnail,
    isFeatured: type == "add" ? "" : oneEvent.isFeatured,
    schedule: type == "add" ? "" : oneEvent.schedule,
  });

  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [imageUploadMode, setImageUploadMode] = useState<boolean>(false);
  const [showAddModal, setShowAddModal] = useState<boolean>(false);
  const [toggle,setToggle] = useState<boolean>(false);

  const toggleAddModal: MouseEventHandler = () => {
    setShowAddModal(!showAddModal);
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setEventData({
      ...eventData,
      [e.target.name]: e.target.value,
    });
  };

  const handleScheduleChange = (e: any, index: any) => {
    // console.log(index,e.target.value);
    let data = [...schedule];
    data[index]["date"] = e.target.value;
    setSchedule(data);
  };
  const handleSlotChange = (e: any, index: any, parentIndex: any) => {
    let data = [...schedule];
    //  console.log("from slot : ",e)
    // console.log("ScheduleIndex is : ",scheduleIndex);
    data[parentIndex]["slots"][index]["end"] = e.target.value;
    setSchedule(data);
  };
  const handleStartChange = (e: any, index: any, parentIndex: any) => {
    let data = [...schedule];
    // console.log("data is  : ", data);
    // console.log("ScheduleIndex is : ", scheduleIndex);
    data[parentIndex]["slots"][index]["start"] = e.target.value;
    setSchedule(data);
  };

  const addFields = () => {
    let obj = {
      date: "",
      slots: [
        {
          start: "",
          end: "",
        },
      ],
    };
    setSchedule([...schedule, obj]);
  };

  const addSlots = (e: any, index: any) => {
    let data = [...schedule];
    let obj = {
      start: "",
      end: "",
    };
    data[index]["slots"].push(obj);
    setSchedule(data);
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
    if (type != "add") {
      setSchedule(tempArr);
      setToggle(oneEvent.isFeatured);
    }
  }, [type]);

  useEffect(() => {
    if (image == null) {
      if (type != "add") {
        setImageUrl(
          // "https://t3.ftcdn.net/jpg/01/09/00/64/360_F_109006426_388PagqielgjFTAMgW59jRaDmPJvSBUL.jpg"
          oneEvent.thumbnail
        );
        return;
      } else {
        setImageUrl(
          "https://t3.ftcdn.net/jpg/01/09/00/64/360_F_109006426_388PagqielgjFTAMgW59jRaDmPJvSBUL.jpg"
        );
        return;
      }
    }

    setImageUrl(URL.createObjectURL(image));
    eventData.image = image;
  }, [image]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const handleSubmit = async () => {
    eventData.schedule = schedule;
    console.log("EventData : ",eventData);
    // console.log("image is : ",eventData.image)
    const { enqueSnack } = useSnack();

    try {
      let formData = new FormData();

      formData.append("title", eventData.title);
      formData.append("venue", eventData.venue);
      formData.append("description", eventData.description);
      formData.append("registrationLink", eventData.registrationLink);
      formData.append("isFeatured", eventData.isFeatured);
      formData.append("schedule", JSON.stringify(eventData.schedule));
      formData.append("date", eventData.date);
      formData.append("endDate", eventData.endDate);
      formData.append("status",eventData.status);
      console.log(typeof eventData.image);

      if (type == "add") {
     
          formData.append("file", eventData.image);
        
        // console.log(formData.get('title'));
        console.log(formData.get('file'));
        // console.log(formData.get('schedule'));
        //  console.log("request sent");
        const response = await axiosInstance.post("/events/newEvent", formData);
        // console.log('Data:', response);
        enqueSnack("Event Added successfully !!", { type: "success" });
        window.location.reload();
        return;
      } else {
        console.log("Hello world");

        console.log("status:",eventData.status);
        // console.log("....",typeof(formData.get('file')));
        formData.append("file", eventData.image);
        formData.append("id", eventData.id);
        const response = await axiosInstance.put("/events/editEvent", formData);
        console.log("updated response : ", response);
        window.location.reload();
        enqueSnack("Event Updated successfully !!", { type: "success" });
        return;
      }
    } catch (e) {
      console.log(e);
      throw e;
    }
  };

  return (
    <Modal
      open={state}
      toggleModal={toggleModal}
      modalClass="w-3/5 h-140 flex flex-col items-center"
    >
      <div className="flex flex-row gap-6 justify-between">
      <h1 className="text-xl font-semibold">
        {type == "add" ? "ADD Event" : "EDIT Event"}
      </h1>
     {toggle ?
        <Icon
        icon="la:toggle-on"
        color="green"
        className="w-5 h-5 cursor-pointer"
        style={{width:"60",scale:"1.5"}}
        onClick={()=>{
          setEventData({...eventData,isFeatured:"false"})
          setToggle(false)
        }} 
      /> :
      <Icon
      icon="la:toggle-off"
      color="green"
      className="w-5 h-5 cursor-pointer"
      style={{width:"60",scale:"1.5"}}
      onClick={()=>{
        setEventData({...eventData,isFeatured:"true"})
        setToggle(true)
      }}
    />
     }
      
      </div>
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
                label="Event Name"
                name="title"
                value={eventData.title}
                onChange={handleChange}
              />
              <CustomInput
                label="venue"
                name="venue"
                value={eventData.venue}
                onChange={handleChange}
              />
              <CustomInput
                label="Description"
                name="description"
                value={eventData.description}
                onChange={handleChange}
              />
              <CustomInput
                label="Registration link "
                name="registrationLink"
                value={eventData.registrationLink}
                onChange={handleChange}
              />
              <input
                type="date"
                name="date"
                value={eventData.date}
                onChange={handleChange}
              />
              <input
                type="date"
                name="endDate"
                value={eventData.endDate}
                onChange={handleChange}
              />
              {/* <CustomInput
                label="is Featured"
                name="isFeatured"
                value={eventData.isFeatured}
                onChange={handleChange}
              /> */}
              <Select 
               placeholder="Status"
               options={eventOptions} 
               defaultValue={{label:eventData.status || "Status",value:eventData.status}} 
               onChange={(e)=>{setEventData({...eventData, status : e?.value || ""})}}
               />
              <Button
                onClick={addFields}
                style={{ backgroundColor: "#5FB0B7" }}
              >
                Add Schedule
              </Button>
              {schedule.map((day, index) => {
                return (
                  <div
                    key={index}
                    className="grid grid-cols-2 gap-6 gap-y-8 w-full"
                  >
                    <input
                      type="date"
                      name="eventDate"
                      value={day.date}
                      onChange={(e) => handleScheduleChange(e, index)}
                    />
                    <Button
                      style={{ backgroundColor: "#6C91BF" }}
                      onClick={(e) => addSlots(e, index)}
                    >
                      Add Slot
                    </Button>
                    {day.slots.map((slot, ind) => {
                      return (
                        <div key={index}>
                          <input
                            key={ind}
                            type="time"
                            name="start"
                            value={slot.start}
                            onChange={(e) => handleStartChange(e, ind, index)}
                          />
                          <input
                            key={ind}
                            type="time"
                            name="end"
                            value={slot.end}
                            onChange={(e) => handleSlotChange(e, ind, index)}
                          />
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
            <CustomButton
              onClick={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
            >
              {type == "add" ? "ADD" : "EDIT"}
            </CustomButton>
          </form>
        )}
      </div>
    </Modal>
  );
};

export default EventModal;
