import React from "react";
import { TotalData } from "../utils/TotalData";
import TotalLabel from "../compomemts/TotalLabel";
import Button from "../compomemts/Button";
import { ReactComponent as MasterCard } from "../assets/Icon/Mastercard.svg";
import {
  ArrowDownTrayIcon,
  ChevronDownIcon,
  CalendarDaysIcon,
  ArrowLongUpIcon,
  ArrowLongDownIcon,
  PlusIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/20/solid";
import {
  MasterCardIcon,
  ShoppingIcon,
  TravelIcon,
  ChartIcon,
  LikeIcon,
  SportIcon,
} from "../assets/Icon/Main";
import BalanceLineChart from "../compomemts/BalanceLineChart";
import BarChart from "../compomemts/BarChart";

const RenderIconLabel = (index) => {
  switch (index) {
    case 0:
      return (
        <div className="p-3 bg-orange rounded-full">
          <ShoppingIcon size="20" color="#FFF" />
        </div>
      );
    case 1:
      return (
        <div className="p-3 bg-purple rounded-full">
          <TravelIcon size="20" color="#FFF" />
        </div>
      );
    case 2:
      return (
        <div className="p-3 bg-yellow rounded-full">
          <ChartIcon size="20" color="#FFF" />
        </div>
      );
    case 3:
      return (
        <div className="p-3 bg-pink rounded-full">
          <LikeIcon size="20" color="#FFF" />
        </div>
      );
    case 4:
      return (
        <div className="p-3 bg-sky rounded-full">
          <SportIcon size="20" color="#FFF" />
        </div>
      );
    default:
      <div className="p-3 bg-white rounded-full">
        <LikeIcon size="20" color="#000" />
      </div>;
  }
};

const EcommercePage = () => {
  return (
    <div className="container mx-auto py-4">
      {/* - - - - Row 1/2 25% - - - - */}
      <div className="md:h-1/5 lg:h-1/5 p-4">
        {/* - - - - Row 1.1/2 25% - - - - */}
        <div className="md:h-2/6 lg:h-2/6 pb-4">
          <div className="h-full">
            {/* - - - - Header Section - - - - */}
            <div className="flex justify-between items-center h-full">
              <div className="text-4xl font-semibold text-gray-dark">
                Overview
              </div>
              <div className="flex flex-rows space-x-4 items-center pl-6">
                <Button
                  type="icon"
                  name="download"
                  iconFirst={<ArrowDownTrayIcon className="h-5 w-5" />}
                />
                <Button
                  type="normal-i"
                  name="download"
                  label="Last 7 Days"
                  iconSecond={
                    <ChevronDownIcon className="h-5 w-5 text-gray-middle" />
                  }
                  bgColor="bg-white"
                />
              </div>
            </div>
          </div>
        </div>

        {/* - - - - Row 1.2/2 25% - - - - */}
        <div className="md:h-4/6 lg:h-4/6 pt-2">
          <div className="h-full">
            <div className="card-normal grid grid-cols-1 lg:grid-cols-3 divide-x-2 divide-border-gray">
              {TotalData.total.map((value, index) => (
                <TotalLabel value={value} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* - - - - Row 2/2 75% - - - - */}
      <div className="md:h-4/5 lg:h-4/5 p-4">
        <div className="md:h-2/4 lg:h-2/4 pb-2">
          <div className="h-full">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">
              {/* - - - - Statistics Section - - - - */}
              <div className="card-normal col-span-2 space-y-6">
                <div className="flex justify-between items-center">
                  <div className="text-2xl font-regular text-gray-dark">
                    Statistics
                  </div>
                  <div className="flex flex-rows space-x-4 items-center pl-6">
                    <Button
                      type="normal-i"
                      name="download"
                      label="19 Aug - 25 Aug"
                      iconFirst={<CalendarDaysIcon className="h-5 w-5" />}
                      iconSecond={
                        <ChevronDownIcon className="h-5 w-5 text-gray-middle" />
                      }
                      border={true}
                      bgColor="bg-white"
                    />
                  </div>
                </div>

                <div className="flex flex-rows space-x-10">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-blue-light rounded-lg">
                      <ArrowLongUpIcon className="h-5 w-5 text-blue-middle" />
                    </div>
                    <div>
                      <div className="text-base text-gray-dark">20.500</div>
                      <div className="text-sm text-gray-middle">Income</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-green-light rounded-lg">
                      <ArrowLongDownIcon className="h-5 w-5 text-green-middle" />
                    </div>
                    <div>
                      <div className="text-base text-gray-dark">5.400</div>
                      <div className="text-sm text-gray-middle">Expense</div>
                    </div>
                  </div>
                </div>

                <BarChart className="chart-wrapper" id="chart-wrapper" />
              </div>

              {/* - - - - Balance - - - - */}
              <div className="card-highlight space-y-6">
                {/* - - - - Header - - - - */}
                <div className="flex justify-between items-center">
                  <div className="text-2xl font-regular text-white">
                    Balance
                  </div>
                  <div className="flex flex-rows space-x-4 items-center pl-6">
                    <Button
                      type="icon"
                      name="download"
                      iconFirst={
                        <EllipsisHorizontalIcon className="h-6 w-6 text-white" />
                      }
                      color="text-white"
                      bgColor="transparent"
                    />
                  </div>
                </div>

                {/* - - - - Content - - - - */}
                <div className="space-y-4">
                  <div className="flex">
                    <p className="text-4xl font-semibold text-white">
                      $27,500.00
                    </p>
                  </div>
                  <div className="flex space-x-4">
                    <Button
                      type="normal-i"
                      name="income"
                      label="Income"
                      bgColor="bg-optical-white-30 "
                      color="text-white"
                    />
                    <Button
                      type="normal-i"
                      name="expenses"
                      label="Expenses"
                      bgColor="transparent"
                      color="text-optical-white-80"
                    />
                  </div>
                  <div id="chart-wrapper">
                    <BalanceLineChart />
                  </div>
                  <div className="flex space-x-6">
                    <div className="flex space-x-2">
                      <div>
                        <p className="font-regular text-white">Income:</p>
                      </div>
                      <div>
                        <p className="font-regular font-semibold text-white">
                          $500
                        </p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <p className="font-regular text-white">Spending:</p>
                      <p className="font-regular font-semibold text-white">
                        $200
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:h-2/4 lg:h-2/4 pt-2">
          <div className="h-full">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">
              {/* - - - - My Card Section - - - - */}
              <div className="card-normal col-span-2 space-y-6">
                {/* - - - - Header - - - - */}
                <div className="flex justify-between items-center">
                  <div className="text-2xl font-regular text-gray-dark">
                    My Card
                  </div>
                  <div className="flex flex-rows space-x-4 items-center pl-6">
                    <Button
                      type="normal-i"
                      name="download"
                      label="5880 **** **** 8854"
                      iconFirst={<MasterCardIcon width="20px" height="20px" />}
                      iconSecond={
                        <ChevronDownIcon className="h-5 w-5 text-gray-middle" />
                      }
                      border={true}
                      bgColor="bg-white"
                    />
                  </div>
                </div>

                {/* - - - - Content - - - - */}
                <div className="grid grid-cols-2 gap-12">
                  {/* - - - - Row 1- - - - */}
                  <div className="mycard-col-l">
                    <MasterCard className="mycard" />
                  </div>
                  <div className="mycard-col-r grid grid-cols-3 gap-4">
                    <div className="col-span-1 text-gray-middle">
                      Card Type:
                    </div>
                    <div className="col-span-2 text-gray-dark">
                      {TotalData.myCard.cardType}
                    </div>
                    <div className="col-span-1 text-gray-middle">
                      Card Holder:
                    </div>
                    <div className="col-span-2 text-gray-dark">
                      {TotalData.myCard.cardHolder}
                    </div>
                    <div className="col-span-1 text-gray-middle">Expires:</div>
                    <div className="col-span-2 text-gray-dark">
                      {TotalData.myCard.expires}
                    </div>
                    <div className="col-span-1 text-gray-middle">
                      Card Number:
                    </div>
                    <div className="col-span-2 text-gray-dark">
                      {TotalData.myCard.cardNumber}
                    </div>
                    <div className="col-span-1 text-gray-middle">
                      Total Balance:
                    </div>
                    <div className="col-span-2 text-gray-dark">
                      {TotalData.myCard.totalBalance}
                    </div>
                    <div className="col-span-1 text-gray-middle">
                      Total Debt:
                    </div>
                    <div className="col-span-2 text-gray-dark">
                      {TotalData.myCard.totalDebt}
                    </div>
                  </div>
                </div>

                {/* - - - - Row 2 - - - - */}
                <div className="grid grid-cols-2 gap-12">
                  <div>
                    <hr className="border-main" />
                    <div className="flex pt-6">
                      <Button
                        type="normal-i"
                        name="addCard"
                        label="Add Card"
                        iconFirst={
                          <PlusIcon className="h-5 w-5 text-blue-middle" />
                        }
                        bgColor="bg-blue-light"
                        color="text-blue-middle"
                        widethFull={true}
                      />
                    </div>
                  </div>
                  <div>
                    <hr className="border-main" />
                    <div className="flex pt-6 space-x-6">
                      <Button
                        type="normal-i"
                        name="payDebt"
                        label="Pay Debt"
                        bgColor="bg-blue-middle"
                        color="text-white"
                      />
                      <Button
                        type="normal-i"
                        name="cancel"
                        label="Cancel"
                        border={true}
                        bgColor="bg-white"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* - - - - Table Section - - - - */}
              <div className="card-normal space-y-6">
                {/* - - - - Header - - - - */}
                <div className="flex justify-between items-center">
                  <div className="text-2xl font-regular text-gray-dark">
                    Transactions
                  </div>
                  <div className="flex flex-rows space-x-4 items-center pl-6">
                    <Button
                      type="icon"
                      name="download"
                      iconFirst={
                        <EllipsisHorizontalIcon className="h-6 w-6 text-gray-middle" />
                      }
                    />
                  </div>
                </div>

                {/* - - - - Content- - - - */}
                <div className="h-5/6 grid content-between">
                  {TotalData.transactions.map((value, index) => (
                    <div key={index} className="grid grid-rows w-full">
                      <div className="grid grid-cols-5 items-center">
                        <div class="col-span-1">
                          <div className="flex">{RenderIconLabel(index)}</div>
                        </div>
                        <div class="col-span-3">
                          <p className="text-base text-gray-dark">
                            {value.title}
                          </p>
                          <p className="text-xs text-gray-middle">
                            {value.timestamp}
                          </p>
                        </div>
                        <div className="col-span-1">
                          <p className="text-base font-semibold text-right text-gray-dark ">
                            {value.currency}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcommercePage;
