import { useMemo, useState } from "react";
import { EventTicketTypesMap } from "@/types/eventTicketTypes";
import {
  getBuyerTicketCountOptions,
  getSortedEventTicketTypes,
  hasEventTicketTypes,
  pickDefaultTicketTypeId,
} from "@/utils/eventTicketTypes";

export function useEventTicketTypeCheckout(params: {
  eventTicketTypes?: EventTicketTypesMap;
  vacancy: number;
  priceInCents: number;
  maxTicketsPerTransaction?: number;
}) {
  const usesTicketTypes = hasEventTicketTypes({
    eventTicketTypes: params.eventTicketTypes,
  });
  const activeTypes = useMemo(
    () => getSortedEventTicketTypes(params.eventTicketTypes),
    [params.eventTicketTypes],
  );
  const showTypeSelector = usesTicketTypes && activeTypes.length > 1;

  const [selectedTypeId, setSelectedTypeId] = useState<string | null>(() =>
    pickDefaultTicketTypeId(activeTypes),
  );
  const resolvedTypeId =
    selectedTypeId !== null &&
    activeTypes.some((type) => type.eventTicketTypeId === selectedTypeId)
      ? selectedTypeId
      : pickDefaultTicketTypeId(activeTypes);

  const selectedType = useMemo(
    () => activeTypes.find((t) => t.eventTicketTypeId === resolvedTypeId),
    [activeTypes, resolvedTypeId],
  );

  const effectiveVacancy = usesTicketTypes
    ? (selectedType?.eventTicketType.vacancy ?? 0)
    : params.vacancy;
  const effectivePrice = usesTicketTypes
    ? (selectedType?.eventTicketType.price ?? params.priceInCents)
    : params.priceInCents;
  const effectiveEventTicketTypeId = usesTicketTypes ? resolvedTypeId : null;

  const allCounts = useMemo(
    () =>
      getBuyerTicketCountOptions(
        effectiveVacancy,
        params.maxTicketsPerTransaction,
      ),
    [effectiveVacancy, params.maxTicketsPerTransaction],
  );

  const [attendeeCount, setAttendeeCount] = useState(1);
  const resolvedAttendeeCount =
    allCounts.length === 0 || allCounts.includes(attendeeCount)
      ? attendeeCount
      : allCounts[0];

  const handleTicketTypeChange = (value: string) => {
    if (value) {
      setSelectedTypeId(value);
    }
  };

  const typeSoldOut = effectiveVacancy === 0 && allCounts.length === 0;
  const allTypesSoldOut = usesTicketTypes
    ? activeTypes.length > 0 &&
      activeTypes.every((type) => type.eventTicketType.vacancy === 0)
    : params.vacancy === 0;

  return {
    usesTicketTypes,
    showTypeSelector,
    activeTypes,
    selectedTypeId: resolvedTypeId,
    handleTicketTypeChange,
    selectedType,
    effectiveVacancy,
    effectivePrice,
    effectiveEventTicketTypeId,
    allCounts,
    attendeeCount: resolvedAttendeeCount,
    setAttendeeCount,
    typeSoldOut,
    allTypesSoldOut,
  };
}
