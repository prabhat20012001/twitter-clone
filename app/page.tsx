import {BsBell, BsBookmark, BsEnvelope, BsTwitter} from "react-icons/bs"
import {BiHash, BiHomeCircle, BiUser} from "react-icons/bi"
export default function Home() {
  interface TwitterSidebarButton{
    title:string;
    icon:React.ReactNode;
  }
  const sidebarMenuItems:TwitterSidebarButton[]=[
    {
      title:"Home",
      icon:<BiHomeCircle/>
    },
    {
      title:"Explore",
      icon:<BiHash/>
    },{
      title:"Notifications",
      icon:<BsBell/>
    }
    ,{
      title:"Messages",
      icon:<BsEnvelope/>
    },{
      title:"Bookmarks",
      icon:<BsBookmark/>
    }
    ,{
      title:"Profile",
      icon:<BiUser/>
    }
  ]
  return (
   <>
   <div>
    <div className="grid grid-cols-12 h-screen w-screen bg-black px-56">
      <div className="col-span-3  pt-4 px-4 ">
        <div className="text-4xl h-fit w-fit hover:bg-gray-800 rounded-full p-4 cursor-pointer text-white">
        <BsTwitter className=""/>
        </div>
      <div>
        <ul>
          {sidebarMenuItems.map((item)=>(
            <li className="flex justify-start items-center gap-4 hover:bg-gray-600 rounded-full font-bold text-white px-5 my-1 py-2 w-fit cursor-pointer">
              <span>{item.icon}</span><span>{item.title}</span>
            </li>
          ))}
        </ul>
        <div className="mt-5 px-10">
        <button className="bg-sky-400 text-white px-4 py-2 rounded-full w-full">Tweet</button>

        </div>
      </div> 
      </div>
      <div className="col-span-6  border-x-[.2px]  border-slate-600 "></div>
      <div className="col-span-3 "></div>
    </div>
   </div>
   </>
  );
}
