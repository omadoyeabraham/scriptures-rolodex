import React from "react";

export const ScriptureCard = (props) => {
  const { scripture } = props;
  return (
    <div className="bg-white border rounded-lg overflow-hidden">
      <img src={scripture.image.url} alt={scripture.image.description} />
      <div className="p-6">
        <h4 className="font-bold text-xlg uppercase">{scripture.verse}</h4>
        <div className="mt-5">
          {scripture.tags.map((tag, index) => (
            <h5
              className="inline bg-green-200 px-2 mr-2 py-1 border rounded-lg"
              key={index}
            >
              {tag}
            </h5>
          ))}
        </div>
      </div>
    </div>
  );
};
