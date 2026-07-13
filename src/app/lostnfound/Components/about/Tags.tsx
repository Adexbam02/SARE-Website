export const Tags = () => {
  const tags = [
    "Autonomous Navigation in the Real World",
    "Levels of Autonomy",
    "Sensing and Perception",
    "Localization and Mapping",
    "Path Planning and Control",
  ];
  return (
    <div className="flex gap-4 flex-col md:flex-row md:flex-wrap">
      {tags.map((tag, index) => (
        <span
          key={index}
          className="py-1 px-4 border-2 border-[#67B5DC] rounded-full w-max text-[12px]"
        >
          {tag}
        </span>
      ))}
    </div>
  );
};
