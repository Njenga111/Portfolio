import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
<<<<<<< HEAD
          "Data Engineer",
          "Web Developer",
=======
          "Software Developer",
          "Freelancer",
>>>>>>> f9b7f3e876a3cbc537a1f8339b2d35af1b735c0a
          "MERN Stack Developer",
          "Open Source Contributor",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
