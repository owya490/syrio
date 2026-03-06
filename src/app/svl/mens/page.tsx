import Heading from "@/components/typography/Heading";
import Text from "@/components/typography/Text";
import { svlLeagueMessages } from "../messages";

export default function MensSVL() {
  return (
    <div>
      <Heading level={1}>{svlLeagueMessages.mens.title}</Heading>
      <Text>{svlLeagueMessages.mens.description}</Text>
    </div>
  );
}
