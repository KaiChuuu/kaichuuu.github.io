import personalImg from "@/assets/kai-image.jpg";

function AboutMe() {
  return (
    <div className="flex flex-col text-dark-blue justify-center">
      <img
        className="h-full w-80 object-contain flex self-center shadow-lg"
        src={personalImg}
      />

      <div className="flex w-full justify-center">
        <div className="text-center w-full md:w-1/2 mt-15">
          <span className="text-base-title">Hi! I'm Kai</span>
          <span className="text-base-lg">
            , a passionate software developer with a love for learning new tech
            stacks, sharpening my skills, and building projects that push my
            creativity. I'm always excited to explore new challenges and bring
            ideas to life through code. Feel free to check out my work — thanks
            for stopping by!
          </span>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
