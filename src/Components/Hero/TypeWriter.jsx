
import React from "react";

import { typewriterRoles } from "../../constants/index.js";
import useTypeWriter from "../../hooks/useTypeWriter.js";

const TypeWriter = () => {
  const roles = typewriterRoles;
  const typedText = useTypeWriter(roles);

  return (
    <div className="flex shrink-0">
      <h2
        className="
          pangolin-font
          font-semibold
          text-xl
          md:text-2xl
          xl:text-4xl

          bg-gradient-to-r
          from-emerald-600
          via-teal-600
          to-cyan-600

          dark:from-lime-400
          dark:via-green-400
          dark:to-cyan-400

          bg-clip-text
          text-transparent
          h-20

          transition-colors
          duration-500
          ease-in-out
        "
      >
        {typedText}
      </h2>

      <span
        className="
          cursor
          text-xl
          md:text-2xl
          xl:text-4xl

          text-emerald-600
          dark:text-green-400

          transition-colors
          duration-500
          ease-in-out
        "
      >
        |
      </span>
    </div>
  );
};

export default React.memo(TypeWriter);

