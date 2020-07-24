import React from "react";
import { ScriptureCard } from "./scripture-card.component";

export const ScriptureList = (props) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
      {props.scriptures.map((scripture) => (
        <ScriptureCard key={scripture.id} scripture={scripture}></ScriptureCard>
      ))}
    </div>
  );
};
