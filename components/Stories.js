import { useEffect, useState } from "react";
import faker from "faker";
import Story from "./Story";

function Stories() {
  const [suggetions, setSuggetions] = useState([]);

  useEffect(() => {
    const suggetions = [...Array(15)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));

    setSuggetions(suggetions);
  }, []);
  return (
    <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll">
      {suggetions.map((profile) => (
        <Story
          key={profile.id}
          img={profile.avatar}
          username={profile.username}
        />
      ))}
    </div>
  );
}

export default Stories;
