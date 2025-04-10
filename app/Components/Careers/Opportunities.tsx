
"use client";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import { useEffect, useState } from "react";
import axios from "axios";
import JobApplyDrawer from "./JobApplyDrawer";
import { urls } from "@/app/constant";
import {jobsDataSample} from "../../utils/sampleData"

interface Job {
  jobID: any;
  id: number;
  title: string;
  description: string;
  tags: Array<string>;
  jobDes: string;
  location: string;
  type: string;
  role: string;
  Department: string;
  requirements: string;
  responsibilities: Array<string>;
}

interface FilteredDataProps {
  filteredItems: Job[];
}

export const Jobs: React.FC<FilteredDataProps> = ({ filteredItems }) => {
  const [jobdescId, setJobdescId] = useState(-1);

  return (
    <div>
      {filteredItems.map((item, i) => (
        <div className="mt-[20px]" key={i}>
          <div className="bg-[#F8F8F8] Job-Container sm:p-[20px] py-[20px]">
            <div className="flex justify-between sm:items-start items-center flex-col md:flex-row min-h-[160px] ">
              <div className="flex flex-col sm:items-start items-start pl-[20px] ">
                <h2 className="text-[#4f2d83] font-[800] sm:text-[22px] text-[20px] leading-[27px]">
                  {item.title}
                </h2>
                <div className="w-[90%]">
                  <p className="mt-[20px] sm:text-[18px] text-[18px] font-[400] leading-[22px] text-[#080808]">
                    {item.description}
                  </p>
                </div>
                {/* <div className="mt-[20px] flex flex-col sm:flex-row gap-[10px] w-[full] md:w-[100%] lg:w-[70%]">
                  {item.tags && item.tags[0] && (
                    <button className="rounded-2xl border-solid border-[1px] border-[#4F2D8380] hover:bg-C-Violet hover:text-[white] p-[5px] pl-[20px] pr-[20px] text-[#080808]">
                      <LocationOnOutlinedIcon className="text-gray-400" />{" "}
                      {item.tags[0]}
                    </button>
                  )}
                  {item.tags && item.tags[1] && (
                    <button className="rounded-2xl border-solid border-[1px] border-[#4F2D8380] hover:bg-C-Violet hover:text-[white] p-[5px] pl-[20px] pr-[20px] text-[#080808]">
                      <AccessTimeOutlinedIcon className="text-gray-400" />{" "}
                      {item.tags[1]}
                    </button>
                  )}
                  {item.tags && item.tags[2] && (
                    <button className="rounded-2xl border-solid border-[1px] border-[#4F2D8380] hover:bg-C-Violet hover:text-[white] p-[5px] pl-[20px] pr-[20px] text-[#080808]">
                      {item.tags[2]}
                    </button>
                  )}
                </div> */}
                <div className='mt-[20px] flex flex-col sm:flex-row md:flex-wrap lg:flex-row gap-[10px]'>
                          {item.tags && item.tags[0] && (
                            <button className="rounded-2xl border-solid border-[1px] border-[#4F2D8380] hover:bg-C-Violet hover:text-[white] p-[5px] pl-[20px] pr-[20px] text-[#080808]">
                              <LocationOnOutlinedIcon className='text-gray-400' /> {item.tags[0]}
                            </button>
                          )}
                          {item.tags && item.tags[1] && (
                            <button className="rounded-2xl border-solid border-[1px] border-[#4F2D8380] hover:bg-C-Violet hover:text-[white] p-[5px] pl-[20px] pr-[20px] text-[#080808]">
                              <AccessTimeOutlinedIcon className='text-gray-400' /> {item.tags[1]}
                            </button>
                          )}
                        {item.tags && item.tags[2] && (
                            <button className="rounded-2xl border-solid border-[1px] h-[35px] border-[#4F2D8380] hover:bg-C-Violet hover:text-[white] p-[5px] pl-[20px] pr-[20px] text-[#080808]">
                              {item.tags[2]}
                            </button>
                          )}
                        </div>
              </div>
              <div className="md:mt-[0px] mt-[20px] w-full flex flex-col items-end lg:mt-[40px] sm:pt-[30px] sm:pr-[30px] pr-[20px]">
                <JobApplyDrawer jobID={item.jobID}/>
                <div
                  className="font-[500] text-[16px] leading-[20px] sm:mt-[20px] lg:mt-[50px] sm:ml-[60px] mt-[20px] ml-[160px] flex cursor-pointer"
                  onClick={(event) => {
                    jobdescId == -1 || jobdescId != i
                      ? setJobdescId(i)
                      : setJobdescId(-1);
                  }}
                >
                  <div>{jobdescId == i ? "Show less" : "Show more"}</div>
                  <ExpandMoreIcon />
                </div>
              </div>
            </div>
            <div>
              {jobdescId == i && (
                <div className="animate1 mt-[20px] flex flex-col gap-y-[20px] pl-[20px] pr-[20px] pb-[20px]">
                  <hr className="h-[2px] bg-[#6139e576]" />
                  <div>
                    <div className="font-[700] sm:text-[20px] text-[18px] leading-[25px] text-[#2D834F]">
                     Job Description
                    </div>
                    <div className="mt-[10px] font-[400] sm:text-[16px] text-[14px] leading-[22px] text-[#000000]">
                      {item.requirements}
                    </div>
                  </div>
                  <div className="flex flex-col gap-y-[5px]">
                    <div className="flex gap-[50px]">
                      <div className=" sm:w-[150px] w-[40px] font-[600] sm:text-[18px] text-[14px] leading-[22px] text-[#000000]">
                        Location
                      </div>
                      <span className="sm:text-[18px] text-[14px]">{item.location}</span>
                    </div>
                    <div className="flex gap-[50px] ">
                      <div className="font-[600] sm:text-[18px] text-[14px] leading-[22px] text-[#000000] sm:w-[150px] w-[40px]">
                        Type
                      </div>
                      <span  className="sm:text-[18px] text-[14px]">{item.type}</span>
                    </div>
                    <div className="flex gap-[50px]">
                      <div className="font-[600] sm:text-[18px] text-[14px] leading-[22px] text-[#000000] sm:w-[150px] w-[40px]">
                        Role
                      </div>
                      <span  className="sm:text-[18px] text-[14px]">{item.role}</span>
                    </div>
                    <div className="flex gap-[50px]">
                      <div className="font-[600] sm:text-[18px] text-[14px] leading-[22px] text-[#000000] sm:w-[150px] w-[40px]">
                        Skills
                      </div>
                      <span className="sm:text-[18px] sm:ml-[100px] md:ml-[90px]  lg:ml-[60px]  xl:ml-[20px] text-[14px]">{item.Department}</span>
                    </div>
                  </div>
                  <div>
                    <div className="font-[700] text-[20px] leading-[25px] text-[#2D834F]">
                    Requirements
                    </div>
                    <ul className="mt-[10px] font-[400]  text-[12px] sm:text-[16px] sm:leading-[26px] leading-[16px] text-[#000000]">
                      {item.responsibilities.map((responsibility, i) => (
                        <li key={i}>
                          <span className="bullet ">&bull;</span>{" "}
                          {responsibility}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const Opportunities = () => {
  const [jobs, setJobs] = useState<Job[]>(jobsDataSample.data);
  const [query, setQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState<Job[]>(jobs);

  useEffect(() => {
    const url = `${process.env.baseurl}${urls.jobposting}`;
    axios
      .get(url)
      .then((response) => {
        const jobData = response.data.data.map((job: any) => ({
          id: job.id,
          title: job.attributes.jobTitle,
          description: job.attributes.jobSummary,
          tags: [
            job.attributes.jobLocation,
            job.attributes.jobType,
            job.attributes.experience,
          ],
          jobID:job.attributes.jobID,
          location: job.attributes.jobLocation,
          type: job.attributes.jobType,
          role: job.attributes.jobTitle,
          Department: job.attributes.skills,
          requirements: job.attributes.essentialSkills,
          responsibilities: job.attributes.jobDescription
            .split("\n- ")
            .filter((item: string) => item !== ""),
        }));
        setJobs(jobData);
        // if(jobData.length===0){
        //     setJobs(jobsDataSample.data)
        // }
        setFilteredItems(jobData);
      })
      .catch((error) => {
        console.error("Error fetching job postings:", error);
      });
  }, []);

  useEffect(() => {
    const filtered = jobs.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredItems(filtered);
  }, [query, jobs]);

  return (
    <div className="">
      <div className="lg:pl-[6%] lg:pr-[6%] pl-[5%] pr-[5%]">
        <h3 className="text-[#4f2d83] pt-[30px] sm:pt-[100px] text-[25px] sm:text-[32px] font-[700] sm:leading-[39px] leading-[29px] text-center">
          Opportunities at <span className="font-[800]">Instanpe</span>
        </h3>
        <p className="text-black  text-[16px] sm:text-[18px] font-[500] leading-[27px] text-center mt-[20px]">
          {" "}
          We are looking for self-motivated, passionate, innovative, adaptable
          and risk-taking individuals, who can think creatively and solve
          complex problems, to join our team
        </p>
        <div className="flex flex-col gap-y-[10px] md:flex-row md:gap-[30px] md:items-center justify-between mt-[40px]">
          <span className="text-[18px] mt-[0.5rem]">
            Check out our current openings to find a role that suits you
          </span>
          <div>
            <div>
              <div className="h-[40px] relative text-[white]">
                <SearchOutlinedIcon className="h-[30px] w-[30px] absolute  mt-[5px] text-[#4f2d83] font-[200]" />
                <input
                  type="search"
                  placeholder="Search Jobs"
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                  }}
                  className="text-[#080808] h-[40px] w-[200px]  text-[18px] pl-[40px] border-solid border-b-[1px] border-[#4f2d8378] outline-none"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[40px]">
          <Jobs filteredItems={filteredItems} />
        </div>
      </div>
      <div className="bg-[#4f2d83] lg:pl-[6%] lg:pr-[6%] pl-[5%] pr-[5%] pt-12 pb-12  mt-[50px]">
                    <div className="Job-Container  flex justify-between sm:items-center items-center flex-col md:flex-row p-[30px]  border-solid min-h-[160px] border-2 bg-[#F8F8F8] rounded-lg">
                        <div>
                        <h3 className="text-[#4f2d83] font-[600] text-[20px] sm:text-[22px] leading-[27px]">Did not find anything suitable for yourself ?</h3>
                        <p className='mt-[10px]'>Join our Talent community and stay informed about new opportunities.</p>
                        
                        </div>
                        <div className='mt-[20px] mb-[10px] mr-[50px] md:mr-[0px]'>
                           <JobApplyDrawer jobID={0}/>
                        </div>
                    </div>
          </div>
    </div>
  );
};

export default Opportunities;
