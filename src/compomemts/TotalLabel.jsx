import React from "react";
import { ArrowLongUpIcon, ArrowLongDownIcon } from "@heroicons/react/20/solid";
import LineChart from "../compomemts/LineChart";

const renderPercentOfTrend = (trend, percent) => {
  if (trend === "Up") {
    return (
      <>
        <ArrowLongUpIcon className="h-5 w-5 text-green-middle" />
        <p className="text-green-middle">{percent}</p>
      </>
    );
  } else {
    return (
      <>
        <ArrowLongDownIcon className="h-5 w-5 text-red-middle" />
        <p className="text-red-middle">{percent}</p>
      </>
    );
  }
};

const TotalLabel = (props) => {
  return (
    <div className="grid grid-cols-2 px-6 items-center" id={props.key}>
      <div className="w-full flex flex-col space-y-2 text-gray-middle">
        <p>{props.value.totalType}</p>

        <div className="flex flex-row space-x-1 items-end">
          <div className="text-4xl font-semibold text-gray-dark">
            {props.value.total}
          </div>
          <div className="flex flex-row">
            {renderPercentOfTrend(props.value.trend, props.value.percent)}
          </div>
        </div>
      </div>
      <div className="w-full">
        <LineChart index={props.index} data={props.value.data} />
      </div>
    </div>
  );
};

export default TotalLabel;
