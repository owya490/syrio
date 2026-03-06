import Heading from "@/components/typography/Heading";
import Text from "@/components/typography/Text";
import { svlLeagueMessages } from "./messages";

export default function SVL() {
  return (
    <div>
      <Heading level={1}>{svlLeagueMessages.main.title}</Heading>
      <Text>{svlLeagueMessages.main.description}</Text>
    </div>
  );
}
