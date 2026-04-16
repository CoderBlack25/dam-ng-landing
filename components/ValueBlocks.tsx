import { FiUsers } from "react-icons/fi";
import { LuWorkflow, LuFolderOpen } from "react-icons/lu";

const ValueBlocks = () => {
  const valueData = [
    {
      id: 1,
      title: "Centralized Document Management",
      description:
        "All your files. All your memos. All your teams. One workspace designed for structure and clarity.",
      icon: <LuFolderOpen className="w-6 h-6 text-white" />,
    },
    {
      id: 2,
      title: "Workflow Automation That Actually Helps",
      description:
        "From document approvals to version tracking, DAM.ng removes bottlenecks and keeps everything moving.",
      icon: <LuWorkflow className="w-6 h-6 text-white" />,
    },
    {
      id: 3,
      title: "Team Collaboration Without the Chaos",
      description:
        "Share, comment, review, approve. Keep every team aligned without losing track of anything.",
      icon: <FiUsers className="w-6 h-6 text-white" />,
    },
  ];

  return (
    <section id="about" className="bg-white text-[#3F0909]">
      <div className="max-w-7xl mx-auto py-28 px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold tracking-tight">
            What DAM.ng Does
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {valueData.map((item) => (
            <div
              key={item.id}
              className="bg-white p-10 border border-[#F2E8E8] shadow-sm flex flex-col items-start min-h-87.5"
            >
              <div className="w-12 h-12 bg-[linear-gradient(to_bottom,#3F0909,#841919)] rounded flex items-center justify-center mb-8 shadow-md">
                {item.icon}
              </div>

              <h3 className="text-lg md:text-xl font-bold mb-5 leading-snug">
                {item.title}
              </h3>
              <p className="text-[#4C4B4B] text-sm md:text-base leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueBlocks;
