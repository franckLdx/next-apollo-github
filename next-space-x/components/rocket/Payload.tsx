import React, { useMemo } from "react";
import { Props } from "./Props";
import { Separator } from "@components/Separator";
import { StatProps, InlineStats } from "@components/InlineStats";
import { SkeletonOnLoading } from "@components/SkeletonOnLoading";

export const Payload: React.FC<Props> = ({ rocket, ...props }) => {
  const stats: Array<StatProps> = useMemo(
    () => rocket.payload_weights.map(
      ({ id, name, kg }) => ({ id, label: name, data: `${kg} kg` })
    )
    ,
    [rocket.payload_weights]
  );
  return (
    <>
      <Separator {...props}>Payload</Separator>
      <SkeletonOnLoading><InlineStats stats={stats} /></SkeletonOnLoading>
    </>
  );
}
