import Heading from "@/components/typography/Heading";
import Text from "@/components/typography/Text";
import { svlLeagueMessages } from "../messages";

export default function YouthSVL() {
  return (
    <div>
      <Heading level={1}>{svlLeagueMessages.youth.title}</Heading>
      <Text>{svlLeagueMessages.youth.description}</Text>
    </div>
  );
}
