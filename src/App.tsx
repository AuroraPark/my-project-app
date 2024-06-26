import "./App.css";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { ScrollArea } from "./components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./components/ui/select";

function App() {
  const projects = [
    {
      name: "Project1",
    },
    {
      name: "Project2",
    },
    {
      name: "Project3",
    },
    {
      name: "Project4",
    },
    {
      name: "Project5",
    },
  ];
  return (
    <div className="w-full h-svh min-h-fit flex place-content-center place-items-center">
      <div className="w-[80%] h-[80%] block">
        <div className="w-full h-fit pb-8">
          <h1 className="text-5xl">Project</h1>
        </div>
        <div className="grid grid-flow-col place-content-around">
          <div className="flex gap-3">
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="최신순" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>정렬방법</SelectLabel>
                  <SelectItem value="apple">최신순</SelectItem>
                  <SelectItem value="banana">이름순</SelectItem>
                  <SelectItem value="blueberry">부석순</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <div className="flex w-full">
              <Input className="w-full h-30" />
              <Button variant={"link"} className="-ml-12">
                🔍
              </Button>
            </div>
          </div>
          <div>
            <Button>Add Project</Button>
          </div>
        </div>
        <div className="w-full h-[80%] flex items-center justify-center">
          <div className="w-[80%] whitespace-normal rounded-md  h-[80%] flex flex-row gap-9 overflow-x-scroll">
            {projects.map((project, index) => {
              return (
                <div className="w-40 h-40 px-2 py-2 flex flex-col place-content-start place-items-center border gap-4 bg-white rounded-lg">
                  <div key={index} className="w-full overflow-hidden">
                    <img
                      src="../../public/vite.svg"
                      className="w-full h-full overflow-hidden object-cover  border-b-zinc-200 rounded-lg"
                    />
                  </div>
                  <div className="w-full border-t-[1px] flex justify-center text-center">
                    <div>{project.name}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
