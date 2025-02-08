import React, { useContext } from "react";
import { Context } from "../../main";

const About = () => {
  const { mode } = useContext(Context);
  return (
    <article className={mode === "dark" ? "dark-bg about" : "light-bg about"}>
      <div className="container">
        <h2>About</h2>
        <p>
          Creating a blog website where you can post daily blogs on a variety of topics is an excellent way to engage a diverse audience and share your passion for different subjects. This type of blog can cater to readers looking for fresh content on everything from technology and travel to lifestyle and entertainment. By covering a wide array of topics, you can attract readers with varied interests and build a loyal following. Daily posts ensure that your audience always has something new to read, keeping them coming back for more.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam
          officia dolorum quo architecto animi mollitia vitae eligendi quia nemo
          corporis facilis beatae ipsum fugit, quaerat expedita officiis fugiat!
          Dolore totam consequuntur ea maxime architecto sit cumque excepturi
          voluptatibus voluptatem nisi.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae sint
          ratione odit saepe aperiam, amet doloribus quisquam. Quisquam, dolorum
          doloremque!
        </p>
        <p>
          One of the key benefits of such a blog is its ability to keep content dynamic and engaging. When you write about different topics, you avoid the monotony of focusing on a single niche, which can sometimes limit creativity and interest. This diversity not only keeps your readers entertained but also allows you to explore and learn about various subjects. Additionally, writing on multiple topics can help improve your writing skills, as you adapt to different styles and tones required for each subject.
        </p>
        <p>
          To make your blog successful, it's crucial to maintain a consistent posting schedule and ensure high-quality content. Researching thoroughly and providing valuable insights on each topic will establish your blog as a reliable source of information. Engaging with your readers through comments and social media can also enhance the sense of community and encourage more interactions. With dedication and creativity, your blog website can become a go-to destination for readers seeking diverse and informative content every day.
        </p>
      </div>
    </article>
  );
};

export default About;
