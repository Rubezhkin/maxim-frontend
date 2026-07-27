import { useState } from "react";
import { subscribe, unsubscribe } from "../api/subscriptionApi";

interface Props {
  id: number;
  isSubscribed: boolean;
  onChange: () => Promise<void>;
}

function SubscribeButton({ id, isSubscribed, onChange }: Props) {
  const [subscribed, setSubscribed] = useState(isSubscribed);

  const handleClick = async () => {
    if (subscribed) {
      await unsubscribe(id);
      setSubscribed(false);
    } else {
      await subscribe(id);
      setSubscribed(true);
    }
    await onChange();
  };

  return (
    <button onClick={handleClick}>
      {subscribed ? "Отписаться" : "Подписаться"}
    </button>
  );
}

export default SubscribeButton;
