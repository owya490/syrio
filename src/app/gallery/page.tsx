import PageContainer from "@/components/layout/PageContainer";
import Heading from "@/components/typography/Heading";
import Text from "@/components/typography/Text";

export default function Gallery() {
  return (
    <PageContainer>
      <Heading level={1}>Gallery</Heading>
      <Text>
        Photos and videos from our events.
      </Text>
    </PageContainer>
  );
}

