import Heading from "@/components/typography/Heading";
import Text from "@/components/typography/Text";
import { eventsMessages } from "./messages";

export default function Events() {
  return (
    <div>
      <Heading level={1}>{eventsMessages.hero.title}</Heading>
      <Text>{eventsMessages.hero.description}</Text>
    </div>
  );
}
