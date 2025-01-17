
import img from "../img/project1.png";
import img2 from "../img/project2.png";
import img3 from "../img/project3.png";
import Example from "./Example";
const Featuerd = () => {
    const examples = [
        {
          images: img,
          link:'https://pattee-29048.web.app/',
          github: 'https://github.com/faysalsarker-dev/Pattee',
          feature: [
            "Adopt Pet: Browse and adopt pets from various shelters and individuals.",
            "Add for Donation Pet: Post pets that need donations for their care.",
            "Money Donated Using Stripe: Securely donate money to support pets and campaigns using Stripe."
          ],
          text:
            "Pattee is a full-stack project utilizing React, Node.js, Express, MongoDB, Firebase, Tailwind CSS, and Stripe. Our platform aims to connect potential pet adopters with pets in need, facilitate donations for pet welfare, and manage pet-related campaigns seamlessly.",
          title: "Pattee"
        },
        {
          github: 'https://github.com/faysalsarker-dev/Foodient',
          images: img2,
          link:'https://foodient-ca6e1.web.app/',
          feature: [
            "Save Data: Once logged in, users can save their food items for future reference.",
            "Add Food Item: Users can add new food items to their list, along with details like name, description, etc.",
            "Request Food Item: Users can request new food items to be added to the available food list."
          ],
          text:
            "The client-side of Foodient is built using modern web technologies including HTML, CSS, JavaScript, and React.js for the frontend framework.",
          title: "Foodient"
        },
        {
          github: 'https://github.com/faysalsarker-dev/Crafland',
          images: img3,
          link:'https://agt-775ef.web.app/',
          feature: [
            "Login/Register/Create an Account-Based Profile: Join our community by creating an account, and unlock the full potential of Craft Land.",
            "Add Craft Item: Share your latest creations with the community by easily adding craft items to our platform.",
            "Watch Your Adding Collection: Stay organized and track your contributions with a personalized collection of your added craft items."
          ],
          text:
            "Craftland: Your Crafting Wonderland Craftland is not just a website; it's a haven for artisans worldwide. Whether you're an experienced crafter or just starting your crafting journey, Craftland offers an immersive experience suitable for every skill level. With a variety of tutorials, project ideas, and expert tips.",
          title: "Crafland"
        }
      ];
    



    return (
        <div>
             {examples.map((example, index) => (
        <Example
          key={index}
          number={index + 2}
          images={example.images}
          feature={example.feature}
          text={example.text}
          github={example.github}
          title={example.title}
          link={example.link}
        />
      ))}
        </div>
    );
};

export default Featuerd;