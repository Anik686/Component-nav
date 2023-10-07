import React from "react";
import Button from "../components/Button";
import {
  GoAlert,
  GoBookmark,
  GoBell,
  GoBroadcast,
  GoCheckCircle,
} from "react-icons/go";

function ButtonPage() {
  const handleClick = () => {
    console.log("Bookmarked!");
  };

  return (
    <div>
      <div>
        <Button primary rounded outline onClick={handleClick}>
          <GoBookmark />
          Bookmark
        </Button>
      </div>
      <div>
        <Button secondary on>
          <GoBroadcast />
          Broadcast
        </Button>
      </div>
      <div>
        <Button success rounded>
          <GoCheckCircle />
          Check
        </Button>
      </div>
      <div>
        <Button warning>
          <GoBell />
          Notify
        </Button>
      </div>
      <div>
        <Button danger outline>
          <GoAlert />
          Alert
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
