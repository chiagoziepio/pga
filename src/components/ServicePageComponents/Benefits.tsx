import { tableCols, tableDataSource } from "@/lib/Datas";
import { Table } from "antd";
import React from "react";

const Benefits = () => {
  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-3xl font-sans text-center font-semibold">
        Why Choose a Synthetic Putting Green?
      </h2>
      <Table
        dataSource={tableDataSource}
        columns={tableCols}
        pagination={false}
      />
    </div>
  );
};

export default Benefits;
