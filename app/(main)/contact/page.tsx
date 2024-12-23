"use client";
import { useState } from "react";
import { cn } from "@/lib/utils"; 
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FileUpload } from "@/components/ui/file-upload";
import { Button } from "@/components/ui/button";

interface ResponseProps { 
  work: string, 
  budget: string,
  name: string, 
  email: string, 
  mobile: string,
  image?: string, 
  country: string, 
  details: string, 
}


const ContactPage = () => {
  const [selectedWork, setSelectedWork] = useState("");
  const [selectedBudget, setSelectedBudget] = useState("");
  const [response, setResponse] = useState<ResponseProps>({
    work: "", 
    budget: "",
    name: "", 
    email: "", 
    mobile: "",
    image: "", 
    country: "", 
    details: "", 
  }) 

  const workTypes = ["Backend","Frontend","Full Stack","WordPress","SaaS","Custom","HTML / CSS"];
  const budgets = ['$100', '$100-500', "$500 - $1000", "$1000 - $5000", "$5000+"];

  const handleFileChange = (files: File[]) => {
    try {
      console.log(files); 
      setResponse((prevResponse) => ({
        ...prevResponse,
        image: files[0].name, 
      }));
    } catch (error) {
      console.log("Something went wrong:", error);
    }
  };
  

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setResponse((prevResponse) => ({
      ...prevResponse,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {

    if (response.budget === "" || response.work === "" || response.name === "" || response.email === "" ||response.mobile === "" ||response.country === "" ||response.details === "" ||response.image === "") { 
      alert("Please Fill All the Parameters!")
      return;
    }

    try {   
      const newResponse = await fetch("/api/send-mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(response),
      });

      if (newResponse.status) { 
        setResponse({
          work: "", 
          budget: "",
          name: "", 
          email: "", 
          mobile: "",
          image: "", 
          country: "", 
          details: "", 
        }) 
        alert("Your Response is successfully sent!")
      } else { 
        alert("Something went wrong. Please try again!")
      }
    } catch (error) {
      console.error("Error sending email: ", error);
    }
  };
    
  return (
    <AuroraBackground>
      <div className=" h-[90vh] overflow-y-auto no-scrollbar w-[90vw] z-[99] md:mt-8 p-4 mx-auto bg-black/15 rounded-lg shadow-lg space-y-8">

        {/* Header of the page */}
        <div className="flex flex-col items-center justify-center gap-y-1">
          <h2 className="text-3xl md:text-6xl font-semibold shadow-lg text-white"> Get In Touch </h2>
          <h2 className="text-md md:text-xl text-gray-200"> We are happy to help you! </h2>
        </div>

        {/*  */}
        <div>
          <h2 className="text-lg font-semibold text-slate-300 mb-4">What you Need?</h2>
          <div className="flex flex-wrap items-center gap-2 md:gap-4">
            {workTypes.map((type) => (
              <div
                key={type}
                onClick={() => {
                  setSelectedWork(type);
                  setResponse((prevResponse) => ({ ...prevResponse, work: type })); 
                }}
                className={cn(
                  "cursor-pointer px-4 py-2 border rounded-lg text-center transition hover:bg-white hover:text-slate-800 border-slate-100 text-xs md:text-base",
                  selectedWork === type && "border-slate-800 bg-slate-100 text-slate-800"
                )}
              >
                {type}
              </div>
            ))}
          </div>
        </div>

        {/* Step 2: Budget */}
        <div>
          <h2 className="text-lg font-semibold text-gray-300 mb-4">Select Your Budget</h2>
          <div className="flex flex-wrap items-center gap-2 md:gap-4">
            {budgets.map((budget) => (
              <div
                key={budget}
                onClick={() => {
                  setSelectedBudget(budget);
                  setResponse((prevResponse) => ({ ...prevResponse, budget: budget })); // Update the `budget` field in the state
                }}
                className={cn(
                  "cursor-pointer px-4 py-2 border rounded-lg text-center transition hover:bg-white hover:text-slate-800 border-slate-100 text-xs md:text-base",
                  selectedBudget === budget && "border-slate-800 bg-slate-100 text-slate-800"
                )}
              >
                {budget}
              </div>
            ))}
          </div>
        </div>

        {/* Personal Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col space-y-2">
              <Label>Name</Label>
              <Input name='name' value={response.name} onChange={handleInputChange} type='text' placeholder="John Doe" className='bg-transparent border-white text-white'   />
            </div>
            <div className="flex flex-col space-y-2">
              <Label>Email Id</Label>
              <Input name='email' value={response.email} onChange={handleInputChange} type='email' placeholder="JohnDoe@gmail.con" className='bg-transparent border-white text-white' />
            </div>
            <div className="flex flex-col space-y-2">
              <Label>Mobile Number</Label>
              <Input name='mobile' value={response.mobile} onChange={handleInputChange} type='text' placeholder="+91 9876543210" className='bg-transparent border-white text-white'   />
            </div>
            <div className="flex flex-col space-y-2">
              <Label>Your Country</Label>
              <Input name='country' value={response.country} onChange={handleInputChange} type='text' placeholder="India" className='bg-transparent border-white text-white'    />
            </div>
            
        </div>
        <div className="flex flex-col space-y-2">
            <Label>Project Details! </Label>
            <Textarea placeholder="Enter specifics of your project!" className='bg-transparent border-white text-white' name='details' value={response.details} onChange={handleInputChange}/>
        </div>
        <FileUpload onChange={handleFileChange} />
        <Button onClick={handleSubmit} className="bg-teal-600 hover:bg-teal-900 px-5 py-3 rounded-full flex items-center w-full" >
          Book Now!
        </Button>
      </div>
    </AuroraBackground>
  );
};

export default ContactPage;
